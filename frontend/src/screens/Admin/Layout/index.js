import React from 'react'
import { Container } from 'components'
import Header from './Header'

const AdminLayout = ({ children }) => (
  <Container width="100%" maxHeight="100%" height="100vh">
    <Header height="8%" />
    <Container height="92%" width="100%" padding="4">
      {children}
    </Container>
  </Container>
)

export default AdminLayout
