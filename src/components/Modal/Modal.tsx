import React, { FC } from 'react'
import { Box } from '@mui/material'
import { ModalStyled, Backdrop, modalBoxStyle, Title } from './Modal.styles'

interface Props {
  isOpen: boolean
  handleClose: () => void
  title: string
  content: JSX.Element
}

const Modal: FC<Props> = ({ isOpen, handleClose, title, content }) => (
  <ModalStyled
    aria-labelledby="unstyled-modal-title"
    aria-describedby="unstyled-modal-description"
    open={isOpen}
    onClose={handleClose}
    BackdropComponent={Backdrop}
  >
    <Box sx={modalBoxStyle}>
      <Title id="unstyled-modal-title">{title}</Title>
      {content}
    </Box>
  </ModalStyled>
)

export default Modal
