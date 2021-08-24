module.exports = async (bot, interaction) => {
  //console.log(interaction)
  let commandfile = bot.interactions.get(interaction.commandName)

  try {
    if (commandfile) commandfile.run(interaction); 
  } catch (e) {
    console.log(e)
  }
}