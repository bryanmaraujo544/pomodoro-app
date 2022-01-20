import styled, { css } from 'styled-components';

interface CircleProps {
  progress?: number,
}

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
      width: 4.2rem;
      filter: drop-shadow(0px 0px 16px #ffffff60);
    }
  }
`;

export const Circle = styled.div<CircleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 22.5rem;
  height: 22.5rem;
  aspect-ratio: 1 / 1;
  margin: 0;
  

  /* @media(max-width: 468px) {
    width: 20rem;
    heigh
  } */

  svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    stroke-dasharray: 627; /* 627 */
    ${({ progress }) => css`
      stroke-dashoffset: calc(627 - (${progress} * 627));
    `};
  }

  circle {
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 10px;

    @media(max-width: 468px) {
      cx: 99;
      cy: 99;
      r: 89;
    }

    @media(max-width: 368px) {
      cx: 87;
      cy: 87;
      r: 77;
    }

    @media(max-width: 334px) {
      cx: 76;
      cy: 76;
      r: 66;
    }
    
  }


`;

export const Time = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 0px 24px #ffffff80;
  font-size: 3.2rem;
  user-select: none;
`;
