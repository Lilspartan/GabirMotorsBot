module.exports = async (bot, message) => {
  console.log(`I'm in, ${bot.user.username}`);
  bot.user.setPresence({ activities: [{ name: '/nextrace' }, { name: '/teams'}] });
}