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

export const PUSH_NOTIFICATIONS_ENUM = {
    PATIENT_NEW_QUOTE_ESTIMATED: {
        type: 'PATIENT_NEW_QUOTE_ESTIMATED',
        arn: `arn:aws:sns:${awsConfig.region}:${awsConfig.arn}:${globalConst.stage}-push-notifications`,
    },
    PATIENT_NOT_AVAILABLE_STORES: {
        type: 'PATIENT_NOT_AVAILABLE_STORES',
        arn: '',
    }   
}