import styled from 'styled-components'
import {
  compose,
  background,
  space,
  layout,
  flexbox,
  border,
  position,
  grid,
  typography,
  color,
} from 'styled-system'

const Container = styled.div`
  ${compose(
    background,
    space,
    layout,
    flexbox,
    border,
    position,
    grid,
    typography,
    color,
  )}
  ${({ withShadow = false, onClick = null }) => `
  ${withShadow ? `box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3) !important;` : ``}
  ${onClick == null ? `` : `  cursor: pointer`};
  `}
  transition: all .5s ease;
  &:hover {
    ${({ hoverProps, ...props }) =>
      compose(
        layout,
        space,
        flexbox,
        border,
        color,
      )({ ...props, ...hoverProps })}
  }
`

Container.defaultProps = {
  display: `flex`,
  flexDirection: `row`,
  flexWrap: `wrap`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  maxWidth: `100%`,
  color: `white`,
}

export default Container
