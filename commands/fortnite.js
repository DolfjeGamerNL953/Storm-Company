const discord = require("discord.js");
const apiKey = require("../key.json");
const fortNite = require("fortnite");

const ft = new fortNite(apiKey.key);

module.exports.run = async (bot, message, args) => {

    var userName = args[0];
    var platform = args[1] || "pc";

    ft.user(userName, platform).then(data => {

        console.log(data);

    }).catch(err => {

        console.log(err);
        message.channel.send("Geen gegevens gevonden");

    })

}

module.exports.help = {
    name: "fortnite"
}