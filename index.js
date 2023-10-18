// const TelegramBot = require("node-telegram-bot-api");
// const Agent = require("socks5-https-client/lib/Agent");
// import axios from "axios";
import "dotenv/config";
import { Bot, HttpError, webhookCallback } from "grammy";

const token = process.env.TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

// const bot = new TelegramBot(token, {
//     polling: true,
//     request: { agentClass: Agent, agentOptions: { socksHost: "127.0.0.1", socksPort: "2080" } },
// });
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, "Hello! I'm your Telegram bot.");
// });

const bot = new Bot(token);

bot.command("start", (ctx) => {
    ctx.reply("Hello, welcome to the bot!");
});

export default webhookCallback(bot, "http");

// bot.start();
