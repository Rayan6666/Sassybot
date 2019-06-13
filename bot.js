const config = require('./config/config.json');
const discord = require('discord.js');
const fs = require('fs');
const Client = new discord.Client();
Client.commands = new discord.Collection();
try {

    Client.on('ready', async () => {
        console.log("Sassy 3.0 loaded, Instantiating command files..");
        var channel = Client.channels.get('253612214148136981');
        channel.send("Sassy has been restarted!").then(msg => {
            msg.delete(10000)
        });
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

        jsfile.forEach((f, i) => {
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

        if (message.guild === null) {
            return message.author.send("Fuck off you cunt");
        }

        if (messageArray[0].startsWith(`${config.prefix}slap`))
        {
            if (message.member.hasPermission("KICK_MEMBERS"))
            {
                try {
                    let target = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[2]);
                    if (target) {
                        await message.channel.send(target + " was slapped!", {
                            file: 'giphy.gif'
                        }).then(msg => {
                            msg.delete(25000);
                        });
                        return await target.addRole(message.guild.roles.find(role => role.name === "Muted"));
                    }
                } catch (e) {
                    return await console.log("An error occured while running slap!", chalk.red(e))
                }
            }
            return await message.author.send("You do not have permission to do this.");
        }

    });

    Client.on('disconnect', async (message) => {
        var channel = Client.channels.get('253612214148136981');
        try {
            channel.send("It appears that sassy has crashed, attempting to auto restart...");
            Client.destroy();
            Client.login(config.token);
        } catch (e) {
            console.log(e);
            process.exit(1);
        }
    });

    Client.login(config.token);

} catch (e) {
    return console.log(chalk.red("An error occured!", e))
}