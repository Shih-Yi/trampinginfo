import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement, WorkIcon, SchoolIcon }  from 'react-vertical-timeline-component';
import { Image } from 'semantic-ui-react'

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
        {JSON.parse(reports).map(report => (
          <VerticalTimelineElement
            position={'right'}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: 'black' }}
            contentArrowStyle={{ borderRight: '10px solid  #fff' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">{report.report_type}</h3>
            <h4 className="vertical-timeline-element-subtitle">{report.location}</h4>
            <p>
              {report.description}
            </p>
            <Image src={report.avatar.url} fluid />
        </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
</div>
    )
  }
}

export default TrackTimeline;
