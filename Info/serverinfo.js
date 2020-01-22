const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

    var vertific = ['None', 'Low', 'Medium', 'High', 'Exetreme'];

    const embed = new discord.RichEmbed()
    .setDescription(`${message.guild.name}'s Info`)
    .setThumbnail(icon)
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL())
    .setTimestamp()
    .addField('**Server Name:**', message.guild.name, true)
    .addField('**Server ID', message.guild.id)
    .addField('**Server Owner:**', message.guild.owner.user)
    .addField('**Owner ID:**', message.guild.owner.id)
    .addField('**Members:**', message.guild.memberCount)
    .addField('**Channels:', `${message.guild.channels.filter(channel => channel.type === 'voice').size}` voice / `${message.guild.channels.filter(channel => channel.type === 'text').size} text`, true)
    .addField('**Verification Level:**', `${vertific[message.guild.veriFicationLevel]}`, true)
    .addField('**Server Region**', message.guild.region, true)
    .addField('**AFK Channel:**', message.guild.afkChannel, true)
    .addField('**Created:**', message.guild.createdAt, true)
    .setColor('RANDOM');
    message.channel.send(embed)

}


module.exports.help = {
    name: "serverinfo"
}