const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.channel.send("Gebruik: ?ban <gebruiker> <reden>");

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));

    if (!banUser) return message.channel.send(`Gebruik: ${prefix}ban <gebruiker> <reden>.`);

    var reason = args.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("U heeft hier geen permissies voor")

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker mag u niet verbannen");

    var ban = new discord.RichEmbed()
        .setDescription("Verbanning")
        .setColor("#ff0000")
        .addField("Verbannen gebruiker", banUser)
        .addField("Verbannen door:", message.author)
        .addField("Reden", reason);

    var banChannel = message.guild.channels.find("name", "ban-logs");
    if (!banChannel) return message.guild.send("Het kanaal is niet gevonden");

    message.guild.member(banUser).ban(reason);
 
    banChannel.send(ban);

    return;
}

module.exports.help = {
    name: "ban"
}