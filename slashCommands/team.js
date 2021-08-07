const { MessageEmbed } = require('discord.js');
const color = require('../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "team",
      description: "Get info about a team"
  },
  run: async (interaction) => {
    chosenOption = interaction.options.getString('team')
    axios.get(`https://api.gabirmotors.com/team/${chosenOption}`)
    .then(res => {
      let embed = new MessageEmbed();
      embed.setTitle(`**${res.data.name} | ${res.data.drivers.length} Drivers**`);
      embed.setDescription(`Team Leader: \`${res.data.team_leader}\`\n\n[View web version](https://gabirmotors.com/teams/${res.data.abbr})\n**Drivers: **\n`)
      res.data.drivers.forEach(d => {
        embed.addField(`**${d.name} ${(d.username != undefined ? "(" + d.username + ")" : "")}**`, `Car No. - \`${(d.car_number != -1) ? d.car_number : "N/A"}\``, true)
      })
      if (res.data.logo != undefined) embed.setImage(res.data.logo)
      embed.setColor(color.gold);
      embed.setTimestamp();
      embed.setFooter(`Gabir Motors`);
      return interaction.reply({ embeds: [ embed ] })
    })
  } 
}

