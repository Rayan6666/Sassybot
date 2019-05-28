const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');


//role timers are defined in MS. 1 second = 1000ms
module.exports.run = async (Client, message) => {
    message.delete(1000);

    if (message.member.roles.find(role => role.name === "GABAergic")) {
        message.member.removeRole(message.member.roles.find(role => role.name === "GABAergic"));
        return message.channel.send(message.member.displayName + " is no longer GABAergic").then(msg => {
            msg.delete(4000)
        });
    } else {
        message.member.addRole(message.guild.roles.find(role => role.name === "GABAergic"));

        setTimeout(() => {
            if (message.member.roles.find(role => role.name === "GABAergic")) {
                message.member.removeRole(message.member.roles.find(role => role.name === "GABAergic"))
            } else {
                return console.log("Did not have to remove the role GABAergic from", message.member.displayName);
            }
        }, 28800000);
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#9d9523')
            .setTitle('Such intoxication ')
            .setDescription(message.member.displayName + " is now GABAergic")
            .setTimestamp();

        return message.channel.send(exampleEmbed).then(msg => {
            msg.delete(4000)
        });
    }
};
module.exports.help = {
    name: "gaba"
};

