const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags"); "6.4K (gripped: 2K)"

module.exports.run = async (bot, message, args) => {

    

}


module.exports.help = {
    name: "help",
    aliases: ["f"],
    category: "gebruiker",
    description: "Returns all comands, or one specific command info",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        var icon = message.guild.iconURL
        var discordtext = "https://discord.gg/yDazdYJ"
        var alphatext = "https://discord.gg/cQfmhja"
        var websitetext = "https://stcompany.webnode.nl/"
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
}