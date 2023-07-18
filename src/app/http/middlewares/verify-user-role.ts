import { type FastifyRequest, type FastifyReply } from 'fastify';

export function verifyUserRole(roleToVerify: string) {
  return async (request: FastifyRequest, response: FastifyReply) => {
    const { role } = request.user;

    if (role !== roleToVerify) {
      return response.status(403).send({
        error: 'Forbidden',
      });
    }
  };
}
