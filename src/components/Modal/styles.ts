import styled from 'styled-components';

interface OverlayProps {
  isModalOpen: boolean
}

export const Overlay = styled.div<OverlayProps>`
  background: #00000080;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;

`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.6rem 2.0rem;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 4px 8px #00000030;
  max-width: 700px;
  width: 100%;

  .videos-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-top: 3.2rem;
    width: 100%;

    .iframe-container {
      height: 15rem;
      flex: 1;
      width: 100%;
      @media(max-width: 678px) {
        width: 100%;
        flex: none;
      }
      
      iframe {
        background: #DEE2E6;
        box-shadow: 0 3px 5px #00000030;
        padding: 8px;
        border-radius: 24px;
        width: 100%;
        height: 100%;
      }
    }

  }
  
  .close-icon {
    position: absolute;
    top: -3.2rem;
    right: -3.2rem;
    cursor: pointer;
    
    .icon {
      color: #fff;
    }
  }
`