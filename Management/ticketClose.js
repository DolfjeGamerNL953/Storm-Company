const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    var prefix = '!'

    if (!args[0]) return message.channel.send(`Gebruik: ${prefix}close <reden>.`);

    var reason = args.join(" ").slice(22);
 
    // Id van category van tickets.
    const categoryId = "651114524149022730";
 
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Gelieve dit commando in een ticket kanaal te doen.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.channel.name)
        .setDescription("Je ticket is gemarkeerd als **compleet**. Wil je een nieuwe maken doe dan !ticket")
        .addField("Reden:", reason)
        .setFooter("ticket gesloten");

        var closeChannel = message.guild.channels.find("name", "635798524277030913")
        if (!closeChannel) return message.channel.send("Kanaal bestaat niet");

        closeChannel.send(embedCloseTicket)
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "ticket-logs");
    if (!logChannel) return message.channel.send("Kanaal bestaat niet");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}
