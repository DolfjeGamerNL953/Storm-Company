const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var helpgebruikerEmbed = new discord.RichEmbed()
    .setTitle("Help Commands")
    .setDescription("!helpgebruiker voor de lijst commands")
    .setColor("RANDOM")
    .addField("!helpgebruiker > Laat deze lijst met commands zien \n\ !ideecomp => Plaats een company idee \n !ideediscord => Plaats een discord idee \n !ideeweb => Plaats een website idee \n !info => Laat informatie zien \n !ip => Laat info zien over de Alpha Server \n !level => Laat je huidige level zien \n !pakketten => Laat de pakketten met inhoud zien \n !prijzen => Laat de prijzen zien \n !report => Rapporteer een gebruiker \n !review => Plaats een review \n !ticket => Maak een ticket aan \n !userinfo => Laat info over user zien")
    .setFooter("**© 2019 StormCompany**");

    message.channel.send(helpgebruikerEmbed)
}

module.exports.help = {
    name: "helpgebruiker"
}