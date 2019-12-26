Nieuw Dupliceer & bewerkRegistreerLogin
const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    if (!args[0]) return message.channel.send("Gebruik: ?ban <gebruiker> <reden>");
 
    var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
 
    if (!banUser) return message.channel.send(`Gebruik: ${prefix}ban <gebruiker> <reden>.`);
 
    var reason = args.join(" ").slice(22);
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("U heeft hier geen permissies voor")
 
    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker mag u niet verbannen");
 
    var banEmbed = new discord.RichEmbed()
        .setDescription("Verbanning")
        .setColor("#ff0000")
        .addField("Verbannen gebruiker", banUser)
        .addField("Verbannen door:", message.author)
        .addField("Reden", reason);
 
 
    var banChannel = bot.channels.get("655318206084546580");
    if (!banChannel) return message.guild.send("Het kanaal is niet gevonden");

    banUser.send("Wat je wilt als de user vernannen wordt")
 
    message.guild.member(banUser).ban(reason);
 
    banChannel.send(banEmbed);
 
    return;
}
 
module.exports.help = {
    name: "ban"
}
