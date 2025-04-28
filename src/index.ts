import { Button, Components, DiscordHono } from 'discord-hono'

const app = new DiscordHono()
  .command('hello', c => c.res('world!'))
  .command('help', c =>
    c.res({
      content: `text: ${c.var.text}`,
      components: new Components().row(
        new Button('https://discord-hono.luis.fun', ["📑", 'Docs'], 'Link'),
        new Button('delete-self', ['🗑️', 'Delete'], 'Secondary'),
      ),
    }),
  )
  .component('delete-self', c => c.update().resDefer(c => c.followup()))

export default app
