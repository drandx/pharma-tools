import * as dynogels from 'drandx-dynogels';
import * as uuid from 'uuid';
import * as joi from 'joi';
import { BaseModel } from './BaseModel';
import { awsConfig, globalConst } from '../config/db/appVariables';

dynogels.AWS.config.update(awsConfig);    

export class Prescription extends BaseModel {
  public id: string;
  public doctorId: string;
  public doctorName: string;
  private doctorTagsName: string;
  public doctorPhoto: string;
  public patientId: string;
  public patientName: string;
  public patientIdentification: string;
  private patientTagsName: string;
  public patientPhoto: string;
  public formula: object;
  public diagnosis: string;

  constructor() {
    super();
    this.id = uuid.v4();
  }

  public afterFillFromJSON() {
    let name: string = this.doctorName.toLowerCase().split(' ').join('');
    let id: string = this.doctorId.substring(1, 5);
    this.doctorTagsName = `${name}-${id}`;
    name = this.patientName.toLowerCase().split(' ').join('');
    id = this.patientId.substring(1, 5);
    this.patientTagsName = `${name}-${id}`;
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_prescriptions`, {
    hashKey: 'id',
    rangeKey: 'createdAt',
    timestamps: false,
    schema: {
      id: joi.string(),
      doctorId: joi.string(),
      doctorName: joi.string(),
      doctorTagsName: joi.string(),
      doctorPhoto: joi.string(),
      patientId: joi.string(),
      patientName: joi.string(),
      patientTagsName: joi.string(),
      patientPhoto: joi.string(),
      patientIdentification: joi.string(),
      formula: joi.array().items(joi.object()),
      diagnosis: joi.string().allow(null),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_prescriptions`,
    indexes : [
      { hashKey : 'doctorId', rangeKey : 'patientTagsName', type : 'global', name : 'myPatientsIndex',},
      { hashKey : 'patientId', rangeKey : 'createdAt', type : 'global', name : 'prescriptionPatientIndex',},
      { hashKey : 'doctorId', rangeKey : 'createdAt', type : 'global', name : 'prescriptionDoctorIndex',},
      ]
});
}
