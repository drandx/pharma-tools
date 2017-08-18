import { QUOTE_STATUS_ENUM } from '../models/Enums';
import { QuoteStatusValidator } from './QuoteStatusValidator';
describe('QuoteStatusValidator', () => {
    test('Statu validation', () => {
        expect(QuoteStatusValidator.validateState(QUOTE_STATUS_ENUM.ESTIMATED, QUOTE_STATUS_ENUM.NEW)).toBeFalsy();
        expect(QuoteStatusValidator.validateState(QUOTE_STATUS_ENUM.PENDING, QUOTE_STATUS_ENUM.NEW)).toBeFalsy();
        expect(QuoteStatusValidator.validateState(QUOTE_STATUS_ENUM.NEW, QUOTE_STATUS_ENUM.PENDING)).toBeTruthy();
        expect(QuoteStatusValidator.validateState(QUOTE_STATUS_ENUM.CLOSED, QUOTE_STATUS_ENUM.PENDING)).toBeFalsy();
        expect(QuoteStatusValidator.validateState(QUOTE_STATUS_ENUM.CLOSED, QUOTE_STATUS_ENUM.PENDING)).toBeFalsy(); 
        expect(QuoteStatusValidator.validateState(QUOTE_STATUS_ENUM.ESTIMATED, QUOTE_STATUS_ENUM.CLOSED)).toBeTruthy(); 
        expect(QuoteStatusValidator.validateState(QUOTE_STATUS_ENUM.ESTIMATED, QUOTE_STATUS_ENUM.PENDING)).toBeFalsy();                                                        
    });
})