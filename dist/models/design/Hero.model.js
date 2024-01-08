import { model, Schema } from 'mongoose';
export const HeroSchema = new Schema({
    image: { type: 'String', required: true },
    order: { type: 'Number', required: true },
    available: { type: 'Boolean', required: false },
}, { timestamps: true });
export const Hero = model('Hero', HeroSchema);
