const Discord = require('discord.js');
const Guild = require("discord.js")
const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Aogiri Tree On Top!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
); 

const client = new Discord.Client();

const prefix = '.'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
//THIS SRC WAS MADE BY Bling#9999 on discord.gg/freefollowers

client.on("ready", () =>{
    console.log(`kahootraid bot is online!`);
    client.user.setActivity('GHOUL', { type: 'STREAMING' });
 });

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'raid'){
        client.commands.get('raid').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args); 
    }
});

client.login(process.env.token);
