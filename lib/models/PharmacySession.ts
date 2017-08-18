import * as uuid from 'uuid';
import { BaseModel } from './BaseModel';

export class PharmacySession extends BaseModel {
    public sessionId: string;
    public pharmacyId: string;
    public startedAt: number;
    public endedAt: number;
    public pharmacyPosition: {
        latitude: number,
        longitude: number
    }
    constructor() {
        super();
        this.sessionId = uuid.v4();
    }
}