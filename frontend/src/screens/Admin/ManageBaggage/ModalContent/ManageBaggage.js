import React from 'react'
import { useStateWithMerge } from 'hooks'
import { Container, Typography, Button, Icon } from 'components'

const ManageBaggage = ({
  selectedPassengerFlight = [],
  actionType = 2,
  onAccept,
  onCancel,
}) => {
  const [state, setState] = useStateWithMerge({ loading: false })
  const { loading } = state
  async function onHandleAccept() {
    setState({ loading: true })
    await onAccept({
      baggageStatusId: actionType,
      passengerFlight: selectedPassengerFlight,
    })
    setState({ loading: false })
  }

  return (
    <Container width="100%" justifyContent="center">
      <Typography
        width="100%"
        textAlign="center"
        color="primary.3"
        fontSize="2"
      >
        {actionType === 2
          ? `¿Esta seguro que desea realizar la entrega del equipaje?`
          : `¿Esta seguro que desea marcar el equipaje como olvidado?`}
      </Typography>
      <Container width="40%" marginY="3" justifyContent="space-between">
        <Button
          width="45%"
          backgroundColor="transparent"
          color="primary.3"
          borderColor="primary.3"
          borderRadius="10px"
          border="1px solid"
          onClick={onCancel}
        >
          Cancelar
        </Button>
        <Button
          width="45%"
          backgroundColor="primary.3"
          borderColor="primary.3"
          borderRadius="10px"
          border="1px solid"
          disabled={loading}
          onClick={onHandleAccept}
        >
          {loading ? <Icon icon="spinner" spin /> : `Sí`}
        </Button>
      </Container>
    </Container>
  )
}

export { ManageBaggage }
