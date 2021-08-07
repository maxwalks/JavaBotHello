const Discord= require('discord.js');
const client = new Discord.Client({ intents: ['GUILD_MESSAGES', 'GUILDS'] });
const prefix = '.';

client.on('ready', ()=> {
    console.log('Bot is ready!')
})

client.on('message', message =>{
    if(message.content === '.ping') {
        message.reply('Pong!')
    }
})

client.on('message', message => {
    if(message.content.includes('javabot')) {
        message.reply("That's me!");
    }
})

client.login(process.env.TOKEN);