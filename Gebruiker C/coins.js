const discord = require("discord.js")
const coins = require("../data/coins.json")

module.exports.run = async (bot, message, args) => {
    //!coins
    if(!coins[message.author.id]){
        coins[message.author.id] ={
            coins: 0
        };
    }

    let uCoins = coins[message.author.id].coins;

    let coinEmbed = new discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#00ff00")
    .addField("💰", uCoins);

    message.channel.send(coinEmbed).then(msg => {msg.delete(60000)});
}

module.exports.help = {
    name: "coins"
}