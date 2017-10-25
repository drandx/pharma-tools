import * as uuid from 'uuid';
import * as dynogels from 'drandx-dynogels';
import { BaseModel } from './BaseModel';
import { STATUS_ENUM } from './Enums';
import { globalConst, awsConfig } from '../config/db/appVariables';
import * as joi from 'joi';

dynogels.AWS.config.update(awsConfig);    

export class User extends BaseModel {
  public id: string;
  public name: string;
  private tagsName: string;
  public email: string;
  public phone: string;
  public address: string;
  public city: string;
  public country: string;
  public state: string;
  public status: STATUS_ENUM;
  public cards: Array<string>;

  constructor() {
    super();
    this.id = uuid.v4();
    this.status = STATUS_ENUM.ACTIVE;
  }

  public afterFillFromJSON() {
    if (this.name) {
      const name: string = this.name.toLowerCase().split(' ').join('');
      const id: string = this.id.substring(1, 5);
      this.tagsName = `${name}-${id}`; 
    }
  }

  public model: dynogels.Model = dynogels.define(`${globalConst.stage}_users`, {
    hashKey: 'id',
    timestamps: false,
    schema: {
      id: joi.string(),
      name: joi.string(),
      tagsName: joi.string(),
      email: joi.string().email(),
      password: joi.string(),
      identificationType: joi.string().default('CC'),
      userIdentification: joi.string(),
      phone: joi.string(),
      birthdate: joi.number().allow(null),
      gender: joi.string().allow(null),
      address: joi.string().allow(null),
      city: joi.string(),
      country: joi.string().allow(null),
      state: joi.string().allow(null),
      photo: joi.string().allow(null),
      userIDImage: joi.string().allow(null),
      stampName: joi.string().allow(null),
      doctorNumber: joi.string(),
      cards: joi.array().items(joi.object()),
      doctorType: joi.array().items(joi.string()),
      roles: joi.array().items(joi.string()),
      status: joi.string(),
      createdAt: joi.number(),
      updatedAt: joi.number(),
    },
    tableName: `${globalConst.stage}_users`,
    indexes : [
      { hashKey : 'city', rangeKey : 'tagsName', type : 'global', name : 'cityIndex',},
      { hashKey : 'status', rangeKey : 'tagsName', type : 'global', name : 'statusIndex',},
      { hashKey : 'email', rangeKey : 'tagsName', type : 'global', name : 'emailIndex',},
      { hashKey : 'userIdentification', rangeKey : 'tagsName', type : 'global', name : 'userIdentificationIndex',},
      
      ]
});
}
