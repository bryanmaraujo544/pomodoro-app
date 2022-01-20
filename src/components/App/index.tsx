import React, { useEffect, useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { Container, PomodoroContainer, Button } from './styles';
import { GlobalStyles } from '../../styles/global';
import { theme } from '../../styles/theme';

// import { askNotificationPermission } from '../.././utils/askNotificationPermission';
// import { showNotification } from '../.././utils/showNotification';

import { Logo } from '../Logo';
import { Timer } from '../Timer';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isInBreak, setIsInBreak] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  const intervalId = useRef(null);
  // useEffect(() => {
  //   askNotificationPermission();
  // }, []);

  function handleTimer() {
    // I cannot grab secons state directly, because the value of state will be the value they were when the setIntervel has started
    // And to grab the updated state values, I need to use the prevState of the setFunctions.
    setSeconds((prevSeconds) => {
      if (prevSeconds === 0) {
        setMinutes((prevMinutes) => {
          // When the seconds be 0 and minutes 0 IT'S OVER
          if (prevMinutes === 0){
            setHasStarted(false);
            setIsInBreak(true);
            setSeconds(0);
            handleStopTimer();

            return 10; // Setting the minutes to the break time screen as 10
          }
          return prevMinutes - 1;
        })
        return 59; // Changing the value of seconds from 00 to 59
      }

      return prevSeconds - 1;
    });
  }

  function handleStopTimer() {
    clearInterval(intervalId?.current || 0);
  }
  function handleStartTimer() {
    setHasStarted(true);
    
    const id: any = setInterval(() => {
      handleTimer();
    }, 1000);

    intervalId.current = id;
  }




  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container
        hasStarted={hasStarted}
        isInBreak={isInBreak}
      >
        <PomodoroContainer>
          <Logo />
          <Timer 
            hasStarted={hasStarted}
            seconds={seconds}
            setSeconds={setSeconds}
            minutes={minutes}
            setMinutes={setMinutes}
          />
          <div className="buttons">
            {/* Initial State */}
            {!hasStarted && !isInBreak && (
              <Button onClick={handleStartTimer} isStart>
                Start
              </Button>
            )}
            
            {/* Started Timer State */}
            {hasStarted && (
              <Button onClick={handleStopTimer} isStop>
                Stop
              </Button>
            )}

            {/* Pause/Break State */}
            {isInBreak && (
              <React.Fragment>
                <Button 
                  onClick={handleStartTimer} 
                  isStart 
                  isInBreak
                >
                  Start Break
                </Button>
                <Button 
                  onClick={handleStartTimer} 
                  isSkip 
                  isInBreak
                >
                  Skip Break
                </Button>
              </React.Fragment>
            )}

          </div>
          {/* <button ref={enableNotifBtn}>
            Enable Notifications
          </button>
          <button onClick={() => showNotification()}>
            Show Notifications
          </button> */}
        </PomodoroContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;