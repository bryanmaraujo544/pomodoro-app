import styled from 'styled-components';

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.red};
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
`;