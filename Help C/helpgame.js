const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var helpgameEmbed = new discord.RichEmbed()
    .setDescription("Help Commands")
    .setColor("RANDOM")
    .addField("!helpgame --> Laat deze lijst met commands zien \n\ !sps > Speel steen, papier, schaar met de bot")
    .setFooter("© 2019 StormCompany");

    message.channel.send(helpgameEmbed)
}

module.exports.help = {
    name: "helpgame"
}