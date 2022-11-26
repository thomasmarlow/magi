[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# magi

Tailor-made personal assistant.

This is a [Moleculer](https://moleculer.services/)-based microservices project. Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

## Usage

Start the project with `npm run dev` command. 
After starting, open the http://localhost:3000/ URL in your browser. 
On the welcome page you can test the generated services via API Gateway and check the nodes & services.

In the terminal, try the following commands:

- `nodes` - List all connected nodes.
- `actions` - List all registered service actions.
- `call greeter.hello` - Call the `greeter.hello` action.
- `call greeter.welcome --name John` - Call the `greeter.welcome` action with the `name` parameter.

## Services

- **api**: API Gateway services
- **greeter**: Sample service with `hello` and `welcome` actions.

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint
- `npm run ci`: Run continuous test mode with watching
- `npm test`: Run tests & generate coverage report
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose

## TODO

- [Create Moleculer project](https://moleculer.services/docs/0.14/usage.html#Create-a-Moleculer-project)
- [Add simple Telegram bot service](https://github.com/yagop/node-telegram-bot-api)
- Switch from polling to webhooks:
  - [Basic setup](https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#webhooks)
  - [Example with Express](https://github.com/yagop/node-telegram-bot-api/blob/master/examples/webhook/express.js)
- Add some DB functionality
- [Add Discord bot service](https://discord.js.org/#/)

## Useful links

- Moleculer website: https://moleculer.services/
- Moleculer Documentation: https://moleculer.services/docs/0.14/
- [Awesome Moleculer](https://github.com/moleculerjs/awesome-moleculer)
