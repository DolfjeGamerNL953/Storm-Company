const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("GamesNL Community Server Info")
        .setColor("#00f7ff")
        .setThumbnail(icon)
        .addField("Servernaam:", message.guild.name)
        .addField("U bent op deze server gekomen op:", message.member.joinedAt)
        .addField("Totaal members:", message.guild.memberCount)
        // .setFooter("**© 2019 StormCompany**");

    return message.channel.send(serverEmbed);

}


module.exports.help = {
    name: "serverinfo"
}