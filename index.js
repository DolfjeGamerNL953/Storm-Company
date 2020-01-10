const discord = require("discord.js");
const botconfig = require("./botconfig.json");
const levelFile = require("./data/levels.json");
const coins = require("./data/coins.json");
const prefix = '!';
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
 
fs.readdir("./Help C/", (err, files) => {
 
    if (err) console.log(err);
 
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
 
    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }
 
    jsFiles.forEach((f, i) => {
 
        var fileGet = require(`./Help C/${f}`);
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
 
    bot.user.setActivity("Storm Developing (Prefix: !)", { type: "PLAYING" });
 
    answered = true;
    cAnswer = "";
    userAnswer = "";
});
 
 
bot.on("guildMemberAdd", member => {
 
    var role = member.guild.roles.find("name", "Klant");
 
    if (!role) console.log("Deze rol bestaat niet");
 
    member.addRole(role);
 
    const channel = member.guild.channels.find("name", "🌐-welkomers");
 
    if (!channel) console.log("Kan welkom kanaal niet vinden")
 
    // channel.send(`Welkom ${member} bij de StormComp community lees even de regels door`)
 
    var joinEmbed = new discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setDescription(`Welkom ${member} bij de StormComp community lees even de regels door`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("Gebruiker binnengekomen.")
    .setFooter("© 2019 StormCompany");

    channel.send(joinEmbed);

});
 
 
// var swearWords = ["gvd", "kkr", "tyfus", "hoer", "slet", "kanker", "jood", "bitch", "klootzak", "mof", "pedo", "pedofiel"];
 
bot.on("message", async message => {
 
    // Als bot bericht stuurt stuur dan return
    if (message.author.bot) return;
 
    if (message.channel.type === "dm") return;
 
    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));
 
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.i] = {
            prefixes: botconfig.prefix
        };
    }
 
    // var prefix = prefixes[message.guild.id].prefixes;
 
 
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
 
    if( xpUser >= nextLevelXp) {
 
        levelFile[idUser].level += 1;
 
        fs.writeFile("./data/levels.json", JSON.stringify(levelFile), err => {
 
            if(err) console.log(err);
 
        }); 
 
        var logo = bot.user.displayAvatarURL;
 
        var embedLevel = new discord.RichEmbed()
        .setDescription("***Level hoger***")
        .setColor("RANDOM")
        .setThumbnail(logo)
        .addField("Nieuw level: ", levelFile[idUser].level)
        .setFooter("© 2019 StormCompany");
 
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

          // Help
          if (msg.startsWith(prefix + 'HELP')) {

            if (msg === `${prefix}HELP`) {

              // Start of the embed
                const embed = new Discord.RichEmbed()
                    .setColor(0x1D82B6)

                //Variables
                let commandsFound = 0; // We also want to tell them how many commands there are for that specific group

                //  Lets creatte the for loop that loops through the commands
                for (var cmd in commands) {


                    // Checks if the group is 'users' - and recplace type with group
                    if (commands[cmd].group.toUpperCase() === 'USER') {
                        // Lets also count commandsFound + 1 every time it finds a command in the group
                        commandsFound++
                        // Lets add the command field to the embed
                        embed.addField(`${commands[cmd].name}`, `**Description:** ${commands[cmd].desc}\n**Usage:** ${prefix + commands[cmd].usage}`);
                    }

                }

                // Add some more to the embed - we need to move that out of the for loop.
                embed.setFooter(`Currently showing user commands. To view another group do ${prefix}help [group / command]`)
                embed.setDescription(`**${commandsFound} commands found** - <> means required, [] means optional`);
                // We can output it two ways 1. Send to DMs and tell them that they sent to DMs in chat. 2. Post commands in chat [since commands]
                message.author.send({embed})
                // Post in chat they sent to DMs
                message.channel.send({embed: {
                        color: 0x1D82B6,
                        description: `**Check your DMs ${message.author}!**`
                }})

                //.
                //.

                //.

            } else if (args.join(" ").toUpperCase() === 'GROUPS') {

              // Variables
              let groups = '';

              for (var cmd in commands) {
                if (!groups.includes(commands[cmd].group)) {
                  groups += `${commands[cmd].group}\n`
                }
              }

              message.channel.send({embed: {
                      description:`**${groups}**`,
                      title:"Groups",
                      color: 0x1D82B6

              }})

              return; // Testing!

            } else {
              // Now, lets do something when they do help [cmd / group] - You can use copy and paste for a lot of this part

              //Variables
              let groupFound = '';

              for (var cmd in commands) { // This will see if their is a group named after what the user entered

                if (args.join(" ").trim().toUpperCase() === commands[cmd].group.toUpperCase()) {
                  groupFound = commands[cmd].group.toUpperCase(); // Lets set the group found, then break out af the loop.
                  break;
                }

              }

              if (groupFound != '') { // If a group is found, run this statement.

                // Start of the embed
                  const embed = new Discord.RichEmbed()
                      .setColor(0x1D82B6) // You can set this color to whatever you want.

                  //Variables
                  let commandsFound = 0; // We also want to tell them how many commands there are for that specific group

                for (var cmd in commands) { // We can use copy and paste again


                    // Checks if the group is 'users' - and recplace type with group
                    if (commands[cmd].group.toUpperCase() === groupFound) {
                        // Lets also count commandsFound + 1 every time it finds a command in the group
                        commandsFound++
                        // Lets add the command field to the embed
                        embed.addField(`${commands[cmd].name}`, `**Description:** ${commands[cmd].desc}\n**Usage:** ${prefix + commands[cmd].usage}`);
                    }

                }

                // Add some more to the embed - we need to move that out of the for loop.
                embed.setFooter(`Currently showing ${groupFound} commands. To view another group do ${prefix}help [group / command]`)
                embed.setDescription(`**${commandsFound} commands found** - <> means required, [] means optional`);
                //.
                message.author.send({embed})
                //.
                message.channel.send({embed: {
                        color: 0x1D82B6,
                        description: `**Check your DMs ${message.author}!**`
                }})

                // Make sure you copy and paste into the right place, lets test it now!
                return; // We want to make sure we return so it doesnt run the rest of the script after it finds a group! Lets test it!

                // Now lets show groups.
              }

              // Although, if a group is not found, lets see if it is a commands

              // Variables
              let commandFound = '';
              let commandDesc = '';
              let commandUsage = '';
              let commandGroup = '';

              for (var cmd in commands) { // Copy and paste

                  if (args.join(" ").trim().toUpperCase() === commands[cmd].name.toUpperCase()) {
                    commandFound = commands[cmd].name; // Lets change this so it doesnt make it go uppcase
                    commandDesc = commands[cmd].desc;
                    commandUsage = commands[cmd].usage;
                    commandGroup = commands[cmd].group
                    break;
                  }


              }

              // Lets post in chat if nothing is found!
              if (commandFound === '') {
                message.channel.send({embed: {
                        description:`**No group or command found titled \`${args.join(" ")}\`**`,
                        color: 0x1D82B6,

                }})
              }

              // Since this one is smaller, lets send the embed differently
              message.channel.send({embed: {
                      title:'<> means required, [] means optional',
                      color: 0x1D82B6,
                      fields: [{
                        name:commandFound,
                        value:`**Description:** ${commandDesc}\n**Usage:** ${commandUsage}\n**Group:** {commandGroup}`
                      }]
              }})


}

}
 
    }
 
    

        
    
    
});
    
 
bot.login(process.env.token);
