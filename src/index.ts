import { DiscordHono, CommandHandlers } from 'discord-hono'

const handlers = new CommandHandlers()
  .on('ping', c => c.res('Pong!!'))
  .on('image', c =>
    c.resDefer(async () => {
      const image = await fetch('https://luis.fun/images/hono.webp')
      const blob = new Blob([await image.arrayBuffer()])
      await c.followup({ content: c.values.text.toString() }, { blob, name: 'image.webp' })
    }),
  )

const app = new DiscordHono()
app.handlers(handlers)
export default app
