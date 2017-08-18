import * as uuid from 'uuid';
import { BaseModel } from './BaseModel';

export class Pharmacy extends BaseModel {
  public id: string;
  public pharmacyPosition: {
        latitude: number,
        longitude: number
  }
  constructor() {
    super();
    this.id = uuid.v4();
  }
}