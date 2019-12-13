const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const active = new Map();

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./Gebruiker C/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./Gebruiker C/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

})

fs.readdir("./Bot C/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./Bot C/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

})

fs.readdir("./Server C/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./Server C/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

})

fs.readdir("./Game C/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./Game C/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

})

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`);

    bot.user.setActivity("GamesNL Developing", { type: "PLAYING" });

});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "Bezoeker");

    if (!role) return message.channel.send("Deze rol bestaat niet");

    member.addRole(role);

    const channel = member.guild.channels.find("name", "welkom");

    if (!channel) return;

    channel.send(`Welkom ${member} bij de GamesNL community lees even de regels door`)

});


// var swearWords = ["gvd", "kkr", "tyfus", "hoer", "slet", "kanker", "jood", "bitch", "klootzak", "mof", "pedo", "pedofiel"];

bot.on("message", async message => {

    // Als bot bericht stuurt stuur dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.i] = {
            prefixes: botConfig.prefix
        };
    }

    // var prefix = prefixes[message.guild.id].prefixes;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var args = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));


    var options = {

        active: active

    }

    if (commands) commands.run(bot, message, args, options);


    // var msg = message.content.toLowerCase();

    // for (var i = 0; i < swearWords.length; i++) {

    //     if (msg.includes(swearWords[i])) {

    //         message.delete();

    //         return message.channel.send("Gelieve niet te schelden").then(msg => msg.delete(3000));

    //     }

    // }


    // var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

    // var msg = message.content.toLowerCase();

    // for (var i = 0; i < swearWords["vloekwoorden"].length; i++) {

    //     if (msg.includes(swearWords["vloekwoorden"][i])) {

    //         message.delete();

    //         return message.channel.send("Gelieve niet te schelden").then(msg => msg.delete(3000));

    //     }

    // }


    if (!commands) {

        var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

        var sentenceUser = "";

        var amountSwearWords = 0;

        for (var y = 0; y < messageArray.length; y++) {

            var changeWord = "";

            for (var i = 0; i < swearWords["vloekwoorden"].length; i++) {

                var word = messageArray[y].toLowerCase();

                if (word == swearWords["vloekwoorden"][i]) {

                    changeWord = word.replace(swearWords["vloekwoorden"][i], "****");

                    sentenceUser = sentenceUser + " " + changeWord;

                    amountSwearWords++;

                }

            }

            if (!changeWord) {

                sentenceUser = sentenceUser + " " + messageArray[y];

            }

        }

        if (amountSwearWords != 0) {

            message.delete();
            message.channel.send(sentenceUser);
            message.channel.send(message.author + " Gelieve niet te schelden");

        }

    }

});

bot.login(process.env.token);