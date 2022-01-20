import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  /* background: orange; */

  span {
    padding: 6px;
    user-select: none;
    cursor: pointer;

    svg {
      width: 42px;
      filter: drop-shadow(0px 0px 16px #ffffff60);
    }
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 22.5rem;
  height: 22.5rem;
  aspect-ratio: 1 / 1;
  margin: 0;


`;

export const Time = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 0px 24px #ffffff80;
  font-size: 3.2rem;
  user-select: none;
`;
