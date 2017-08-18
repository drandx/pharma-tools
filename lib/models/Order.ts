import * as uuid from 'uuid';
import * as dynogels from 'dynogels';
import * as joi from 'joi';

import { BaseModel } from './BaseModel';
import { ORDER_STATUS_ENUM } from './Enums';
import { Product } from './Product';
import { globalConst, awsConfig } from "../config/db/appVariables";

dynogels.AWS.config.update(awsConfig);    

export class Order extends BaseModel {
  public id: string;
  public customerId: string;
  public pharmacyId: string;
  public products: Product[];
  public quoteId: string;
  public status: ORDER_STATUS_ENUM;

  constructor() {
    super();
    this.id = uuid.v4();
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_orders`, {
    hashKey: 'id',
    rangeKey: 'customerId',
    timestamps: false,
    schema: {
        id: joi.string(),
        customerId: joi.string(),        
        quoteId: joi.string(),
        pharmacyId: joi.string(),
        createdAt: joi.number(),
        updatedAt: joi.number(),
        status: joi.string(),
        customer: joi.object(),
    },
    tableName: `${globalConst.stage}_orders`,
    indexes: [{
        hashKey: 'pharmacyId',
        rangeKey: 'createdAt',
        name: 'pharmacyId-createdAt-index',
        type: 'global',
    }],
});

}
