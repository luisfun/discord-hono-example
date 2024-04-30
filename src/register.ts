import { config } from 'dotenv'
import { env } from 'node:process'
import { Command, Option, register } from 'discord-hono'
config({ path: '.dev.vars' })

const commands = [
  new Command('hello', 'response world'),
  new Command('help', 'response help').options(new Option('text', 'with text')),
]

register(
  commands,
  env.DISCORD_APPLICATION_ID,
  env.DISCORD_TOKEN,
  //env.DISCORD_TEST_GUILD_ID,
)
