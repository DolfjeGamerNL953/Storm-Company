const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const levelFile = require("./data/levels.json");
const coins = require("./data/coins.json");

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

fs.readdir("./Admin C/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./Admin C/${f}`);
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

    var role = member.guild.roles.find("name", "klant");

    if (!role) return message.channel.send("Deze rol bestaat niet");

    member.addRole(role);

    const channel = member.guild.channels.find("name", "🌐-welkomers");

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


    var randomxP = Math.floor(Math.random(1) * 15 + 1);

    var idUser = message.author.id;

    if(!levelFile[idUser]){

        levelFile[idUser] = {

            xp: 0,
            level: 0

        }

    }

    levelFile[idUser].xp += randomxP;

    var levelUser = levelFile[idUser].level;
    var xpUser = levelFile[idUser].xp;
    var nextLevelXp = levelUser * 500;

    if(nextLevelXp === 0) nextLevelXp = 100;

    if( xpUser >= nextLevelXp){

        levelFile[idUser].level += 1;

        fs.writeFile("./data/levels.json", JSON.stringify(levelFile), err => {

            if(err) console.log(err);

        });

        var logo = bot.user.displayAvatarURL;

        var embedLevel = new discord.RichEmbed()
        .setDescription("***Level hoger***")
        .setColor("#00eeff")
        .setThumbnail(logo)
        .addField("Nieuw level: ", levelFile[idUser].level)

        message.channel.send(embedLevel);

    }


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

    // if(!coins[message.author.id]){
    //     coins[message.author.id] = {
    //         coins: 0
    //     };
    // }

    // let coinAmt = Math.floor(Math.random()) * 15 + 1;
    // let baseAmt = Math.floor(Math.random()) * 15 + 1;
    // console.log(`${coinAmt} ; ${baseAmt}`);

    // if(coinAmt === baseAmt){
    //     coins[message.author.id] = {
    //         coins: coins[message.author.id].coins + coinAmt
    //     };
    //     fs.writeFile("../data/coins.json", JSON.stringify(coins), (err) => {
    //         if (err) console.log(err)
    //     });
    //     let coinEmbed = new discord.RichEmbed()
    //     .setAuthor(message.author.username)
    //     .setColor("#000000ff")
    //     .addField("💰", `${coinAmt} coins toegevoegd`);

    //     message.channel.send(coinEmbed).then(msg => {msg.delete(60000)})
    // }

});


bot.login(process.env.token);