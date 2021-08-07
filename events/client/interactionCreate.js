module.exports = async (bot, interaction) => {
  if (!interaction.isCommand()) return;
  let commandfile = bot.slashCommands.get(interaction.commandName)
  try {
    if (commandfile) commandfile.run(interaction); 
  } catch (e) {
    console.log(e)
  }
}