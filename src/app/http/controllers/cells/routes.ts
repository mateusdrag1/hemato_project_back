import { type FastifyInstance } from 'fastify';
import { verifyJWT } from '../../middlewares/verify-jwt';
import { createCategory } from './create-category.controller';
import { createCell } from './create-cell.controller';
import { createMention } from './create-mention.controller';
import { getCategories } from './get-categories.controller';
import { getCells } from './get-cells.controller';
import { getMentions } from './get-mentions.controller';
import { upload } from './upload.controller';
import { verifyUserRole } from '../../middlewares/verify-user-role';
import { getCellById } from './get-cell-by-id.controller';
import { deleteCell } from './delete-cell.controller';

export async function cellsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/categories', createCategory);

  app.post('/mentions', createMention);

  app.get('/categories', getCategories);

  app.get('/mentions', getMentions);

  app.post(
    '/cells',
    {
      onRequest: [verifyUserRole('ADMIN')],
    },
    createCell,
  );

  app.get('/cells', getCells);

  app.get('/cells/:id', getCellById);

  app.post(
    '/upload',
    {
      onRequest: [verifyUserRole('ADMIN')],
    },
    upload,
  );

  app.delete(
    '/cells/:id',
    {
      onRequest: [verifyUserRole('ADMIN')],
    },
    deleteCell,
  );
}
