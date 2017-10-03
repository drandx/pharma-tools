import * as dynogels from 'drandx-dynogels';
import * as uuid from 'uuid';
import * as joi from 'joi';
import { BaseModel } from './BaseModel';
import { STATUS_ENUM } from './Enums';
import { awsConfig, globalConst } from '../config/db/appVariables';

dynogels.AWS.config.update(awsConfig);

export class Product extends BaseModel {
  public id: string;
  public name: string;
  public status: STATUS_ENUM;
  private tagsName: string;

  constructor() {
    super();
    this.id = uuid.v4();
    this.status = STATUS_ENUM.ACTIVE;
    if (this.name) {
      this.tagsName = this.name.toLowerCase();
    }
    
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_products`, {
    hashKey: 'id',
    timestamps: false,
    schema: {
      id: joi.string(),
      name: joi.string(),
      tagsName: joi.string(),
      status: joi.string(),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_products`,
    indexes: [
      { hashKey: 'status', rangeKey: 'name', type: 'global', name: 'statusIndex',},
      ]
});
}
