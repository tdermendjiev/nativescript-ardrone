import { Observable } from 'tns-core-modules/data/observable';
import { AR, ARMaterial } from 'nativescript-ar';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();

    const supported = AR.isSupported();
    this.message = `AR supported? ${supported}`;
  }

}
