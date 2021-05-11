/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useStateWithMerge } from 'hooks'
import { Container, Typography, Button, Icon } from 'components'
import { Input } from 'antd'
import { Select } from 'antd'
import { message } from 'antd'
import API from 'config/api'

const { Option } = Select

const initialState = {
  flightValid: false,
  loading: false,
  validating: false,
  firstName: ``,
  lastName: ``,
  flightCode: ``,
  baggage: [],
  baggageDescription: ``,
  selectedBaggageType: null,
  selectedBaggageStatus: null,
}

const AddPassenger = ({ baggageTypes = [], onAccept, onCancel }) => {
  const [state, setState] = useStateWithMerge(initialState)
  const {
    flightValid,
    loading,
    validating,
    firstName,
    lastName,
    flightCode,
    baggage,
    baggageDescription,
    selectedBaggageType,
  } = state

  //HANDLERS
  const filterOption = (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0

  //ASYNC FUNCTIONS
  async function validateFlight() {
    setState({ validating: true })
    try {
      const flight = await API.getFlight(flightCode)
      if (flight) {
        setState({ flightValid: true, validating: false })
      } else {
        message.error(`Error al validar el vuelo.`)
        setState({ validating: false })
      }
    } catch (error) {
      message.error(`Error al validar el vuelo. ${error}`)
      setState({ validating: false })
    }
  }

  async function onHandleAccept() {
    setState({ loading: true })
    await onAccept({
      firstName,
      lastName,
      code: flightCode,
      baggage,
    })
    setState({ loading: false })
  }

  useEffect(() => {
    setState({ flightValid: false })
  }, [flightCode])

  return (
    <Container width="100%">
      <Typography
        width="100%"
        textAlign="center"
        color="primary.3"
        fontSize="2"
      >
        Agregar Pasajero
      </Typography>
      <Container
        width="100%"
        height="1px"
        marginY="2"
        backgroundColor="primary.3"
      />
      <Container width="100%" alignContent="center" flexDirection="column">
        <Typography fontSize="3">Datos Pasajero y Vuelo</Typography>
        <Container width="50%" marginTop="3" justifyContent="center">
          <Input
            width="100%"
            style={{ marginBottom: 10 }}
            allowClear
            placeholder="Nombre Pasajero"
            value={firstName}
            onChange={(e) => setState({ firstName: e.target.value })}
          />
          <Input
            width="100%"
            style={{ marginBottom: 10 }}
            allowClear
            placeholder="Apellido Pasajero"
            value={lastName}
            onChange={(e) => setState({ lastName: e.target.value })}
          />
          <Input
            width="50%"
            style={{ marginBottom: 10 }}
            allowClear
            placeholder="E.J.: S1EZE"
            value={flightCode}
            onChange={(e) => setState({ flightCode: e.target.value })}
          />
          {!flightValid ? (
            <Button
              width="45%"
              disabled={validating}
              backgroundColor={loading ? `gray.2` : `primary.3`}
              borderColor="primary.3"
              borderRadius="10px"
              border="1px solid"
              onClick={() => validateFlight()}
            >
              {validating ? <Icon icon="spinner" spin /> : `Validar Vuelo`}
            </Button>
          ) : (
            <Container width="100%">
              {baggage.length < 3 ? (
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
                    onChange={(value) =>
                      setState({ selectedBaggageType: value })
                    }
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
                        (existingItem) =>
                          existingItem.id === item.baggageTypeId,
                      ).description
                    }
                    | Estado: Listo para ingresar
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
                  </Typography>
                </Container>
              ))}
              (
              <Container
                width="100%"
                marginY="3"
                justifyContent="space-between"
              >
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
                  onClick={onHandleAccept}
                >
                  {loading ? <Icon icon="spinner" spin /> : `Crear`}
                </Button>
              </Container>
              )
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  )
}

export { AddPassenger }
