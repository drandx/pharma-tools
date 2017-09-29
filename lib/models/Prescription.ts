import * as dynogels from 'drandx-dynogels';
import * as uuid from 'uuid';
import * as joi from 'joi';
import { BaseModel } from './BaseModel';
import { awsConfig, globalConst } from '../config/db/appVariables';

export class Prescription extends BaseModel {
  public id: string;
  public doctorId: string;
  public doctorName: string;
  public doctorPhoto: string;
  public patientId: string;
  public patientName: string;
  public patientPhoto: string;
  public formula: object;


  constructor() {
    super();
    this.id = uuid.v4();
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_prescriptions`, {
    hashKey: 'id',
    rangeKey: 'createdAt',
    timestamps: false,
    schema: {
      id: joi.string(),
      doctorId: joi.number(),
      doctorName: joi.string(),
      doctorPhoto: joi.string(),
      patientId: joi.number(),
      patientName: joi.string(),
      patientPhoto: joi.string(),
      formula: joi.array().items(joi.object()),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_prescriptions`,
    indexes : [
      { hashKey : 'doctorId', rangeKey : 'patientName', type : 'global', name : 'myPatientsIndex',},
      { hashKey : 'patientId', rangeKey : 'createdAt', type : 'global', name : 'prescriptionPatientIndex',},
      { hashKey : 'doctorId', rangeKey : 'createdAt', type : 'global', name : 'prescriptionDoctorIndex',},
      ]
});
}
