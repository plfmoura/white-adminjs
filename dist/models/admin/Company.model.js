import { model, Schema } from 'mongoose';
export const CompanySchema = new Schema({
    logo: { type: 'String', required: true },
    address: { type: 'String', required: true },
    link: { type: 'String', required: false },
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },
    owner: { type: 'string', required: true }
}, { timestamps: true });
export const Company = model('Company', CompanySchema);
