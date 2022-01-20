import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface Props {
  isInBreak: boolean,
  hasStarted: boolean
}

export const Logo = ({
  isInBreak,
  hasStarted
}: Props) => {
  const theme = useContext(ThemeContext);
  console.log({ theme });
  return (
    <Container>
      {hasStarted && !isInBreak && (
        'Task Time'
      )}
      {isInBreak && (
        'Break Time'
      )}
      {!hasStarted && !isInBreak && (
        'Pomodoro Timer'
      )}
    </Container>
  )
}