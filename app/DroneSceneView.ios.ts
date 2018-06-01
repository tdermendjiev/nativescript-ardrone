import { AR } from "nativescript-ar";

Object.assign(global, {
    SCNVector3Make(x, y, z) {
    return new SCNVector3({ x, y, z });
    }
})

export class DroneSceneView extends AR {
    helicopterNode: SCNNode;
    blade1Node: SCNNode;
    blade2Node: SCNNode;
    rotorR: SCNNode;
    rotorL: SCNNode;

    setupDrone(): void {
        this.sceneView.scene = SCNScene.sceneNamed("Assets.scnassets/Drone.scn");
        this.helicopterNode = this.sceneView.scene.rootNode.childNodeWithNameRecursively("helicopter", false);
        this.helicopterNode.transform = SCNMatrix4Mult(this.helicopterNode.transform, SCNMatrix4MakeRotation(Math.PI / 2, 1, 0, 0));
        this.helicopterNode.position = SCNVector3Make(this.helicopterNode.position.x, this.helicopterNode.position.y, this.helicopterNode.position.z - 1);
        this.blade1Node = this.helicopterNode.childNodeWithNameRecursively("Rotor_R_2", true);
        this.blade2Node = this.helicopterNode.childNodeWithNameRecursively("Rotor_L_2",  true);
        this.rotorR = this.blade1Node.childNodeWithNameRecursively("Rotor_R", true);
        this.rotorL = this.blade2Node.childNodeWithNameRecursively("Rotor_L", true);
        this.styleDrone();
        this.spinBlades();
    }

    styleDrone(): void {
        let bodyMaterial = SCNMaterial.new();
        bodyMaterial.diffuse.contents = UIColor.colorWithRedGreenBlueAlpha(63/255, 86/255, 247/255, 1);
        this.helicopterNode.geometry.materials = NSArray.arrayWithArray([bodyMaterial] as any);
        //a node might have geometry of null
        // this.sceneView.scene.rootNode.geometry.materials = NSArray.arrayWithArray([bodyMaterial]);
        let bladeMaterial = SCNMaterial.new();
        bladeMaterial.diffuse.contents = UIColor.grayColor;
        let rotorMaterial = SCNMaterial.new();
        rotorMaterial.diffuse.contents = UIColor.whiteColor;
        this.blade1Node.geometry.materials = NSArray.arrayWithArray([rotorMaterial]);
        this.blade2Node.geometry.materials = NSArray.arrayWithArray([rotorMaterial]);
        this.rotorR.geometry.materials = NSArray.arrayWithArray([bladeMaterial]);
        this.rotorL.geometry.materials = NSArray.arrayWithArray([bladeMaterial]);
    }

    spinBlades(): void {
        let rotate = SCNAction.rotateByXYZDuration(0, 0, 200, 0.5);
        let moveSequence = SCNAction.sequence(NSArray.arrayWithArray([rotate]));
        let moveLoop = SCNAction.repeatActionForever(moveSequence);
        this.rotorL.runAction(moveLoop);
        this.rotorR.runAction(moveLoop);
    }

    changeAltitude(value): void {
        SCNTransaction.begin();
        SCNTransaction.animationDuration = 0.5;
        this.helicopterNode.position = SCNVector3Make(this.helicopterNode.position.x, value, this.helicopterNode.position.z);
        SCNTransaction.commit();
    }

    moveLeft() {
        SCNTransaction.begin();
        SCNTransaction.animationDuration = 0.5;
        this.helicopterNode.position = SCNVector3Make(this.helicopterNode.position.x - 0.5, this.helicopterNode.position.y, this.helicopterNode.position.z);
        this.blade2Node.runAction(SCNAction.rotateByXYZDuration(0.3, -0.1, 0, 1.5));
        this.blade1Node.runAction(SCNAction.rotateByXYZDuration(0.3, 0, 0, 1.5));
        SCNTransaction.commit();
        this.blade2Node.runAction(SCNAction.rotateByXYZDuration(-0.3, 0.1, 0, 0.25));
        this.blade1Node.runAction(SCNAction.rotateByXYZDuration(-0.3, 0, 0, 0.25)) ;
    }

    moveRight() {
        SCNTransaction.begin();
        SCNTransaction.animationDuration = 0.5;
        this.helicopterNode.position = SCNVector3Make(this.helicopterNode.position.x + 0.5, this.helicopterNode.position.y, this.helicopterNode.position.z);
        this.blade2Node.runAction(SCNAction.rotateByXYZDuration(0.3, -0.1, 0, 1.5));
        this.blade1Node.runAction(SCNAction.rotateByXYZDuration(0.3, 0, 0, 1.5));
        SCNTransaction.commit();
        this.blade2Node.runAction(SCNAction.rotateByXYZDuration(-0.3, 0.1, 0, 0.25));
        this.blade1Node.runAction(SCNAction.rotateByXYZDuration(-0.3, 0, 0, 0.25));
    }

    moveForward() {
        SCNTransaction.begin();
        SCNTransaction.animationDuration = 0.5;
        this.helicopterNode.position = SCNVector3Make(this.helicopterNode.position.x, this.helicopterNode.position.y, this.helicopterNode.position.z - 0.5);
        this.blade2Node.runAction(SCNAction.rotateByXYZDuration(0.3, -0.1, 0, 1.5));
        this.blade1Node.runAction(SCNAction.rotateByXYZDuration(0.3, 0, 0, 1.5));
        SCNTransaction.commit();
        this.blade2Node.runAction(SCNAction.rotateByXYZDuration(-0.3, 0.1, 0, 0.25));
        this.blade1Node.runAction(SCNAction.rotateByXYZDuration(-0.3, 0, 0, 0.25));
    }

    moveBack() {
        SCNTransaction.begin();
        SCNTransaction.animationDuration = 0.5;
        this.helicopterNode.position = SCNVector3Make(this.helicopterNode.position.x, this.helicopterNode.position.y, this.helicopterNode.position.z + 0.5);
        this.blade2Node.runAction(SCNAction.rotateByXYZDuration(0.3, -0.1, 0, 1.5));
        this.blade1Node.runAction(SCNAction.rotateByXYZDuration(0.3, 0, 0, 1.5));
        SCNTransaction.commit();
        this.blade2Node.runAction(SCNAction.rotateByXYZDuration(-0.3, 0.1, 0, 0.25));
        this.blade1Node.runAction(SCNAction.rotateByXYZDuration(-0.3, 0, 0, 0.25));
    }
    
}