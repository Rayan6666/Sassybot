const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');


//role timers are defined in MS. 1 second = 1000ms
module.exports.run = async (Client, message) => {
    message.delete(1000);

    if (message.member.roles.find(role => role.name === "Nodding 🌠")) {
        message.member.removeRole(message.member.roles.find(role => role.name === "Nodding"));
        return false;
    } else {
        message.member.addRole(message.guild.roles.find(role => role.name === "Nodding"));
        console.log(chalk.red(message.member.displayName, "Got the role:", chalk.blue("Nodding")));

        setTimeout( () => {
            message.member.removeRole(message.member.roles.find(role => role.name === "Nodding"));
            return message.channel.send(message.member.displayName + " is no longer nodding (Timer expired)").then(msg => {
                msg.delete(4000)
            });
        }, 28800000);
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#7d109d')
            .setTitle('Such intoxication ')
            .setDescription(message.member.displayName + " is now nodding.")
            .setTimestamp();

        return message.channel.send(exampleEmbed).then(msg => {
            msg.delete(4000)
        });
    }
};

module.exports.help = {
    name: "nodding"
};

