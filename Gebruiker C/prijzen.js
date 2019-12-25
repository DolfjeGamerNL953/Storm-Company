const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var prijzenEmbed = new discord.RichEmbed()
    .setTitle("Prijzen")
    .setDescription("Prijs Aantallen: \n Eten: Per 64, 32 of per stuk \n Vita: Per 16 of per stuk")
    .setColor("RANDOM")
    .addField("Prijzen Pakketen:", "Storm Vita Pakket: €10.927,70 \n Storm Pro Pakket: €4.700,00 \n Storm Fruit Pakket: €1.005,20 \n Storm Snoep Pakket: €944,60 \n Storm Overig Pakket: €729,20")
    .addField("Prijzen Eten:", "Lolly rood: \n Per 64: €249,20 \n Per 32: €124,70 \n Per stuk: €4,00 \n Jellybeans: \n Per 64: €249,20 \n Per 32: €124,70 \n Per stuk: €4,00 \n\n Zuurstok: \n Per 64: €451,20 \n Per 32: €225,70 \n Per stuk: €7,10")
    .setFooter("© 2019 StormCompany");

    message.channel.send(prijzenEmbed)
}

module.exports.help = {
    name: "prijzen"
}