import * as uuid from 'uuid';
import * as dynogels from 'drandx-dynogels';
import { BaseModel } from './BaseModel';
import { STATUS_ENUM } from './Enums';
import { globalConst } from '../config/db/appVariables';
import * as joi from 'joi';

export class User extends BaseModel {
  public id: string;
  public name: string;
  public email: string;
  public phone: string;
  public address: string;
  public city: string;
  public country: string;
  public state: string;
  public status: STATUS_ENUM;

  constructor() {
    super();
    this.id = uuid.v4();
    this.status = STATUS_ENUM.ACTIVE;
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_users`, {
    hashKey: 'id',
    timestamps: false,
    schema: {
      id: joi.string(),
      name: joi.string(),
      email: joi.string().email(),
      password: joi.string(),
      identificationType: joi.string().default('CC'),
      userIdentification: joi.string(),
      phone: joi.string(),
      birthdate: joi.number(),
      gender: joi.string(),
      address: joi.string(),
      city: joi.string(),
      country: joi.string(),
      state: joi.string(),
      photo: joi.string(),
      photoUrl: joi.string().allow(null),
      stampName: joi.string(),
      doctorNumber: joi.string(),
      doctorType: joi.array().items(joi.string()),
      roles: joi.array().items(joi.string()),
      userIDImage: joi.string(),
      status: joi.string(),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_users`,
    indexes : [
      { hashKey : 'city', rangeKey : 'name', type : 'global', name : 'cityIndex',},
      { hashKey : 'status', rangeKey : 'name', type : 'global', name : 'statusIndex',},
      { hashKey : 'email', rangeKey : 'name', type : 'global', name : 'emailIndex',},
      ]
});
}
