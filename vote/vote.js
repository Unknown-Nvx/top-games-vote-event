module.exports = (vote, bot) => {

    const steamidChecker = require('steamid');
    const { vote_channel } = require('../config.json');

    const steamid64 = vote.content.split(' ')[0];

    if (!isNaN(steamid64) && vote.channel.id == vote_channel) {

        const steamid = new steamidChecker(steamid64);
        const isSteamidValid = steamid.isValid();

        if (isSteamidValid) //Db.addVote(steamid); # GIVE THE PLAYER A REWARD FOR HIS VOTE
    }

}
