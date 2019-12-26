const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var month = message.guild.date
    var changelogembed = new discord.RichEmbed()
    .setDescription("Changelog")
    .setColor("RANDOM")
    .addField("Hudige Maand:", month)
    .addField("Bot is gemaakt")
    .setFooter("**© 2019 StormCompany**");

    message.channel.send(changelogembed)
}

module.exports.help = {
    name: "changelog"
}