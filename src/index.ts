import { DiscordHono, Command, Option, CommandHandlers } from 'discord-hono'

export const commands = [
  new Command('ping', 'response pong'),
  new Command('image', 'response image file with text').options(new Option('content', 'response text').required()),
]

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
