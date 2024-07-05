const TelegramBot = require('node-telegram-bot-api');

// Replace with your Telegram bot token
const token = process.env.TELEGRAM_BOT_TOKEN;

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
