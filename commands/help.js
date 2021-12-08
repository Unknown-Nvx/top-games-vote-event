module.exports = (bot, message, args) => {

    console.log("help command loaded");
    const Discord = require("discord.js");

        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#5E6BDB')
        .setAuthor('🔗 HELP')
        .addField('👩‍🚀   $command1', '```Lorem ipsum dolor sit amet.```', false)
        .addField('🔭   $command2', '```Lorem ipsum dolor sit amet.```', false)
        .addField('🚀   $command3', '```Lorem ipsum dolor sit amet.```', false)
        .addField('🛰️   $command4', '```Lorem ipsum dolor sit amet.```', false)
        
        message.channel.send({helpEmbed});

}
