module.exports = async (bot, message) => {
  console.log(`I'm in, ${bot.user.username}`);
  bot.user.setPresence({ activities: [{ name: 'Try out slash commands! Type \'/\' to get started!' }] });
}