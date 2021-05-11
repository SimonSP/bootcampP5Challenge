/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useStateWithMerge } from 'hooks'
import { Icon, Container, Typography, Button, Table } from 'components'
import { message } from 'antd'
import API from 'config/api'
import ModalWrapper from './ModalWrapper'

const initialState = {
  loading: true,
  loadingAux: true,
  passengerFlights: [],
  selectedPassengerFlight: [],
  baggageTypes: [],
  baggageStatuses: [],
  modalConfig: {
    title: ``,
    isVisible: false,
    modalType: null,
    onAccept: () => {},
    onCancel: () => {},
  },
}

const getColumns = (onManage, onFastManage) => [
  {
    title: `ID`,
    render({ id }) {
      return <Typography>{id}</Typography>
    },
  },
  {
    title: `Nombre Dueño`,
    render({ passenger }) {
      return <Typography>{passenger.firstName}</Typography>
    },
  },
  {
    title: `Apellido Dueño`,
    render({ passenger }) {
      return <Typography>{passenger.lastName}</Typography>
    },
  },
  {
    title: `Código de Vuelo`,
    render({ flight }) {
      return <Typography>{flight.code}</Typography>
    },
  },
  {
    title: `Ver / Editar`,
    render(record) {
      return (
        <Container>
          <Icon
            fontSize="3"
            icon="eye"
            color="secondary.2"
            marginRight="3"
            onClick={() => onManage(record, 1)}
          />
          <Icon
            fontSize="3"
            icon="edit"
            color="primary.1"
            marginRight="3"
            onClick={() => onManage(record, 2)}
          />
        </Container>
      )
    },
  },
  {
    title: `Entregar equipaje`,
    render(record) {
      const { baggage = null } = record
      if (baggage && baggage.every((item) => item.baggageStatusId === 2)) {
        return (
          <Icon fontSize="3" icon="check" color="success" marginRight="3" />
        )
      } else if (
        baggage &&
        baggage.every((item) => item.baggageStatusId === 3)
      ) {
        return (
          <Icon
            fontSize="3"
            icon="truckLoading"
            color="warning"
            marginRight="3"
            onClick={() => onFastManage(record, 2)}
          />
        )
      }
      return (
        <Icon
          fontSize="3"
          icon="truckLoading"
          color="success"
          marginRight="3"
          onClick={() => onFastManage(record, 2)}
        />
      )
    },
  },
  {
    title: `Marcar como olvidado`,
    render(record) {
      const { baggage = null } = record
      if (baggage && baggage.every((item) => item.baggageStatusId === 2)) {
        return <Icon fontSize="3" icon="minus" color="gray.1" marginRight="3" />
      } else if (
        baggage &&
        baggage.every((item) => item.baggageStatusId === 3)
      ) {
        return <Icon fontSize="3" icon="check" color="error" marginRight="3" />
      }
      return (
        <Icon
          fontSize="3"
          icon="forgotten"
          color="error"
          marginRight="3"
          onClick={() => onFastManage(record, 3)}
        />
      )
    },
  },
]

const ManageBaggage = () => {
  const [state, setState] = useStateWithMerge(initialState)
  const columns = getColumns(onManage, onFastManage)
  const {
    loading,
    passengerFlights,
    baggageTypes,
    baggageStatuses,
    modalConfig,
  } = state

  //BACKEND CONNECTIONS
  const getPassengerFlights = async () => {
    try {
      const { passengerFlights } = await API.getPassengerFlights()
      setState({ loading: false, passengerFlights })
      onModalClose()
    } catch (e) {
      setState({ loading: false })
      message.error(`Error al obtener datos. ${e}`)
    }
  }

  const getAuxData = async () => {
    try {
      const { baggageTypes, baggageStatuses } = await API.getAuxData()
      setState({
        baggageTypes,
        baggageStatuses,
        loadingAux: false,
      })
    } catch (error) {
      message.error(`Error al obtener datos. ${error}`)
    }
  }

  const updateBaggageStatus = async ({ passengerFlight, baggageStatusId }) => {
    try {
      await API.updateBaggageStatus({
        baggageIds: passengerFlight.baggage.map((item) => item.id),
        baggageStatusId,
      })
      const updatedRecords = passengerFlights.map((oldPassengerFlight) => {
        if (passengerFlight.id === oldPassengerFlight.id) {
          return {
            ...oldPassengerFlight,
            baggage: oldPassengerFlight.baggage.map((item) => ({
              ...item,
              baggageStatusId,
            })),
          }
        }
        return oldPassengerFlight
      })
      setState({ passengerFlights: updatedRecords })
      onModalClose()
    } catch (error) {
      message.error(error)
    }
  }

  const upsertPassenger = async (payload) => {
    try {
      const { updatedPassenger } = await API.upsertPassenger(payload)
      if (payload.id) {
        const updatedPassengerFlights = passengerFlights.map((record) => {
          if (record.id === updatedPassenger.id) {
            return {
              ...record,
              ...updatedPassenger,
            }
          }
          return record
        })
        setState({ passengerFlights: updatedPassengerFlights })
      }
      setState({ passengerFlights: [...passengerFlights, updatedPassenger] })
      onModalClose()
      message.success(`${payload.id ? `Editado` : `Creado`} correctamente`)
    } catch (error) {
      message.error(`Error al realizar asignacion. ${error}`)
    }
  }

  //HANDLERS
  function onManage(record, actionType) {
    setState({
      modalConfig: {
        isVisible: true,
        modalType: `managePassenger`,
        selectedPassengerFlight: record,
        actionType,
        baggageTypes,
        baggageStatuses,
        onCancel: onModalClose,
        onAccept: actionType === 1 ? onModalClose : upsertPassenger,
      },
    })
  }
  function onFastManage(record, actionType) {
    setState({
      modalConfig: {
        isVisible: true,
        selectedPassengerFlight: record,
        modalType: `manageBaggage`,
        actionType,
        onCancel: onModalClose,
        onAccept: updateBaggageStatus,
      },
    })
  }

  function onModalClose() {
    setState({
      selectedPassengerFlight: [],
      selectedRowKeys: [],
      modalConfig: {
        title: ``,
        isVisible: false,
        modalType: null,
        onAccept: () => {},
        onCancel: () => {},
      },
    })
  }

  //EFFECTS
  useEffect(() => {
    getPassengerFlights()
    getAuxData()
  }, [])

  return loading ? (
    <Container width="100%" justifyContent="center">
      <Typography marginY="3" fontSize="3" color="primary.1">
        Cargando... <Icon icon="spinner" spin />
      </Typography>
    </Container>
  ) : (
    <Container width="100%" padding="1em 2em">
      <Container width="100%" alignItems="end">
        <Typography width="50%" textStyle="title1" marginLeft="0">
          Equipaje de Pasajeros
        </Typography>
        <Container width="50%" justifyContent="end">
          <Button
            withShadow
            borderRadius="5px"
            backgroundColor="primary.1"
            textDecoration="none"
            onClick={() =>
              setState({
                modalConfig: {
                  title: `Agregar Pasajero`,
                  isVisible: true,
                  modalType: `addPassenger`,
                  baggageTypes,
                  onCancel: onModalClose,
                  onAccept: upsertPassenger,
                },
              })
            }
          >
            <Typography fontSize="0" color="white">
              Registrar Pasajero
            </Typography>
          </Button>
          <Button
            marginLeft="3"
            backgroundColor="gray.0"
            textDecoration="none"
            borderRadius="20px"
            disabled={true}
            onClick={() =>
              setState({
                modalConfig: {
                  title: `Filtros de búsqueda`,
                  isVisible: true,
                  modalType: `filters`,
                  baggageTypes,
                  onCancel: onModalClose,
                  onAccept: getPassengerFlights,
                },
              })
            }
          >
            <Typography color="gray.2" fontSize="0">
              <Icon icon="search" marginRight="2" />
              Búsqueda
            </Typography>
          </Button>
        </Container>
      </Container>
      <Container
        width="100%"
        height="1px"
        marginY="4"
        backgroundColor="gray.0"
      />
      <Container width="100%">
        <Table
          columns={columns}
          dataSource={passengerFlights}
          loading={loading}
          checkboxBgColor="primary.3"
          headerTextColor="primary.3"
          textColor="primary.4"
          rowFontWeight="500"
          pagination={{
            showSizeChanger: true,
            defaultPageSize: 10,
            pageSizeOptions: [`10`, `20`, `30`, `40`],
          }}
        />
      </Container>
      <ModalWrapper modalConfig={modalConfig} />
    </Container>
  )
}

export default ManageBaggage
