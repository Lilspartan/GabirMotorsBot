const Discord = require('discord.js');
const color = require('../../../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "winner",
      description: "Toggle the winner role for a user"
  },
  run: async (interaction) => {
    let targetMember = interaction.options.getMember("user")
    
    if (targetMember.roles.cache.has("755253717250474015")) {
      targetMember.roles.remove("755253717250474015").catch(err => { console.log(err) })
    } else {
      targetMember.roles.add("755253717250474015").catch(err => { console.log(err) })
    }

    interaction.reply({ content: ":white_check_mark:", ephemeral: true })
  } 
}