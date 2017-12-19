const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(MzkyNzMzMzAyODIzMzIxNjAw.DrrhXQ.biF97hnvmAtTUw0Ii8Hn5Fee3TU);
