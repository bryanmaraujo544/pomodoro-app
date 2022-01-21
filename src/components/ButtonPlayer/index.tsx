import { motion } from 'framer-motion';
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
    <Container 
      onClick={() => handleOpenModal()}
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
    >
      <FcMusic size="2rem" />
    </Container>
  )
}
