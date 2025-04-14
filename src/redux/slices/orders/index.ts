import {Dispatch, createSlice} from '@reduxjs/toolkit';
import StoreFrontService from '../../../service/StoreFrontService';

import CartResponse from '../../../service/types/CartResponse';
import OrderState from '../../types/OrderState';
import OrderResponse from '../../../service/types/OrderResponse';
import AppState from '../../types/AppState';

import {selectOrder} from '../../selectors';
import {fetchCart} from '../cart';

const initialState: OrderState = {
  orderId: '',
  userId: '',
  lineItems: [],

  shippingAddress: {},

  billingDetails: [],
  status: 'Pending',
  placingOrder: false,
  orderPlaced: false,
  orderFailde: false,
  // createdAt: new Date(),
  orders: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setorder: (state, action) => {
      state.orderId = action.payload as string;
    },
    setAllOrders: (state, action) => {
      state.orders = action.payload;
    },
    setPlacingOrder: state => {
      state.placingOrder = true;
      state.orderFailde = false;
      state.orderPlaced = false;
    },
    setOrderPlaced: state => {
      state.placingOrder = false;
      state.orderFailde = false;
      state.orderPlaced = true;
    },
    setOrderFailed: state => {
      state.placingOrder = false;
      state.orderFailde = true;
      state.orderPlaced = false;
    },

    // setOrderDetails: (state , action) => {
    //   const {order} = action.payload;
    //   state.lineItems = order.lineItems,
    //   state.billingDetails= order.billingDetails,
    //   state.shipping = order.shipping,
    // },

    placeOrder: (state, action) => {
      const {lineItems, shippingAddress, billingDetails, createdAt, status} =
        action.payload as OrderResponse;
      return {
        ...state,

        lineItems: lineItems,

        shipping: shippingAddress,

        billingDetails: billingDetails,
        createdAt: createdAt,
        status: status,
      };
    },
    // buyAgainOrder: (state, action) => {
    //   const {lineItems, shippingAddress, billingDetails} =
    //     action.payload as OrderResponse;
    //   return {
    //     ...state,
    //     lineItems: lineItems,
    //     shippingAddress: shippingAddress,
    //     billingDetails: billingDetails,
    //   };
    // },
  },
});

export const {
  setOrder,
  setPlacingOrder,
  setOrderPlaced,
  setOrderFailed,
  placeOrder,
  setAllOrders,
} = orderSlice.actions;

export const placeOrders =
  (order: any) => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth, checkin} = getState();
    dispatch(setPlacingOrder());
    try {
      const orderResponse: OrderResponse = StoreFrontService.placeOrders(
        {token: auth.accessToken},
        order,
        checkin.cartId,
      );

      dispatch(setOrderPlaced());
      // Optionally, dispatch other actions related to successful order placement
    } catch (error) {
      console.error('Error placing order:', error);
      dispatch(setOrderFailed());
    } finally {
      dispatch(fetchCart(checkin.cartId));
    }
  };

export const getAllOrders =
  () => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth, checkin} = getState();
    dispatch(setPlacingOrder());
    StoreFrontService.getAllOrders(
      {token: auth.accessToken},
      checkin.userId,
    ).then(response => {
      dispatch(setAllOrders(response));
    });
  };

export const getOrders =
  () => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth, checkin} = getState();
    dispatch(setPlacingOrder());
    StoreFrontService.getOrders({token: auth.accessToken}, checkin.userId).then(
      response => {
        dispatch(setOrder(response));
      },
    );
  };

export const orderAgain =
  (newOrder: any) => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth, checkin} = getState();
    dispatch(setPlacingOrder());
    StoreFrontService.orderAgain(
      {token: auth.accessToken},
      newOrder,
      checkin.orderId,
    )
      .then((orderResponse: OrderResponse) => {
        dispatch(setOrderPlaced());

        // dispatch(placeOrder(orderResponse));
      })

      .catch(() => {
        dispatch(setOrderFailed());
      })
      .finally(() => {
        dispatch(fetchCart(checkin.cartId));
      });
  };
