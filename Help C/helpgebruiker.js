const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var helpgebruikerEmbed = new discord.RichEmbed()
    .setDescription("Help Commands")
    .setColor("RANDOM")
    .addField("!helpgebruiker > Laat deze lijst met commands zien \n\ !botinfo => Geeft informatie over de bot \n !changelog => Laat de changelog van de bot zien \n !crew => Laat het team van StormComp zien \n !eten => Bot etens bericht \n !goedemiddag => Bot goedemiddag bericht \n !goedemorgen => Bot goedemorgen bericht \n !goedenavond => Bot goedenavond bericht \n !ideecomp => Plaats een company idee \n !ideediscord => Plaats een discord idee \n !ideeweb => Plaats een website idee \n !info => Laat informatie zien \n !ip => Laat info zien over de Alpha Server \n !level => Laat je huidige level zien \n !meme => Laat de bot een meme sturen (ALLEEN IN MEME CHANNEL!) \n !pakketten => Laat de pakketten met inhoud zien \n !prijzen => Laat de prijzen zien \n !report => Rapporteer een gebruiker \n !review => Plaats een review \n")
    .addField("!serverinfp => Laat info over de server zien \n !slapen => Krijg een slapen bericht van de bot \n !ticket => Maak een ticket aan \n !updates => Laat de updates van de huidige maand zien \n !userinfo => Laat info over user zien")
    .setFooter("**© 2019 StormCompany**");

    message.channel.send(helpgebruikerEmbed)
}

module.exports.help = {
    name: "helpgebruiker"
}