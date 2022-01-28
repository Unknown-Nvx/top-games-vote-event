const { Client, Intents, Collection } = require("discord.js");
const { token } = require("./config.json");

const bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
bot.on("messageCreate", (vote) => require("./events/vote.js")(vote, bot));

bot.login(token);
