import dotenv from 'dotenv'
import process from 'node:process'
import { register } from 'discord-hono'
import { commands } from '.'

dotenv.config({ path: '.dev.vars' })

await register(
  commands,
  process.env.DISCORD_APPLICATION_ID,
  process.env.DISCORD_TOKEN,
  //process.env.DISCORD_TEST_GUILD_ID,
)
