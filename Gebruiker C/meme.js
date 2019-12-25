const discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {
    const subReddits = ["dankmeme", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    var memeembed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`Meme`)
    .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(memeembed);
}

module.exports.help = {
    name: "meme"
}