import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

export const AuthMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const jwtAuthorization = req.headers.authorization;

	if (!jwtAuthorization) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	const [, token] = jwtAuthorization.split(' ');

	try {
		const { id } = jwt.verify(token, JWT_SECRET) as JwtPayload;

		req.body.userID = id;

		next();
	} catch (err) {
		console.error(err);
		return res.status(401).json({ error: 'Unauthorized' });
	}
};
