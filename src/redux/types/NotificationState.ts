import ExtendedNotification from '../../types/Notification';

export default interface NotificationState {
  notifications: ExtendedNotification[];
  notification: any[];
  unreadcount: number;
  loading: boolean;
  error: boolean;
}
