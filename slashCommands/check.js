const axios = require('axios');

module.exports = {
  config: {
      name: "check",
      description: "Get a random quote"
  },
  run: async (bot, interaction, Reply) => {
    axios.get(`https://api.gabirmotors.com/driver/${interaction.data.options[0].value}`).then(async (drivers) => {
      let targetMember = bot.users.cache.get(interaction.member.user.id);
      drivers.data.forEach(driver => {
        if (driver.car_number == interaction.data.options[0].value) {
          return Reply.sendText(`${(driver.team != undefined) ? `**${driver.team.name}**` : ''} ${driver.name} ${(driver.username != "" && driver.username != undefined) ? `(${driver.username})` : ''} has already taken the number \`${driver.car_number}\``, true)
        }
      })
      return Reply.sendText(`According to my calculations, the number \`${interaction.data.options[0].value}\` is available!`, true)
    })
  } 
}

