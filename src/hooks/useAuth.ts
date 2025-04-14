import {useDispatch, useSelector} from 'react-redux';
import {
  loginByPin,
  logoutFromDevice,
  signupByPin,
  authAPI,
} from '../redux/slices/auth';
import {
  selectAuthErrorMessage,
  selectLoggedIn,
  selectLoginFailed,
  selectLoginProgress,
  selectLoginSuccess,
  selectSignupFailed,
} from '../redux/selectors';
import {useAppCheckin} from './useAppCheckin';

export default function useAuth() {
  const {userId} = useAppCheckin();
  const dispatch = useDispatch();

  const loginProgress = useSelector(selectLoginProgress);
  const loginSuccess = useSelector(selectLoginSuccess);
  const loginFailed = useSelector(selectLoginFailed);
  const signupFailed = useSelector(selectSignupFailed);
  const errorMessage = useSelector(selectAuthErrorMessage);

  function login(credential: string, pin: string) {
    dispatch(loginByPin(credential, pin));
  }

  function signup(credential: string, pin: string) {
    dispatch(signupByPin(credential, pin));
  }

  function logout() {
    dispatch(logoutFromDevice());
  }

  function resetErrors() {
    dispatch(authAPI.resetAuthError());
  }

  const loggedIn = useSelector(selectLoggedIn);

  return {
    loggedIn,
    userId,
    login,
    signup,
    logout,
    loginProgress,
    loginSuccess,
    loginFailed,
    signupFailed,
    errorMessage,
    resetErrors,
  };
}
