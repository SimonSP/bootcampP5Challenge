import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSuitcase as suitcase,
  faArrowCircleLeft as circleLeft,
  faArrowLeft as left,
  faArrowRight as right,
  faAt as at,
  faCog as gear,
  faHome as home,
  faKey as key,
  faUser as user,
  faArrowDown as down,
  faPaperclip as paperclip,
  faDownload as download,
  faUpload as upload,
  faCalendar as calendar,
  faClock as clock,
  faSpinner as spinner,
  faBackspace as backspace,
  faSignOutAlt as logout,
  faSearch as search,
  faSun as sun,
  faSyncAlt as sync,
  faDesktop as monitor,
  faChartBar as stadistics,
  faWrench as config,
  faAlignLeft as content,
  faThLarge as boxes,
  faThList as components,
  faUsers as users,
  faTrash as trash,
  faChevronLeft as chevronLeft,
  faPlus as plus,
  faCheckCircle as checkCircle,
  faBell as bell,
  faUserTimes as userTimes,
  faTimes as times,
  faEdit as edit,
  faChevronUp as chevronUp,
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
  suitcase,
  at,
  circleLeft,
  left,
  gear,
  right,
  home,
  user,
  down,
  download,
  upload,
  paperclip,
  spinner,
  edit,
  key,
  sun,
  trash,
  backspace,
  logout,
  search,
  sync,
  monitor,
  stadistics,
  config,
  content,
  boxes,
  components,
  calendar,
  clock,
  users,
  chevronLeft,
  plus,
  checkCircle,
  bell,
  userTimes,
  times,
  chevronUp,
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
