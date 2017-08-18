import * as uuid from 'uuid';
import { BaseModel } from './BaseModel';

export class Product extends BaseModel {
  public id: string;
  constructor() {
    super();
    this.id = uuid.v4();
  }
}
