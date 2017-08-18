import { QuotePharmacy } from '../QuotePharmacy';
import { Utils } from '../../config/utils';

const quotePharmacy: QuotePharmacy = new QuotePharmacy();

describe('Adds a random element to the DB', () => {
    beforeAll(done => {
        quotePharmacy.model.create({
            quoteId: 'test-dynogels-types-quoteId',
            pharmacyId: 'test-dynogels-types-pharmacyId',
            createdAt: Utils.unixNowTimestamp(),
            status: 'testing',
        }, {}, (err, res) => {
            done();
        });
    });

    test('Get item', done => {
        quotePharmacy.model.get(
            'test-dynogels-types-quoteId',
            'test-dynogels-types-pharmacyId',
            (err, res) => {
                expect(res.attrs).toBeDefined();
                expect(res.attrs.quoteId).toEqual('test-dynogels-types-quoteId');
                expect(res.attrs.pharmacyId).toEqual('test-dynogels-types-pharmacyId'); 
                expect(res.get('pharmacyId')).toEqual('test-dynogels-types-pharmacyId');
                console.log('Get: ', res.get());
                done();                           
            });
    });

    test('Test simple query by hashKey', () => {
        expect(true).toBeTruthy();
        quotePharmacy
            .model
            .query('test-dynogels-types-quoteId')
            .ascending()
            .exec((err, res) => {
                console.log('Query simple hash key res.Items[0]: ', res.Items[0].get());
            });
    });

    test('Queries an existing index', () => {
        quotePharmacy
            .model
            .query('d2855612-1f15-4cbe-9743-e089638f3d4b')
            .usingIndex('pharmacyId-createdAt-index')
            .filter('status').ne(2)
            .descending()
            .exec((err, data) => {
                console.log('Query existing index - data.Item[0]: ', data.Items[0].get());                
            });
    });
});