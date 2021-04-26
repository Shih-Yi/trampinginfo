import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import ReportingForm from './ReportingForm'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer, size: action.size }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

function ModalDimmer() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
    size: undefined,
  })
  const { open, dimmer, size } = state

  return (
    <div>
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
          <ReportingForm />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Disagree
          </Button>
          <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Agree
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default ModalDimmer
