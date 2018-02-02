import { EMAILS_TOPICS } from './Enums';
import { BaseModel } from './BaseModel';

export interface PayLoad {
    [key: string]: (string
      | number
      | boolean
      | Date
      | Object
    );
  }

export class EmailNotification extends BaseModel {
    public pushType: EMAILS_TOPICS;
    public destination: string;
    public payLoad: PayLoad;


}