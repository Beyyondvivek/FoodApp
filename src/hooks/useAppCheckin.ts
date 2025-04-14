import {useSelector} from 'react-redux';
import {selectCartId, selectUserId} from '../redux/selectors';

export function useAppCheckin() {
  const cartId = useSelector(selectCartId);
  const userId = useSelector(selectUserId);

  return {cartId, userId};
}
