const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var testembed = new discord.RichEmbed()
    .setDescription("Help Commands")
    .setColor("#ff000")
    .addField("!help > Laat deze lijst met commands zien\n\n !ip > Laat info zien over de Alpha Server")
    .addField("!ticket > Maak een ticket a an")
    .addField("!goedemiddag, morgen, avond > Krijg een leuk berichtje van de bot")
    .addField("!eten, slapen > Krijg een leuk berichtje van de bot")
    .addField("!idee > Plaats een idee")
    .addField("!level > Laat huidige level zien")
    .addField("!report > Maak een report")
    .addField("!userinfo > Laat jou info zien")
    .addField("!botinfo > Laat info over de bot zien")
    .addField("!review > Plaats een review")
    .addField("!crew > Laat het company team zien")
    .addField("!ping > Laat je ping zien")
    .addField("!sps > Speel steen, papier, schaar met de bot")
    .addField("**© 2019 StormCompany**");

    message.channel.send(testembed);
}

module.exports.help = {
    name: "help"
}