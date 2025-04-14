import {Dispatch, createSlice} from '@reduxjs/toolkit';
import StoreFrontService from '../../../service/StoreFrontService';
import CartState from '../../types/CartState';
import CartResponse from '../../../service/types/CartResponse';

const initialState: CartState = {
  cartId: '',
  cartSize: 0,
  lineItems: [],
  shipping: {address: {}},
  billing: {breakup: [], total: 0},
  promotions: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartId: (state, action) => {
      state.cartId = action.payload as string;
    },
    updateCart: (state, action) => {
      const {cartSize, lineItems, shipping, billing, promotions} =
        action.payload as CartResponse;
      return {
        ...state,
        cartSize: cartSize,
        lineItems: lineItems,
        shipping,
        billing,
        promotions,
      };
    },
    clearCart: state => {
      return initialState;
    },
  },
});

export const {updateCart, setCartId, clearCart} = cartSlice.actions;

export const createCart = () => (dispatch: Dispatch) => {
  StoreFrontService.createCart().then((response: CartResponse) => {
    dispatch(setCartId(response.cartId));
  });
};

export const fetchCart = (cartId: string) => (dispatch: Dispatch) => {
  StoreFrontService.fetchCart(cartId).then((response: CartResponse) => {
    dispatch(updateCart(response));
  });
};

export const addToCart =
  (cartId: string, sku: string, quantity: number) => (dispatch: Dispatch) => {
    StoreFrontService.addToCart(cartId, sku, quantity)
      .then((cartResponse: CartResponse) => {
        dispatch(updateCart(cartResponse));
      })
      .catch(() => {});
  };

export const applyPromoToCart =
  (cartId: string, code: string) => (dispatch: Dispatch) => {
    StoreFrontService.applyPromo(cartId, code)
      .then((cartResponse: CartResponse) => {
        dispatch(updateCart(cartResponse));
      })
      .catch(() => {});
  };

export const removePromoFromCart =
  (cartId: string, code: string) => (dispatch: Dispatch) => {
    StoreFrontService.removePromo(cartId, code)
      .then((cartResponse: CartResponse) => {
        dispatch(updateCart(cartResponse));
      })
      .catch(() => {});
  };

export const removeFromCart =
  (cartId: string, sku: string, quantity: number) => (dispatch: Dispatch) => {
    StoreFrontService.removeFromCart(cartId, sku, quantity)
      .then((cartResponse: CartResponse) => {
        dispatch(updateCart(cartResponse));
      })
      .catch(() => {});
  };

export const addShipingAddress = (cartId: string, address: any) => dispatch => {
  StoreFrontService.addShippingAddress(cartId, address)
    .then((cartResponse: CartResponse) => {
      dispatch(updateCart(cartResponse));
    })
    .catch(() => {});
};

export default cartSlice.reducer;
