const SteamUser = require('steam-user');
const config = require('./config.json')
const client = new SteamUser();

const logOnOptions = {
    // Enter Your AccountName And Password In The Config.json File
    accountName: 'config.username',
    password: 'config.password'
};

client.logOn(logOnOptions);
client.on('loggedOn', ()=> {
    console.log('successfully logged on.')
    client.setPersona(SteamUser.Steam.EpersonaState.Away)
});