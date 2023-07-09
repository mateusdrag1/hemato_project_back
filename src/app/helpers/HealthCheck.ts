import { type FastifyReply, type FastifyRequest } from 'fastify';

const HealthCheck = async (_req: FastifyRequest, _res: FastifyReply) => {
  const healthCheck = {
    uptime: process.uptime(),
    responseTime: process.hrtime(),
    message: 'OK',
    timestamp: Date.now(),
  };

  try {
    return _res.status(200).send(healthCheck);
  } catch (e) {
    return _res.status(503).send(healthCheck);
  }
};

export default HealthCheck;
