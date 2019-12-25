const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.author.avatarURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("GamesNL Community User Info")
        .setColor("RANDOM")
        .setThumbnail(icon)
        .addField("Usernaam:", message.author.username)
        .addField("U bent op deze server gekomen op:", message.member.joinedAt)
        .setFooter("**© 2019 StormCompany**");

    return message.channel.send(serverEmbed);

}


module.exports.help = {
    name: "userinfo"
}