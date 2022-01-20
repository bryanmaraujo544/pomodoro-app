import styled, { css } from 'styled-components';

interface BtnProps {
  isStart?: boolean,
  isStop?: boolean,
  isSkip?: boolean,
  isInBreak?: boolean,
}

interface ContainerProps {
  hasStarted?: boolean,
  isInBreak?: boolean,
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  ${({ theme, hasStarted, isInBreak }) => (
    hasStarted ? css`
      background: linear-gradient(to bottom, ${theme.colors.blue[300]}, ${theme.colors.blue[100]})
    ` : isInBreak ? css`
      background: linear-gradient(to bottom, ${theme.colors.orange[200]}, ${theme.colors.orange[100]})
    ` : css`
      background: linear-gradient(to bottom, ${theme.colors.blue[900]}, ${theme.colors.blue[700]})
    `
  )}
  /* background: linear-gradient(to bottom, ; */
`;

export const PomodoroContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  height: 100%;
  width: 100%;
  max-width: 450px;
  
  .buttons {
    display: flex;
    gap: 16px;
  }
`;

export const Button = styled.button<BtnProps>`
  background: ${({ isStart, isStop }) => (
    isStart ? (
      '#2E7DF2'
    ) : isStop ? (
      '#E50037'
    ) : (
      '#F1F6FE'
    )
  )};

  border-radius: 9999px;
  min-width: 15rem;
  padding: 8px;
  font-size: 2.0rem;
  box-shadow: 0 0 24px ${({ theme, isSkip, isStart, isStop, isInBreak }) => (
    isInBreak && isSkip ? (
      '#fff'
    ) : isInBreak && isStart ? (
      theme.colors.blue[200]
    ) : isStop ? (
      '#E5003760'
    ) : (
      theme.colors.blue[300]
    )
  )};

  color: ${({ theme, isSkip }) => (
    isSkip ? theme.colors.blue[200] : theme.colors.white
  )};
  cursor: pointer;
  margin-bottom: 32px;
`;

