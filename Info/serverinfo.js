const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

    var vertific = ['None', 'Low', 'Medium', 'High', 'Exetreme'];

    const embed = new discord.RichEmbed()
    .setDescription(`${message.guild.name}'s Info`)
    .setThumbnail(icon)

    message.channel.send(embed)

}


module.exports.help = {
    name: "serverinfo"
}