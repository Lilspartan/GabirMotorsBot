const { readdirSync } = require("fs")

module.exports = (bot) => {
  const load = dirs => {
    const commands = readdirSync(`./${dirs}/`).filter(d => d.endsWith('.js'));
    for (let file of commands) {
      let pull = require(`../${dirs}/${file}`);
      bot.interactions.set(pull.config.name, pull);
    };
  };
  [
    "Interactions/Application Commands/Message Commands",
    "Interactions/Application Commands/Slash Commands",
    "Interactions/Application Commands/User Commands",
    "Interactions/Message Components/Button",
    "Interactions/Message Components/Dropdown",
  ].forEach(x => load(x));
};