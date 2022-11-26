"use strict";

const TelegramBot = require('node-telegram-bot-api');

const EnvMixin = require('../mixins/env.mixin')

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "telegram",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Mixins
	 */
	mixins: [
                EnvMixin()
        ],

	/**
	 * Actions
	 */
	actions: {
		notify: {
			rest: {
				method: "POST",
				path: "/notify",
			},
                        params: {
                                message: "string"
                        },
			async handler(ctx) {
                                this.bot.sendMessage(
                                        process.env.OWNER_TELEGRAM_CHAT_ID,
                                        `${ctx.params.message}\n\n_fired by MAGI notifications_`,
                                        { parse_mode: 'Markdown' }
                                )
                                return 'ok'
			}
		},
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {
                const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {polling: true});

                // Matches "/echo [whatever]"
                bot.onText(/\/echo (.+)/, (msg, match) => {
                        // 'msg' is the received Message from Telegram
                        // 'match' is the result of executing the regexp above on the text content
                        // of the message

                        const chatId = msg.chat.id;
                        const resp = match[1]; // the captured "whatever"

                        // send back the matched "whatever" to the chat
                        bot.sendMessage(chatId, resp);
                });

                // Listen for any kind of message. There are different kinds of
                // messages.
                bot.on('message', (msg) => {
                        const chatId = msg.chat.id;

                        // this.logger.info('incoming tg message', msg)
                        this.logger.info('incoming tg message', {
                                'chat': msg.chat,
                                'text': msg.text
                        })
                        if (msg.chat.id != process.env.OWNER_TELEGRAM_CHAT_ID) {
                                bot.sendMessage(
                                    process.env.OWNER_TELEGRAM_CHAT_ID,
                                    `@${msg.chat.username}: "${msg.text}"`
                                )
                        }

                        // send a message to the chat acknowledging receipt of their message
                        bot.sendMessage(chatId, 'nice');
                });

                this.bot = bot
	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {
                this.bot.stopPolling()
	}
};
