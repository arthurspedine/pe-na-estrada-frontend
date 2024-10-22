import z from 'zod'

const envSchema = z.object({
  JWT_SECRET: z.string(),
  BACKEND_URL: z.string().url(),
  AI_URL: z.string().url(),
  AI_KEY: z.string(),
})

const envVars = {
  JWT_SECRET: process.env.JWT_SECRET,
  BACKEND_URL: process.env.BACKEND_URL,
  AI_URL: process.env.AI_URL,
  AI_KEY: process.env.AI_KEY,
}

export const clientEnv = envSchema.parse(envVars)
