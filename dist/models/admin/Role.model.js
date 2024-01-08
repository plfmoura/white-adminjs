import { model, Schema } from 'mongoose';
export const RoleSchema = new Schema({
    role: { type: 'String', required: true },
    available: { type: 'Boolean', required: false },
}, { timestamps: true });
export const Role = model('Role', RoleSchema);
