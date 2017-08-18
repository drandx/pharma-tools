import { QUOTE_STATUS_ENUM } from '../models/Enums';
export class QuoteStatusValidator {
    static validateState(currentState:QUOTE_STATUS_ENUM, nextState: QUOTE_STATUS_ENUM): boolean {
        switch (nextState) {
            case QUOTE_STATUS_ENUM.PENDING:
                if (currentState !== QUOTE_STATUS_ENUM.NEW) {
                    return false;
                }
                return true;
            case QUOTE_STATUS_ENUM.CLOSED: { //Quote can be CLOSED at any state
                return true;
            }
            case QUOTE_STATUS_ENUM.ESTIMATED: {
                if ((currentState !== QUOTE_STATUS_ENUM.PENDING) && (currentState !== QUOTE_STATUS_ENUM.NEW)) {
                    return false;
                }
                return true;
            }
            default:
                return false;
        }
    }
}