import React, { Component } from 'react';
import { Grid, Statistic } from 'semantic-ui-react'
import WeatherIcon from './WeatherIcon'

const weatherData = {}
const weatherDailyData = weatherData.daily

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
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
              <WeatherIcon weatherCode={item.weather[0].id} dayOrNight="night" />
              <Statistic size='mini'>
                <Statistic.Value>{item.temp.day}</Statistic.Value>
                <Statistic.Label>Jun 02 Wed</Statistic.Label>
              </Statistic>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
    )
  }
}

export default Weather;
