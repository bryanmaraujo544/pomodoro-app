import React, { useEffect } from 'react';
import { useRef } from 'react';
// import logo from './logo.svg';
import { askNotificationPermission } from './utils/askNotificationPermission';
import { showNotification } from './utils/showNotification';

function App() {
  const enableNotifBtn = useRef(null);

  useEffect(() => {
    askNotificationPermission();
  }, []);

  

  return (
    <div className="App">
      <button ref={enableNotifBtn}>
        Enable Notifications
      </button>
      <button onClick={() => showNotification()}>
        Show Notifications
      </button>
    </div>
  );
}

export default App;
