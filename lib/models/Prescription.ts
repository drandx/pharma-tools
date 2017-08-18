import * as uuid from 'uuid';
import { BaseModel } from './BaseModel';

export class Prescription extends BaseModel {
  public id: string;
  constructor() {
    super();
    this.id = uuid.v4();
  }
}
