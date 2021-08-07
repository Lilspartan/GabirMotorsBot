const { Client, Collection, MessageEmbed, Intents } = require('discord.js');
const keep_alive = require('./keep_alive.js');
const token = process.env.TOKEN;
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

['slashCommands'].forEach(x => (bot[x] = new Collection()));
['event', 'slashCommand'].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(token);
