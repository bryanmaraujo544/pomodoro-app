import styled from 'styled-components';

interface OverlayProps {
  isModalOpen: boolean
}

export const Overlay = styled.div<OverlayProps>`
  display: none;
  background: #00000080;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: ${({ isModalOpen }) => isModalOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 24px;
  background: #fff;

  .videos-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
    padding: 9px;

    iframe {
      border-radius: 24px;
      height: 150px;
    }
  }

  .close-icon {
    position: absolute;
    top: -32px;
    right: -32px;
    cursor: pointer;
    
    .icon {
      color: #fff;
    }
  }
`