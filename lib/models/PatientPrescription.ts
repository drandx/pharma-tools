import * as dynogels from 'drandx-dynogels';
import * as uuid from 'uuid';
import * as joi from 'joi';
import { BaseModel } from './BaseModel';
import { awsConfig, globalConst } from '../config/db/appVariables';

dynogels.AWS.config.update(awsConfig);    

export class PatientPrescription extends BaseModel {
  public id: string;
  public patientId: string;
  public patientName: string;
  public patientEmail: string;
  public patientIdentification: string;
  private patientTagsName: string;
  public patientPhoto: string;
  public prescriptionPhoto: string;
  public formula: object;
  public diagnosis: string;

  constructor() {
    super();
    this.id = uuid.v4();
  }

  public afterFillFromJSON() {
    const name = this.patientName.toLowerCase().split(' ').join('');
    const id = this.patientId.substring(1, 5);
    this.patientTagsName = `${name}-${id}`;
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_prescriptions`, {
    hashKey: 'id',
    rangeKey: 'createdAt',
    timestamps: false,
    schema: {
      id: joi.string(),
      patientId: joi.string(),
      patientName: joi.string(),
      patientEmail: joi.string(),
      patientTagsName: joi.string(),
      patientPhoto: joi.string(),
      prescriptionPhoto: joi.string(),
      patientIdentification: joi.string(),
      formula: joi.array().items(joi.object()).allow(null),
      diagnosis: joi.string().allow(null),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_prescriptions`,
    indexes : [
      { hashKey : 'patientId', rangeKey : 'createdAt', type : 'global', name : 'prescriptionPatientIndex',},
      ]
    });
}
