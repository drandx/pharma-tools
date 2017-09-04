export enum QUOTE_STATUS_ENUM {
    NEW = 'NEW',
    PENDING = 'PENDING',
    ESTIMATED = 'ESTIMATED',
    CLOSED = 'CLOSED',
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