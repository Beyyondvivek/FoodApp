import useAuth from './useAuth';
import {useAppCheckin} from './useAppCheckin';

export function useAppInit() {
  const {cartId} = useAppCheckin();
  const {loggedIn, userId} = useAuth();

  return {loggedIn, userId, cartId};
}
