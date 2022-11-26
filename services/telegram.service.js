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

		// /**
		//  * Say a 'Hello' action.
		//  *
		//  * @returns
		//  */
		// hello: {
		// 	rest: {
		// 		method: "GET",
		// 		path: "/hello"
		// 	},
		// 	async handler() {
		// 		return "Hello Moleculer";
		// 	}
		// },

		// /**
		//  * Welcome, a username
		//  *
		//  * @param {String} name - User name
		//  */
		// welcome: {
		// 	rest: "/welcome",
		// 	params: {
		// 		name: "string"
		// 	},
		// 	/** @param {Context} ctx  */
		// 	async handler(ctx) {
		// 		return `Welcome, ${ctx.params.name}`;
		// 	}
		// }
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
                // const bot = new TelegramBot('5953851251:AAHStdZPhs5IjM9iUINALBn75KbUl-FR12s', {polling: true});
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

                        // send a message to the chat acknowledging receipt of their message
                        bot.sendMessage(chatId, 'Received your message');
              });
	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};