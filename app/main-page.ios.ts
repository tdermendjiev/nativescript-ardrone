import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {DroneSceneView} from './DroneSceneView';
import { isIOS } from 'tns-core-modules/ui/page';
import { DroneSceneViewModel } from './main-view-model';

export function pageLoaded(args: observable.EventData) {
  let page = <pages.Page>args.object;
  page.bindingContext = new DroneSceneViewModel();

  const slider = page.getViewById("heightSlider");
  slider.nativeView.transform = CGAffineTransformMakeRotation(Math.PI * 0.5);

}

function updateDistance(scene: any) {
  let distanceLabel = scene.parent.getViewById("distanceLabel");
  var distance = calculateDistanceFromCamera(scene, scene.helicopterNode);

    if (distance && distanceLabel) {
      distanceLabel.text = distance.toFixed(2);
    }
}

export function arLoaded(args: any): void {
  var scene = <DroneSceneView>args.object;

  scene.setupDrone();
  
}

export function onSliderLoaded(args: any): void {
  const sliderComponent = args.object;

  sliderComponent.value = sliderComponent.parent.parent.sceneView.scene.rootNode.childNodes[0].position.y
  
  sliderComponent.on("valueChange", (sargs) => {
    var scene = sargs.object.parent.parent;
    scene.changeAltitude(sargs.object.value);
  });
}

function calculateDistanceFromCamera(scene, to) {
    var camera = scene.sceneView.session.currentFrame.camera;
    var transform = camera.transform;
    var dx = to.position.x - transform.columns[3][0];
    var dy = to.position.y - transform.columns[3][1];
    var dz = to.position.z - transform.columns[3][2];
    var meters = Math.sqrt(dx * dx + dy * dy + dz * dz);
    return meters;
}

export function moveForward(args: any) {
  let scene = args.object.parent.parent.parent;
  scene.moveForward();
  updateDistance(scene);
}

export function moveBack(args: any) {
  let scene = args.object.parent.parent.parent;
  scene.moveBack();
  updateDistance(scene);
}

export function moveLeft(args: any) {
  let scene = args.object.parent.parent.parent;
  scene.moveLeft();
  updateDistance(scene);
}
export function moveRight(args: any) {
  let scene = args.object.parent.parent.parent;
  scene.moveRight();
  updateDistance(scene);
}
