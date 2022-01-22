import styled, { css } from 'styled-components';

interface CircleProps {
  progress?: number,
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  width: 100%;

  span {
    padding: 6px;
    user-select: none;
    cursor: pointer;

    svg {
      width: 4.2rem;
      filter: drop-shadow(0px 0px 16px #ffffff80);
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
  /* filter: drop-shadow(0 0 2px #00000010); */

  @media(max-width: 400px) {
    width: 20rem;
    height: 20rem;
  }

  @media(max-width: 270px) {
    width: 18rem;
    height: 18rem;
  }
  

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
    stroke-width: 1rem;
    filter: drop-shadow(0 0 3px #00000030);

    @media(max-width: 468px) {
      cx: 99;
      cy: 99;
      r: 89;
    }

    @media(max-width: 400px) {
      r: 77;
      cx: 88;
      cy: 87;
    }

    @media(max-width: 368px) {
      cx: 77;
      cy: 77;
      r: 69;
    }

    @media(max-width: 334px) {
      r: 60;
      cx: 67;
      cy: 67;
    }

    @media(max-width: 270px) {
      r: 53;
      cx: 60;
      cy: 60;
    }
    
  }


`;

export const Time = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 0px 24px #ffffff80;
  font-size: 3.2rem;
  user-select: none;
`;
