const { MessageEmbed } = require('discord.js');
const color = require('../../../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "quote",
      description: "Get a random quote"
  },
  run: async (interaction) => {
    axios.get(`https://api.gabirmotors.com/quotes`).then(quotes => {
      const id = Math.floor(Math.random() * quotes.data.length - 1)
      const randomHaiku = quotes.data[id]
      const hEmbed = new MessageEmbed();
      hEmbed.setDescription(`\`Quote Number: ${id}\`\n\n${randomHaiku.quote}`)
      hEmbed.setColor(color.red_light);
      hEmbed.setTimestamp();
      hEmbed.setFooter(`Gabir Motors`);

      return interaction.reply({ embeds: [ hEmbed ] })
    })
  } 
}

