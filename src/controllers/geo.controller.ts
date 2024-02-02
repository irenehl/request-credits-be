/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { Department } from '../models/geo.model';

export const getDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await Department.find()
      .populate({
        path: 'municipalities',
        select: '-__v',
      })
      .select('-__v')
      .exec();

    return res.status(200).json(departments);
  } catch (error) {
    const message = (error as unknown as any).message;
    return res.status(400).json({ message: message ?? 'Something happened' });
  }
};
