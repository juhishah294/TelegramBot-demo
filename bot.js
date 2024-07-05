const TelegramBot = require('node-telegram-bot-api');

// Replace with your Telegram bot token
const token = '7318854259:AAGgiitT5v4B2Km7dg939AJNMYA6qu0C5P0';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello! I am your bot.');
});

// Handle text messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello I am juhi! How can I help you');
});

// Start listening for messages
console.log('Bot is running...');
