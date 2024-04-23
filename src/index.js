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

    if (message.content === '!job') {
        var response = getRandomJob();
        if (response && typeof response === 'string') {
            message.reply(response);
        } else {
            console.log(`Error during !job response: ${response}`);
            message.reply('Oops! Something went wrong :>');
        }
    }

    if(message.content === '!forecast') {
        var response = parseForecastTime();
        message.reply({embeds: [response]});
        /*
        if (response && typeof response === 'string') {
            message.reply(response);
        } else {
            console.log(`Error during !forecast response: ${response}`);
            message.reply('Oops! Something went wrong :>');
        }*/
    }
});

client.login(process.env.TOKEN);