import { error } from '@/utils/Logger';
import 'dotenv/config';

import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(8080),
  HOST: z.string().default('0.0.0.0'),
  JWT_SECRET: z.string().default('secret'),
});

const envParsed = envSchema.safeParse(process.env);

if (!envParsed.success) {
  error(envParsed.error.message);
  throw new Error(envParsed.error.message);
}

export const env = envParsed.data;
