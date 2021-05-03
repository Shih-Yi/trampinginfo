import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Input } from 'semantic-ui-react'
// import { useForm } from "react-hook-form";
import axios from 'axios';


function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer, size: action.size }
    case 'CLOSE_MODAL':
      return { open: false }
      case 'CLOSE_MODAL_AND_SEND_DATA':
        return { open: false, isSendData: true }
    default:
      throw new Error()
  }
}

const useInput = startValue => {
  const [value, setValue] = useState(startValue);
  const onChange = e => setValue(e.target.value);
  return {
    value,
    onChange
  };
};

const onClickHandler = (data) => {
  let formData = new FormData()
  formData.append("report[avatar]", data.img)
  console.log(formData)
  axios.defaults.headers.post['X-CSRF-Token'] = $('meta[name="csrf-token"]').attr('content');
  const options = {
    url: '/reports',
    method: 'POST',
    data: formData,
  };
  axios(options);
}

function ModalDimmer() {
  console.log('---invoke function component---');
  const [state, dispatch] = React.useReducer(exampleReducer, {
    ...state,
    open: false,
    dimmer: undefined,
    size: undefined,
    isSendData: false,
  })
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const onSend = (data) => {
    console.log("onSubmit======")
    console.log(data)

    onClickHandler(data)
  }

  const { open, dimmer, size, isSendData } = state

  useEffect(() => {
    if (isSendData) {
      console.log("close============")
      console.log(state)

    }
  },[isSendData]);

  return (
    <div>
      {console.log('render')}
      <Button
        onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'inverted', size: 'tiny' })}
      >
        Inverted
      </Button>

      <Modal
        size={size}
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
        className='Semantic-Modal'
      >
        <Modal.Header>Use Google's location service?</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit(onSend)}>
            <Form.Field>
              <label>Type</label>
              <Input {...register('type')} /> {/* register an input */}
            </Form.Field>
            <Form.Field>
            <label>Position</label>
              <Input {...register('position', { required: true })} />
              {errors.position && <p>Last name is required.</p>}
            </Form.Field>
            <Form.Field>
              <Input type="file" className="inputfile" id="embedpollfileinput" {...register('img')} />
            </Form.Field>
            <Form.Field>
              <label>About</label>
              <Input {...register('about', { pattern: /\d+/ })} />
              {errors.about && <p>Please enter number for age.</p>}
              </Form.Field>
            <Input type="submit" />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Disagree
          </Button>
          <Button positive onClick={handleSubmit(onSend)}>
            Agree
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default ModalDimmer
