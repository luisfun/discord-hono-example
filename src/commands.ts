import { Command, Option } from 'discord-hono'

export const commands = [
  new Command('ping', 'response pong'),
  new Command('image', 'response image file').options(new Option('text', 'response text').required()),
]
