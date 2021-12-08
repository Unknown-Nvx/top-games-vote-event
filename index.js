const { Client, Intents, Collection } = require("discord.js");
const { prefix, token } = require("./config.json");
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.prefix = prefix;
bot.commands = new Collection();

bot.commands.set("help", require("./commands/help.js"));

bot.on("ready", () => require("./events/ready.js")());
bot.on("messageCreate", message => require("./events/message.js")(message));

bot.login(process.env.TOKEN);
