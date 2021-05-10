import React from 'react'
import { Container, Button, Table, Icon } from 'components'

const ManageBaggage = () => (
  <Container width="100%" justifyContent="center">
    <Container width="100%" justifyContent="flex-end" marginBottom="4">
      <Button onClick={() => console.log(`open modal`)}>
        Ingresar equipaje <Icon icon="plus" marginLeft="2" />
      </Button>
    </Container>
    <Container width="80%" justifyContent="center" alignItems="center">
      <Table />
    </Container>
  </Container>
)

export default ManageBaggage
