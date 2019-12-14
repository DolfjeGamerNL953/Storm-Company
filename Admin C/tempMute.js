const discord = require("discord.js");
const ms = require("ms")

module.exports.run = async (bot, message, args) => {

    // !tempmute gebruiker 1h

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("U heeft hier geen permissies voor");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Geef een gebruiker op of de gebruiker is niet op deze server");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("De persoon kan u niet muten.");

    var muteRole = message.guild.roles.find("name", "muted");

    if (!muteRole) return message.channel.send("De role muted bestaat niet");

    var muteTime = args[1];

    if (!muteTime) return message.channel.send("Geef een tijd mee");

    await (user.addRole(muteRole.id));

    var mutetext = (`${user} is gemuted voor ${muteTime}`);
    var mutelogchannel = message.guild.channels.find("name", "mute-logs");
    if (!mutelogchannel) return message.guild.send("Het kanaal is niet gevonden");
    mutelogchannel.send(mutetext);

    setTimeout(function () {

        user.removeRole(muteRole.id);

        message.channel.send(`${user} is geunmuted.`);

    }, ms(muteTime));

}

module.exports.help = {
    name: "tempmute"
}