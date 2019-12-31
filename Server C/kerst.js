const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const subReddits = ["dankmeme", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    var memeembed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`Meme`)
    .setURL(`https://dagenaftellen.nl/${random}`);

    message.channel.send(memeembed);
}

module.exports.help = {
    name: "test"
}