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

    await (user.removeRole(muteRole.id));

    message.channel.send(`${user} is geunmuted`);

    // setTimeout(function () {

    //     user.removeRole(muteRole.id);

    //     message.channel.send(`${user} is geunmuted.`);

    // }, ms(muteTime));

}

module.exports.help = {
    name: "unmute"
}