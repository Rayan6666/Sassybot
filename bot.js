const config = require('./config/config.json');
const discord = require('discord.js');
const fs = require('fs');
const Client = new discord.Client();
Client.commands = new discord.Collection();

Client.on('ready', async () => {
    console.log("Sassy 3.0 loaded, Instantiating command files..");
});

fs.readdir("./commands/", (err, files) => {

    if(err){
        console.log(err);
    }

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Couldn't find commands. Killing bot");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        Client.commands.set(props.help.name, props);
    });

});

fs.readdir("./commands/roles/", (err, files) => {

    if(err){
        console.log(err);
    }

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Couldn't find roles. Killing bot");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/roles/${f}`);
        console.log(`${f} loaded!`);
        Client.commands.set(props.help.name, props);
    });

});


Client.on('message', async (message) => {
    const prefix = config.prefix;
    const messageArray = message.content.split(" ");
    const command = messageArray[0];
    const argument = message.content.slice(prefix.length).split(' ');
    var server = message.guild.id;
    var memberCount = Client.guilds.get(server).memberCount;
    console.log(memberCount, server);

    let commandfile = Client.commands.get(command.slice(config.prefix.length));
    if(commandfile) commandfile.run(Client, message, argument);
});

Client.login(config.token);
