import {Utils} from '../config/utils';

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
  }
}
