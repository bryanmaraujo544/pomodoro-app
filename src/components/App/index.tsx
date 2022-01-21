import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import axios, { AxiosRequestConfig } from 'axios';

import { Container, PomodoroContainer, Button } from './styles';
import { GlobalStyles } from '../../styles/global';
import { theme } from '../../styles/theme';

import { Logo } from '../Logo';
import { ButtonPlayer } from 'components/ButtonPlayer';
import { Modal } from '../Modal';

import { Timer } from '../Timer';
import { showNotification } from 'utils/showNotification';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isInBreak, setIsInBreak] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

  })

  const [isModalOpen, setIsModalOpen] = useState(false);

  const intervalId = useRef(null); // IntervalId of the setInterval => Will be used to stop interval

  function handleTimer({ isBreakTime }: { isBreakTime: boolean }) {
    // I cannot grab secons state directly, because the value of state will be the value they were when the setIntervel has started
    // And to grab the updated state values, I need to use the prevState of the setFunctions.
    setSeconds((prevSeconds) => {
      if (prevSeconds === 0) {
        setMinutes((prevMinutes) => {
          // When the seconds be 0 and minutes 0 IT'S OVER
          if (prevMinutes === 0){
            setHasStarted(false);
            setIsInBreak(isBreakTime ? false : true); // When be in break state and time is over, we are coming back to initial state
            setSeconds(0);
            handleStopTimer();

            showNotification({ isTaskMsg: isBreakTime });

            // When be in break state and time is over, we are setting the minutes as 25 (task time)
            // If not is break time that means we are in task screen. and when task is over we set minutes as 10(break default minute)
            return isBreakTime ? 25 : 5; 
          }
          return prevMinutes - 1; // Decreasing the minutes value
        })
        return 59; // Changing the value of seconds from 00 to 59
      }

      return prevSeconds - 1; // Decreasing the minutes value
    });
  }

  function handleStartTaskTimer() {
    setHasStarted(true);
    
    const id: any = setInterval(() => {
      handleTimer({ isBreakTime: false });
    }, 1000);
    
    intervalId.current = id;
  }

  function handleStartBreakTimer() {
    setHasStarted(true);
    const id: any = setInterval(() => {
      handleTimer({ isBreakTime: true });
    }, 1000);
    
    intervalId.current = id;
  }

  function handleResetTimer() {
    handleStopTimer();

    setMinutes(25);
    setSeconds(0);
    setHasStarted(false);
    setIsInBreak(false);
  }
  
  function handleStopTimer() {
    clearInterval(intervalId?.current || 0);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container
        hasStarted={hasStarted}
        isInBreak={isInBreak}
      >
        <PomodoroContainer>
          <Logo 
            isInBreak={isInBreak}
            hasStarted={hasStarted}
          />
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
              <Button onClick={() => handleStartTaskTimer()} isStart>
                Start
              </Button>
            )}
            
            {/* Started Timer State */}
            {hasStarted && !isInBreak && (
              <Button onClick={() => handleResetTimer()} isStop>
                Reset
              </Button>
            )}

            {/* Pause/Break State */}
            {isInBreak && (
              <React.Fragment>
                <Button 
                  onClick={() => handleStartBreakTimer()} 
                  isStart 
                  isInBreak
                >
                  Start Break
                </Button>

                <Button 
                  onClick={handleResetTimer} 
                  isSkip 
                  isInBreak
                >
                  Skip Break
                </Button>
              </React.Fragment>
            )}

          </div>
        </PomodoroContainer>
      </Container>
      <ButtonPlayer setIsModalOpen={setIsModalOpen} />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </ThemeProvider>
  );
}

export default App;