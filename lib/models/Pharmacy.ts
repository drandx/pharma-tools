import * as uuid from 'uuid';
import * as dynogels from 'drandx-dynogels';
import { BaseModel } from './BaseModel';
import { globalConst } from '../config/db/appVariables';
import { LOGIN_SESSION_STATUS } from './Enums';
import * as joi from 'joi';

export class Pharmacy extends BaseModel {
    public id: string;
    public address: string;
    public name: string;

    constructor() {
        super();
        this.id = uuid.v4();
    }

    public model: dynogels.Model = dynogels.define(`${globalConst.stage}_pharmacies`, {
        hashKey: 'id',
        timestamps: false,
        schema: {
          id: joi.string(),            
          address: joi.string(),
          name: joi.string(),
          createdAt: joi.number(),
          updatedAt: joi.number(),
        },
        tableName: `${globalConst.stage}_pharmacy_session`,
    });
}