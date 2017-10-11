import * as dynogels from 'drandx-dynogels';
import * as uuid from 'uuid';
import * as joi from 'joi';
import { BaseModel } from './BaseModel';
import { awsConfig, globalConst } from '../config/db/appVariables';

dynogels.AWS.config.update(awsConfig);

export class ClinicalHistory extends BaseModel {
  public id: string;
  public detail: string;
  public patientId: string;

  constructor() {
    super();
    this.id = uuid.v4();
  }
  
  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_clinical_history`, {
    hashKey: 'id',
    timestamps: false,
    schema: {
      id: joi.string(),
      detail: joi.string(),
      patientId: joi.string(),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_clinical_history`,
    indexes: [
      { hashKey: 'patientId', rangeKey: 'createdAt', type: 'global', name: 'patientIndex',},
      ]
});
}