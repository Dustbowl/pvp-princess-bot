import { Client, IntentsBitField } from 'discord.js';
import { getRandomJob } from './services/randomJob.js';
const client = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

//EVENTS
client.on('ready', (c) => {
    console.log(`${c.user.tag} at your service`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('!help')) {
        message.reply('Whatever you desire.');
    }
    if (message.content.startsWith('!forecast')) {
        message.reply('```Sunny```');
    }
    if (message.content.startsWith('!job')) {
        message.reply(getRandomJob());
    }
});

client.login(process.env.TOKEN);