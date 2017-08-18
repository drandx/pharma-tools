import * as uuid from 'uuid';
import { Product } from '../models/Product';
import { BaseModel } from './BaseModel';
import { QUOTE_STATUS_ENUM } from './Enums';

export class Quote extends BaseModel {
  public quoteId: string;
  public customerId: string;
  public products: Product[];
  public status: QUOTE_STATUS_ENUM;
  public customerPosition: {
      latitude: number,
      longitude: number
  };
  constructor() {
    super();
    this.quoteId = uuid.v4();
  }
}
