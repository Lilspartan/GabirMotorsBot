const { readdirSync } = require("fs")

module.exports = (bot) => {
  const load = dirs => {
    const commands = readdirSync(`./${dirs}/`).filter(d => d.endsWith('.js'));
    for (let file of commands) {
      let pull = require(`../${dirs}/${file}`);
      bot.messageComponents.set(pull.config.name, pull);
    };
  };
  ["messageComponents"].forEach(x => load(x));
};