/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import { Container, PomodoroContainer, Button } from './styles';
import { GlobalStyles } from '../../styles/global';
import { theme } from '../../styles/theme';

import { ButtonPlayer } from 'components/ButtonPlayer';
import { Modal } from '../Modal';

import { Timer } from '../Timer';
import { showNotification } from 'utils/showNotification';
import { motion } from 'framer-motion';
import { Selector } from 'components/Selector';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isInBreak, setIsInBreak] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const intervalId = useRef(null); // IntervalId of the setInterval => Will be used to stop interval
  
  
  // This useEffect changes the value of the timer between 5 and 25 when we changes between task and break time when they are stopped
  useEffect(() => {
    if (!hasStarted) {
      isInBreak ? setMinutes(5) : setMinutes(25);
    }
  }, [isInBreak]);

  useEffect(() => {
    handleMinutes();
  }, [seconds])
  
  function handleSeconds() {
    // I cannot grab secons state directly, because the value of state will be the value they were when the setIntervel has started
    // And to grab the updated state values, I need to use the prevState of the setFunctions.
    setSeconds((prevSeconds) => {
      if (prevSeconds === 0) {
        return 59; // Changing the value of seconds from 00 to 59
      }
      
      return prevSeconds - 1; // Decreasing the minutes value
    });
  }
  
  function handleMinutes() {
    if (seconds === 59 && minutes !== 0 && hasStarted){
      setMinutes(minutes => minutes - 1);
    } else if (minutes === 0 && seconds === 0) {
      setHasStarted(false);
      setIsInBreak(isInBreak ? false : true); // When be in break state and time is over, we are coming back to initial state
      setSeconds(0);
      handleStopTimer();
      showNotification({ isTaskMsg: isInBreak });;
    }
  }
  
  const handleStartTimer = useCallback(() => {
    setHasStarted(true);
    
    const id: any = setInterval(() => {
      handleSeconds();
    }, 1000);
    
    intervalId.current = id;
  }, [intervalId?.current]);

  const handleResetTimer = useCallback(() => {
    handleStopTimer();
    setMinutes(25);
    setSeconds(0);
    setHasStarted(false);
    setIsInBreak(false);
  }, []);

  const handleStopTimer = useCallback(() => {
    clearInterval(intervalId?.current || 0);

  }, [intervalId?.current]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container
        as={motion.div}
        hasStarted={hasStarted}
        isInBreak={isInBreak}
        animate={{
          background: !hasStarted && !isInBreak ? (
            'linear-gradient(to bottom, #04193A, #083172)'
          ) : hasStarted && !isInBreak ? (
            'linear-gradient(to bottom, #083172, #2E7DF2)'
          ) : (
            'linear-gradient(to bottom, #70E000, #BEF566)'
          )
        }}
      >
        <PomodoroContainer>
          <header>
            <Selector 
              hasStarted={hasStarted}
              setHasStarted={setHasStarted}
              isInBreak={isInBreak}
              setIsInBreak={setIsInBreak}
            />
          </header>

          <Timer 
            hasStarted={hasStarted}
            seconds={seconds}
            setSeconds={setSeconds}
            minutes={minutes}
            setMinutes={setMinutes}
            isInBreak={isInBreak}
          />
          <div className="buttons">
            {/* Initial State */}
            {!hasStarted && !isInBreak && (
              <Button 
                onClick={() => handleStartTimer()} 
                isStart
                as={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Start
              </Button>
            )}
            
            {/* Started Timer State */}
            {hasStarted && !isInBreak && (
              <Button 
                onClick={() => handleResetTimer()} 
                isStop
                as={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Reset
              </Button>
            )}

            {/* Pause/Break State */}
            {isInBreak && (
              <React.Fragment>
                <Button 
                  onClick={() => handleStartTimer()} 
                  isStart 
                  isInBreak
                  as={motion.button}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Start Break
                </Button>

                <Button 
                  onClick={handleResetTimer} 
                  isSkip 
                  isInBreak
                  as={motion.button}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Skip Break
                </Button>
              </React.Fragment>
            )}

          </div>
        </PomodoroContainer>
      </Container>
      <ButtonPlayer setIsModalOpen={setIsModalOpen} />
      <Modal 
        setIsModalOpen={setIsModalOpen} 
        isModalOpen={isModalOpen} 
      />
    </ThemeProvider>
  );
}

export default App;