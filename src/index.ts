import { DiscordHono, CommandHandlers } from 'discord-hono'
import { commands } from './commands'

const handlers = new CommandHandlers()
  .on('ping', c => c.resText('Pong!!'))
  .on('image', c =>
    c.resDefer(async () => {
      const image = await fetch('https://luis.fun/images/hono.webp')
      const blob = new Blob([await image.arrayBuffer()])
      await c.followup({ content: c.values[0].toString() }, { blob, name: 'image.webp' })
    }),
  )

const app = new DiscordHono()
app.commands(commands)
app.handlers(handlers)
export default app
