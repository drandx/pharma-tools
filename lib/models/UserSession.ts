import * as uuid from 'uuid';
import * as dynogels from 'drandx-dynogels';
import * as joi from 'joi';

import { BaseModel } from './BaseModel';
import { globalConst, awsConfig } from "../config/db/appVariables";

dynogels.AWS.config.update(awsConfig);    

export class UserSession extends BaseModel {
  public userId: string;
  public deviceId: string;
  public createdAt: number;
  public push_token: string;
  
  constructor() {
    super();
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_users_sessions`, {
    hashKey: 'id',
    rangeKey: 'deviceId',
    timestamps: false,
    schema: {
      userId: joi.string(),
      deviceId: joi.string(),
      createdAt: joi.number(),
      pushToken: joi.string(),
    },
    tableName: `${globalConst.stage}_orders`,
    indexes: [
      { hashKey: 'pharmacyId', rangeKey: 'createdAt', type: 'global', name: 'pharmacyId-createdAt-index',},
      { hashKey: 'customerId', rangeKey: 'createdAt', type: 'global', name: 'customerIdIndex'},
    ],
  });

}
