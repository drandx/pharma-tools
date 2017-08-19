import { ORDER_STATUS_ENUM } from '../models/Enums';
import { OrderStatusValidator } from './OrderStatusValidator';
describe('QuoteStatusValidator', () => {
    test('Statu validation', () => {
        expect(OrderStatusValidator.validateState(ORDER_STATUS_ENUM.NEW, ORDER_STATUS_ENUM.PENDING)).toBeTruthy();                                                  
        expect(OrderStatusValidator.validateState(ORDER_STATUS_ENUM.PENDING, ORDER_STATUS_ENUM.NEW)).toBeFalsy();
        expect(OrderStatusValidator.validateState(ORDER_STATUS_ENUM.NEW, ORDER_STATUS_ENUM.CANCELED)).toBeTruthy();   
        expect(OrderStatusValidator.validateState(ORDER_STATUS_ENUM.NEW, ORDER_STATUS_ENUM.DELIVERED)).toBeFalsy();
        expect(OrderStatusValidator.validateState(ORDER_STATUS_ENUM.DELIVERED, ORDER_STATUS_ENUM.CLOSED)).toBeTruthy();
        expect(OrderStatusValidator.validateState(ORDER_STATUS_ENUM.DELIVERED, ORDER_STATUS_ENUM.OUT_FOR_DELIVERY)).toBeFalsy(); 
        expect(OrderStatusValidator.validateState(ORDER_STATUS_ENUM.OUT_FOR_DELIVERY, ORDER_STATUS_ENUM.DELIVERED)).toBeTruthy();         
        expect(OrderStatusValidator.validateState(ORDER_STATUS_ENUM.DELIVERED, ORDER_STATUS_ENUM.PENDING)).toBeFalsy();                                
    });
})