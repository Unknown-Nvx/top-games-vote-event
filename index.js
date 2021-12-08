const { Client, Intents, Collection } = require("discord.js");
const { prefix, token } = require("./config.json");

const bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] });

bot.prefix = prefix;
bot.commands = new Collection();

bot.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});


//bot.commands.set("help", require("./commands/help.js"));

bot.on("ready", () => require("./events/ready.js")());
//bot.on("messageCreate", message => require("./events/message.js")(message));

bot.login(process.env.TOKEN);
