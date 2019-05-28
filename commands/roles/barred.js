const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');


//role timers are defined in MS. 1 second = 1000ms
module.exports.run = async (Client, message) => {
    message.delete(1000);

    if (message.member.roles.find(role => role.name === "Barred🎭")) {
        message.member.removeRole(message.member.roles.find(role => role.name === "Barred🎭"));
        return false;
    } else {
        message.member.addRole(message.guild.roles.find(role => role.name === "Barred"));
        console.log(chalk.red(message.member.displayName, "Got the role:", chalk.blue("Barred")));

        setTimeout(() => {
            message.channel.send("Timer: removed role barred from" + " " + message.member.displayName).then(msg => {
                msg.delete(4000)
            });
            message.member.removeRole(message.member.roles.find(role => role.name === "Barred🎭🌛"))
        }, 43200000);
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#9d0082')
            .setTitle('Such intoxication ')
            .setDescription(message.member.displayName + " is now barred.")
            .setTimestamp();

        return message.channel.send(exampleEmbed).then(msg => {
            msg.delete(4000)
        });
    }
};
module.exports.help = {
    name: "barred"
};

