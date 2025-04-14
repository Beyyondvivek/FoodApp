import {createSlice, Dispatch} from '@reduxjs/toolkit';
import NotificationState from '../../types/NotificationState';
import AppState from '../../types/AppState';
import StoreFrontService from '../../../service/StoreFrontService';

const initialState: NotificationState = {
  notifications: [], // Stores all notifications
  loading: false,
  error: false,
  unreadcount: 0,
  notification: [],
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload; // Set all notifications
    },
    setLoading: state => {
      state.loading = true;
      state.error = false;
    },
    setError: state => {
      state.loading = false;
      state.error = true;
    },
    setLoaded: state => {
      state.loading = false;
      state.error = false;
    },
    setUnreadCount: (state, action) => {
      state.unreadcount = action.payload; // Update unread count
    },

    resetUnreadCount: state => {
      state.unreadcount = 0; // Reset unread count
    },
  },
});

export const {
  setNotifications,
  setLoading,
  setError,
  setLoaded,
  setUnreadCount,
  resetUnreadCount,
} = notificationSlice.actions;

export const getAllNotifications =
  () => async (dispatch: Dispatch, getState: () => AppState) => {
    const {auth, checkin} = getState();
    dispatch(setLoading());

    try {
      const response = await StoreFrontService.getAllNotifications(
        {token: auth.accessToken},
        checkin.userId,
      );

      dispatch(setNotifications(response)); // Store notifications
      const unreadCount = response.reduce(
        (total: number, notification: any) => {
          return total + (notification.unreadCount || 0); // Sum up unread counts
        },
        0,
      );
      dispatch(setUnreadCount(unreadCount)); // Update unread count
    } catch (error) {
      dispatch(setError());
      console.error('Error fetching notifications:', error);
    }
  };

export const markNotificationsAsRead =
  () => async (dispatch: Dispatch, getState: () => AppState) => {
    try {
      const {auth, checkin} = getState();
      await StoreFrontService.markAllNotificationsAsRead(
        {token: auth.accessToken},
        checkin.userId,
      );
      dispatch(resetUnreadCount());
    } catch (error) {
      console.error('Error marking notifications as read:', error);
    }
  };
