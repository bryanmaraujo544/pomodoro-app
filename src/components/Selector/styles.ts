import styled from 'styled-components';

interface Props {
  hasStarted: boolean,
  isInBreak: boolean
}

export const Container = styled.div<Props>`
  display: flex;
  padding: 6px;
  background: #F1F6FE;
  border-radius: 999px;
  height: 48px;
  gap: 4px;
  margin-top: 1.6rem;
  box-shadow: 0 0px 12px #ffffff60;

  @media(max-width: 368px) {
    height: 42px;
  }

  & > div {
    position: relative;
    background: transparent;
    flex: 1;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    cursor: ${({ hasStarted }) => hasStarted ? 'not-allowed' : 'pointer'};

    .button-bg {
      width: 100%;
      height: 100%;
      border-radius: 9999px;
      position: absolute;
      z-index: 20;
    }

    p {
      z-index: 30;
    }
    
  }
`;