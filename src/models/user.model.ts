import { z } from 'zod';
import mongoose from 'mongoose';
import { ObjectIdSchema } from './zod.model';

export const UserCreateSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  lastName: z.string().min(1, 'Lastname is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(8, 'Phone must be at least 8 characters long'),
  address: z.string().min(1, 'Address is required'),
  monthlyIncome: z.number().min(0, 'Monthly Income must be a positive number'),
  selfieUrl: z.string().url().optional(),
  document: z.object({
    documentPhoto: z.string().url().optional(),
    documentType: z.string().min(1, 'ID Type is required'),
    documentNumber: z.string().min(1, 'Document number is required'),
  }),
  municipality: ObjectIdSchema,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  monthlyIncome: { type: Number, required: true },

  selfieUrl: { type: String, required: false },

  document: {
    documentPhoto: { type: String, required: false },
    documentType: { type: String, required: true },
    documentNumber: { type: String, required: true },
  },

  address: { type: String, required: true },
  municipality: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Municipality',
    required: true,
    versionKey: false,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
