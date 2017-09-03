import * as uuid from 'uuid';
import { BaseModel } from './BaseModel';

export class Prescription extends BaseModel {
  public id: string;
  public name: string;


  constructor() {
    super();
    this.id = uuid.v4();
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_prescriptions`, {
    hashKey: 'id',
    rangeKey: 'createdAt',
    timestamps: false,
    createdAt: false,
    schema: {
      id: joi.string(),
      doctor: joi.object(),
      patient: joi.string().email(),
      formula: joi.array().items(joi.object()),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_users`,
    indexes : [
      { hashKey : 'doctor.id', rangeKey : 'createAt', type : 'global', name : 'doctorIndex',},
      { hashKey : 'patient.id', rangeKey : 'createAt', type : 'global', name : 'patientIndex',},
      ]
});
}
