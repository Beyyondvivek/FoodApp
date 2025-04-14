export type OTPState = {
  token: string;
  error: string;
  verified: boolean;
};
export default interface AuthState {
  loggedIn: boolean;
  userId: string;
  name?: string;
  accessToken: string;
  otp?: OTPState;
  errorMessage?: string;
  loginState:
    | 'loggedout'
    | 'loginprogress'
    | 'loginfailed'
    | 'loginsuccess'
    | 'loggedin'
    | 'signupfailed';
}
