import AppState from '../types/AppState';
import UserAccount from '../types/UserAccount';

/** checking user auth */
export const selectCartId = (state: AppState) => state.checkin.cartId;
export const selectUserId = (state: AppState) => state.checkin.userId;
export const selectLoginProgress = (state: AppState) =>
  state.auth.loginState === 'loginprogress';
export const selectLoginSuccess = (state: AppState) =>
  state.auth.loginState === 'loginsuccess';
export const selectLoginFailed = (state: AppState) =>
  state.auth.loginState === 'loginfailed';
export const selectSignupFailed = (state: AppState) =>
  state.auth.loginState === 'signupfailed';
export const selectAuthErrorMessage = (state: AppState) =>
  state.auth.errorMessage;

/** user account */
export const userDetail = (state: AppState): UserAccount => state.user;
export const selectLoadingProfile = (state: AppState) => state.user.loading;

export const selectLoggedIn = (state: AppState) => state.auth.loggedIn;
export const selectOTPGenerated = (state: AppState) => state.auth.otp?.token;
export const selectOTPVerified = (state: AppState) => state.auth.otp?.verified;

/** Cart */
export const selectCartSize = (state: AppState) => state.cart.cartSize;
export const selectCart = (state: AppState) => state.cart;
export const selectCartItemQuantity = (state: AppState, sku: string) => {
  const skuItem = state.cart.lineItems?.find(element => element.sku === sku);
  if (skuItem) {
    return skuItem.quantity || 0;
  }
  return 0;
};
/** Order */
export const selectOrder = (state: AppState) => state.order;
export const selectPlacingOrder = (state: AppState) => state.order.placingOrder;
export const selectOrderPlaced = (state: AppState) => state.order.orderPlaced;
export const selectOrderFailed = (state: AppState) => state.order.orderFailde;
export const selectAllOrders = (state: AppState) => state.order.orders;
// export const selectOrderItemQuantity = (state: AppState, sku: string) => {
//   const skuItem = state.cart.lineItems?.find(element => element.sku === sku);
//   if (skuItem) {
//     return skuItem.quantity || 0;
//   }
//   return 0;
// };

export const selectNotifications = (state: AppState) => {
  console.log('selecting  otifications::', state.notification);
  return state.notification.notifications;
};

export const selectAllNotifications = (state: AppState) =>
  state.notification.notification;

export const selectCount = (state: AppState) =>
  state.notification.unreadcount || 0;
