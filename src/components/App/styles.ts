import styled from 'styled-components';

interface Props {
  isStart?: boolean,
  isStop?: boolean,
  isSkip?: boolean,
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.blue[900]}, ${({ theme }) => theme.colors.blue[700]});
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

export const Button = styled.button<Props>`
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
  box-shadow: 0 0 24px ${({ theme }) => theme.colors.blue[300]};
  color: ${({ theme, isSkip }) => (
    isSkip ? theme.colors.blue[200] : theme.colors.white
  )};
  cursor: pointer;
  margin-bottom: 32px;
`;

