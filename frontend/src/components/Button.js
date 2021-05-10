import styled from 'styled-components'
import {
  compose,
  space,
  flexbox,
  color,
  layout,
  border,
  position,
  typography,
  system,
  variant,
} from 'styled-system'

const ButtonWrapper = styled(`button`)(
  compose(
    space,
    layout,
    border,
    color,
    position,
    flexbox,
    typography,
    system({ textDecoration: true }),
    variant({ scale: `buttons` }),
  ),
  {
    outline: `none`,
  },
)

ButtonWrapper.defaultProps = {
  color: `white`,
  border: `none`,
  maxWidth: `100%`,
  backgroundColor: `primary.2`,
  fontSize: `3`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  borderRadius: `3px`,
}

export default ButtonWrapper
