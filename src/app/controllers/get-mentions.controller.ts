import { type FastifyRequest, type FastifyReply } from 'fastify';
import { makeGetMentionsUseCases } from '../use-cases/factories/make-get-mentions.use-case';

export async function getMentions(req: FastifyRequest, res: FastifyReply) {
  const createMentionsUseCase = makeGetMentionsUseCases();

  const mentions = await createMentionsUseCase.execute();

  res.status(200).send({
    mentions,
  });
}
