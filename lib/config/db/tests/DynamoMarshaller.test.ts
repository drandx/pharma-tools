import { DynamoMarshaller } from '../db';
describe('Unit tests for DynamoMarshale', () => {
    test('Test correct object creation', () => {
        const marshaler: DynamoMarshaller = new DynamoMarshaller();
        const newImageMock = {
            createdAt: {
                'N': '1501126228',
            },
            customerId: {
                'S': '1339ac1a-b463-4e93-940d-c892902e2628',
            },
            quoteId: {
                'S': '8966c08c-807f-4592-9863-32ee15042b3d',
            },
            updatedAt: {
                'N': '1501126228',
            },
        };
        const newObj: any = marshaler.unMarshalItem(newImageMock);
        expect(newObj).toBeDefined();
        expect(newObj.createdAt).toBeDefined();
        expect(newObj.customerId).toBeDefined();
        expect(newObj.quoteId).toBeDefined();
        expect(newObj.updatedAt).toBeDefined();
        console.log('Unmarshaled Obj: ', newObj);
    });
});
