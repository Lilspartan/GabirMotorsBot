const axios = require('axios');

module.exports = {
  config: {
      name: "check",
      description: "Get a random quote"
  },
  run: async (interaction) => {
    var found = false
    axios.get(`https://api.gabirmotors.com/driver/${interaction.options.getString('number')}`).then(async (drivers) => {
      drivers.data.forEach(driver => {
        if (driver.car_number == interaction.options.getString('number')) {
          found = true
          return interaction.reply({ content: `${(driver.team != undefined) ? `**${driver.team.name}**` : ''} ${driver.name} ${(driver.username != "" && driver.username != undefined) ? `(${driver.username})` : ''} has already taken the number \`${driver.car_number}\``, ephemeral: true})
        }
      })
      if (!found) {
        return interaction.reply({ content: `According to my calculations, the number \`${interaction.options.getString('number')}\` is available!`, ephemeral: true})
      }
    })
  } 
}

