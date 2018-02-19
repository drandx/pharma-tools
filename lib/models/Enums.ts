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
    private arn: string ;
    public static PATIENT_NEW_QUOTE_ESTIMATED: PUSH_NOTIFICATIONS_TOPICS = new PUSH_NOTIFICATIONS_TOPICS('PATIENT_NEW_QUOTE_ESTIMATED');
    public static PATIENT_NOT_AVAILABLE_STORES: PUSH_NOTIFICATIONS_TOPICS = new PUSH_NOTIFICATIONS_TOPICS('PATIENT_NOT_AVAILABLE_STORES');    
    public static PATIENT_AVAILABLE_STORES: PUSH_NOTIFICATIONS_TOPICS = new PUSH_NOTIFICATIONS_TOPICS('PATIENT_AVAILABLE_STORES');    
    public static NEW_PRESCRIPTION: PUSH_NOTIFICATIONS_TOPICS = new PUSH_NOTIFICATIONS_TOPICS('NEW_PRESCRIPTION'); 

    constructor(public type: string) {
        this.arn = `arn:aws:sns:${awsConfig.region}:${awsConfig.arn}:${globalConst.stage}-push-notifications`;
        this.type = type
    }
    
    public toString(): string {
        return this.type + this.arn;
    }
}

export class EMAILS_TOPICS {
    public arn : string;
    public static RECOVERY_PASSWORD: EMAILS_TOPICS = new EMAILS_TOPICS('RECOVERY_PASSWORD');
    public static SEND_PRESCRIPTION: EMAILS_TOPICS = new EMAILS_TOPICS('SEND_PRESCRIPTION');    
    
    constructor(public type: string) {
        this.arn = `arn:aws:sns:${awsConfig.region}:${awsConfig.arn}:${globalConst.stage}-email-notifications`;
        this.type = type;
    }
    
    public toString(): string {
        return this.type + this.arn;
    }
}
