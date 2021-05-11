/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useStateWithMerge } from 'hooks'
import { Container, Typography, Button, Icon } from 'components'
import { Input } from 'antd'
import { Select } from 'antd'

const { Option } = Select

const initialState = {
  loading: false,
  baggage: [],
  baggageDescription: ``,
  selectedBaggageType: null,
  selectedBaggageStatus: null,
}

const ManagePassenger = ({
  baggageTypes = [],
  baggageStatuses = [],
  selectedPassengerFlight = null,
  actionType,
  onAccept,
  onCancel,
}) => {
  const [state, setState] = useStateWithMerge(initialState)
  const { loading, baggage, baggageDescription, selectedBaggageType } = state

  //HANDLERS
  const filterOption = (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0

  //ASYNC FUNCTIONS

  async function onHandleAccept() {
    setState({ loading: true })
    await onAccept({
      id: selectedPassengerFlight.id,
      baggage,
    })
    setState({ loading: false })
  }

  useEffect(() => {
    setState({ baggage: selectedPassengerFlight.baggage })
  }, [selectedPassengerFlight])

  return (
    <Container width="100%">
      <Typography
        width="100%"
        textAlign="center"
        color="primary.3"
        fontSize="2"
      >
        {selectedPassengerFlight
          ? `Editar equipaje ingresado`
          : `Equipaje ingresado`}
      </Typography>
      <Container
        width="100%"
        height="1px"
        marginY="2"
        backgroundColor="primary.3"
      />
      <Container width="100%" alignContent="center" flexDirection="column">
        <Container width="50%" marginTop="3" justifyContent="center">
          <Container width="100%">
            {baggage.length < 3 && actionType === 2 ? (
              <Container
                width="100%"
                justifyContent="center"
                alignItems="center"
                marginY="3"
              >
                <Typography width="100%" fontSize="3">
                  Agregar equipaje
                </Typography>
                <Input
                  style={{ width: `45%`, marginX: 10, marginRight: 10 }}
                  allowClear
                  placeholder="Descripcion del equipaje"
                  value={baggageDescription}
                  onChange={(e) =>
                    setState({ baggageDescription: e.target.value })
                  }
                />
                <Select
                  style={{ width: `45%`, marginX: 10, marginRight: 10 }}
                  allowClear
                  showSearch
                  placeholder="Seleccione tipo de equipaje"
                  value={selectedBaggageType}
                  filterOption={filterOption}
                  onChange={(value) => setState({ selectedBaggageType: value })}
                >
                  {baggageTypes.map((type) => (
                    <Option key={type.id} value={type.id}>
                      {type.description}
                    </Option>
                  ))}
                </Select>
                <Icon
                  icon="plus"
                  fontSize="3"
                  color="primary.1"
                  onClick={() =>
                    setState({
                      baggage: [
                        ...baggage,
                        {
                          description: baggageDescription,
                          baggageStatusId: 1,
                          baggageTypeId: selectedBaggageType,
                        },
                      ],
                    })
                  }
                />
              </Container>
            ) : null}
            <Typography fontSize="3">Equipaje listo para ingresar</Typography>
            {baggage.map((item, index) => (
              <Container key={index} width="100%" justifyContent="center">
                <Typography fontSize="2">
                  Descripcion: {item.description} | Tipo de equipaje:
                  {
                    baggageTypes.find(
                      (existingItem) => existingItem.id === item.baggageTypeId,
                    ).description
                  }
                  | Estado:
                  {item.baggageStatusId
                    ? baggageStatuses.find(
                        (existingItem) =>
                          existingItem.id === item.baggageStatusId,
                      ).description
                    : `Por ingresar`}
                  {actionType === 2 ? (
                    <Icon
                      marginLeft="2"
                      color="error"
                      icon="minus"
                      onClick={() => {
                        const newBaggage = baggage.filter(
                          (item, currentIndex) => index !== currentIndex,
                        )
                        setState({
                          baggage: newBaggage,
                        })
                      }}
                    />
                  ) : null}
                </Typography>
              </Container>
            ))}
            (
            <Container width="100%" marginY="3" justifyContent="space-between">
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
                backgroundColor={loading ? `gray.2` : `primary.3`}
                borderColor="primary.3"
                borderRadius="10px"
                border="1px solid"
                disabled={loading || baggage.length === 0}
                onClick={actionType === 2 ? onHandleAccept : onAccept}
              >
                {loading ? (
                  <Icon icon="spinner" spin />
                ) : actionType === 2 ? (
                  `Editar`
                ) : (
                  `Ok`
                )}
              </Button>
            </Container>
            )
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export { ManagePassenger }
