const { Client, Collection, MessageEmbed, Intents } = require('discord.js');
const keep_alive = require('./keep_alive.js');
const token = process.env.TOKEN;
const bot = new Client({ disableEveryone: true, intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const disbut = require('discord-buttons');
disbut(bot);

function Reply(bot, interaction) {
  this.bot = bot;
  this.interaction = interaction;

  this.sendText = function(message, ephemeral) {
    bot.api.interactions(interaction.id, interaction.token).callback.post({data: {
      type: 4,
      data: {
        content: message,
        flags: (ephemeral ? 64 : 1)
      }
    }})
  },
  this.sendEmbed = function (message, ephemeral) {
    bot.api.interactions(interaction.id, interaction.token).callback.post({data: {
      type: 4,
      data: {
        embeds: [
          message
        ],
        flags: (ephemeral ? 64 : 1)
      }
    }})
  },
  this.sendTextExt = function(message, options) {
    bot.api.interactions(interaction.id, interaction.token).callback.post({data: {
      type: 4,
      data: {
        content: message,
        ...options
      }
    }})
  }
}

bot.ws.on('INTERACTION_CREATE', async interaction => {
  let commandfile = bot.slashCommands.get(interaction.data.name)
  try {
    var IntReply = new Reply(bot, interaction)
    if (commandfile) commandfile.run(bot, interaction, IntReply); 
  } catch (e) {
    console.log(e)
  }
});

['slashCommands'].forEach(x => (bot[x] = new Collection()));
['event', 'slashCommand'].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(token);
