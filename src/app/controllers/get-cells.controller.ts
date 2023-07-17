import { type FastifyRequest, type FastifyReply } from 'fastify';
import { makeGetCellsUseCase } from '../use-cases/factories/make-get-cells.use-case';

export async function getCells(req: FastifyRequest, res: FastifyReply) {
  const getCellsUseCase = makeGetCellsUseCase();

  const cells = await getCellsUseCase.execute();

  res.status(200).send({
    cells,
  });
}
