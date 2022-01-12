# discord-bot-skeleton
Basic code to create a discord.js Bot, with messages, events and commands handlers.

**`✅ updated to discord.js v13`**
___
# install

- Run `npm i` to install packages.

- Set your [Bot token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) in `config.json` :
 ```json
  "token": "PUT_TOKEN_HERE"
  ```
  **open** `index.js` at the end :
 ```javascript
  bot.login(process.env.TOKEN);
  ```
  and **replace by** :
   ```javascript
  bot.login(token);
  ```
  
 **note:** you can also let by default and set your token in `.env` as `TOKEN` [environmennt variable](https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs).
