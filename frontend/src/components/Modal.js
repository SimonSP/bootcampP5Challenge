import React from 'react'
import styled from 'styled-components'
import { compose, layout, color, space, border, system } from 'styled-system'
import AntdModal from 'antd/es/modal'
import 'antd/es/modal/style/index.css'

const closeColor = system({
  closeColor: {
    property: `color`,
    scale: `colors`,
  },
})

const fontSize = system({
  fontSize: {
    property: `fontSize`,
    scale: `fontSizes`,
  },
})

const Modal = styled(AntdModal)`
  ${layout}
  & .ant-modal-header {
    ${compose(color, border)}
    padding: 30px 24px;
    & .ant-modal-title {
      color: white;
      ${fontSize}
    }
  }
  & .ant-modal-body {
    ${space}
    width: 100%;
  }
  & .ant-modal-close-x {
    ${closeColor}
  }
`

Modal.defaultProps = {
  width: `80%`,
  borderRadius: `0px`,
  backgroundColor: `primary.0`,
  closeColor: `white`,
  fontSize: `3`,
}

const ModalWrapper = ({ onClose, isVisible, title, children, ...props }) => {
  return isVisible ? (
    <Modal
      visible
      onCancel={onClose}
      title={title}
      footer={null}
      maskClosable={false}
      keyboard={false}
      {...props}
    >
      {children}
    </Modal>
  ) : null
}

export default ModalWrapper
