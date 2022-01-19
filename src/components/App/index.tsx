import React from 'react';
import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { Container, PomodoroContainer } from './styles';
import { GlobalStyles } from '../../styles/global';
import { theme } from '../../styles/theme';

// import { askNotificationPermission } from '../.././utils/askNotificationPermission';
import { showNotification } from '../.././utils/showNotification';

import { Logo } from '../Logo';
import { Timer } from '../Timer';

function App() {
  const enableNotifBtn = useRef(null);

  // useEffect(() => {
  //   askNotificationPermission();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
          <PomodoroContainer>
            <Logo />
            <Timer />
            <button ref={enableNotifBtn}>
              Enable Notifications
            </button>
            <button onClick={() => showNotification()}>
              Show Notifications
            </button>
          </PomodoroContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;