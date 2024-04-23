import moment from 'moment';
import { time, EmbedBuilder } from 'discord.js'
const frontlineMaps = ['Fields of Glory (Shatter)', 'Onsal Hakair (Danshig Nadaam)', 'Seal Rock (Seize)'];
const anchorDate = moment('2024-04-21 00:00:00 +0900', 'YYYY-MM-DD HH:mm:ss ZZ'); //Shatter Anchor Date, GMT 15:00:00 is 00:00:00 in JST which is daily reset time

export function parseForecastTime(forecastDate = 'NOTHING') {
    if (forecastDate === 'NOTHING') {
        var forecast = _getForecast();
    } else {
        var forecast = _getForecast(moment(forecastDate, 'D-M-YY'), false); //!forecast 26/04/24-0500
    }
    return forecast;
}
function _getForecast(forecastDate = moment(), current = true){
    var embed = new EmbedBuilder()
        .setColor(0xFCB0CC)
        .setTitle('Frontline Forecast')
        .setURL('https://na.finalfantasyxiv.com/lodestone/playguide/contentsguide/frontline/')
        .setThumbnail('https://ffxiv.gamerescape.com/w/images/archive/e/ef/20190729222806%21061806.png')
        .setDescription('Daily reset is at <t:1713884400:T>');
    var timeDifference = forecastDate.diff(anchorDate, 'days');
    var dateOf = moment(anchorDate).add(timeDifference, 'days');
    if (current) {
        for (let i = 0; i < frontlineMaps.length; i++) {
            embed.addFields({   name: frontlineMaps[(timeDifference + i) % frontlineMaps.length], 
                                value: "> ".concat(time(dateOf.toDate(), 'R')), 
                                inline: false},
                            );
            dateOf.add(1, 'days');
        }
    } else {
        for (let i = 0; i < frontlineMaps.length; i++) {
            embed.addFields({   name: (frontlineMaps[(timeDifference + i) % frontlineMaps.length]), 
                                value: "> ".concat(time(dateOf.toDate(), 'f').concat(' - ', time(dateOf.toDate(), 'R'))), 
                                inline: false},
            );
            dateOf.add(1, 'days');
        }
    }
    return embed;
}