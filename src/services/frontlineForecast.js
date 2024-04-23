import moment from 'moment';
import { time, EmbedBuilder, Colors } from 'discord.js'
const frontlineMaps = ['Fields of Glory (Shatter)', 'Onsal Hakair (Danshig Nadaam)', 'Seal Rock (Seize)'];
const anchorDate = moment('2024-04-21 00:00:00 +0900', 'YYYY-MM-DD HH:mm:ss ZZ'); //Shatter Anchor Date, GMT 15:00:00 is 00:00:00 in JST which is daily reset time

export function parseForecastTime(forecastDate = 'NOTHING') {
    if (forecastDate === 'NOTHING') {
        var forecast = _getForecast();
    } else {
        var forecast = _getForecast(moment('2024-04-26 11:00:00', 'YYYY-MM-DD HH:mm:ss'), false);
    }
    return forecast;
}
function _getForecast(forecastDate = moment(), current = true){
    var embed = new EmbedBuilder();
    embed.setTitle('Frontline Forecast');
    var timeDifference = forecastDate.diff(anchorDate, 'days');
    if (current) {
        var dateOf = moment(anchorDate).add(timeDifference, 'days');
        for (let i = 0; i < frontlineMaps.length; i++) {
            embed.addFields({   name: (frontlineMaps[(timeDifference + i) % frontlineMaps.length]), 
                                value: time(dateOf.toDate(), 'R'), 
                                inline: false},
                            );
            dateOf.add(1, 'days');
        }
    } /*else {
        var dateOf = moment(anchorDate).add(timeDifference - frontlineMaps.length, 'days');
        for (let i = frontlineMaps.length - 1; i >= 0 ; i--) {
            var line = "";
            dateOf.add(1, 'days');
            if(i == 0)  {
                line = line.concat(">>").padEnd(3).padStart(4);
            } else {
                line = line.concat("").padStart(4);
            }
            line = line.concat(frontlineMaps[(timeDifference - i) % frontlineMaps.length].padEnd(40), time(dateOf.toDate()), "\n");
            forecast = forecast.concat(line);
        }

    }*/
    return embed;
}
/*
function _getForecast(forecastDate = moment(), current = true){
    //var forecast = "```";
    var forecast = "";
    var timeDifference = forecastDate.diff(anchorDate, 'days');
    
    if (current) {
        var dateOf = moment(anchorDate).add(timeDifference, 'days');
        for (let i = 0; i < frontlineMaps.length; i++) {
            var line = "";
            
            if(i == 0)  {
                line = line.concat(">>").padEnd(3).padStart(4);
                line = line.concat(frontlineMaps[(timeDifference + i) % frontlineMaps.length].padEnd(40), time(dateOf.toDate(), 'R'));
            }
            else {
                dateOf.add(1, 'days'); 
                line = line.concat("").padStart(4);
                line = line.concat(frontlineMaps[(timeDifference + i) % frontlineMaps.length].padEnd(40), time(dateOf.toDate(), 'R'));
            }
            forecast = forecast.concat(line, "\n");
        }
    } else {
        var dateOf = moment(anchorDate).add(timeDifference - frontlineMaps.length, 'days');
        for (let i = frontlineMaps.length - 1; i >= 0 ; i--) {
            var line = "";
            dateOf.add(1, 'days');
            if(i == 0)  {
                line = line.concat(">>").padEnd(3).padStart(4);
            } else {
                line = line.concat("").padStart(4);
            }
            line = line.concat(frontlineMaps[(timeDifference - i) % frontlineMaps.length].padEnd(40), time(dateOf.toDate()), "\n");
            forecast = forecast.concat(line);
        }

    }
    //forecast = forecast.concat("```");
    return forecast;
}
*/