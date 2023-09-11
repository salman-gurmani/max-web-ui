import React from 'react'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react'
import { ContactUsForm } from './ContactUsForm'

const ContactUsModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />

        <ModalContent bg="#18191D" color="black">
          <ModalCloseButton color="white" />
          <ModalBody color="#18191D">
            <ContactUsForm onClose={onClose} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export { ContactUsModal }
