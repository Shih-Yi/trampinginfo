import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Image, Item, Label } from 'semantic-ui-react'
import blankProfile from '../../../image/blank-profile.png'

class TrackTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    let { reports } = this.props
    return (
    <div>
      <VerticalTimeline layout={'1-column-left'}>
        {reports.map(report => (
          <VerticalTimelineElement
            position={'right'}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: 'black' }}
            contentArrowStyle={{ borderRight: '10px solid  #fff' }}
            iconStyle={{ background: '#2bb59b', color: '#fff' }}
            date=''
            dateClassName={'timeline-data'}
          >
            <Image src={report.avatar.url} wrapped />
            <Item.Group>
              <Item>
                <Item.Content>
                <Label image>
                  <img src={report.user.avatar.url ? report.user.avatar.url : blankProfile } className="report-avatar" />
                  {report.user.user_name}
                </Label>
                  <Item.Meta>{report.report_type}</Item.Meta>
                  <Item.Description>
                    {report.description}
                  </Item.Description>
                  <Item.Extra>{new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(report.created_at))}</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
        </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
</div>
    )
  }
}

export default TrackTimeline;
