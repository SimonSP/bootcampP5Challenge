import React from 'react'
import { Container, Typography, Icon } from 'components'

const Header = ({ height }) => (
  <Container
    height={height}
    width="100%"
    padding="3"
    alignItems="center"
    backgroundColor="primary.1"
  >
    <Typography color="white" fontSize="4">
      <Icon icon="suitcase" marginRight="3" />
      Manage Baggage / Plataforma 5 Challenge
    </Typography>
  </Container>
)

export default Header
