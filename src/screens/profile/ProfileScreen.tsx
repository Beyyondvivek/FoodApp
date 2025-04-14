import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
// import {StackNavigationProp} from '@react-navigation/stack';

// type ProfileScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'Profile'
// >;

// interface Props {
//   navigation: ProfileScreenNavigationProp;
// }

const ProfileScreen: React.FC<Props> = ({navigation}) => {
  const [bio, setBio] = useState('Food enthusiast 🍔 | Chef in training 👩🍳');
  const [isEditing, setIsEditing] = useState(false);

  const [profilePhoto, setProfilePhoto] = useState(
    'https://example.com/profile.jpg',
  );
  

  const handleChoosePhoto = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setProfilePhoto(pickerResult.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{width: 24}} /> {/* Spacer */}
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          onPress={handleChoosePhoto}
          style={styles.avatarContainer}>
          <Image source={{uri: profilePhoto}} style={styles.avatar} />
          <Icon
            name="camera"
            size={24}
            color="white"
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

        <Text style={styles.name}>John Doe</Text>

        {isEditing ? (
          <TextInput
            style={styles.bioInput}
            value={bio}
            onChangeText={setBio}
            multiline
            autoFocus
            placeholder="Tell us about yourself..."
          />
        ) : (
          <Text style={styles.bio}>{bio}</Text>
        )}

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setIsEditing(!isEditing)}>
          <Text style={styles.editButtonText}>
            {isEditing ? 'Save Bio' : 'Edit Bio'}
          </Text>
        </TouchableOpacity>

        <View style={styles.settings}>
          <TouchableOpacity style={styles.settingItem}>
            <Icon name="lock-closed" size={20} color="#333" />
            <Text style={styles.settingText}>Privacy Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Icon name="help-circle" size={20} color="#333" />
            <Text style={styles.settingText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Icon name="log-out" size={20} color="#333" />
            <Text style={styles.settingText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4CAF50',
    paddingTop: StatusBar.currentHeight || 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
    padding: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  bioInput: {
    width: '100%',
    minHeight: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 30,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  settings: {
    width: '100%',
    marginTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    gap: 15,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProfileScreen;
