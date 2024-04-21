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

    if (message.content === '!job') {
        var response = getRandomJob();
        if (response) {
            message.reply(response);
        } else {
            console.log(`Error during !job response: ${response}`);
        }
    }
});

client.login(process.env.TOKEN);