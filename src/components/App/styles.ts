import styled from 'styled-components';

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
`;

