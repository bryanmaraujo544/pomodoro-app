import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Container, PomodoroContainer, Button } from './styles';
import { GlobalStyles } from '../../styles/global';
import { theme } from '../../styles/theme';

// import { askNotificationPermission } from '../.././utils/askNotificationPermission';
import { showNotification } from '../.././utils/showNotification';

import { Logo } from '../Logo';
import { Timer } from '../Timer';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isInBreak, setIsInBreak] = useState(true);

  // useEffect(() => {
  //   askNotificationPermission();
  // }, []);

  function handleStartTimer() {
    setHasStarted(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
        <PomodoroContainer>
          <Logo />
          <Timer />
          <div className="buttons">
            {/* Initial State */}
            {!hasStarted && !isInBreak && (
              <Button onClick={handleStartTimer} isStart>
                Start
              </Button>
            )}
            
            {/* Started Timer State */}
            {hasStarted && (
              <Button onClick={handleStartTimer} isStop>
                Stop
              </Button>
            )}

            {/* Pause/Break State */}
            {isInBreak && (
              <React.Fragment>
                <Button onClick={handleStartTimer} isStart>
                  Start Break
                </Button>
                <Button onClick={handleStartTimer} isSkip>
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