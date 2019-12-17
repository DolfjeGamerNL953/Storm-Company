const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("GamesNL Manager Bot Info")
        .setColor("#00f7ff")
        .setThumbnail(botIcon)
        .addField("Bot naam", bot.user.username)
        .addField("Gemaakt op", "17-12-2019")
        .addField("Gemaakt door", "DolfjeGamerNL")
        .addField("**© 2019 StormCompany**");

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}