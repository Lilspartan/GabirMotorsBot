const { MessageEmbed } = require('discord.js');
const color = require('../../../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "test",
      description: "Get a random haiku"
  },
  run: async (interaction) => {
    var embed = new MessageEmbed();
    embed.setTitle(`Test`)
    embed.setDescription(`Test Embed`)
    embed.setColor(color.black);
    embed.setTimestamp();
    embed.setFooter(`Gabir Motors`);
    interaction.reply({
      embeds: [
        embed
      ],
      components: [
        {
            type: 1,
            components: [
                {
                    type: 2,
                    label: "Yes",
                    style: 3,
                    custom_id: "confirm"
                },
                {
                    type: 2,
                    label: "No",
                    style: 4,
                    custom_id: "deny"
                }
            ]

        }
      ]
    })
  } 
}

