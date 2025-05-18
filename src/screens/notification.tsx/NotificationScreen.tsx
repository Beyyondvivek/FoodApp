// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {useNavigation} from '@react-navigation/native';

// // Define the notification type
// interface Notification {
//   id: string;
//   user: string;
//   action: string;
//   target: string;
//   targetId: string; // ID of the related item (e.g., recipe ID)
//   targetScreen: keyof RootStackParamList; // Screen to navigate to
//   timestamp: string;
//   read: boolean;
// }

// const NotificationScreen = () => {
//   const navigation = useNavigation();

//   // Sample notification data
//   const [notifications, setNotifications] = useState<Notification[]>([
//     {
//       id: '1',
//       user: 'Alice',
//       action: 'liked your recipe',
//       target: 'Mango Smoothie',
//       targetId: '1',
//       targetScreen: 'RecipePage',
//       timestamp: '2 hours ago',
//       read: false,
//     },
//     {
//       id: '2',
//       user: 'Bob',
//       action: 'commented on your recipe',
//       target: 'Berry Salad',
//       targetId: '2',
//       targetScreen: 'RecipePage',
//       timestamp: '5 hours ago',
//       read: false,
//     },
//     {
//       id: '3',
//       user: 'Charlie',
//       action: 'followed you',
//       target: '',
//       targetId: 'charlie123',
//       targetScreen: 'ProfileScreen',
//       timestamp: '1 day ago',
//       read: true,
//     },
//     {
//       id: '4',
//       user: 'Diana',
//       action: 'liked your recipe',
//       target: 'Pineapple Salsa',
//       targetId: '3',
//       targetScreen: 'RecipePage',
//       timestamp: '2 days ago',
//       read: true,
//     },
//   ]);

//   const handleMarkAsRead = (id: string) => {
//     setNotifications(prev =>
//       prev.map(notification =>
//         notification.id === id
//           ? {...notification, read: !notification.read}
//           : notification,
//       ),
//     );
//   };

//   const handleDelete = (id: string) => {
//     Alert.alert(
//       'Delete Notification',
//       'Are you sure you want to delete this notification?',
//       [
//         {text: 'Cancel', style: 'cancel'},
//         {
//           text: 'Delete',
//           style: 'destructive',
//           onPress: () => {
//             setNotifications(prev =>
//               prev.filter(notification => notification.id !== id),
//             );
//           },
//         },
//       ],
//     );
//   };

//   const handleNotificationPress = (notification: Notification) => {
//     // Mark as read when tapped
//     if (!notification.read) {
//       handleMarkAsRead(notification.id);
//     }
//     // Navigate to the related screen
//     if (notification.targetScreen && notification.targetId) {
//       navigation.navigate(notification.targetScreen as any, {
//         id: notification.targetId,
//       });
//     }
//   };

//   const renderNotification = ({item}: {item: Notification}) => (
//     <TouchableOpacity
//       style={[styles.notificationCard, item.read ? styles.read : styles.unread]}
//       onPress={() => handleNotificationPress(item)}>
//       <View style={styles.notificationContent}>
//         <Text style={styles.notificationText}>
//           <Text style={styles.user}>{item.user}</Text> {item.action}{' '}
//           {item.target ? <Text style={styles.target}>{item.target}</Text> : ''}
//         </Text>
//         <Text style={styles.timestamp}>{item.timestamp}</Text>
//       </View>
//       <View style={styles.actions}>
//         <TouchableOpacity
//           onPress={() => handleMarkAsRead(item.id)}
//           style={styles.actionButton}>
//           <MaterialIcons
//             name={item.read ? 'mark-email-unread' : 'mark-email-read'}
//             size={20}
//             color={item.read ? '#718096' : '#A064FF'}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => handleDelete(item.id)}
//           style={styles.actionButton}>
//           <MaterialIcons name="delete" size={20} color="#FF3B30" />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>Notifications</Text>
//       {notifications.length === 0 ? (
//         <View style={styles.emptyContainer}>
//           <MaterialIcons name="notifications-off" size={48} color="#718096" />
//           <Text style={styles.emptyText}>No notifications yet</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={notifications}
//           renderItem={renderNotification}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.list}
//           showsVerticalScrollIndicator={false}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#1A202C',
//     marginBottom: 16,
//     fontFamily: 'System',
//     letterSpacing: 0.5,
//   },
//   list: {
//     paddingBottom: 16,
//   },
//   notificationCard: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     marginBottom: 12,
//     padding: 12,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   unread: {
//     borderLeftWidth: 4,
//     borderLeftColor: '#A064FF',
//   },
//   read: {
//     borderLeftWidth: 4,
//     borderLeftColor: 'transparent',
//   },
//   notificationContent: {
//     flex: 1,
//   },
//   notificationText: {
//     fontSize: 16,
//     color: '#2D3748',
//     fontFamily: 'System',
//     lineHeight: 22,
//   },
//   user: {
//     fontWeight: '600',
//     color: '#1A202C',
//   },
//   target: {
//     fontWeight: '500',
//     color: '#4361EE',
//   },
//   timestamp: {
//     fontSize: 12,
//     color: '#718096',
//     marginTop: 4,
//     fontFamily: 'System',
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   actionButton: {
//     padding: 8,
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#718096',
//     marginTop: 8,
//     fontFamily: 'System',
//   },
// });

// export default NotificationScreen;

import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Animated,
  Pressable,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
// import { StatusBar } from 'react-native';

// Define the RootStackParamList type (minimal version for this example)
type RootStackParamList = {
  RecipePage: {id: string};
  ProfileScreen: {id: string};
  [key: string]: any;
};

// Define the navigation prop type
type NavigationProp = any;

// Define the notification type
interface Notification {
  id: string;
  user: string;
  action: string;
  target: string;
  targetId: string;
  targetScreen: keyof RootStackParamList;
  timestamp: string;
  read: boolean;
}

const NotificationScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      user: 'Alice',
      action: 'liked your recipe',
      target: 'Mango Smoothie',
      targetId: '1',
      targetScreen: 'RecipePage',
      timestamp: '2 hours ago',
      read: false,
    },
    {
      id: '2',
      user: 'Bob',
      action: 'commented on your recipe',
      target: 'Berry Salad',
      targetId: '2',
      targetScreen: 'RecipePage',
      timestamp: '5 hours ago',
      read: false,
    },
    {
      id: '3',
      user: 'Charlie',
      action: 'followed you',
      target: '',
      targetId: 'charlie123',
      targetScreen: 'ProfileScreen',
      timestamp: '1 day ago',
      read: true,
    },
    {
      id: '4',
      user: 'Diana',
      action: 'liked your recipe',
      target: 'Pineapple Salsa',
      targetId: '3',
      targetScreen: 'RecipePage',
      timestamp: '2 days ago',
      read: true,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotificationId, setSelectedNotificationId] = useState<
    string | null
  >(null);
  const slideAnim = useRef(new Animated.Value(300)).current; // Start off-screen (bottom)

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? {...notification, read: !notification.read}
          : notification,
      ),
    );
  };

  const handleDelete = () => {
    if (selectedNotificationId) {
      setNotifications(prev =>
        prev.filter(notification => notification.id !== selectedNotificationId),
      );
      closeModal();
    }
  };

  const openModal = (id: string) => {
    setSelectedNotificationId(id);
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
      setSelectedNotificationId(null);
    });
  };

  const handleNotificationPress = (notification: Notification) => {
    if (!notification.read) {
      handleMarkAsRead(notification.id);
    }
    if (notification.targetScreen && notification.targetId) {
      navigation.navigate(notification.targetScreen as any, {
        id: notification.targetId,
      });
    }
  };

  const renderNotification = ({item}: {item: Notification}) => (
    <TouchableOpacity
      style={[styles.notificationCard, item.read ? styles.read : styles.unread]}
      onPress={() => handleNotificationPress(item)}
      onLongPress={() => openModal(item.id)}
      activeOpacity={0.7}>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>
          <Text style={styles.user}>{item.user}</Text> {item.action}{' '}
          {item.target ? <Text style={styles.target}>{item.target}</Text> : ''}
        </Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => handleMarkAsRead(item.id)}
          style={styles.actionButton}>
          <MaterialIcons
            name={item.read ? 'mark-email-unread' : 'mark-email-read'}
            size={20}
            color={item.read ? '#718096' : '#A064FF'}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.header}>Notifications</Text> */}
      {/* <StatusBar
        // translucent
        backgroundColor="black"
        barStyle="dark-content"
      /> */}
      {notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MaterialIcons name="notifications-off" size={48} color="#718096" />
          <Text style={styles.emptyText}>No notifications yet</Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Delete Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="none"
        onRequestClose={closeModal}>
        <Pressable style={styles.modalOverlay} onPress={closeModal}>
          <Animated.View
            style={[
              styles.modalContainer,
              {
                transform: [{translateY: slideAnim}],
              },
            ]}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Delete Notification</Text>
              <Text style={styles.modalMessage}>
                Are you sure you want to delete this notification?
              </Text>
              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={closeModal}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.deleteButton]}
                  onPress={handleDelete}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 16,
    fontFamily: 'System',
    letterSpacing: 0.5,
  },
  list: {
    paddingBottom: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  unread: {
    borderLeftWidth: 4,
    borderLeftColor: '#A064FF',
  },
  read: {
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
    color: '#2D3748',
    fontFamily: 'System',
    lineHeight: 22,
  },
  user: {
    fontWeight: '600',
    color: '#1A202C',
  },
  target: {
    fontWeight: '500',
    color: '#4361EE',
  },
  timestamp: {
    fontSize: 12,
    color: '#718096',
    marginTop: 4,
    fontFamily: 'System',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#718096',
    marginTop: 8,
    fontFamily: 'System',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A202C',
    marginBottom: 10,
    fontFamily: 'System',
  },
  modalMessage: {
    fontSize: 14,
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'System',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#E2E8F0',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#1A202C',
    fontFamily: 'System',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  deleteButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'System',
  },
});

export default NotificationScreen;
