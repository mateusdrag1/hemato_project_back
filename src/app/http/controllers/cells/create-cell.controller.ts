import { type FastifyReply, type FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateCellUseCase } from '@/app/use-cases/factories/make-create-cell.use-case';
import { ResourceAlreadyExistsError } from '@/app/use-cases/errors/resource-already-exists.error';
import { ResourceNotFoundError } from '@/app/use-cases/errors/resource-not-found.error';
import { makeUploadUseCase } from '@/app/use-cases/factories/make-upload.use-cases';

export async function createCell(req: FastifyRequest, res: FastifyReply) {
  const createCellBodySchema = z.object({
    name: z.string().min(3).max(128),
    morphology: z.string().min(3).max(600),
    clinical_relevance: z.string().min(3).max(600),
    image: z.string(),
    category_id: z.coerce.number(),
  });

  const createCellBody = createCellBodySchema.parse(req.body);

  try {
    const uploadUseCase = makeUploadUseCase();

    const data = await uploadUseCase.execute({
      base64: createCellBody.image,
    });

    createCellBody.image = data.url;

    const createCellUseCase = makeCreateCellUseCase();

    const cell = await createCellUseCase.execute({
      ...createCellBody,
      created_by: req.user.sub,
    });

    res.status(201).send({
      cell,
    });
  } catch (err) {
    if (err instanceof ResourceAlreadyExistsError) {
      return res.status(409).send({
        message: err.message,
      });
    }

    if (err instanceof ResourceNotFoundError) {
      return res.status(404).send({
        message: err.message,
      });
    }

    throw err;
  }
}
