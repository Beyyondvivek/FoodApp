import {BillingDetails, CartLineItem, ShippingDetails} from './CartState';

// export type OrderItem = {};
export default interface OrderState {
  userId: string;
  orderId: string;
  shippingAddress: ShippingDetails;
  billingDetails: BillingDetails;
  lineItems: CartLineItem[];
  status: 'Pending' | 'Completed' | 'Canceled';
  placingOrder: boolean;
  orderPlaced: boolean;
  orderFailde: boolean;
  createdAt: Date;
  orders: any[];
}
