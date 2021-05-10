import React from 'react'
import styled from 'styled-components'
import {
  compose,
  variant,
  space,
  layout,
  color,
  typography,
  border,
  textStyle,
  flexbox,
  system,
} from 'styled-system'

const Typography = styled(`h1`)(
  compose(
    space,
    variant,
    layout,
    color,
    typography,
    border,
    textStyle,
    flexbox,
    system({ textDecoration: true, textTransform: true }),
  ),

  {
    margin: 0,
  },
  ({ onClick }) => (onClick ? `cursor:pointer` : `cursor:default`),
)

Typography.defaultProps = {
  maxWidth: `100%`,
}

const Typo = ({ children, textStyle = `general`, ...props }) => {
  return (
    <Typography textStyle={textStyle} {...props}>
      {children}
    </Typography>
  )
}

export default Typo
