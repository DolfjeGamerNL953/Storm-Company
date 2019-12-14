const discord = require("discord.js");

module.exports.run = async (bot, message, args, member) => {
    var role = member.guild.roles.find("name", "klant");

    if (!role) return message.channel.send("Deze rol bestaat niet");

    member.addRole(role);

}


module.exports.help = {
    name: "klant"
}
