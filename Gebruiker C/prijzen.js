const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var prijzenEmbed = new discord.RichEmbed()
    .setTitle("Prijzen")
    .setDescription("Prijs Aantallen: \n Eten: Per 64, 32 of per stuk \n Vita: Per 16 of per stuk")
    .setColor("RANDOM")
    .addField("Prijzen Pakketen:", "Storm Vita Pakket: €10.927,70 \n Storm Pro Pakket: €4.700,00 \n Storm Fruit Pakket: €1.005,20 \n Storm Snoep Pakket: €944,60 \n Storm Overig Pakket: €729,20")
    .addField("Prijzen Eten:", "Golden appels: \n Per 64x: €1.016,80 \n Per 32x: €508,50 \n Per 1x: €15,90 \n\n Zalm: \n Per 64x: €754,20 \n Per 32x: €377,20 \n Per 1x: €11,80 \n\n Pizza: \n Per 64x: €754,20 \n Per 32x: €377,20 \n Per 1x: €11,80 \n\n Bacon: \n Per 64x: €653,20 \n Per 32x: €326,70 \n Per 1x: €10,20 \n\n Sushi: \n  \n Per 64x: €653,20 \n Per 32x: €326,70 \n Per 1x: €10,20 \n\n Ananas: \n Per 64x: €552,20 \n Per 32x: €276,20 \n Per 1x: €8,70 \n\n Hamburger: \n Per 64x: €451,20 \n Per 32x: €225,70 \n Per 1x: €7,10 \n\n Zuurstok: Per 64x: €451,20 \n Per 32x: €225,70 \n Per 1x: €7,10 \n\n Friet: \n Per 64x: €451,20 \n Per 32x: €225,70 \n Per 1x: €7,10 \n\n Boekjes: \n Per 64x: €316,60 \n Per 32x: €158,40 \n Per 1x: €5,00 \n\n Lolly rood: \n Per 64x: €249,20 \n Per 32x: €124,70 \n Per 1x: €4,00 \n\n Jellybeans: \n Per 64x: €249,20 \n Per 32x: €124,70 \n Per 1x: €4,00 \n\n Appel: \n Per 64x: €249,20 \n Per 32x: €124,70 \n Per 1x: €4,00 \n\n Water: \n Per 64x: €208,80 \n Per 32x: €104,50 \n Per 1x: €3,40 \n\n Flesjes: \n  Per 64x: €208,80 \n Per 32x: €104,50 \n Per 1x: €3,40")
    .setFooter("© 2019 StormCompany");

    message.channel.send(prijzenEmbed)
}

module.exports.help = {
    name: "prijzen"
}