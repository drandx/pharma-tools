import * as dynogels from 'drandx-dynogels';
import * as joi from 'joi';
import { BaseModel } from './BaseModel';
import { QUOTE_STATUS_ENUM } from './Enums';
import { Product } from './Product';
import { User } from './User';
import { awsConfig, globalConst } from '../config/db/appVariables';

dynogels.AWS.config.update(awsConfig);    

export class QuotePharmacy extends BaseModel {
    public quoteId: string;
    public pharmacyId: string;
    public products: Product[];
    public status: QUOTE_STATUS_ENUM;
    public pharmacyPosition: {
        latitude: number,
        longitude: number,
    };
    public customer: User;

    constructor() {
        super();
    }

    public model: dynogels.Model = dynogels.define(`${globalConst.stage}_quote_pharmacy`, {
        hashKey: 'quoteId',
        rangeKey: 'pharmacyId',
        timestamps: false,
        schema: {
            quoteId: joi.string(),
            pharmacyId: joi.string(),
            createdAt: joi.number(),
            updatedAt: joi.number(),
            status: joi.string(),
            products: joi.object(),
            customer: joi.object(), 
            pharmacyPosition: joi.object(),
        },
        tableName: `${globalConst.stage}_quote_pharmacy`,
        indexes: [{
            hashKey: 'pharmacyId',
            rangeKey: 'createdAt',
            name: 'pharmacyId-createdAt-index',
            type: 'global',
        }],
    });
}
