module.exports = async (bot, interaction) => {
  if (interaction.isCommand()) {
    let commandfile = bot.slashCommands.get(interaction.commandName)
    try {
      if (commandfile) commandfile.run(interaction); 
    } catch (e) {
      console.log(e)
    }
  } else {
    let commandfile = bot.messageComponents.get(interaction.commandName)
    try {
      if (commandfile) commandfile.run(interaction); 
    } catch (e) {
      console.log(e)
    }
  }
}