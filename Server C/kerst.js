const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const subReddits = ["Tel af", "Over", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    var memeembed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Meme`)
    .setURL(`https://dagenaftellen.nl/${random}`);

    message.channel.send(memeembed);
}

module.exports.help = {
    name: "test"
}