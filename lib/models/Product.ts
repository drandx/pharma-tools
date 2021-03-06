import * as dynogels from 'drandx-dynogels';
import * as uuid from 'uuid';
import * as joi from 'joi';
import { BaseModel } from './BaseModel';
import { STATUS_ENUM, CATEGORY_ENUM } from './Enums';
import { awsConfig, globalConst } from '../config/db/appVariables';

dynogels.AWS.config.update(awsConfig);

export class Product extends BaseModel {
  public id: string;
  public product: string;
  public presentation: string;
  public status: STATUS_ENUM;
  public requiredPrescription: boolean;
  private tagsName: string;
  public category: string;
  
  constructor() {
    super();
    this.id = uuid.v4();
    this.status = STATUS_ENUM.ACTIVE;
    this.requiredPrescription = false;
    this.category = CATEGORY_ENUM.MEDICINE;
  }
  
  public afterFillFromJSON() {
    const name: string = this.product.toLowerCase().split(' ').join('');
    const id: string = this.id.substring(1, 5);
    this.tagsName = `${name}-${id}`;
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_products`, {
    hashKey: 'id',
    timestamps: false,
    schema: {
      id: joi.string(),
      product: joi.string(),
      presentation: joi.string().allow(null),
      category: joi.string(),
      tagsName: joi.string(),
      status: joi.string(),
      createdAt: joi.number(),
      updatedAt: joi.number(),
      requiredPrescription: joi.boolean(),
    },
    tableName: `${globalConst.stage}_products`,
    indexes: [
      { hashKey: 'status', rangeKey: 'tagsName', type: 'global', name: 'statusIndex',},
      ]
});
}
