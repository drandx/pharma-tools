import * as dynogels from 'drandx-dynogels';
import * as uuid from 'uuid';
import * as joi from 'joi';
import { BaseModel } from './BaseModel';
import { awsConfig, globalConst } from '../config/db/appVariables';

dynogels.AWS.config.update(awsConfig);

export class Allergy extends BaseModel {
  public id: string;
  public name: string;
  public detail: string;
  public patientId: string;

  constructor() {
    super();
    this.id = uuid.v4();
  }
  
  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_allergies`, {
    hashKey: 'id',
    timestamps: false,
    schema: {
      id: joi.string(),
      name: joi.string(),
      detail: joi.string(),
      patientId: joi.string(),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_allergies`,
    indexes: [
      { hashKey: 'patientId', rangeKey: 'createdAt', type: 'global', name: 'patientIndex',},
      ]
});
}