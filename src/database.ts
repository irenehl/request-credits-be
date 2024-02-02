import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

export async function connectToDatabase() {
  try {
    await mongoose.connect(uri!);
    console.log('Successfully connected to MongoDB!');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
}
