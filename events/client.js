module.exports = async (bot, message) => {
  console.log(`I'm in, ${bot.user.username}`);
  bot.user.setActivity("/nextrace", {
    type: 'WATCHING'
  });
}
