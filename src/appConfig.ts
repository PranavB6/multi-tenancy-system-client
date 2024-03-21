import { z } from 'zod';

const appConfigSchema = z.object({
  // NextJS will set NODE_ENV to 'development' or 'production' automatically
  // reference: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#good-to-know
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

type Config = z.infer<typeof appConfigSchema>;

const getAppConfig = (): Config => {
  return appConfigSchema.parse({
    NODE_ENV: process.env.NODE_ENV,
  });
};

export default getAppConfig;
export type { Config };
