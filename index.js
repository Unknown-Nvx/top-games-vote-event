const { Client, Collection } = require("discord.js");
const { prefix, token } = require("./config.json");
const { Intents } = require('discord.js');
const Discord = require("discord.js");
const bot = new Discord.Client({ ws: { intents: Intents.ALL } });

bot.prefix = prefix;
bot.commands = new Collection();

bot.commands.set("help", require("./commands/help.js"));

bot.on("ready", () => require("./events/ready.js")(bot, Discord));
bot.on("message", message => require("./events/message.js")(bot, message));

bot.login(token);