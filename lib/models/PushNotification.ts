import * as uuid from 'uuid';
import * as dynogels from 'drandx-dynogels';
import { BaseModel } from './BaseModel';
import { globalConst } from '../config/db/appVariables';
import { PUSH_NOTIFICATIONS_TOPICS } from './Enums';

export interface PayLoad {
    [key: string]: (string
      | number
      | boolean
      | Date
      | Object
    );
  }

export class PushNotification extends BaseModel {
    public pushType: PUSH_NOTIFICATIONS_TOPICS;
    public userId: string;
    public payLoad: PayLoad;

    constructor() {
        super();
    }
}