const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var prijzenEmbed = new discord.RichEmbed()
    .setDescription("Prijzen")
    .setColor("RANDOM")
    .addField("Prijzen Pakketen:", "€50")
    .setFooter("**© 2019 StormCompany**");

    message.channel.send(prijzenEmbed)
}

module.exports.help = {
    name: "prijzen"
}