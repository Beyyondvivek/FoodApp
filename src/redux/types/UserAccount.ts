import Address from '../../types/Address';
import BusinessDetails from '../../types/BussinessDetails';

export type UserDetails = {
  name?: string;
  email?: string;
  phone: string;
  addresses?: Address[];
};

export default interface UserAccount {
  userId: string;
  personal: UserDetails;
  business: BusinessDetails;
  defaultAddress: Address;
  loading: boolean;
}
