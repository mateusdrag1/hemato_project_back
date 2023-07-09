import { type Request, type Response } from 'express';
import prisma from '../../database/PrismaClient';
import { type BaseController } from './controller';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

export class UserController implements BaseController {
  async index(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.json({
        users,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      res.json({
        user,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const passwordEncrypt = await bcrypt.hash(password, 10);

    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: passwordEncrypt,
        },
      });
      res.json({
        user,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }

    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      const token = jwt.sign({ id: user.id }, JWT_SECRET, {
        expiresIn: '1d',
      });

      res.json({
        name: user.name,
        token,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
      const passwordEncrypt = await bcrypt.hash(password, 10);

      const user = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          email,
          password: passwordEncrypt,
        },
      });
      res.json({
        user,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await prisma.user.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.json({
        user,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
