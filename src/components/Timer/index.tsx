/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Container, Circle, Time } from './styles';

interface Props{
  hasStarted: boolean,
  seconds: number,
  setSeconds: any,
  minutes: number,
  setMinutes: any,
  isInBreak: boolean
}

export const Timer = ({
  hasStarted,
  seconds, 
  minutes,
  setMinutes,
  isInBreak,
}: Props) => {
  const [initialTime, setInitialTime] = useState(minutes);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (initialTime % 5 === 0 && !hasStarted) {
      setInitialTime(minutes); 
    }

    if (hasStarted) {
      calculateProgress();
    } else {
      setProgress(1);
    }
  }, [hasStarted, minutes, seconds]);
  

  function handleDiminishTime() {
    if (!isInBreak && minutes > 10) {
      return setMinutes((prevState: number) => prevState - 5);
    }

    if (isInBreak && minutes > 5) {
      return setMinutes((prevState: number) => prevState - 5);
    }
  }

  function handleIncreaseTime() {
    setMinutes((prevState: number) => prevState + 5);
  }

  function calculateProgress() {
    const secondsInitialTime = initialTime * 60;
    const currentTotalSeconds = (minutes * 60) + seconds;
    
    const progressInDecimal = (((currentTotalSeconds * 100) / secondsInitialTime) / 100);
    console.log({progressInDecimal})
    setProgress(progressInDecimal);
  }

  return (
    <Container>
      {!hasStarted && (
        <span onClick={handleDiminishTime}>
          <svg width="50" height="29" viewBox="0 0 50 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.0012 28C28.1589 28 49 3.44748 49 2.04892C49 0.650358 41.3334 0.650358 41.3334 2.04892C41.3334 3.44748 26.7379 20.4268 25.0012 20.4268C23.2644 20.4268 8.66711 3.44748 8.66711 2.04892C8.66711 0.650358 0.844475 0.650358 1.00236 2.04892C1.16025 3.44748 21.8434 28 25.0012 28Z" fill="#F1F6FE" stroke="#F1F6FE"/>
          </svg>
        </span>
      )}
      <Circle progress={progress}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="22.5rem" height="22.5rem">
          <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor={(
                  !hasStarted && !isInBreak ? '#0D5CD3' : hasStarted && !isInBreak ? '#669FF5' : '#BEF566'
                )} />
                <stop offset="100%" stopColor={(
                  !hasStarted && !isInBreak ? '#04193A' : hasStarted && !isInBreak ? '#0D5CD3' : '#70E000'
                )} />
              </linearGradient>
          </defs>
          <circle cx="110" cy="110" r="100" strokeLinecap="round" />
        </svg>
        <Time>
          {minutes < 10 ? ( `0${minutes}`) : (minutes)}
          :
          {seconds < 10 ? ( `0${seconds}`) : (`${seconds}`)}
        </Time>
      </Circle>
      {!hasStarted && (
        <span onClick={handleIncreaseTime}>
          <svg width="50" height="29" viewBox="0 0 50 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.9988 1C21.8411 1 1 25.5525 1 26.9511C1 28.3496 8.66658 28.3496 8.66658 26.9511C8.66658 25.5525 23.2621 8.57317 24.9988 8.57317C26.7356 8.57317 41.3329 25.5525 41.3329 26.9511C41.3329 28.3496 49.1555 28.3496 48.9976 26.9511C48.8398 25.5525 28.1566 1 24.9988 1Z" fill="#F1F6FE" stroke="#F1F6FE"/>
          </svg>
        </span>
      )}
    </Container>
  );
};
