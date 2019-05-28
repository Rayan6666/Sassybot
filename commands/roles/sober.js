const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');


//role timers are defined in MS. 1 second = 1000ms
module.exports.run = async (Client, message) => {
    message.delete(1000);

    let roles, array = [
        'Blazed', 'Tripping🌈', 'Rolling💊', 'Nodding🌠🌠', 'Stimmed🔋', 'Dissod💫', 'Delirious👥',
        'Barred🎭', 'GABAergic', 'Drunk', 'Comedown '
    ];
    for (roles of array) {
        if (message.member.roles.find(role => role.name === roles)) {
            message.member.removeRole(message.member.roles.find(role => role.name === roles));
        } else {
            console.log("Role", roles, "Not deleted. Because", message.member.displayName, "did not have it.");
        }
    }
    return message.channel.send("You're now sober" + " " + message.member.displayName).then(msg => {
        msg.delete(4000)
    });
};
module.exports.help = {
    name: "sober"
};

