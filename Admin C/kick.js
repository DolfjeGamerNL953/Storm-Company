const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !kick @DolfjeGamerNL redenen hier.

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));

    if (!kickUser) return message.channel.send(`Gebruik: ${prefix}kick <gebruiker> <reden>.`);

    var reason = args.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("U heeft hier geen permissies voor")

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker mag u niet kicken");

    var kick = new discord.RichEmbed()
        .setDescription("Kick")
        .setColor("#ff0000")
        .addField("Kicked gebruiker", kickUser)
        .addField("Gekickt door:", message.author)
        .addField("Reden", reason);

    var kickChannel = message.guild.channels.find("name", "straffen");
    if (!kickChannel) return message.guild.send("Het kanaal is niet gevonden");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick);

    return;

}

module.exports.help = {
    name: "kick"
}