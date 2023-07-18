import { type FastifyRequest, type FastifyReply } from 'fastify';

export async function verifyJWT(request: FastifyRequest, response: FastifyReply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return response.status(401).send({
      error: 'Unauthorized',
    });
  }
}
