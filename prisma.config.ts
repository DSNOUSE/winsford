import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: 'postgresql://neondb_owner:npg_UriqP6Rj0ZEW@ep-fragrant-hill-abkgdkp0-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  },
  migrations: {
    seed: 'node prisma/seed-simple.js',
  },
})
