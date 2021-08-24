const axios = require('axios');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1wNfhv7LcNfD9Kns-ZFhkdKeYCLznXjKU7t9yvWDLUso');

const init = async () => {
  await doc.useServiceAccountAuth(JSON.parse(process.env.GOOGLE_KEY));
}

init()

module.exports = {
  config: {
      name: "check",
      description: "Get a random quote"
  },
  run: async (interaction) => {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    await sheet.loadCells('A1:E500');

    numbers:
    for (i = 0; i < 500; i ++) {
      var testValue = sheet.getCell(i, 2).value
      if (testValue == null) {
        return interaction.reply({ content: `According to my calculations, the number \`${interaction.options.getString('number')}\` is available!`, ephemeral: true})
        break numbers
      } else if (testValue == interaction.options.getString('number')) {
        return interaction.reply({ content: `${sheet.getCell(i,1).value != null ? sheet.getCell(i,1).value : sheet.getCell(i,0).value} has already taken the number \`${testValue}\``, ephemeral: true})
        break numbers;
      }
    }
  } 
}

