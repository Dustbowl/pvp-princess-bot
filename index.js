import { Client, EmbedBuilder, IntentsBitField } from 'discord.js';
import { getRandomJob } from './src/services/randomJob.js';
import { parseForecastTime } from './src/services/frontlineForecast.js';
import { ErrorEmbed } from './src/services/util.js';
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
        const helpEmbed = new EmbedBuilder()
            .setColor(0xFCB0CC)
            .setTitle('Bot Commands')
            .addFields(
                {name: '!help', value: '> List of bot commands'},
                {name: '!job', value: '> Returns random :job:'},
                {name: '!forecast [date]', value: '> Returns Frontline Map with timestamps.\n> [date] is optional and is formatted as DD/MM/YY'},
            )
        message.reply({embeds: [helpEmbed]});
    }

    if (message.content === '!job') {
        var response = getRandomJob();
        if (response && typeof response === 'string') {
            message.reply(response);
        } else {
            console.log(`Error during !job response: ${response}`);
            message.reply(ErrorEmbed('!job error'));
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

client.login(process.env['TOKEN']);