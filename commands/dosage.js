const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');
const config = require('../config/config.json');
const axios = require('axios');

module.exports.run = async (Client, message, args) => {
    try {
        let response = await axios.get('http://tripbot.tripsit.me/api/tripsit/getDrug?name=' + args[1]);
        let jsonObj = response.data;
        let data = jsonObj.data[0].properties.dose;

        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#22ff0e')
            .setTitle('Dosages for ' + args[1])
            .setDescription(data)
            .setTimestamp();

        return message.author.send(exampleEmbed);
    } catch (err) {
        console.log(chalk.red("An error occured while fetching data from API.", chalk.blue.bold(err)));
    }
};

module.exports.help = {
    name: "dosage"
};

