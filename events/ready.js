module.exports = (bot, Discord) => {

  console.log("bot ready");
  const fetch = require('node-fetch');
  const mysql = require('mysql');
  const {USER, DATABASE, MDP, PORT, HOST} = require('../db.json');
  const { players, info } = require("source-server-query");
  const query = require("source-server-query");
  let minute = 1, the_interval = minute * 20 * 1000;
  
      const db = mysql.createConnection({
        host: HOST,
        port: PORT,
        user: USER,
        password: MDP,
        database: DATABASE,
      })

  setInterval(async function() {    //every minute
    
    const server = await info('176.57.181.73', 29415, 2000).catch(console.log);
    bot.user.setActivity(server.playersnum + "/" + server.maxplayers);

    setTimeout(() => {
      bot.user.setActivity(server.name)
    }, 10000);

  }, the_interval);

}