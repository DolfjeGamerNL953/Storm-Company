const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var testembed = new discord.RichEmbed()
    .setDescription("Help Commands")
    .setColor("#ff000")
    .addField("!helpgame --> Laat deze lijst met commands zien \n\ !sps > Speel steen, papier, schaar met de bot")
    .setFooter("**© 2019 StormCompany**");
}

module.exports.help = {
    name: "helpgame"
}