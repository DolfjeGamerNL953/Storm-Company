const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var helpgebruikerEmbed = new discord.RichEmbed()
    .setDescription("Help Commands")
    .setColor("RANDOM")
    .addField("!helpgebruiker > Laat deze lijst met commands zien\n\ !ip > Laat info zien over de Alpha Server \n !ticket > Maak een ticket a aan \n !idee > Plaats een idee \n !level > Laat huidige level zien \n !report > Maak een report \n !userinfo > Laat jou info zien \n !botinfo > Laat info over de bot zien \n !review > Plaats een review \n !crew > Laat het company team zien \n !ping > Laat je ping zien \n !sps > Speel steen, papier, schaar met de bot \n !goedemiddag, morgen, avond > Krijg een leuk berichtje van de bot \n !eten, slapen > Krijg een leuk berichtje van de bot")
    .setFooter("**© 2019 StormCompany**");

    message.channel.send(helpgebruikerEmbed)
}

module.exports.help = {
    name: "helpgebruiker"
}