import { model, Schema } from 'mongoose';
export const CategorySchema = new Schema({
    category: { type: 'String', required: true },
    available: { type: 'Boolean', required: false },
}, { timestamps: true });
export const Category = model('Category', CategorySchema);
