import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>Type</label>
      <input placeholder='type' />
    </Form.Field>
    <Form.Field>
      <label>Position</label>
      <input placeholder='position' />
    </Form.Field>
    <label>Image</label>
    <input type="file" class="inputfile" id="embedpollfileinput" />
    <Form.TextArea label='About' placeholder='Tell us more about you...' />
  </Form>
)

export default FormExampleForm
