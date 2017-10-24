import { Allergy } from '../models/Allergies';
import { ClinicalHistory } from '../models/ClinicalHistory';
import { Order } from '../models/Order';
import { Pharmacy } from '../models/Pharmacy';
import { PharmacySession } from '../models/PharmacySession';
import { Prescription } from '../models/Prescription';
import { Product } from '../models/Product';
import { Quote } from '../models/Quote';
import { QuotePharmacy } from '../models/QuotePharmacy';
import { Specialty } from '../models/Specialty';
import { User } from '../models/User';
import { UserPharmacy } from '../models/UserPharmacy';
import { UserSession } from '../models/UserSession';
import * as dynogels from 'drandx-dynogels';
import { globalConst } from './db/appVariables';

console.log('** Environment: ', globalConst);

// const allergiesModel = new Allergy();
// const clinicalModel = new ClinicalHistory();
// const orderModel = new Order();
// const pharmacyModel = new Pharmacy();
// const pharmacySession = new PharmacySession();
// const prescriptionModel = new Prescription();
// const productModel = new Product();
// const quoteModel = new Quote();
// const quotePharmacyModel = new QuotePharmacy();
// const specialtyModel = new Specialty();
const userModel = new User();
// const userPharmacyModel = new UserPharmacy();
// const userSession = new UserSession();

dynogels.createTables(undefined, (err, res) => {
    if (err) {
        console.log('Err creating tables: ', err);        
    }
    console.log('Result creating tables: ', res);
})