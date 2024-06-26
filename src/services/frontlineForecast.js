import moment from 'moment';
import { time, EmbedBuilder } from 'discord.js'
const frontlineMaps = ['Fields of Glory (Shatter)', 'Onsal Hakair (Danshig Nadaam)', 'Seal Rock (Seize)'];
const anchorDate = moment('2024-04-21 00:00:00 +0900', 'YYYY-MM-DD HH:mm:ss ZZ'); //Shatter Anchor Date, GMT 15:00:00 is 00:00:00 in JST which is daily reset time

export function parseForecastTime(forecastDate = null) {
    if (!forecastDate) {
        return _GetForecast();
    } 
    const specifiedDate = moment(forecastDate, 'D/M/YY', true);
    if (!specifiedDate.isValid()) {
        return null;
    }
    if (specifiedDate.isBefore(anchorDate)) {
        return null;
    }
    return _GetForecast(specifiedDate, false);
}
function _GetForecast(forecastDate = moment(), current = true){
    var embed = new EmbedBuilder()
        .setColor(0x55E057)
        .setTitle('Frontline Forecast')
        .setURL('https://na.finalfantasyxiv.com/lodestone/playguide/contentsguide/frontline/')
        .setThumbnail('https://ffxiv.gamerescape.com/w/images/archive/e/ef/20190729222806%21061806.png')
        .setDescription('Daily reset is at <t:1713884400:T>');
    var timeDifference = forecastDate.diff(anchorDate, 'days');
    var dateOf = moment(anchorDate).add(timeDifference, 'days');
    if (current) {
        for (let i = 0; i < frontlineMaps.length; i++) {
            const mapName = frontlineMaps[(timeDifference + i) % frontlineMaps.length]
            const timestamp = "> ".concat(time(dateOf.toDate(), 'R'))
            embed.addFields({   name: mapName, 
                                value: timestamp, 
                                inline: false},
                            );
            dateOf.add(1, 'days');
        }
    } else {
        for (let i = 0; i < frontlineMaps.length; i++) {
            const mapName = frontlineMaps[(timeDifference + i) % frontlineMaps.length];
            const timestamp = "> ".concat(time(dateOf.toDate(), 'f').concat(' - ', time(dateOf.toDate(), 'R')));
            embed.addFields({   name: mapName, 
                                value: timestamp, 
                                inline: false},
            );
            dateOf.add(1, 'days');
        }
    }
    return embed;
}