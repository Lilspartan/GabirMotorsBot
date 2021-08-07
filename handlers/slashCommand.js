const { readdirSync } = require("fs")

module.exports = (bot) => {
  const load = dirs => {
    const commands = readdirSync(`./${dirs}/`).filter(d => d.endsWith('.js'));
    for (let file of commands) {
      let pull = require(`../${dirs}/${file}`);
      bot.slashCommands.set(pull.config.name, pull);
    };
  };
  ["slashCommands"].forEach(x => load(x));
};