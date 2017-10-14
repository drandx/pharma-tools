import * as dynogels from 'drandx-dynogels';
import * as joi from 'joi';
import * as uuid from 'uuid';
import { BaseModel } from './BaseModel';
import { QUOTE_STATUS_ENUM } from './Enums';
import { Product } from './Product';
import { User } from './User';
import { awsConfig, globalConst } from '../config/db/appVariables';

export class Quote extends BaseModel {
  public quoteId: string;
  public customerId: string;
  public products: Product[];
  public status: QUOTE_STATUS_ENUM;
  public customerPosition: {
      latitude: number,
      longitude: number
  };
  constructor() {
    super();
    this.quoteId = uuid.v4();
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_quotes`, {
        hashKey: 'quoteId',
        rangeKey: 'customerId',
        timestamps: false,
        schema: {
            quoteId: joi.string(),
            customerId: joi.string(),
            products: joi.array(),
            customerPosition: joi.object(),
            status: joi.string(),
            createdAt: joi.number(),
            updatedAt: joi.number(),
        },
        tableName: `${globalConst.stage}_quotes`,
        indexes: [
            { hashKey: 'customerId', rangeKey: 'createdAt', name: 'customerIndex', type: 'global' },
            { hashKey: 'status', rangeKey: 'updatedAt', name: 'statusIndex', type: 'global' },
            ],
    });
}
