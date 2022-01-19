import { useRef } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const enableNotifBtn = useRef(null);

  function showNotification() {
    const notifTitle = 'Notification';
    const notifBody = `Created by Bryab`;
    const notifImg = `../public/images/logo.png`;
    const options = {
      body: notifBody,
      icon: notifImg,
    };

    const notification = new Notification(notifTitle, options);
    return notification;
  }

  function askNotificationPermission() {
    function checkNotificationPromise() {
      try {
        Notification.requestPermission().then();
      } catch(e) {
        return false;
      }
  
      return true;
    }

    // function to actually ask the permissions
    function handlePermission(permission) {
      // set the button to shown or hidden, depending on what the user answers
      if(Notification.permission === 'denied' || Notification.permission === 'default') {
        enableNotifBtn.current.style.display = 'block';
      } else {
        enableNotifBtn.current.style.display = 'none';
        // enableNotifBtn.current.style.background = '#ff0'
      }
    }
  
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      console.log("This browser does not support notifications.");
    } else {
      if(checkNotificationPromise()) {
        Notification.requestPermission()
        .then((permission) => {
          handlePermission(permission);
        })
      } else {
        Notification.requestPermission(function(permission) {
          handlePermission(permission);
        });
      }
    }
  }

  return (
    <div className="App">
      <button onClick={() => askNotificationPermission()} ref={enableNotifBtn}>
        Enable Notifications
      </button>
      <button onClick={() => showNotification()}>
        Show Notifications
      </button>
    </div>
  );
}

export default App;
