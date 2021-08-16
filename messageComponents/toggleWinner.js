const Discord = require('discord.js');
const color = require('../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "Toggle Winner",
      description: "Toggle the winner role for a user"
  },
  run: async (interaction) => {
    try {
      let targetMember = interaction.options.getMember("user")

      if (targetMember.roles.cache.has("755253717250474015")) {
        targetMember.roles.remove("755253717250474015").catch(err => { console.log(err) })
      } else {
        targetMember.roles.add("755253717250474015").catch(err => { console.log(err) })
      }

      interaction.reply({ content: "Success!", ephemeral: true })
    } catch (e) {
      console.log(e)
      interaction.reply({ content: "There was an error, please try again later", ephemeral: true })
    }
  } 
}