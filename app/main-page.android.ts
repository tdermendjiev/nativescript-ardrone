import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {DroneSceneView} from './DroneSceneView';
import { isIOS } from 'tns-core-modules/ui/page';
import { DroneSceneViewModel } from './main-view-model';

export function pageLoaded(args: observable.EventData) {
    let page = <pages.Page>args.object;
    page.bindingContext = new DroneSceneViewModel();

  }
  