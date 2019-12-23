const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var month = message.guild.date
    var testembed = new discord.RichEmbed()
    .setDescription("Help Commands")
    .setColor("#ff000")
    .addField("Maand:", month)
    .addField("Bot is gemaakt")
    .setFooter("**© 2019 StormCompany**");
}

module.exports.help = {
    name: "changelog"
}