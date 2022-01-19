import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';


export const Logo = () => {
  const theme = useContext(ThemeContext);
  console.log({ theme });
  return (
    <Container>
      Pomodoro Timer
    </Container>
  )
}