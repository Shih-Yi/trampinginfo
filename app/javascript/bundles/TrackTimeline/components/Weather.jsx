import React, { useState, useEffect } from 'react';
import { Grid, Statistic } from 'semantic-ui-react'
import WeatherIcon from './WeatherIcon'
import axios from 'axios';

const align = {
  'marginLeft': 'auto',
  'marginRight': 'auto',
  'display': 'block',
}

const setLocalStorageExpiry = (key, array, ttl) => {
  array.push({'expiry': new Date().getTime() + ttl})
  localStorage.setItem(key, JSON.stringify(array));
}

const isLocalStorageExpiry = (key) => {
  const array = localStorage.getItem(key)
  if (!array) return false

  const newArray = JSON.parse(array)
  if (new Date().getTime() > newArray.slice(-1)[0].expiry) {
      localStorage.removeItem(key)
      return false
  } else {
      return newArray
  }
}

const Weather = (props) => {
  const { track, weatherdd } = props
  const storageWeatherDailyData = isLocalStorageExpiry(`weatherDailyData_${track.id}`);
  console.log('--- invoke function component ---');
  let [weatherDailyData, setWeatherDailyData] = useState([])
  // let [backupWeatherDailyData, setBackupWeatherDailyData] = useState([])

  useEffect(() => {
    console.log('execute function in useEffect');
    if (storageWeatherDailyData) {
      const dailyData = storageWeatherDailyData.slice(0, 5)
      setWeatherDailyData(dailyData)
    } else {
      feathWeatherData();
    }
  }, []);

  const feathWeatherData = () => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${track.latitude}&lon=${track.longitude}&&units=metric&appid=${weatherdd}`
    axios.get(url)
      .then((response) => {
        const dataArray = response.data.daily.slice(0, 5)
        setWeatherDailyData(dataArray)
        // catche weatherDailyData for 6 hours
        setLocalStorageExpiry('weatherDailyData', dataArray, 60*60*6*1000)
      });
  }

  return (
    <div>
      <Grid verticalAlign='middle' divided='vertically' centered>
        <Grid.Row columns={1}>
          <Grid.Column >
            <Statistic size='mini'>
              <Statistic.Value>Kōhaihai area short walks</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={5}>
          {weatherDailyData.map(item => (
            <Grid.Column>
              <Statistic size='mini' style={align}>
                <Statistic.Label>
                  {new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(item.dt*1000)).substr(0,3)}
                </Statistic.Label>
              </Statistic>
              <WeatherIcon weatherCode={item.weather[0].id} dayOrNight="day" />
              <Statistic size='mini' style={align}>
                <Statistic.Value>{`${Math.round(item.temp.max)}°`} / {`${Math.round(item.temp.min)}°`}</Statistic.Value>
              </Statistic>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Weather;
