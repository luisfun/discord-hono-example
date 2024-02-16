import dotenv from 'dotenv'
import process from 'node:process'
import app from './index.js' // '.js' is necessary for 'npm run register'.

dotenv.config({ path: '.dev.vars' })

await app.register(
  process.env.DISCORD_APPLICATION_ID,
  process.env.DISCORD_TOKEN,
  //process.env.DISCORD_TEST_GUILD_ID,
)
