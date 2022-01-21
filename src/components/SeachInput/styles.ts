import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 9999px;
  padding: 0px;
  height: auto;
  width: 100%;
  background: #DEE2E6;
  box-shadow: 0 2px 4px #00000030;
  
  input {
    background: none;
    outline: none;
    padding: 2.0rem;
    font-size: 1.6rem;
    border-radius: 9999px 0px 0px 9999px;
    flex: 1;
    height: 100%;
    color: #6C757D;
  }

  button {
    border-radius: 0 9999px 9999px 0;
    background: none;
    padding: 2.0rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.0rem;
    cursor: pointer;
    transition: transform .25s linear;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
