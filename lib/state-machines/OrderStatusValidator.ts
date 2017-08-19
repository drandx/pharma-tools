import { ORDER_STATUS_ENUM } from '../models/Enums';
export class OrderStatusValidator {
    static validateState(currentState:ORDER_STATUS_ENUM, nextState: ORDER_STATUS_ENUM): boolean {
        switch (nextState) {
            case ORDER_STATUS_ENUM.PENDING:
                if (currentState !== ORDER_STATUS_ENUM.NEW) {
                    return false;
                }
                return true;
            case ORDER_STATUS_ENUM.PROCESSING:
                if (currentState !== ORDER_STATUS_ENUM.PENDING) {
                    return false;
                }
                return true;
            case ORDER_STATUS_ENUM.CANCELED: { //Quote can be CANCELED at any state
                return true;
            }
            case ORDER_STATUS_ENUM.CLOSED: { //Quote can be CLOSED at any state
                return true;
            }
            case ORDER_STATUS_ENUM.DELIVERED: {
                if (currentState !== ORDER_STATUS_ENUM.OUT_FOR_DELIVERY) {
                    return false;
                }
                return true;
            }
            case ORDER_STATUS_ENUM.DELIVERED: {
                if (currentState !== ORDER_STATUS_ENUM.OUT_FOR_DELIVERY) {
                    return false;
                }
                return true;
            }
            default:
                return false;
        }
    }
}