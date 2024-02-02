import { z } from 'zod';
import { Request, Response } from 'express';
import User from '../models/user.model';
import { UserCreateSchema } from '../models/user.model';

export const addUser = async (req: Request, res: Response) => {
  try {
    const parsedBody = UserCreateSchema.parse(req.body);

    const newUser = new User(parsedBody);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send(error.errors);
    } else {
      console.log(error);
      res.status(500).send('Internal server error');
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  let skip = parseInt(req.query.skip as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  skip = Math.max((skip - 1) * limit, 0);

  try {
    const total = await User.countDocuments();
    const users = await User.find()
      .populate({
        path: 'municipality',
        select: '-__v',
        populate: {
          path: 'department',
          select: '-__v',
        },
      })
      .select('-__v')
      .skip(skip)
      .limit(limit)
      .exec();

    console.log(users);
    const currentPage = skip / limit + 1;

    res.status(200).send({
      users,
      page: currentPage,
      total,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  }
};

export const findUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId)
      .populate({
        path: 'municipality',
        select: '-__v',
        populate: {
          path: 'department',
          select: '-__v',
        },
      })
      .select('-__v')
      .exec();

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  }
};
