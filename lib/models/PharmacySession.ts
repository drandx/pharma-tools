import * as uuid from 'uuid';
import * as dynogels from 'drandx-dynogels';
import { BaseModel } from './BaseModel';
import { globalConst, awsConfig } from '../config/db/appVariables';
import { LOGIN_SESSION_STATUS } from './Enums';
import * as joi from 'joi';

dynogels.AWS.config.update(awsConfig);    

export class PharmacySession extends BaseModel {
    public sessionId: string;
    public pharmacyId: string;
    public startedAt: number;
    public endedAt: number;
    public state: LOGIN_SESSION_STATUS;
    public pharmacyName: string;
    public pharmacyAddress: string;        
    public pharmacyPosition: {
        latitude: number,
        longitude: number
    }
    constructor() {
        super();
        this.sessionId = uuid.v4();
    }

    public model: dynogels.Model = dynogels.define(`${globalConst.stage}_pharmacy_session`, {
        hashKey: 'sessionId',
        rangeKey: 'pharmacyId',
        timestamps: false,
        schema: {
          sessionId: joi.string(),            
          pharmacyId: joi.string(),
          startedAt: joi.number(),
          endedAt: joi.number(),          
          state: joi.string(),
          pharmacyName: joi.string(),
          pharmacyAddress: joi.string(),          
          pharmacyPosition: joi.object(),
          createdAt: joi.number(),
          updatedAt: joi.number(),
        },
        tableName: `${globalConst.stage}_pharmacy_session`,
    });
}