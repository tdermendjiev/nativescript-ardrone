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

export function arLoaded(args: any): void {
  var scene = <DroneSceneView>args.object;
  scene.sceneView.session.delegate = SessionDelegate.new();
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

export function moveForward(args: any) {
  let scene = args.object.parent.parent.parent;
  let dronePos = scene.helicopterNode.position
  scene.moveDrone(dronePos.x, dronePos.y, dronePos.z - 0.5);
}

export function moveBack(args: any) {
  let scene = args.object.parent.parent.parent;
  let dronePos = scene.helicopterNode.position
  scene.moveDrone(dronePos.x, dronePos.y, dronePos.z + 0.5);
}

export function moveLeft(args: any) {
  let scene = args.object.parent.parent.parent;
  let dronePos = scene.helicopterNode.position
  scene.moveDrone(dronePos.x - 0.5, dronePos.y, dronePos.z);
}
export function moveRight(args: any) {
  let scene = args.object.parent.parent.parent;
  let dronePos = scene.helicopterNode.position
  scene.moveDrone(dronePos.x + 0.5, dronePos.y, dronePos.z);
}

class SessionDelegate extends NSObject implements ARSessionDelegate {
  static ObjCProtocols = [ARSessionDelegate];

  static new(): SessionDelegate {
    return <SessionDelegate>super.new();
  }

  sessionDidUpdateFrame(session, frame) {
  
  }

}
