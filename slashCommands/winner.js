const Discord = require('discord.js');
const color = require('../JSON/colors.json');
const axios = require('axios');

module.exports = {
  config: {
      name: "winner",
      description: "Toggle the winner role for a user"
  },
  run: async (bot, interaction, Reply) => {
    let targetID = interaction.data.resolved.users[Object.keys(interaction.data.resolved.users)[0]].id;
    let targetGuild = bot.guilds.cache.get("715683569959174215")
    let targetMember = await targetGuild.members.fetch(targetID);
    
    if (targetMember.roles.cache.has("755253717250474015")) {
      targetMember.roles.remove("755253717250474015").catch(err => { console.log(err) })
    } else {
      targetMember.roles.add("755253717250474015").catch(err => { console.log(err) })
    }

    Reply.sendText(":white_check_mark:", true)
  } 
}
