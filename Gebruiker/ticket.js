const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    message.channel.send("**Tijdelijk Uitgeschakeld** maak nu een ticket aan door middel van -ticket en dan ziet u een verder help menu!")
    // var prefix = '!'

    // if (!args[0]) return message.channel.send(`Gebruik: ${prefix}ticket <reden>.`);

    // var reason = args.join(" ").slice(22);
 
    // // ID van de categorie van de tickets.
    // const categoryId = "651114524149022730";
 
    // // Verkrijg Gebruikersnaam
    // var userName = message.author.username;
    // // Verkrijg discriminator
    // var userDiscriminator = message.author.discriminator;
 
    // // Als ticket al gemaakt is
    // var bool = false;
 
    // // Kijk na als ticket al gemaakt is.
    // message.guild.channels.forEach((channel) => {
 
    //     // Als ticket is gemaakt, zend bericht.
    //     if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
    //         message.channel.send("Je hebt al een ticket aangemaakt");
 
    //         bool = true;

    //     }
 
    // });
 
    // // Als ticket return code.
    // if (bool == true) return;
 
    // var embedCreateTicket = new discord.RichEmbed()
    // .setDescription("Ticket")
    // .setTitle("Hai," + message.author.username)
    // .setFooter("Support kanaal is aangemaakt")
    // .setColor("RANDOM");
 
    // message.channel.send(embedCreateTicket);

    
    // var embedCreateTicketlog = new discord.RichEmbed()
    // .setDescription("Ticket")
    // .setTitle("Hai," + message.author.username)
    // .setFooter("Support kanaal is aangemaakt")
    // .setColor("#00eeff")
    // .addField("**© 2019 StormCompany**");

 
    //     var Ticketlogchannel = message.guild.channels.find("name", "ticket-logs");
    //     if (!Ticketlogchannel) return message.guild.send("Het kanaal is niet gevonden");
    //     Ticketlogchannel.send(embedCreateTicketlog);

    // // Maak kanaal en zet in juiste categorie.
    // message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal
 
    //     createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.
 
    //         // Zet perms voor iedereen
    //         settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
    //         // Zet perms voor de gebruiker die ticket heeft aangemaakt.
    //         settedParent.overwritePermissions(message.author, {
 
    //             "READ_MESSAGES": true, "SEND_MESSAGES": true,
    //             "ATTACH_FILES": true, "CONNECT": true,
    //             "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
    //         });
 
    //         var embedParent = new discord.RichEmbed()
    //             .setTitle("Hoi, " + message.author.username.toString())
    //             .setDescription("Zet hier je vraag/bericht")
    //             .setColor('RANDOM')
    //             .addField("Reden", reason);
 
    //         settedParent.send(embedParent);
    //     }).catch(err => {
    //         message.channel.send("Er is iets fout gelopen.");
    //     });
 
    // }).catch(err => {
    //     message.channel.send("Er is iets fout gelopen.");
    // });
 
}
 
module.exports.help = {
    name: "ticket",
    description: "Maak een ticket aan"
}