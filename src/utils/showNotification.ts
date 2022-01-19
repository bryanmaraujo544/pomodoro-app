interface Props {
  (title?: string, bodymsg?: string, iconPath?: string): number,
}

// import 


export const showNotification: Props = (
  title = 'Notification',
  bodyMsg = 'This is one notification',
  iconPath = '../../public/images/logo.png',
) => {
  const options = {
    body: bodyMsg,
    icon: "https://ps.w.org/wp-notification-bell/assets/icon-256x256.png?rev=2439614",
  };

  const notification = new Notification(title, options);
  return notification as any;
}