import type { Context } from 'discord-hono'
import { DiscordHono, Command, CommandOption } from 'discord-hono'

const imageHandler = async (c: Context) => {
  const image = await fetch('https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Fire/3D/fire_3d.png')
  const blob = new Blob([await image.arrayBuffer()])
  await c.followup({ content: c.command.values[0] }, { blob, name: 'image.png' })
}

export const commands = [
  new Command('ping', 'response pong').resText('Pong!!'),
  new Command('image', 'response image file with text')
    .option(new CommandOption('content', 'response text').required())
    .resDefer(imageHandler),
]

const app = new DiscordHono()
app.commands(commands)
export default app
