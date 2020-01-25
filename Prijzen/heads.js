const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL

    var prijzenEmbed = new discord.RichEmbed()
    .setTitle("Prijzen")
    .setDescription("Prijs Aantallen: \n Heads: Per 16 of per stuk")
    .setColor("RANDOM")
    .setThumbnail(icon)
    .addField("Prijzen Heads", "Panda head: \n Per 16x: €227,30 \n Per 1x: €14,30 \n\n Blaze head: \n Per 16x €202,00 \n Per 1x: €12,70 \n\n Romeo30 Head: \n Per 16x: €161,60 \n Per 1x €10,10 \n\n Jordystorm Head:  Per 16x: €161,60 \n Per 1x €10,10")
    .setFooter("© 2019 StormCompany");

    message.channel.send(prijzenEmbed)
}

module.exports.help = {
    name: "heads"
}