const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var ip = "play.alphanetwork.nl"
    var alphadiscord = "https://discord.gg/cQfmhja"
    var versie = "1.12.2 t/m 1.13.3"

    var ipEmbed = new discord.RichEmbed()
        .setDescription("AlphaNetwork Server info")
        .setColor("#00eeff")
        .addField("Server IP", ip)
        .addField("Server Versie:", versie)
        .addField("Alpha Discord:", alphadiscord);

    message.channel.send(ipEmbed);


    var iplogEmbed = new discord.RichEmbed()
        .setDescription("AlphaNetwork Server info")
        .setColor("#00eeff")
        .addField("***Server IP***", ip)
        .addField("***Server Versie***:", versie)
        .addField("***Alpha Discord***:", alphadiscord)
        .addField("***Gestuurd door***:", message.author.username);

    var iplogChannel = message.guild.channels.find("name", "ip-logs");
    if (!iplogChannel) return message.guild.send("Het kanaal is niet gevonden");
    iplogChannel.send(embedCreateTicketlog);
}

module.exports.help = {
    name: "ip"
}