import styled from 'styled-components';

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
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  z-index: 10;

  @media(max-width: 468px) {
    height: 100%;
  }
`;

export const PomodoroContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  height: 100%;
  max-width: 450px;
  width: 100%;
  height: 100vh;

  header {
    width: 100%;
    max-width:300px;
    text-align: center;
  }
  
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

