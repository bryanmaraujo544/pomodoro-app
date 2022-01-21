import styled from 'styled-components';

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;

  @media(max-width: 468px) {
    bottom: 1.6rem;
    right: 1.6rem;
  }
`;