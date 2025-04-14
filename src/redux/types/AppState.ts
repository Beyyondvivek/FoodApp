import UserState from './UserAccount';
import CartState from './CartState';
import AuthState from './AuthState';
import CheckinState from './CheckinState';
import OrderState from './OrderState';
import NotificationState from './NotificationState';

export default interface AppState {
  auth: AuthState;
  cart: CartState;
  user: UserState;
  order: OrderState;
  checkin: CheckinState;
  notification: NotificationState;
}
