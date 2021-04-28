import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import axios from 'axios';

class ReportingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report_type: '',
      selectedFile: null
    }
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  onTypeChange = event => {
    this.setState({report_type: event.target.value})
  }

  onClickHandler = () => {
    let formData = new FormData()
    formData.append("report[avatar]", this.state.selectedFile)
    console.log(formData)
    axios.defaults.headers.post['X-CSRF-Token'] = $('meta[name="csrf-token"]').attr('content');
    const options = {
      url: '/reports',
      method: 'POST',
      data: formData,
    };
    axios(options);
  }

  render () {
    return (
      <Form>
        <Form.Field>
          <label>Type</label>
          <input name="report_type" className="report_aaa" placeholder='type' onChange={this.onTypeChange} />
        </Form.Field>
        <Form.Field>
          <label>Position</label>
          <input label="position" placeholder='position' onChange={this.onChangeHandler} />
        </Form.Field>
        <label>Image</label>
        <Input type="file" className="inputfile" onChange={this.onChangeHandler} id="embedpollfileinput" />
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Button type='submit' onClick={this.onClickHandler} >Submit</Button>
      </Form>
    )
  }
}

export default ReportingForm
