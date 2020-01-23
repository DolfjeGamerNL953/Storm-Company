const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription(`${message.guild.name}'s Server Info`)
        .setThumbnail(icon)
        .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL())

    return message.channel.send(serverEmbed);

}


module.exports.help = {
    name: "serverinfo"
}