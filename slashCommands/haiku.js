const { MessageEmbed } = require('discord.js');
const color = require('../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "haiku",
      description: "Get a random haiku"
  },
  run: async (interaction) => {
    axios.get(`https://api.gabirmotors.com/haikus`).then(haikus => {
      const id = Math.floor(Math.random() * haikus.data.length - 1)
      const randomHaiku = haikus.data[id]
      const hEmbed = new MessageEmbed();
      hEmbed.setDescription(`\`Haiku Number: ${id}\`\n\n${randomHaiku.haikuLines[0]}\n${randomHaiku.haikuLines[1]}\n${randomHaiku.haikuLines[2]}\n\n-${randomHaiku.name}`)
      hEmbed.setColor(color.orange);
      hEmbed.setTimestamp();
      hEmbed.setFooter(`Gabir Motors`);

      return interaction.reply({ embeds: [ hEmbed ] })
    })
  } 
}

