import React, { useState, useEffect } from 'react';
import { Image } from 'semantic-ui-react';
import DayClear from '../../../image/weatherIcons/day/day-clear.svg';
import DayCloudy from '../../../image/weatherIcons/day/day-cloudy.svg';
import DayDrizzle from '../../../image/weatherIcons/day/day-drizzle.svg';
import DayRain from '../../../image/weatherIcons/day/day-rain.svg';
import DaySnow from '../../../image/weatherIcons/day/day-snow.svg';
import DayThunderstorm from '../../../image/weatherIcons/day/day-thunderstorm.svg';
import DayAtmosphere from '../../../image/weatherIcons/day/day-atmosphere.svg';

import NightClear from '../../../image/weatherIcons/night/night-clear.svg';
import NightCloudy from '../../../image/weatherIcons/night/night-cloudy.svg';
import NightDrizzle from '../../../image/weatherIcons/night/night-drizzle.svg';
import NightRain from '../../../image/weatherIcons/night/night-rain.svg';
import NightSnow from '../../../image/weatherIcons/night/night-snow.svg';
import NightThunderstorm from '../../../image/weatherIcons/night/night-thunderstorm.svg';
import NightAtmosphere from '../../../image/weatherIcons/night/night-atmosphere.svg';


const align = {
  'margin-left': 'auto',
  'margin-right': 'auto',
  'display': 'block',
}

const weatherTypes = {
  isClear: [800],
  isCloudy: [801, 802, 803, 804],
  isRain: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
  isDrizzle: [300, 301, 302, 310, 311, 312, 313, 314, 321],
  isThunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
  isSnow: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
  isAtmosphere: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
};

const weatherIcons = {
  day: {
    isClear: DayClear,
    isCloudy: DayCloudy,
    isRain: DayDrizzle,
    isDrizzle: DayRain,
    isThunderstorm: DaySnow,
    isSnow: DayThunderstorm,
    isAtmosphere: DayAtmosphere,
  },
  night: {
    isClear: NightClear,
    isCloudy: NightCloudy,
    isRain: NightDrizzle,
    isDrizzle: NightRain,
    isThunderstorm: NightSnow,
    isSnow: NightThunderstorm,
    isAtmosphere: NightAtmosphere,
  }
}


// console.log(weatherCode2Type(weatherCode));

const WeatherIcon = ({weatherCode, dayOrNight}) => {
  const [icon, setIcon] = useState('isClear')

  useEffect(() => {
    const weatherCode2Type = (weatherCode) => {
      const [weatherType] =
        Object.entries(weatherTypes).find(([weatherType, weatherCodeArr]) =>
          weatherCodeArr.includes(Number(weatherCode))
        ) || [];
      return weatherType;
    };
    const icon = weatherCode2Type(weatherCode);
    setIcon(icon)
  }, [weatherCode]);

  return (
    <div>
      <Image src={weatherIcons[dayOrNight][icon]} size='tiny' style={align} />
    </div>
  );
};

export default WeatherIcon;
