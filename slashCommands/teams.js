const { MessageEmbed } = require('discord.js');
const color = require('../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "teams",
      description: "get all the teams"
  },
  run: async (bot, interaction, Reply) => {
    axios.get(`https://api.gabirmotors.com/team/all`)
      .then(res => {
        let embed = new MessageEmbed();
        let size = 0;
        for (let k in res.data) {
          size++
        }
        embed.setTitle(`**Penny Arcade League | ${size} Teams**`);
        embed.setDescription(`Use \`/team [team abbr]\` to get a team's info (ex: /team gm)`)
        for (var prop in res.data) {
          embed.addField(`**${res.data[prop].name}\n[${res.data[prop].abbr}]**`, `${res.data[prop].drivers.length} Drivers`, true)
        }
        embed.setColor(color.gold);
        embed.setTimestamp();
        embed.setFooter(`Gabir Motors`);
        return Reply.sendEmbed(embed)
      })
  } 
}
