const express = require('express');
const app = express();
var port = "3000";

app.get('/', (req, res) => {
  res.send('Gabir Motors Bot is Online!')
});

app.listen(port, console.log(`Server running at port: ${port}`));

// https://discord.com/api/oauth2/authorize?client_id=794002749486399499&permissions=260852542576&scope=applications.commands%20bot