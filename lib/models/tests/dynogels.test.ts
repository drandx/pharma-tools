import { QuotePharmacy } from '../QuotePharmacy';
import { Utils } from '../../config/utils';
import { Quote } from '../Quote';

const quotePharmacy: QuotePharmacy = new QuotePharmacy();
let quote: QuotePharmacy = new QuotePharmacy();

describe('Adds a random element to the DB', () => {
    beforeAll(done => {
        quotePharmacy.model.create({
            quoteId: 'test-dynogels-types-quoteId',
            pharmacyId: 'test-dynogels-types-pharmacyId',
            createdAt: Utils.unixNowTimestamp(),
            status: 'testing',
        }, {}, (err, res) => {
            quote.pharmacyId = res.get().pharmacyId;
            quote.quoteId = res.get().quoteId;
            console.log('Before all Res: ', res.get(), quote.quoteId, quote.pharmacyId);            
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
                expect(res.Items[0].get().quoteId).toEqual('test-dynogels-types-quoteId');
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
                expect(data.Items[0].get().pharmacyId).toEqual('d2855612-1f15-4cbe-9743-e089638f3d4b');              
            });
    });

    afterAll(() => {
        console.log('After all: ', quote.quoteId, quote.pharmacyId);
        quote.model.destroy(quote.quoteId, quote.pharmacyId, (err) => {
            expect(err).toBeUndefined();
        })
    })
});