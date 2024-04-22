import moment from 'moment';

const frontlineMaps = ['Shatter', 'Onsal Hakair', 'Seal Rock'];
const anchorDate = moment.utc('2024-04-20 15:00:00', 'YYYY-MM-DD HH:mm:ss'); //Shatter Anchor Date, GMT 15:00:00 is 00:00:00 in JST which is daily reset time

export function parseForecastTime(forecastDate = 'NOTHING') {
    if (forecastDate === 'NOTHING') {
        //var forecast = _getForecast(moment());
    } else {
        var forecast;
    }
    return forecast;
}

function _getForecast(forecastDate){
    return _getFrontlineMap(forecastDate);
}

function _getFrontlineMap(forecastDate) {
    var timeDifference = Math.floor(forecastDate.diff(anchorDate, 'days'));
    console.log(timeDifference);
    return frontlineMaps[timeDifference%3];
}