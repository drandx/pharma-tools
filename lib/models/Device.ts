import * as uuid from 'uuid';
import * as dynogels from 'drandx-dynogels';
import { BaseModel } from './BaseModel';
import { globalConst, awsConfig } from '../config/db/appVariables';
import * as joi from 'joi';

dynogels.AWS.config.update(awsConfig);    

export class Device extends BaseModel {
  public id: string;
  public deviceId: string;
  public token: string;
  public userId: string;
  
  constructor() {
    super();
    this.id = uuid.v4();
  }


  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_devices`, {
    hashKey: 'id',
    timestamps: false,
    schema: {
      id: joi.string(),
      deviceId: joi.string(),
      token: joi.string(),
      userId: joi.string().email(),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_devices`,
    indexes : [
      { hashKey : 'deviceId', rangeKey : 'createdAt', type : 'global', name : 'deviceIndex',},
      { hashKey : 'userId', rangeKey : 'createdAt', type : 'global', name : 'userIndex',},
      ]
});
}
