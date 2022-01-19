interface Props {
  (title?: string, bodymsg?: string, iconPath?: string): number,
}

export const showNotification: Props = (
  title = 'Notification',
  bodyMsg = 'This is one notification',
  iconPath = '../public/images/logo.png',
) => {
  const options = {
    body: bodyMsg,
    icon: iconPath,
  };

  const notification = new Notification(title, options);
  return notification as any;
}