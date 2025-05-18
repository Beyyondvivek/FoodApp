/* eslint-disable react-native/no-inline-styles */
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Switch,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import {Profile} from '../../utils/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Button from '../../components/Button';
// import useNavigate from '../../hooks/useNavigate';

// const ProfileSettingsScreen: React.FC = () => {
//   const [profile, setProfile] = useState<Profile>({
//     id: 1,
//     name: 'Alex Johnson',
//     email: 'alex@example.com',
//     avatar: 'image1.jpg',
//     dietaryPreferences: ['Vegetarian', 'Gluten-Free'],
//     notificationsEnabled: true,
//   });

//   const getAvatarSource = () => {
//     switch (profile.avatar) {
//       case 'image1.jpg':
//         return require('../../assets/image/image1.jpg');
//       default:
//         return require('../../assets/image/image1.jpg');
//     }
//   };

//   const toggleNotification = () => {
//     setProfile({
//       ...profile,
//       notificationsEnabled: !profile.notificationsEnabled,
//     });
//   };

//   const updatePreference = (preference: string, add: boolean) => {
//     setProfile(prev => ({
//       ...prev,
//       dietaryPreferences: add
//         ? [...prev.dietaryPreferences, preference]
//         : prev.dietaryPreferences.filter(p => p !== preference),
//     }));
//   };
//   const {gotoProfileScreen} = useNavigate();

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Image source={getAvatarSource()} style={styles.avatar} />
//         <Text style={styles.nameText}>{profile.name}</Text>
//         <Text style={styles.emailText}>{profile.email}</Text>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Personal Information</Text>
//         <TouchableOpacity style={styles.settingItem}>
//           <Text style={styles.settingText}>Edit Name</Text>
//           <MaterialIcons name="chevron-right" size={24} color="#666" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.settingItem}>
//           <Text style={styles.settingText}>Change Email</Text>
//           <MaterialIcons name="chevron-right" size={24} color="#666" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.settingItem}>
//           <Text style={styles.settingText}>Change Avatar</Text>
//           <MaterialIcons name="chevron-right" size={24} color="#666" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Dietary Preferences</Text>
//         {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'].map(pref => (
//           <View key={pref} style={styles.preferenceItem}>
//             <Text style={styles.settingText}>{pref}</Text>
//             <Switch
//               value={profile.dietaryPreferences.includes(pref)}
//               onValueChange={value => updatePreference(pref, value)}
//               trackColor={{false: '#d3d3d3', true: '#6200ea'}}
//               thumbColor={
//                 profile.dietaryPreferences.includes(pref) ? '#fff' : '#f4f3f4'
//               }
//             />
//           </View>
//         ))}
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Notifications</Text>
//         <View style={styles.settingItem}>
//           <Text style={styles.settingText}>Enable Notifications</Text>
//           <Switch
//             value={profile.notificationsEnabled}
//             onValueChange={toggleNotification}
//             trackColor={{false: '#d3d3d3', true: '#6200ea'}}
//             thumbColor={profile.notificationsEnabled ? '#fff' : '#f4f3f4'}
//           />
//         </View>
//       </View>
//       <Button
//         style={styles.logoutButton}
//         title="Log Out"
//         onPress={gotoProfileScreen}
//       />
//       {/* <Text style={styles.logoutText}>Log Out</Text> */}
//       {/* </Butto> */}
//     </ScrollView>
//   );
// };

// export default ProfileSettingsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 20,
//     height: '100%',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//     backgroundColor: '#e0e0e0',
//   },
//   nameText: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#333',
//   },
//   emailText: {
//     fontSize: 16,
//     color: '#666',
//     // marginBottom: 20,
//   },
//   section: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 6,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#333',
//     marginBottom: 15,
//   },
//   settingItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   preferenceItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   settingText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   logoutButton: {
//     backgroundColor: '#ff4444',
//     borderRadius: 10,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 50,
//   },
//   logoutText: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '500',
//   },
// });

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Switch,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Modal,
//   TextInput,
// } from 'react-native';
// import {Profile} from '../../utils/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Button from '../../components/Button';
// import useNavigate from '../../hooks/useNavigate';
// import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

// const ProfileSettingsScreen: React.FC = () => {
//   const [profile, setProfile] = useState<Profile>({
//     id: 1,
//     name: 'Alex Johnson',
//     email: 'alex@example.com',
//     avatar: 'default', // Use a string identifier for default
//     dietaryPreferences: ['Vegetarian', 'Gluten-Free'],
//     notificationsEnabled: true,
//   });
//   const [isNameModalVisible, setNameModalVisible] = useState(false);
//   const [isAvatarModalVisible, setAvatarModalVisible] = useState(false);
//   const [newName, setNewName] = useState(profile.name);

//   // Map avatar string to image source
//   const getAvatarSource = () => {
//     if (profile.avatar === 'default') {
//       return require('../../assets/image/image1.jpg');
//     }
//     return {uri: profile.avatar}; // Treat as URI for picked images
//   };

//   const toggleNotification = () => {
//     setProfile({
//       ...profile,
//       notificationsEnabled: !profile.notificationsEnabled,
//     });
//   };

//   const updatePreference = (preference: string, add: boolean) => {
//     setProfile(prev => ({
//       ...prev,
//       dietaryPreferences: add
//         ? [...prev.dietaryPreferences, preference]
//         : prev.dietaryPreferences.filter(p => p !== preference),
//     }));
//   };

//   const handleSaveName = () => {
//     if (newName.trim()) {
//       setProfile(prev => ({...prev, name: newName.trim()}));
//       setNameModalVisible(false);
//     }
//   };

//   const handlePickImage = (source: 'gallery' | 'camera') => {
//     const options = {
//       mediaType: 'photo' as const,
//       quality: 1 as const, // Explicitly typed as PhotoQuality
//     };

//     const callback = (response: any) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else if (response.assets && response.assets[0].uri) {
//         setProfile(prev => ({
//           ...prev,
//           avatar: response.assets[0].uri, // Store URI as string
//         }));
//         setAvatarModalVisible(false);
//       }
//     };

//     if (source === 'gallery') {
//       launchImageLibrary(options, callback);
//     } else {
//       launchCamera(options, callback);
//     }
//   };

//   const {gotoProfileScreen} = useNavigate();

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Image source={getAvatarSource()} style={styles.avatar} />
//         <Text style={styles.nameText}>{profile.name}</Text>
//         <Text style={styles.emailText}>{profile.email}</Text>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Personal Information</Text>
//         <TouchableOpacity
//           style={styles.settingItem}
//           onPress={() => {
//             setNewName(profile.name);
//             setNameModalVisible(true);
//           }}>
//           <Text style={styles.settingText}>Edit Name</Text>
//           <MaterialIcons name="chevron-right" size={24} color="#666" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.settingItem}>
//           <Text style={styles.settingText}>Change Email</Text>
//           <MaterialIcons name="chevron-right" size={24} color="#666" />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.settingItem}
//           onPress={() => setAvatarModalVisible(true)}>
//           <Text style={styles.settingText}>Change Avatar</Text>
//           <MaterialIcons name="chevron-right" size={24} color="#666" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Dietary Preferences</Text>
//         {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'].map(pref => (
//           <View key={pref} style={styles.preferenceItem}>
//             <Text style={styles.settingText}>{pref}</Text>
//             <Switch
//               value={profile.dietaryPreferences.includes(pref)}
//               onValueChange={value => updatePreference(pref, value)}
//               trackColor={{false: '#d3d3d3', true: '#6200ea'}}
//               thumbColor={
//                 profile.dietaryPreferences.includes(pref) ? '#fff' : '#f4f3f4'
//               }
//             />
//           </View>
//         ))}
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Notifications</Text>
//         <View style={styles.settingItem}>
//           <Text style={styles.settingText}>Enable Notifications</Text>
//           <Switch
//             value={profile.notificationsEnabled}
//             onValueChange={toggleNotification}
//             trackColor={{false: '#d3d3d3', true: '#6200ea'}}
//             thumbColor={profile.notificationsEnabled ? '#fff' : '#f4f3f4'}
//           />
//         </View>
//       </View>
//       <Button
//         style={styles.logoutButton}
//         title="Log Out"
//         onPress={gotoProfileScreen}
//       />

//       {/* Edit Name Modal */}
//       <Modal
//         visible={isNameModalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setNameModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Edit Name</Text>
//             <TextInput
//               style={styles.modalInput}
//               value={newName}
//               onChangeText={setNewName}
//               placeholder="Enter your name"
//               placeholderTextColor="#888"
//             />
//             <View style={styles.modalButtonContainer}>
//               <TouchableOpacity
//                 style={[styles.modalButton, styles.cancelButton]}
//                 onPress={() => setNameModalVisible(false)}>
//                 <Text style={styles.modalButtonText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.modalButton, styles.saveButton]}
//                 onPress={handleSaveName}>
//                 <Text style={[styles.modalButtonText, {color: '#fff'}]}>
//                   Save
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Change Avatar Modal */}
//       <Modal
//         visible={isAvatarModalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setAvatarModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Change Profile Picture</Text>
//             <TouchableOpacity
//               style={[styles.modalButton, styles.uploadButton]}
//               onPress={() => handlePickImage('gallery')}>
//               <Text style={[styles.modalButtonText, {color: '#fff'}]}>
//                 Pick from Gallery
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.modalButton, styles.uploadButton]}
//               onPress={() => handlePickImage('camera')}>
//               <Text style={[styles.modalButtonText, {color: '#fff'}]}>
//                 Take a Photo
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.modalButton, styles.cancelButton]}
//               onPress={() => setAvatarModalVisible(false)}>
//               <Text style={styles.modalButtonText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// };

// export default ProfileSettingsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 20,
//     height: '100%',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//     backgroundColor: '#e0e0e0',
//   },
//   nameText: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#333',
//   },
//   emailText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   section: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 6,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#333',
//     marginBottom: 15,
//   },
//   settingItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   preferenceItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   settingText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   logoutButton: {
//     backgroundColor: '#ff4444',
//     borderRadius: 10,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 50,
//   },
//   // Modal styles
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 20,
//   },
//   modalInput: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 10,
//     fontSize: 16,
//     width: '100%',
//     marginBottom: 20,
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   modalButton: {
//     flex: 1,
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginHorizontal: 5,
//     marginVertical: 5,
//   },
//   cancelButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   saveButton: {
//     backgroundColor: '#6200ea',
//   },
//   uploadButton: {
//     backgroundColor: '#6200ea',
//     marginBottom: 10,
//   },
//   modalButtonText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//   },
// });

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import {Profile} from '../../utils/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
import useNavigate from '../../hooks/useNavigate';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const ProfileSettingsScreen: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: 'default', // Use a string identifier for default
    dietaryPreferences: ['Vegetarian', 'Gluten-Free'],
    notificationsEnabled: true,
  });
  const [isNameModalVisible, setNameModalVisible] = useState(false);
  const [isAvatarModalVisible, setAvatarModalVisible] = useState(false);
  const [newName, setNewName] = useState(profile.name);
  const [tempAvatar, setTempAvatar] = useState<string | null>(null); // Temporary avatar for preview

  // Map avatar string to image source
  const getAvatarSource = (avatar: string | null) => {
    if (avatar === 'default' || !avatar) {
      return require('../../assets/image/image1.jpg');
    }
    return {uri: avatar};
  };

  const toggleNotification = () => {
    setProfile({
      ...profile,
      notificationsEnabled: !profile.notificationsEnabled,
    });
  };

  const updatePreference = (preference: string, add: boolean) => {
    setProfile(prev => ({
      ...prev,
      dietaryPreferences: add
        ? [...prev.dietaryPreferences, preference]
        : prev.dietaryPreferences.filter(p => p !== preference),
    }));
  };

  const handleSaveName = () => {
    if (newName.trim()) {
      setProfile(prev => ({...prev, name: newName.trim()}));
      setNameModalVisible(false);
    }
  };

  const handlePickImage = (source: 'gallery' | 'camera') => {
    const options = {
      mediaType: 'photo' as const,
      quality: 1 as const, // Explicitly typed as PhotoQuality
    };

    const callback = (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets[0].uri) {
        setTempAvatar(response.assets[0].uri); // Store for preview
      }
    };

    if (source === 'gallery') {
      launchImageLibrary(options, callback);
    } else {
      launchCamera(options, callback);
    }
  };

  const handleSaveAvatar = () => {
    if (tempAvatar) {
      setProfile(prev => ({...prev, avatar: tempAvatar}));
    }
    setTempAvatar(null);
    setAvatarModalVisible(false);
  };

  const handleCancelAvatar = () => {
    setTempAvatar(null);
    setAvatarModalVisible(false);
  };

  const {gotoProfileScreen} = useNavigate();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={getAvatarSource(profile.avatar)} style={styles.avatar} />
        <Text style={styles.nameText}>{profile.name}</Text>
        <Text style={styles.emailText}>{profile.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => {
            setNewName(profile.name);
            setNameModalVisible(true);
          }}>
          <Text style={styles.settingText}>Edit Name</Text>
          <MaterialIcons name="chevron-right" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Change Email</Text>
          <MaterialIcons name="chevron-right" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => setAvatarModalVisible(true)}>
          <Text style={styles.settingText}>Change Avatar</Text>
          <MaterialIcons name="chevron-right" size={24} color="#666" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dietary Preferences</Text>
        {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'].map(pref => (
          <View key={pref} style={styles.preferenceItem}>
            <Text style={styles.settingText}>{pref}</Text>
            <Switch
              value={profile.dietaryPreferences.includes(pref)}
              onValueChange={value => updatePreference(pref, value)}
              trackColor={{false: '#d3d3d3', true: '#6200ea'}}
              thumbColor={
                profile.dietaryPreferences.includes(pref) ? '#fff' : '#f4f3f4'
              }
            />
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Enable Notifications</Text>
          <Switch
            value={profile.notificationsEnabled}
            onValueChange={toggleNotification}
            trackColor={{false: '#d3d3d3', true: '#6200ea'}}
            thumbColor={profile.notificationsEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>
      <Button
        style={styles.logoutButton}
        title="Log Out"
        onPress={gotoProfileScreen}
      />

      {/* Edit Name Modal */}
      <Modal
        visible={isNameModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setNameModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Name</Text>
            <TextInput
              style={styles.modalInput}
              value={newName}
              onChangeText={setNewName}
              placeholder="Enter your name"
              placeholderTextColor="#888"
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setNameModalVisible(false)}>
                {/* <MaterialIcons
                  name="cancel"
                  size={20}
                  color="#333"
                  style={styles.buttonIcon}
                /> */}
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleSaveName}>
                {/* <MaterialIcons
                  name="save"
                  size={20}
                  color="#fff"
                  style={styles.buttonIcon}
                /> */}
                <Text style={[styles.modalButtonText, {color: '#fff'}]}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Change Avatar Modal */}
      <Modal
        visible={isAvatarModalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCancelAvatar}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Change Profile Picture</Text>
            <Image
              source={getAvatarSource(tempAvatar || profile.avatar)}
              style={styles.avatarPreview}
            />
            <TouchableOpacity
              style={[styles.modalButton, styles.uploadButton]}
              onPress={() => handlePickImage('gallery')}>
              <MaterialIcons
                name="file-upload"
                size={20}
                color="#000"
                style={styles.buttonIcon}
              />
              <Text style={[styles.modalButtonText, {color: '#000'}]}>
                Upload from Gallery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.uploadButton]}
              onPress={() => handlePickImage('camera')}>
              <MaterialIcons
                name="camera"
                size={20}
                color="black"
                style={styles.buttonIcon}
              />
              <Text style={[styles.modalButtonText, {color: '#000'}]}>
                Take a Photo
              </Text>
            </TouchableOpacity>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCancelAvatar}>
                {/* <MaterialIcons
                  name="cancel"
                  size={20}
                  color="#333"
                  style={styles.buttonIcon}
                /> */}
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleSaveAvatar}
                disabled={!tempAvatar}>
                {/* <MaterialIcons
                  name="save"
                  size={20}
                  color="#fff"
                  style={styles.buttonIcon}
                /> */}
                <Text style={[styles.modalButtonText, {color: '#fff'}]}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ProfileSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    height: '100%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  nameText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  emailText: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingText: {
    fontSize: 16,
    color: '#444',
  },
  logoutButton: {
    backgroundColor: '#FCCD2A',
    borderRadius: 10,
    paddingVertical: 0,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    width: '100%',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    flexDirection: 'row', // Align icon and text horizontally
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  saveButton: {
    backgroundColor: '#6200ea',
  },
  uploadButton: {
    // backgroundColor: '#6200ea',
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: 0, // Space between icon and text
  },
  avatarPreview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  buttonIcon: {
    marginRight: 8, // Space between icon and text
  },
});
