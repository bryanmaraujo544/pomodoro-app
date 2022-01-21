import React from 'react';
import { Container } from './styles';

interface Props {
  isInBreak: boolean,
  hasStarted: boolean
}

export const Logo = ({
  isInBreak,
  hasStarted
}: Props) => {
  
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