import React from 'react';
import { FcMusic } from 'react-icons/fc'

import { Container } from './styles';

export const ButtonPlayer = ({
  setIsModalOpen
}: any) => {
  function handleOpenModal() {
    setIsModalOpen(true);
  }


  return (
    <Container onClick={() => handleOpenModal()}>
      <FcMusic size={20}/>
    </Container>
  )
}
