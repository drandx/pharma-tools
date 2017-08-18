import * as AWS from 'aws-sdk';
import {awsConfig, globalConst} from './appVariables';

export class CollectionNames {
  public static orders: CollectionNames = new CollectionNames(`${globalConst.stage}_orders`);
  public static quotes: CollectionNames = new CollectionNames(`${globalConst.stage}_quotes`);
  public static users: CollectionNames = new CollectionNames(`${globalConst.stage}_users`);
  public static quotePharmacy: CollectionNames = new CollectionNames(`${globalConst.stage}_quote_pharmacy`);
  public static pharmacySession: CollectionNames = new CollectionNames(`${globalConst.stage}_pharmacy_session`);
  public static pharmacies: CollectionNames = new CollectionNames(`${globalConst.stage}_pharmacies`);
  public static prescriptions: CollectionNames = new CollectionNames(`${globalConst.stage}_prescriptions`);

  constructor(public value: string) {
  }
  public toString(): string {
      return this.value;
  }
} 

export type DBOptions<T> = {
  connection: T;
  table: CollectionNames;
};

export class DbOptionsFactory {
  constructor(){}
  public createDBOptions(collection: CollectionNames): DBOptions<AWS.DynamoDB.DocumentClient> {
    const options: AWS.DynamoDB.DocumentClient.DocumentClientOptions = awsConfig as AWS.DynamoDB.DocumentClient.DocumentClientOptions;
    const documentClient: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient(options);
    return {
      connection: documentClient,
      table: collection,
    };
  }
}

const unmarshalItem: any = require('dynamodb-marshaler').unmarshalItem;

export class DynamoMarshaller {
    public unMarshalItem(item: Object): Object {
        return unmarshalItem(item);
    }
}
