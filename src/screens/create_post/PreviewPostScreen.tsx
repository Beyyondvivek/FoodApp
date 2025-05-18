// /* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Platform,
} from 'react-native';
import Video from 'react-native-video';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface MediaItem {
  uri: string | undefined;
  type: string;
}

interface Post {
  id?: string;
  type: 'Normal' | 'Recipe' | 'Reels';
  media?: MediaItem[];
  photo?: MediaItem | null;
  video?: MediaItem | null;
  caption?: string;
  title?: string;
  instructions?: string;
  ingredients?: string;
  tags?: string;
  music?: string;
  timestamp?: string;
}

const PreviewPostScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {post} = route.params as {post: Post};

  const saveAsDraft = async () => {
    const draft: Post = {
      ...post,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    };
    try {
      const existingDrafts = await AsyncStorage.getItem('drafts');
      const drafts = existingDrafts ? JSON.parse(existingDrafts) : [];
      drafts.push(draft);
      await AsyncStorage.setItem('drafts', JSON.stringify(drafts));
      Alert.alert('Success', 'Draft saved successfully!');
      navigation.navigate('CreatePostScreen');
    } catch (error) {
      console.error('Error saving draft:', error);
      Alert.alert('Error', 'Failed to save draft.');
    }
  };

  const handlePost = () => {
    Alert.alert('Success', `${post.type} post created!`, [
      {text: 'OK', onPress: () => navigation.navigate('FeedScreen')},
    ]);
  };

  const handleEdit = () => {
    navigation.navigate('CreatePostScreen', {post});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* <View style={styles.headerSection}>
          <Image
            source={{uri: 'https://via.placeholder.com/40'}}
            style={styles.profileImage}
          />
          <View style={styles.headerText}>
            <Text style={styles.userName}>Your Name</Text>
            <Text style={styles.privacy}>Public</Text>
          </View>
        </View> */}

        <Text style={styles.previewTitle}>Preview {post.type} Post</Text>

        {post.type === 'Normal' && post.media && (
          <View>
            <Text style={styles.sectionTitle}>Media</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {post.media.map((item, index) =>
                item.uri ? (
                  <Image
                    key={index}
                    source={{uri: item.uri}}
                    style={styles.previewImage}
                  />
                ) : null,
              )}
            </ScrollView>
            {post.caption && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Caption</Text>
                <Text style={styles.previewText}>{post.caption}</Text>
              </View>
            )}
          </View>
        )}

        {post.type === 'Recipe' && post.photo && (
          <View>
            <Text style={styles.sectionTitle}>Photo</Text>
            {post.photo.uri && (
              <Image
                source={{uri: post.photo.uri}}
                style={styles.previewImage}
              />
            )}
            {post.title && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Title</Text>
                <Text style={styles.previewText}>{post.title}</Text>
              </View>
            )}
            {post.ingredients && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ingredients</Text>
                <Text style={styles.previewText}>{post.ingredients}</Text>
              </View>
            )}
            {post.instructions && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Instructions</Text>
                <Text style={styles.previewText}>{post.instructions}</Text>
              </View>
            )}
          </View>
        )}

        {post.type === 'Reels' && post.video && (
          <View>
            <Text style={styles.sectionTitle}>Video</Text>
            {post.video.uri && (
              <Video
                source={{uri: post.video.uri}}
                style={styles.previewVideo}
                resizeMode="cover"
                paused={true}
                controls={true}
              />
            )}
            {post.caption && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Caption</Text>
                <Text style={styles.previewText}>{post.caption}</Text>
              </View>
            )}
            {post.tags && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tags</Text>
                <Text style={styles.previewText}>{post.tags}</Text>
              </View>
            )}
            {post.music && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Music</Text>
                <Text style={styles.previewText}>{post.music}</Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.draftButton} onPress={saveAsDraft}>
          <Text style={styles.buttonText}>Save as Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
    marginTop: 15,
  },
  scrollContainer: {
    flex: 1,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    fontFamily: 'System',
  },
  privacy: {
    fontSize: 12,
    color: '#718096',
    fontFamily: 'System',
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 16,
    fontFamily: 'System',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 8,
    fontFamily: 'System',
  },
  previewText: {
    fontSize: 14,
    color: '#4A5568',
    fontFamily: 'System',
  },
  previewImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  previewVideo: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 16,
    alignContent:'center',
    alignItems:'center',
    gap:15

  },
  editButton: {
    backgroundColor: '#E2E8F0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    // marginRight: 8,
  },
  draftButton: {
    backgroundColor: '#ECC94B',
    paddingVertical: 12,
    paddingHorizontal: 'auto',
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    // marginRight: 8,
  },
  postButton: {
    backgroundColor: '#A064FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'System',
  },
});

export default PreviewPostScreen;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Video from 'react-native-video';
// import {
//   launchImageLibrary,
//   launchCamera,
//   ImageLibraryOptions,
//   CameraOptions,
//   Asset,
// } from 'react-native-image-picker';
// import {useNavigation} from '@react-navigation/native';
// import {RootStackParamList} from '../../../App'; // Adjust path as needed
// import {StackNavigationProp} from '@react-navigation/stack';

// interface MediaItem {
//   uri: string | undefined;
//   type: string;
// }

// type CreatePostNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'CreatePostScreen'
// >;

// // Normal Post Tab
// const NormalPostTab = () => {
//   const navigation = useNavigation<CreatePostNavigationProp>();
//   const [media, setMedia] = useState<MediaItem[]>([]);
//   const [caption, setCaption] = useState('');

//   const handleAddMediaFromGallery = () => {
//     const options: ImageLibraryOptions = {
//       mediaType: 'photo',
//       quality: 1 as const,
//       includeBase64: false,
//       selectionLimit: 5,
//     };

//     launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         Alert.alert(
//           'Error',
//           `Failed to open gallery: ${response.errorMessage}`,
//         );
//       } else if (response.assets) {
//         const newMedia = response.assets
//           .map((asset: Asset) => ({
//             uri: asset.uri,
//             type: asset.type || 'image',
//           }))
//           .filter(
//             (item): item is MediaItem & {uri: string} => item.uri !== undefined,
//           );
//         setMedia([...media, ...newMedia]);
//       }
//     });
//   };

//   const handleAddMediaFromCamera = () => {
//     const options: CameraOptions = {
//       mediaType: 'photo',
//       quality: 1 as const,
//       includeBase64: false,
//     };

//     launchCamera(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled camera');
//       } else if (response.errorCode) {
//         Alert.alert('Error', `Failed to open camera: ${response.errorMessage}`);
//       } else if (response.assets) {
//         const newMedia = response.assets
//           .map((asset: Asset) => ({
//             uri: asset.uri,
//             type: asset.type || 'image',
//           }))
//           .filter(
//             (item): item is MediaItem & {uri: string} => item.uri !== undefined,
//           );
//         setMedia([...media, ...newMedia]);
//       }
//     });
//   };

//   const handleSubmit = () => {
//     if (media.length === 0 && !caption) {
//       Alert.alert('Error', 'Please add media or a caption.');
//       return;
//     }
//     navigation.navigate('PreviewPost', {
//       post: {type: 'Normal', media, caption},
//     });
//   };

//   return (
//     <View style={styles.tabContainer}>
//       <ScrollView>
//         <View style={styles.mediaOptions}>
//           <TouchableOpacity
//             style={styles.mediaButton}
//             onPress={handleAddMediaFromGallery}>
//             <MaterialIcons name="photo-library" size={24} color="#2D3748" />
//             <Text style={styles.mediaText}>Gallery</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.mediaButton}
//             onPress={handleAddMediaFromCamera}>
//             <MaterialIcons name="camera-alt" size={24} color="#2D3748" />
//             <Text style={styles.mediaText}>Camera</Text>
//           </TouchableOpacity>
//         </View>
//         {media.length > 0 && (
//           <View style={styles.mediaPreview}>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {media.map((item, index) =>
//                 item.uri ? (
//                   <Image
//                     key={index}
//                     source={{uri: item.uri}}
//                     style={styles.previewImage}
//                   />
//                 ) : null,
//               )}
//             </ScrollView>
//           </View>
//         )}
//         <TextInput
//           style={styles.contentInput}
//           placeholder="Write a caption..."
//           placeholderTextColor="#718096"
//           value={caption}
//           onChangeText={setCaption}
//           multiline
//           textAlignVertical="top"
//         />
//       </ScrollView>
//       <TouchableOpacity style={styles.postButton} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Recipe Post Tab
// const RecipePostTab = () => {
//   const navigation = useNavigation<CreatePostNavigationProp>();
//   const [photo, setPhoto] = useState<MediaItem | null>(null);
//   const [title, setTitle] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const [ingredients, setIngredients] = useState('');

//   const handleAddPhotoFromGallery = () => {
//     const options: ImageLibraryOptions = {
//       mediaType: 'photo',
//       quality: 1 as const,
//       includeBase64: false,
//       selectionLimit: 1,
//     };

//     launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         Alert.alert(
//           'Error',
//           `Failed to open gallery: ${response.errorMessage}`,
//         );
//       } else if (response.assets) {
//         const newPhoto = response.assets
//           .map((asset: Asset) => ({
//             uri: asset.uri,
//             type: asset.type || 'image',
//           }))
//           .filter(
//             (item): item is MediaItem & {uri: string} => item.uri !== undefined,
//           )[0];
//         setPhoto(newPhoto);
//       }
//     });
//   };

//   const handleAddPhotoFromCamera = () => {
//     const options: CameraOptions = {
//       mediaType: 'photo',
//       quality: 1 as const,
//       includeBase64: false,
//     };

//     launchCamera(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled camera');
//       } else if (response.errorCode) {
//         Alert.alert('Error', `Failed to open camera: ${response.errorMessage}`);
//       } else if (response.assets) {
//         const newPhoto = response.assets
//           .map((asset: Asset) => ({
//             uri: asset.uri,
//             type: asset.type || 'image',
//           }))
//           .filter(
//             (item): item is MediaItem & {uri: string} => item.uri !== undefined,
//           )[0];
//         setPhoto(newPhoto);
//       }
//     });
//   };

//   const handleSubmit = () => {
//     if (!photo || !title || !instructions || !ingredients) {
//       Alert.alert('Error', 'Please fill all fields and add a photo.');
//       return;
//     }
//     navigation.navigate('PreviewPost', {
//       post: {type: 'Recipe', photo, title, instructions, ingredients},
//     });
//   };

//   return (
//     <View style={styles.tabContainer}>
//       <ScrollView>
//         <View style={styles.mediaOptions}>
//           <TouchableOpacity
//             style={styles.mediaButton}
//             onPress={handleAddPhotoFromGallery}>
//             <MaterialIcons name="photo-library" size={24} color="#2D3748" />
//             <Text style={styles.mediaText}>Gallery</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.mediaButton}
//             onPress={handleAddPhotoFromCamera}>
//             <MaterialIcons name="camera-alt" size={24} color="#2D3748" />
//             <Text style={styles.mediaText}>Camera</Text>
//           </TouchableOpacity>
//         </View>
//         {photo?.uri && (
//           <Image source={{uri: photo.uri}} style={styles.previewImage} />
//         )}
//         <TextInput
//           style={styles.titleInput}
//           placeholder="Recipe Title..."
//           placeholderTextColor="#718096"
//           value={title}
//           onChangeText={setTitle}
//         />
//         <TextInput
//           style={styles.contentInput}
//           placeholder="Ingredients (one per line)..."
//           placeholderTextColor="#718096"
//           value={ingredients}
//           onChangeText={setIngredients}
//           multiline
//           textAlignVertical="top"
//         />
//         <TextInput
//           style={styles.contentInput}
//           placeholder="Instructions..."
//           placeholderTextColor="#718096"
//           value={instructions}
//           onChangeText={setInstructions}
//           multiline
//           textAlignVertical="top"
//         />
//       </ScrollView>
//       <TouchableOpacity style={styles.postButton} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Reels Post Tab
// const ReelsPostTab = () => {
//   const navigation = useNavigation<CreatePostNavigationProp>();
//   const [video, setVideo] = useState<MediaItem | null>(null);
//   const [caption, setCaption] = useState('');
//   const [tags, setTags] = useState('');
//   const [music, setMusic] = useState('');
//   const [musicOptions] = useState([
//     'Song 1 - Artist 1',
//     'Song 2 - Artist 2',
//     'Song 3 - Artist 3',
//   ]);
//   const [showMusicDropdown, setShowMusicDropdown] = useState(false);

//   const handleAddVideoFromGallery = () => {
//     const options: ImageLibraryOptions = {
//       mediaType: 'video',
//       quality: 1 as const,
//       includeBase64: false,
//       selectionLimit: 1,
//     };

//     launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled video picker');
//       } else if (response.errorCode) {
//         Alert.alert(
//           'Error',
//           `Failed to open gallery: ${response.errorMessage}`,
//         );
//       } else if (response.assets) {
//         const newVideo = response.assets
//           .map((asset: Asset) => ({
//             uri: asset.uri,
//             type: asset.type || 'video',
//           }))
//           .filter(
//             (item): item is MediaItem & {uri: string} => item.uri !== undefined,
//           )[0];
//         setVideo(newVideo);
//       }
//     });
//   };

//   const handleAddVideoFromCamera = () => {
//     const options: CameraOptions = {
//       mediaType: 'video',
//       quality: 1 as const,
//       includeBase64: false,
//     };

//     launchCamera(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled camera');
//       } else if (response.errorCode) {
//         Alert.alert('Error', `Failed to open camera: ${response.errorMessage}`);
//       } else if (response.assets) {
//         const newVideo = response.assets
//           .map((asset: Asset) => ({
//             uri: asset.uri,
//             type: asset.type || 'video',
//           }))
//           .filter(
//             (item): item is MediaItem & {uri: string} => item.uri !== undefined,
//           )[0];
//         setVideo(newVideo);
//       }
//     });
//   };

//   const handleSelectMusic = (song: string) => {
//     setMusic(song);
//     setShowMusicDropdown(false);
//   };

//   const handleSubmit = () => {
//     if (!video || !caption) {
//       Alert.alert('Error', 'Please add a video and a caption.');
//       return;
//     }
//     navigation.navigate('PreviewPost', {
//       post: {type: 'Reels', video, caption, tags, music},
//     });
//   };

//   return (
//     <View style={styles.tabContainer}>
//       <ScrollView>
//         <View style={styles.mediaOptions}>
//           <TouchableOpacity
//             style={styles.mediaButton}
//             onPress={handleAddVideoFromGallery}>
//             <MaterialIcons name="video-library" size={24} color="#2D3748" />
//             <Text style={styles.mediaText}>Gallery</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.mediaButton}
//             onPress={handleAddVideoFromCamera}>
//             <MaterialIcons name="camera-alt" size={24} color="#2D3748" />
//             <Text style={styles.mediaText}>Camera</Text>
//           </TouchableOpacity>
//         </View>
//         {video?.uri && (
//           <Video
//             source={{uri: video.uri}}
//             style={styles.previewVideo}
//             resizeMode="cover"
//             paused={true}
//             controls={true}
//           />
//         )}
//         <TextInput
//           style={styles.contentInput}
//           placeholder="Write a caption..."
//           placeholderTextColor="#718096"
//           value={caption}
//           onChangeText={setCaption}
//           multiline
//           textAlignVertical="top"
//         />
//         <TextInput
//           style={styles.contentInput}
//           placeholder="Tag someone (@username)..."
//           placeholderTextColor="#718096"
//           value={tags}
//           onChangeText={setTags}
//         />
//         <View style={styles.musicSection}>
//           <TouchableOpacity
//             style={styles.mediaButton}
//             onPress={() => setShowMusicDropdown(!showMusicDropdown)}>
//             <MaterialIcons name="music-note" size={24} color="#2D3748" />
//             <Text style={styles.mediaText}>{music || 'Add Music'}</Text>
//           </TouchableOpacity>
//           {showMusicDropdown && (
//             <View style={styles.dropdown}>
//               {musicOptions.map((song, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={styles.dropdownItem}
//                   onPress={() => handleSelectMusic(song)}>
//                   <Text style={styles.dropdownText}>{song}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           )}
//         </View>
//       </ScrollView>
//       <TouchableOpacity style={styles.postButton} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const CreatePostScreen = () => {
//   const navigation = useNavigation<CreatePostNavigationProp>();
//   const [activeTab, setActiveTab] = useState('Normal');

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'Normal':
//         return <NormalPostTab />;
//       case 'Recipe':
//         return <RecipePostTab />;
//       case 'Reels':
//         return <ReelsPostTab />;
//       default:
//         return <NormalPostTab />;
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.headerSection}>
//         <Image
//           source={{uri: 'https://via.placeholder.com/40'}}
//           style={styles.profileImage}
//         />
//         <View style={styles.headerText}>
//           <Text style={styles.userName}>Your Name</Text>
//           <Text style={styles.privacy}>Public</Text>
//         </View>
//       </View>
//       <View style={styles.tabBar}>
//         <TouchableOpacity
//           style={[
//             styles.tabButton,
//             activeTab === 'Normal' && styles.activeTabButton,
//           ]}
//           onPress={() => setActiveTab('Normal')}>
//           <Text
//             style={[
//               styles.tabLabel,
//               activeTab === 'Normal' && styles.activeTabLabel,
//             ]}>
//             Normal Post
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.tabButton,
//             activeTab === 'Recipe' && styles.activeTabButton,
//           ]}
//           onPress={() => setActiveTab('Recipe')}>
//           <Text
//             style={[
//               styles.tabLabel,
//               activeTab === 'Recipe' && styles.activeTabLabel,
//             ]}>
//             Recipe Post
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.tabButton,
//             activeTab === 'Reels' && styles.activeTabButton,
//           ]}
//           onPress={() => setActiveTab('Reels')}>
//           <Text
//             style={[
//               styles.tabLabel,
//               activeTab === 'Reels' && styles.activeTabLabel,
//             ]}>
//             Reels
//           </Text>
//         </TouchableOpacity>
//       </View>
//       {renderTabContent()}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//     padding: 16,
//     marginTop: 15,
//   },
//   headerSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 12,
//   },
//   headerText: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     fontFamily: 'System',
//   },
//   privacy: {
//     fontSize: 12,
//     color: '#718096',
//     fontFamily: 'System',
//   },
//   tabBar: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   activeTabButton: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#A064FF',
//   },
//   tabLabel: {
//     fontSize: 14,
//     color: '#2D3748',
//     fontFamily: 'System',
//   },
//   activeTabLabel: {
//     color: '#A064FF',
//     fontWeight: '600',
//   },
//   tabContainer: {
//     flex: 1,
//   },
//   mediaOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   mediaButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F7FAFC',
//     padding: 10,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//   },
//   mediaText: {
//     fontSize: 14,
//     color: '#2D3748',
//     marginLeft: 8,
//     fontFamily: 'System',
//   },
//   mediaPreview: {
//     marginBottom: 16,
//   },
//   previewImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   previewVideo: {
//     width: 200,
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   titleInput: {
//     backgroundColor: '#F7FAFC',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     fontSize: 16,
//     color: '#2D3748',
//     fontFamily: 'System',
//     marginBottom: 16,
//   },
//   contentInput: {
//     backgroundColor: '#F7FAFC',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     fontSize: 16,
//     color: '#2D3748',
//     fontFamily: 'System',
//     textAlignVertical: 'top',
//     minHeight: 100,
//     marginBottom: 16,
//   },
//   musicSection: {
//     position: 'relative',
//     marginBottom: 16,
//   },
//   dropdown: {
//     position: 'absolute',
//     top: 50,
//     left: 0,
//     right: 0,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     zIndex: 10,
//   },
//   dropdownItem: {
//     padding: 10,
//   },
//   dropdownText: {
//     fontSize: 14,
//     color: '#2D3748',
//     fontFamily: 'System',
//   },
//   postButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     fontFamily: 'System',
//   },
// });

// export default CreatePostScreen;
