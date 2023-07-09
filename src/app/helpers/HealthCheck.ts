import { type NextFunction, type Request, type Response } from 'express';

const HealthCheck = async (
  _req: Request,
  _res: Response,
  _next: NextFunction,
) => {
  const healthCheck = {
    uptime: process.uptime(),
    responseTime: process.hrtime(),
    message: 'OK',
    timestamp: Date.now(),
  };

  try {
    return _res.status(200).json(healthCheck);
  } catch (e) {
    healthCheck.message = e;
    return _res.status(503).json(healthCheck);
  }
};

export default HealthCheck;
