import { type FastifyRequest, type FastifyReply } from 'fastify';
import { makeGetCategoriesUseCases } from '@/app/use-cases/factories/make-get-categories.use-cases';

export async function getCategories(req: FastifyRequest, res: FastifyReply) {
  const createGetCategoriesUseCase = makeGetCategoriesUseCases();

  const categories = await createGetCategoriesUseCase.execute();

  res.status(200).send({
    categories,
  });
}
