import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBusinessTime as forgotten,
  faTruckLoading as truckLoading,
  faSuitcase as suitcase,
  faSpinner as spinner,
  faSearch as search,
  faTrash as trash,
  faPlus as plus,
  faEdit as edit,
  faEye as eye,
  faMinus as minus,
} from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

import {
  compose,
  color,
  typography,
  space,
  position,
  border,
} from 'styled-system'
const icons = {
  forgotten,
  truckLoading,
  suitcase,
  spinner,
  edit,
  trash,
  search,
  plus,
  eye,
  minus,
}

const Icon = styled(FontAwesomeIcon)`
  ${compose(color, typography, space, position, border)}
  ${({ onClick = null }) => (onClick == null ? `` : `  cursor: pointer`)}
`

function IconWrapper({ icon, ...props }) {
  return <Icon icon={icons[icon]} {...props} />
}

export default IconWrapper
