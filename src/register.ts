import dotenv from 'dotenv'
import process from 'node:process'
import { Command, Option, register } from 'discord-hono'
dotenv.config({ path: '.dev.vars' })

const commands = [
  new Command('hello', 'response world'),
  new Command('help', 'response help').options(new Option('text', 'with text')),
]

await register(
  commands,
  process.env.DISCORD_APPLICATION_ID,
  process.env.DISCORD_TOKEN,
  //process.env.DISCORD_TEST_GUILD_ID,
)
