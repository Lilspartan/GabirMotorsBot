const { MessageEmbed } = require('discord.js');
const color = require('../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "opensubmissions",
      description: "Get info the next race"
  },
  run: async (interaction) => {
    axios.get(`https://api.gabirmotors.com/calendar`).then(res => {
      const calendar = res.data;
      const currentTime = Date.now().toString().slice(0, -3);
      var done = false;
      calendar.forEach(race => {
        //console.log(race)
        if (currentTime > race.timestamp) {

        } else if (!done) {
          done = true;
          const embed = new MessageEmbed()
          embed.setTitle(`It's That Time`)
          embed.setDescription(`<@&716476390782009345> I need a picture for a tweet but I'm too lazy to get one myself so I took the most logical path and did all this just so I didn't have to...\n\n**To Get Your Image Featured**\n\n1.Send a message with your twitter handle (or another link to something that represents you, twitch, youtube, etc.) and your best image of ${race.track} or ${race.car.join(", ")}\n\n2.Right click on the message, go to \`Apps\` and click on \`Submit Image\` and that's it!\n\n*Submissions will be open until Monday*`)
          embed.setColor(color.black);
          embed.setTimestamp();
          embed.setFooter(`Gabir Motors`);

          return interaction.reply({ embeds: [ embed ] })
        }
      })
    })
  } 
}

