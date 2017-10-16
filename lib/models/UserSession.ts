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
  public updatedAt: number;  
  public pushToken: string;
  
  constructor() {
    super();
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_users_sessions`, {
    hashKey: 'userId',
    rangeKey: 'deviceId',
    timestamps: false,
    schema: {
      userId: joi.string(),
      deviceId: joi.string(),
      createdAt: joi.number(),
      updatedAt: joi.number(),      
      pushToken: joi.string(),
    },
    tableName: `${globalConst.stage}_users_sessions`,
  });
}
