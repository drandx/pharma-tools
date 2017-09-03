import * as uuid from 'uuid';
import { BaseModel } from './BaseModel';

export class Product extends BaseModel {
  public id: string;
  public name: string;

  constructor() {
    super();
    this.id = uuid.v4();
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_users`, {
    hashKey: 'id',
    rangeKey: 'name',
    timestamps: false,
    createdAt: false,
    schema: {
      id: joi.string(),
      name: joi.string(),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_products`
});
}
