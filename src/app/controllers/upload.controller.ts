import { type FastifyRequest, type FastifyReply } from 'fastify';
import { z } from 'zod';

import { makeUploadUseCase } from '../use-cases/factories/make-upload.use-cases';

export async function upload(req: FastifyRequest, res: FastifyReply) {
  const uploadBodySchema = z.object({
    file: z.string(),
  });

  const { file } = uploadBodySchema.parse(req.body);

  try {
    const uploadUseCase = makeUploadUseCase();

    const url = await uploadUseCase.execute({
      base64: file,
    });

    res.status(201).send(url);
  } catch (err) {
    console.log(err);
    throw err;
  }
}
