const Discord = require('discord.js');
const color = require('../JSON/colors.json');
const axios = require('axios');
const fs = require('fs')

module.exports = {
  config: {
      name: "Submit Image",
      description: "Toggle the winner role for a user"
  },
  run: async (interaction) => {
    var intMessage = interaction.options.getMessage('message');
    var doAdd = true;

    var submissionObject = {
      interactionUserId: interaction.user.id,
      messageUser: intMessage.author.id,
      messageId: intMessage.id,
      messageContent: intMessage.content,
      attachments: Array.from(intMessage.attachments.values()).map((a) => {
        return {
          link: a.attachment
        }
      })
    }
    
    if (submissionObject.interactionUserId === submissionObject.messageUser) {
      var submissions = await fs.readFileSync('./JSON/submittedImages.json', 'utf8');
      submissions = JSON.parse(submissions)
      submissions.forEach(s => {
        if (s.messageId === submissionObject.messageId) {
          doAdd = false
          interaction.reply({ content: "This image has already been submitted", ephemeral: true })
        }
      })

      if (!submissionObject.attachments.length) {
        doAdd = false
        interaction.reply({ content: "Submission must contain an image", ephemeral: true })
      }

      if (doAdd) {
        submissions.push(submissionObject)
        await fs.writeFileSync('./JSON/submittedImages.json', JSON.stringify(submissions, null, 4))
        interaction.reply({ content: "Submission Recieved!", ephemeral: true })
      }
    } else {
      interaction.reply({ content: "Only the person that sent this image can submit it", ephemeral: true })
    }
  } 
}