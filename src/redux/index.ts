import {configureStore} from '@reduxjs/toolkit';
import {cartSlice} from './slices/cart';
import {userSlice} from './slices/user';
import {authSlice} from './slices/auth';
import {checkinSlice} from './slices/checkin';
import {orderSlice} from './slices/orders';
import {notificationSlice} from './slices/notification';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    auth: authSlice.reducer,
    checkin: checkinSlice.reducer,
    order: orderSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export default store;
