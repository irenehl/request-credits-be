import mongoose from 'mongoose';

const municipalitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
    versionKey: false,
  },
});

export const Municipality = mongoose.model('Municipality', municipalitySchema);

const departmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    id: false,
    versionKey: false,
  },
);

departmentSchema.virtual('municipalities', {
  ref: 'Municipality',
  localField: '_id',
  foreignField: 'department',
});

export const Department = mongoose.model('Department', departmentSchema);
