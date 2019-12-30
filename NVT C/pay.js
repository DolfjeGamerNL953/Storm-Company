const discord = require("discord.js");
const fs = require("fs");
let coins = require("../data/coins.json")

module.exports.run = async (bot, message, args) => {
    //!pay @isatisfied 59345

    if(!coins[message.author.id]){
        return message.reply("U heeft geen coins")
    }

    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if(!coins[pUser.id]){
        cooins[pUser.id] = {
            coins: 0
        };
    }

    let pCoins = coins[pUser.id].coins;
    let sCoins = coins[message.author.id].coins;

    if(sCoins < args[0]) return message.reply("Geen genoeg coins");

    coins[message.author.id] = {
        coins: sCoins - parseIbnt(args[1])
    };

    coins[pUser.id] = {
        coins: pCoins + parseInt(args[1])
    };

    message.channel.send(`${message.author} heeft gegeven ${pUser} ${args[1]} coins.`)

    fs.writeFile("../data/coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
    });


}

module.exports.help = {
    name: "pay"
}