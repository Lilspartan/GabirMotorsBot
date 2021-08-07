const { MessageEmbed } = require('discord.js');
const color = require('../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "driver",
      description: "Get a random quote"
  },
  run: async (interaction) => {
    var found = false
    var colors = await axios.get('https://i.gabirmotors.com/assets/teams/colors.json')
    colors = colors.data
    axios.get(`https://api.gabirmotors.com/driver/${interaction.options.getString('number')}`).then(async (drivers) => {
      drivers.data.forEach(driver => {
        if (driver.car_number == interaction.options.getString('number')) {
          found = true
          const hEmbed = new MessageEmbed();
          hEmbed.setTitle(`#${driver.car_number} ${driver.name} ${(driver.username != "" && driver.username != undefined) ? `(${driver.username})` : ''}`);
          hEmbed.setDescription(``)
          hEmbed.setColor((driver.team !== undefined ? colors[driver.team.abbr] : '#000'));
          hEmbed.setImage(`https://i.gabirmotors.com/assets/teams/${(driver.team !== undefined ? driver.team.abbr : 'LWP')}/main.png`)
          hEmbed.setTimestamp();
          hEmbed.setFooter(`Gabir Motors`);
          interaction.reply({ embeds: [ hEmbed ] })
        }
      })
      if (!found) {
        const hEmbed = new MessageEmbed();
        hEmbed.setTitle('No Driver With That Number Found');
        hEmbed.setDescription(`No driver with the number \`${interaction.options.getString("number")}\` was found, if this is an error then wait a little and try again later`)
        hEmbed.setColor(color.red_light);
        hEmbed.setTimestamp();
        hEmbed.setFooter(`Gabir Motors`);
        interaction.reply({ embeds: [ hEmbed ] })
      }
    })
  } 
}

