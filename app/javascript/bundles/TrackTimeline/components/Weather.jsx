import React, { Component } from 'react';
import { Grid, Image, Statistic } from 'semantic-ui-react'
import w1 from '../../../image/w1.png';
import w2 from '../../../image/w2.png';
import w3 from '../../../image/w3.png';
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <div>
      <Grid divided='vertically'>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={8}>
          <Statistic size='mini'>
            <Statistic.Value>Kōhaihai area short walks</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column width={4}>
        </Grid.Column>

        <Grid.Row columns={5}>
          <Grid.Column>
            <Image src={w1} size='tiny' />
            <Statistic size='mini'>
              <Statistic.Value>27C</Statistic.Value>
              <Statistic.Label>Jun 02 Wed</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Image src={w2} size='tiny' />
            <Statistic size='mini'>
              <Statistic.Value>27C</Statistic.Value>
              <Statistic.Label>Jun 02 Wed</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Image src={w3} size='tiny' />
            <Statistic size='mini'>
              <Statistic.Value>27C</Statistic.Value>
              <Statistic.Label>Jun 02 Wed</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Image src={w2} size='tiny' />
            <Statistic size='mini'>
              <Statistic.Value>27C</Statistic.Value>
              <Statistic.Label>Jun 02 Wed</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Image src={w1} size='tiny' />
            <Statistic size='mini'>
              <Statistic.Value>27C</Statistic.Value>
              <Statistic.Label>Jun 02 Wed</Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
  }
}

export default Weather;
