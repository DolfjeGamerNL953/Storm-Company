const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL
    var discordtext = "https://discord.gg/yDazdYJ"
    var alphatext = "https://discord.gg/cQfmhja"
    var websitetext = "https://stormcomp.webnode.nl/"
    var iptext = "play.alphanetwork.nl"
    var versietext = "1.12.2 t/m 1.13.3"

    var infoEmbed = new discord.RichEmbed()
    .setTitle("Informatie")
    .setColor("RANDOM")
    .setThumbnail(icon)
    .addField("CompanyDiscord:", discordtext)
    .addField("AlphaDiscord:", alphatext)
    .addField("Website:", websitetext)
    .addField("Server IP:", iptext)
    .addField("Server Versie:", versietext)
    .setFooter("© 2019 StormCompany");

    message.channel.send(infoEmbed)
}

module.exports.help = {
    name: "info"
}