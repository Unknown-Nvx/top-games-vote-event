const { Client, Intents, Collection } = require("discord.js");
const { prefix, token } = require("./config.json");

const bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]});

bot.prefix = prefix;
bot.commands = new Collection();

bot.on("ready", () => require("./events/ready.js")());
bot.on("messageCreate", (message) => require("./events/message.js")(message, bot));

bot.commands.set("help", require("./commands/help.js"));

bot.login(process.env.TOKEN);
