import * as dynogels from 'drandx-dynogels';
import {Utils} from '../config/utils';
import { capitalize, changeTimeFormat } from '../miscelanea'

export class BaseModel {
  public createdAt: number;
  public updatedAt: number;

  constructor() {
    this.createdAt = Utils.unixNowTimestamp();
    this.updatedAt = Utils.unixNowTimestamp();
  }

  public fillFromJSON(json: string): void {
    const jsonObj: Object = JSON.parse(json);
    for (var propName in jsonObj) {
        this[propName] = jsonObj[propName] === "" ? undefined : jsonObj[propName];
    }
    this.afterFillFromJSON();
  }

  public static transformData(jsonObj: {}, exclude?: string[]): {} {
    for (var propName in jsonObj) {
        if ( exclude.includes(propName)) {
          continue;
        }
        else if (propName == 'createdAt' || propName == 'updatedAt' ) {
          jsonObj[propName] =  changeTimeFormat(<number>jsonObj[propName]);
        }
        else if (typeof(jsonObj[propName]) === 'string') {
          jsonObj[propName] =  capitalize(<string>jsonObj[propName]);
        }
        else {
          continue;
        }
    }
    return jsonObj;
  }


  public afterFillFromJSON(){
    //
  };

}
