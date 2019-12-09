const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var buggEmbed = new discord.RichEmbed()
    .setDescription("**Muziek Buggs**")
    .setColor("#ff0000")
    .setThumbnail(botIcon)
    .addField("Hier komen de gemelde buggs te staan met een eventuele oplossing", "Geen buggs gemeld")
    .addField("Laatst gewijzigt op:", "25-10-2019")
    
    return message.channel.send(buggEmbed);

}

module.exports.help = {
    name: "buggs"
}