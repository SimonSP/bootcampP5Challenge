import styled from 'styled-components'
import { system, compose } from 'styled-system'
import AntTable from 'antd/es/table'
import 'antd/es/table/style/index.css'
import 'antd/es/pagination/style/index.css'

const Table = styled(AntTable)`
  width: 100% !important;
  & table {
    ${compose(
      system({
        textColor: {
          property: `color`,
          scale: `colors`,
        },
      }),
    )}
  }
  .transparent {
    background: transparent;
  }

  .dataRow {
    background: rgba(238, 237, 236, 0.3);
  }

  & .ant-table-small.ant-table-bordered .ant-table-content,
  & .ant-table {
    border: 0 !important;
  }
  &.ant-table-wrapper
    .ant-table-middle
    > .ant-table-content
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr
    > th {
    ${compose(
      system({
        headerBg: {
          property: `backgroundColor`,
          scale: `colors`,
        },
        headerTextAlign: {
          property: `textAlign`,
        },
        headerFontSize: {
          property: `fontSize`,
          scale: `fontSizes`,
        },
        headerFontWeight: {
          property: `fontWeight`,
          scale: `fontWeights`,
        },
        headerTextColor: {
          property: `color`,
          scale: `colors`,
        },
      }),
    )}
    & .ant-table-header-column > div {
      display: flex;
    }
  }
  &
    .ant-table-middle
    > .ant-table-content
    > .ant-table-body
    > table
    > .ant-table-tbody
    > tr {
    ${compose(
      system({
        rowFontSize: {
          property: `fontSize`,
          scale: `fontSizes`,
        },
        rowFontWeight: {
          property: `fontWeight`,
          scale: `fontWeights`,
        },
        rowTextAlign: {
          property: `textAlign`,
        },
        rowAlignItems: {
          property: `alignItems`,
        },
      }),
    )}
    &:nth-child(odd) {
      & > td {
        ${compose(
          system({
            oddBg: {
              property: `backgroundColor`,
              scale: `colors`,
            },
          }),
        )}
      }
    }
    &:nth-child(even) {
      & > td {
        ${compose(
          system({
            evenBg: {
              property: `backgroundColor`,
              scale: `colors`,
            },
          }),
        )}
      }
    }
  }
`
export default Table
