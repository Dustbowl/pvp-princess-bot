import { Client, IntentsBitField } from 'discord.js';
import { getRandomJob } from './services/randomJob.js';
import { parseForecastTime } from './services/frontlineForecast.js';
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

    if (message.content === '!help') {
        message.reply('no');
        return;
    }

    if(message.content.startsWith('!timestamp')) {
        return;
    }

    if (message.content === '!job') {
        var response = getRandomJob();
        if (response && typeof response === 'string') {
            message.reply(response);
        } else {
            console.log(`Error during !job response: ${response}`);
            message.reply('Oops! Something went wrong :>');
        }
    }

    if(message.content.startsWith('!forecast')) {
        const fields = message.content.split(' ');
        if(fields.length > 1) {
            var response = parseForecastTime(fields[1]);
        } else {
            var response = parseForecastTime();
        }
        message.reply({embeds: [response]});
    }
});

client.login(process.env.TOKEN);