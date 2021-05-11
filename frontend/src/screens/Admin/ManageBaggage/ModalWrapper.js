import React from 'react'
import { Modal } from 'components'
import {
  AddPassenger,
  ManageBaggage,
  ManagePassenger,
} from './ModalContent/index'

const ContentByModal = {
  addPassenger: AddPassenger,
  manageBaggage: ManageBaggage,
  managePassenger: ManagePassenger,
}

const ModalWrapper = ({
  modalConfig: { isVisible, modalType, onCancel, ...props },
}) => {
  const Component = ContentByModal[modalType]
  return (
    <Modal
      width={modalType === `filters` ? `20%` : `60%`}
      borderRadius={`20px`}
      closeColor="primary.1"
      isVisible={isVisible}
      onCancel={onCancel}
    >
      <Component {...props} onCancel={onCancel} />
    </Modal>
  )
}
export default ModalWrapper
