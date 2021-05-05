import React, { useState, useEffect } from 'react';
import { Grid, Statistic, Segment, Item } from 'semantic-ui-react'
import WeatherIcon from './WeatherIcon'
import axios from 'axios';

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

const capitalizeSentence = (sentence) => {
  let wordsArray = sentence.toLowerCase().split(' ')
  let capsArray = []

  wordsArray.forEach(word => {
      capsArray.push(word[0].toUpperCase() + word.slice(1))
  });

  return capsArray.join(' ')
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
        // after setLocalStorageExpiry dataArray.length will become 6, so as weatherDailyData
        // so use new variable newDataArray
        const newDataArray = response.data.daily.slice(0, 5)
        // catche weatherDailyData for 6 hours
        setLocalStorageExpiry(`weatherDailyData_${track.id}`, newDataArray, 60*60*6*1000)
      });
  }

  return (
    <div>
      <Grid verticalAlign='middle' divided='vertically' centered columns='equal'>
        <Grid.Row columns={5}>
          {weatherDailyData.map((item, index) => (
            <Grid.Column className={index == 4 ? 'd-none d-md-block' : 'column-padding'}>
              <Segment basic className="weather_c">
                {new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(item.dt*1000)).substr(0,3)}
              </Segment>
              <WeatherIcon weatherCode={item.weather[0].id} dayOrNight="day" />
              <Segment basic className="weather_c">
                {`${Math.round(item.temp.max)}° / ${Math.round(item.temp.min)}°`}
              </Segment>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>

      <Item.Group className="track-row">
        <Item>
          <Item.Content>
            <Item.Header className="track-title">{capitalizeSentence(track.name)}</Item.Header>
            <Item.Meta>{track.completion_time}</Item.Meta>
            <Item.Description>
              {track.introduction}
            </Item.Description>
            <Item.Extra>{track.difficulty == '[]' ? '' : track.difficulty}</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  )
}

export default Weather;
