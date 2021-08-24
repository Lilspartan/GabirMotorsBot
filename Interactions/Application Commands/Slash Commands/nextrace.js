const { MessageEmbed } = require('discord.js');
const color = require('../../../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "nextrace",
      description: "Get info the next race"
  },
  run: async (interaction) => {
    axios.get(`https://api.gabirmotors.com/calendar`).then(res => {
      const calendar = res.data;
      const currentTime = Date.now().toString().slice(0, -3);
      var done = false;
      calendar.forEach(race => {
        //console.log(race)
        if (currentTime > race.timestamp + 25200) {

        } else if (!done) {
          done = true;
          const hEmbed = new MessageEmbed()
          hEmbed.setDescription(`**${race.date}**\n${race.track} - ${race.car.join(", ")}\n${race.tags.theme != null ? `Theme: ${race.tags.theme}` : ''}\n\n[View Full Version](https://gabirmotors.com/calendar#${race.timestamp}&from=GabirBot)`)
          hEmbed.setColor(color.red_light);
          hEmbed.setTimestamp();
          hEmbed.setFooter(`Gabir Motors`);

          return interaction.reply({ embeds: [ hEmbed ] })
        }
      })
    })
  } 
}

