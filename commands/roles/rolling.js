const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');


//role timers are defined in MS. 1 second = 1000ms
module.exports.run = async (Client, message) => {
    message.delete(1000);

    if (message.member.roles.find(role => role.name === "Rolling 💊")) {
        message.member.removeRole(message.member.roles.find(role => role.name === "Rolling💊"));
        return message.channel.send(message.member.displayName + " Is no longer rolling");
    } else {
        message.member.addRole(message.guild.roles.find(role => role.name === "Rolling"));
        console.log(chalk.red(message.member.displayName, "Got the role:", chalk.blue("Rolling")));

        setTimeout(() => {
            message.member.removeRole(message.member.roles.find(role => role.name === "Rolling"));
            return message.channels.send(message.member.displayName + " is no longer rolling!")
        }, 28800000);

        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#d77111')
            .setTitle('Such intoxication ')
            .setDescription(message.member.displayName + " is now rolling.")
            .setTimestamp();

        return message.channel.send(exampleEmbed).then(msg => {
            msg.delete(4000)
        });
    }
};
module.exports.help = {
    name: "rolling"
};

