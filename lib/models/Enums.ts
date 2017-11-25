import { awsConfig, globalConst } from '../config/db/appVariables';
export enum QUOTE_STATUS_ENUM {
    NEW = 'NEW',
    PENDING = 'PENDING',
    ESTIMATED = 'ESTIMATED',
    CLOSED = 'CLOSED',
    CANCELED = 'CANCELED',
}

export enum ORDER_STATUS_ENUM {
    NEW = 'NEW',
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    CANCELED = 'CANCELED',    
    OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
    DELIVERED = 'DELIVERED',
    CLOSED = 'CLOSED',    
}

export enum USER_ROLES_ENUM {
    PATIENT = 'PATIENT',
    PHARMACY = 'PHARMACY',
    DOCTOR = 'DOCTOR',
    ADMIN = 'ADMIN'
}

export enum LOGIN_SESSION_STATUS {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

export enum STATUS_ENUM {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export enum CATEGORY_ENUM {
    MEDICINE = 'MEDICINE',
    HYGIENE = 'HYGIENE',
    COSMETIC = 'COSMETIC',
    FOOD_DRINK = 'FOOD_DRINK',
    NATURAL = 'NATURAL',
}
export class PUSH_NOTIFICATIONS_TOPICS {
    public static PATIENT_NEW_QUOTE_ESTIMATED: PUSH_NOTIFICATIONS_TOPICS = new PUSH_NOTIFICATIONS_TOPICS('PATIENT_NEW_QUOTE_ESTIMATED', `arn:aws:sns:${awsConfig.region}:${awsConfig.arn}:${globalConst.stage}-push-notifications`);
    public static PATIENT_NOT_AVAILABLE_STORES: PUSH_NOTIFICATIONS_TOPICS = new PUSH_NOTIFICATIONS_TOPICS('PATIENT_NOT_AVAILABLE_STORES', '');    
    
    constructor(public type: string, public arn: string) {
    }
    
    public toString(): string {
        return this.type + this.arn;
    }
}