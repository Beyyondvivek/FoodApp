import BillingDetails from '../../types/BillingDetails';
import LineItem from '../../types/LineItem';
import ShippingDetails from '../../types/ShippingDetails';
import PromotionState from './PromotionState';

export default interface CartState {
  cartId: string;
  cartSize: number;
  lineItems: LineItem[];
  shipping: ShippingDetails;
  billing: BillingDetails;
  promotions: PromotionState[];
}
