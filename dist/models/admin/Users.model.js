import { model, Schema } from 'mongoose';
export const UsersSchema = new Schema({
    name: { type: 'String', required: true },
    email: { type: 'String', required: true },
    role: { type: 'String', required: true },
    authorized: { type: 'Boolean', required: false },
}, { timestamps: true });
export const Users = model('Users', UsersSchema);
