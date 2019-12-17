const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("**StormCompany Team** \n\n **Eigenaar**: DolfjeGamerNL \n\n **Mede Eigenaar**: mastermaxim09 \n\n **Management**: \nDiscord Management: \n Team Management: \n\n **Medewerkers**: \nMedewerker: ? \n Medewerker: ? \nMedewerker: ? \n\n**Proef Medewerkers:** \n Proef Medewerker: GekkeBelg12 \n Proef Medewerker: ? \nProef Medewerker: ? \n\n**Storm Company Team**")
        .setColor("#00f7ff")
        .setThumbnail(botIcon)
        .addField("Laatst gewijzigd:", "24-10-2019")
        .addField("**© 2019 StormCompany**");

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "team"
}