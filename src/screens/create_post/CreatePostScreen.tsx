/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,

//   Alert,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const CreatePostScreen = ({navigation}) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [media, setMedia] = useState<string[]>([]); // Simulate media as an array of URIs

//   const handleAddMedia = () => {
//     // Simulate adding media (image/video picker would go here)
//     Alert.alert(
//       'Add Media',
//       'This would open a media picker to add images or videos.',
//     );
//     setMedia([...media, 'media-placeholder']); // Placeholder for demo
//   };

//   const handleNext = () => {
//     if (!title || !content) {
//       Alert.alert('Error', 'Please fill in the title and content.');
//       return;
//     }
//     navigation.navigate('PreviewPost', {title, content, media});
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Top Section: Media and Title */}
//       <View style={styles.topSection}>
//         <View style={styles.mediaSection}>
//           <TouchableOpacity style={styles.mediaButton} onPress={handleAddMedia}>
//             <MaterialIcons name="add-a-photo" size={24} color="#2D3748" />
//             <Text style={styles.mediaText}>Add Images/Video</Text>
//           </TouchableOpacity>
//           {media.length > 0 && (
//             <Text style={styles.mediaCount}>{media.length} item(s) added</Text>
//           )}
//         </View>
//         <TextInput
//           style={styles.titleInput}
//           placeholder="Enter title..."
//           placeholderTextColor="#718096"
//           value={title}
//           onChangeText={setTitle}
//         />
//       </View>

//       {/* Middle Section: Content */}
//       <TextInput
//         style={styles.contentInput}
//         placeholder="Write your post here..."
//         placeholderTextColor="#718096"
//         value={content}
//         onChangeText={setContent}
//         multiline
//       />

//       {/* Bottom Section: Buttons */}
//       <View style={styles.buttonSection}>
//         <TouchableOpacity
//           style={[styles.button, styles.cancelButton]}
//           onPress={() => navigation.goBack()}>
//           <Text style={styles.buttonText}>Cancel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.nextButton]}
//           onPress={handleNext}>
//           <Text style={styles.buttonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//     padding: 16,
//   },
//   topSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   mediaSection: {
//     flex: 1,
//     marginRight: 16,
//   },
//   mediaButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F7FAFC',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//   },
//   mediaText: {
//     fontSize: 16,
//     color: '#2D3748',
//     marginLeft: 8,
//     fontFamily: 'System',
//   },
//   mediaCount: {
//     fontSize: 12,
//     color: '#718096',
//     marginTop: 4,
//     fontFamily: 'System',
//   },
//   titleInput: {
//     flex: 1,
//     backgroundColor: '#F7FAFC',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     fontSize: 16,
//     color: '#2D3748',
//     fontFamily: 'System',
//   },
//   contentInput: {
//     flex: 1,
//     backgroundColor: '#F7FAFC',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     fontSize: 16,
//     color: '#2D3748',
//     fontFamily: 'System',
//     textAlignVertical: 'top',
//     marginBottom: 16,
//   },
//   buttonSection: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     marginLeft: 8,
//   },
//   cancelButton: {
//     backgroundColor: '#E2E8F0',
//   },
//   nextButton: {
//     backgroundColor: '#A064FF',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     fontFamily: 'System',
//   },
// });

// export default CreatePostScreen;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   Image,
// //   ScrollView,
//   Platform,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
// import { ScrollView } from 'react-native-gesture-handler';

// const CreatePostScreen = ({ navigation }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [media, setMedia] = useState<{ uri: string; type: string }[]>([]); // Store media with type

//   const handleAddMediaFromGallery = () => {
//     const options = {
//       mediaType: 'mixed' as const,
//       quality: 1,
//       includeBase64: false,
//       selectionLimit: 10, // Limit to 10 media items like Instagram
//     };

//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else if (response.assets) {
//         const newMedia = response.assets.map(asset => ({
//           uri: asset.uri,
//           type: asset.type || 'image', // Default to image if type is undefined
//         }));
//         setMedia([...media, ...newMedia]);
//       }
//     });
//   };

//   const handleAddMediaFromCamera = () => {
//     const options = {
//       mediaType: 'photo' as const,
//       quality: 1,
//       includeBase64: false,
//     };

//     launchCamera(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled camera');
//       } else if (response.errorCode) {
//         console.log('Camera Error: ', response.errorMessage);
//       } else if (response.assets) {
//         const newMedia = response.assets.map(asset => ({
//           uri: asset.uri,
//           type: asset.type || 'image',
//         }));
//         setMedia([...media, ...newMedia]);
//       }
//     });
//   };

//   const handlePost = () => {
//     if (!title && !content && media.length === 0) {
//       Alert.alert('Error', 'Please add a title, content, or media.');
//       return;
//     }
//     Alert.alert('Success', 'Post created!', [
//       { text: 'OK', onPress: () => navigation.navigate('Feed') },
//     ]);
//     // Add API call here to save the post
//     setTitle('');
//     setContent('');
//     setMedia([]);
//   };

//   const handleFormat = (type: string) => {
//     // Simulate basic formatting (e.g., bold, italic)
//     if (type === 'bold') {setContent(content + '**');}
//     if (type === 'italic') {setContent(content + '*');}
//     if (type === 'link') {setContent(content + '[Link](url)');}
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {/* Header Section */}
//         <View style={styles.headerSection}>
//           <Image
//             source={{ uri: 'https://via.placeholder.com/40' }} // Replace with user profile image
//             style={styles.profileImage}
//           />
//           <View style={styles.headerText}>
//             <Text style={styles.userName}>Your Name</Text>
//             <Text style={styles.privacy}>Public</Text>
//           </View>
//         </View>

//         {/* Media and Title Section */}
//         <View style={styles.mediaTitleSection}>
//           <View style={styles.mediaOptions}>
//             <TouchableOpacity style={styles.mediaButton} onPress={handleAddMediaFromGallery}>
//               <MaterialIcons name="photo-library" size={24} color="#2D3748" />
//               <Text style={styles.mediaText}>Gallery</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.mediaButton} onPress={handleAddMediaFromCamera}>
//               <MaterialIcons name="camera-alt" size={24} color="#2D3748" />
//               <Text style={styles.mediaText}>Camera</Text>
//             </TouchableOpacity>
//           </View>
//           <TextInput
//             style={styles.titleInput}
//             placeholder="Add a title or headline..."
//             placeholderTextColor="#718096"
//             value={title}
//             onChangeText={setTitle}
//           />
//         </View>

//         {/* Content Section with Formatting */}
//         <View style={styles.contentSection}>
//           <View style={styles.formatBar}>
//             <TouchableOpacity onPress={() => handleFormat('bold')}>
//               <MaterialIcons name="format-bold" size={20} color="#2D3748" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleFormat('italic')}>
//               <MaterialIcons name="format-italic" size={20} color="#2D3748" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleFormat('link')}>
//               <MaterialIcons name="link" size={20} color="#2D3748" />
//             </TouchableOpacity>
//           </View>
//           <TextInput
//             style={styles.contentInput}
//             placeholder="Write your post here..."
//             placeholderTextColor="#718096"
//             value={content}
//             onChangeText={setContent}
//             multiline
//             textAlignVertical="top"
//           />
//         </View>

//         {/* Media Preview */}
//         {media.length > 0 && (
//           <View style={styles.mediaPreview}>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {media.map((item, index) => (
//                 <Image
//                   key={index}
//                   source={{ uri: item.uri }}
//                   style={styles.previewImage}
//                 />
//               ))}
//             </ScrollView>
//           </View>
//         )}

//         {/* Buttons */}
//         <View style={styles.buttonSection}>
//           <TouchableOpacity
//             style={[styles.button, styles.cancelButton]}
//             onPress={() => navigation.goBack()}
//           >
//             <Text style={styles.buttonText}>Cancel</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={[styles.button, styles.postButton]} onPress={handlePost}>
//             <Text style={styles.buttonText}>Post</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//     padding: 16,
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
//   mediaTitleSection: {
//     marginBottom: 16,
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
//   titleInput: {
//     backgroundColor: '#F7FAFC',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     fontSize: 16,
//     color: '#2D3748',
//     fontFamily: 'System',
//   },
//   contentSection: {
//     marginBottom: 16,
//   },
//   formatBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#F7FAFC',
//     padding: 8,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   contentInput: {
//     flex: 1,
//     backgroundColor: '#F7FAFC',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     fontSize: 16,
//     color: '#2D3748',
//     fontFamily: 'System',
//     textAlignVertical: 'top',
//     minHeight: 150,
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
//   buttonSection: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 16,
//   },
//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     marginHorizontal: 8,
//   },
//   cancelButton: {
//     backgroundColor: '#E2E8F0',
//   },
//   postButton: {
//     backgroundColor: '#A064FF',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     fontFamily: 'System',
//   },
// });

// export default CreatePostScreen;

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
//   Platform,
//   Alert,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {
//   launchImageLibrary,
//   launchCamera,
//   ImageLibraryOptions,
//   CameraOptions,
//   Asset,
// } from 'react-native-image-picker';

// interface MediaItem {
//   uri: string | undefined;
//   type: string;
// }

// const CreatePostScreen = ({navigation}) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [media, setMedia] = useState<MediaItem[]>([]);

//   const handleAddMediaFromGallery = () => {
//     console.log('Opening gallery...');
//     const options: ImageLibraryOptions = {
//       mediaType: 'mixed',
//       quality: 1 as const,
//       includeBase64: false,
//       selectionLimit: 10,
//     };

//     launchImageLibrary(options, response => {
//       console.log('ImageLibrary response:', response);
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//         Alert.alert('Cancelled', 'You cancelled the media selection.');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
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
//         console.log('Media added:', newMedia);
//       }
//     });
//   };

//   const handleAddMediaFromCamera = () => {
//     console.log('Opening camera...');
//     const options: CameraOptions = {
//       mediaType: 'photo',
//       quality: 1 as const,
//       includeBase64: false,
//     };

//     launchCamera(options, response => {
//       console.log('Camera response:', response);
//       if (response.didCancel) {
//         console.log('User cancelled camera');
//         Alert.alert('Cancelled', 'You cancelled the camera.');
//       } else if (response.errorCode) {
//         console.log('Camera Error: ', response.errorMessage);
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
//         console.log('Media added:', newMedia);
//       }
//     });
//   };

//   const handlePost = () => {
//     if (!title && !content && media.length === 0) {
//       Alert.alert('Error', 'Please add a title, content, or media.');
//       return;
//     }
//     Alert.alert('Success', 'Post created!', [
//       {text: 'OK', onPress: () => navigation.navigate('Feed')},
//     ]);
//     setTitle('');
//     setContent('');
//     setMedia([]);
//   };

//   const handleFormat = (type: string) => {
//     if (type === 'bold') {setContent(content + '**');}
//     if (type === 'italic') {setContent(content + '*');}
//     if (type === 'link') {setContent(content + '[Link](url)');}
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {/* Header Section */}
//         <View style={styles.headerSection}>
//           <Image
//             source={{uri: 'https://via.placeholder.com/40'}}
//             style={styles.profileImage}
//           />
//           <View style={styles.headerText}>
//             <Text style={styles.userName}>Your Name</Text>
//             <Text style={styles.privacy}>Public</Text>
//           </View>
//         </View>

//         {/* Media and Title Section */}
//         <View style={styles.mediaTitleSection}>
//           <View style={styles.mediaOptions}>
//             <TouchableOpacity
//               style={styles.mediaButton}
//               onPress={handleAddMediaFromGallery}>
//               <MaterialIcons name="photo-library" size={24} color="#2D3748" />
//               <Text style={styles.mediaText}>Gallery</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.mediaButton}
//               onPress={handleAddMediaFromCamera}>
//               <MaterialIcons name="camera-alt" size={24} color="#2D3748" />
//               <Text style={styles.mediaText}>Camera</Text>
//             </TouchableOpacity>
//           </View>
//           <TextInput
//             style={styles.titleInput}
//             placeholder="Add a title or headline..."
//             placeholderTextColor="#718096"
//             value={title}
//             onChangeText={setTitle}
//           />
//         </View>

//         {/* Content Section with Formatting */}
//         <View style={styles.contentSection}>
//           <View style={styles.formatBar}>
//             <TouchableOpacity onPress={() => handleFormat('bold')}>
//               <MaterialIcons name="format-bold" size={20} color="#2D3748" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleFormat('italic')}>
//               <MaterialIcons name="format-italic" size={20} color="#2D3748" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleFormat('link')}>
//               <MaterialIcons name="link" size={20} color="#2D3748" />
//             </TouchableOpacity>
//           </View>
//           <TextInput
//             style={styles.contentInput}
//             placeholder="Write your post here..."
//             placeholderTextColor="#718096"
//             value={content}
//             onChangeText={setContent}
//             multiline
//             textAlignVertical="top"
//           />
//         </View>

//         {/* Media Preview */}
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

//         {/* Buttons */}
//         <View style={styles.buttonSection}>
//           <TouchableOpacity
//             style={[styles.button, styles.cancelButton]}
//             onPress={() => navigation.goBack()}>
//             <Text style={styles.buttonText}>Cancel</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.button, styles.postButton]}
//             onPress={handlePost}>
//             <Text style={styles.buttonText}>Post</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//     padding: 16,
//     marginTop:15
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
//   mediaTitleSection: {
//     marginBottom: 16,
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
//   titleInput: {
//     backgroundColor: '#F7FAFC',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     fontSize: 16,
//     color: '#2D3748',
//     fontFamily: 'System',
//   },
//   contentSection: {
//     marginBottom: 16,
//   },
//   formatBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#F7FAFC',
//     padding: 8,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   contentInput: {
//     flex: 1,
//     backgroundColor: '#F7FAFC',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     fontSize: 16,
//     color: '#2D3748',
//     fontFamily: 'System',
//     textAlignVertical: 'top',
//     minHeight: 150,
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
//   buttonSection: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 16,
//   },
//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     marginHorizontal: 8,
//   },
//   cancelButton: {
//     backgroundColor: '#E2E8F0',
//   },
//   postButton: {
//     backgroundColor: '#A064FF',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     fontFamily: 'System',
//   },
// });

// export default CreatePostScreen;

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
//   // Platform,
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

// interface MediaItem {
//   uri: string | undefined;
//   type: string;
// }

// // Normal Post Tab
// const NormalPostTab = ({navigation}: {navigation: any}) => {
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
//     Alert.alert('Success', 'Normal post created!', [
//       {text: 'OK', onPress: () => navigation.navigate('Feed')},
//     ]);
//     setMedia([]);
//     setCaption('');
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
//         <Text style={styles.buttonText}>Post</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Recipe Post Tab
// const RecipePostTab = ({navigation}: {navigation: any}) => {
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
//     Alert.alert('Success', 'Recipe post created!', [
//       {text: 'OK', onPress: () => navigation.navigate('Feed')},
//     ]);
//     setPhoto(null);
//     setTitle('');
//     setInstructions('');
//     setIngredients('');
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
//         <Text style={styles.buttonText}>Post</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Reels Post Tab
// const ReelsPostTab = ({navigation}: {navigation: any}) => {
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
//     Alert.alert('Success', 'Reels post created!', [
//       {text: 'OK', onPress: () => navigation.navigate('Feed')},
//     ]);
//     setVideo(null);
//     setCaption('');
//     setTags('');
//     setMusic('');
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
//         <Text style={styles.buttonText}>Post</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const CreatePostScreen = ({navigation}: {navigation: any}) => {
//   const [activeTab, setActiveTab] = useState('Normal');

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'Normal':
//         return <NormalPostTab navigation={navigation} />;
//       case 'Recipe':
//         return <RecipePostTab navigation={navigation} />;
//       case 'Reels':
//         return <ReelsPostTab navigation={navigation} />;
//       default:
//         return <NormalPostTab navigation={navigation} />;
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
//     // backgroundColor: '#FFFFFF',
//     // elevation: 2,
//     // shadowColor: '#000',
//     // shadowOffset: {width: 0, height: 2},
//     // shadowOpacity: 0.1,
//     // shadowRadius: 5,
//     // borderRadius: 8,
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

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';
import {
  launchImageLibrary,
  launchCamera,
  ImageLibraryOptions,
  CameraOptions,
  Asset,
} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

interface MediaItem {
  uri: string | undefined;
  type: string;
}

// Normal Post Tab
const NormalPostTab = () => {
  const navigation = useNavigation();
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [caption, setCaption] = useState('');

  const handleAddMediaFromGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1 as const,
      includeBase64: false,
      selectionLimit: 5,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert(
          'Error',
          `Failed to open gallery: ${response.errorMessage}`,
        );
      } else if (response.assets) {
        const newMedia = response.assets
          .map((asset: Asset) => ({
            uri: asset.uri,
            type: asset.type || 'image',
          }))
          .filter(
            (item): item is MediaItem & {uri: string} => item.uri !== undefined,
          );
        setMedia([...media, ...newMedia]);
      }
    });
  };

  const handleAddMediaFromCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 1 as const,
      includeBase64: false,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        Alert.alert('Error', `Failed to open camera: ${response.errorMessage}`);
      } else if (response.assets) {
        const newMedia = response.assets
          .map((asset: Asset) => ({
            uri: asset.uri,
            type: asset.type || 'image',
          }))
          .filter(
            (item): item is MediaItem & {uri: string} => item.uri !== undefined,
          );
        setMedia([...media, ...newMedia]);
      }
    });
  };

  const handleSubmit = () => {
    if (media.length === 0 && !caption) {
      Alert.alert('Error', 'Please add media or a caption.');
      return;
    }
    navigation.navigate('PreviewPostScreen', {
      post: {type: 'Normal', media, caption},
    });
  };

  return (
    <View style={styles.tabContainer}>
      <ScrollView>
        <View style={styles.mediaOptions}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={handleAddMediaFromGallery}>
            <MaterialIcons name="photo-library" size={24} color="#2D3748" />
            <Text style={styles.mediaText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={handleAddMediaFromCamera}>
            <MaterialIcons name="camera-alt" size={24} color="#2D3748" />
            <Text style={styles.mediaText}>Camera</Text>
          </TouchableOpacity>
        </View>
        {media.length > 0 && (
          <View style={styles.mediaPreview}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {media.map((item, index) =>
                item.uri ? (
                  <Image
                    key={index}
                    source={{uri: item.uri}}
                    style={styles.previewImage}
                  />
                ) : null,
              )}
            </ScrollView>
          </View>
        )}
        <TextInput
          style={styles.contentInput}
          placeholder="Write a caption..."
          placeholderTextColor="#718096"
          value={caption}
          onChangeText={setCaption}
          multiline
          textAlignVertical="top"
        />
      </ScrollView>
      <TouchableOpacity style={styles.postButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

// Recipe Post Tab
const RecipePostTab = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState<MediaItem | null>(null);
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleAddPhotoFromGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1 as const,
      includeBase64: false,
      selectionLimit: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert(
          'Error',
          `Failed to open gallery: ${response.errorMessage}`,
        );
      } else if (response.assets) {
        const newPhoto = response.assets
          .map((asset: Asset) => ({
            uri: asset.uri,
            type: asset.type || 'image',
          }))
          .filter(
            (item): item is MediaItem & {uri: string} => item.uri !== undefined,
          )[0];
        setPhoto(newPhoto);
      }
    });
  };

  const handleAddPhotoFromCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 1 as const,
      includeBase64: false,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        Alert.alert('Error', `Failed to open camera: ${response.errorMessage}`);
      } else if (response.assets) {
        const newPhoto = response.assets
          .map((asset: Asset) => ({
            uri: asset.uri,
            type: asset.type || 'image',
          }))
          .filter(
            (item): item is MediaItem & {uri: string} => item.uri !== undefined,
          )[0];
        setPhoto(newPhoto);
      }
    });
  };

  const handleSubmit = () => {
    if (!photo || !title || !instructions || !ingredients) {
      Alert.alert('Error', 'Please fill all fields and add a photo.');
      return;
    }
    navigation.navigate('PreviewPostScreen', {
      post: {type: 'Recipe', photo, title, instructions, ingredients},
    });
  };

  return (
    <View style={styles.tabContainer}>
      <ScrollView>
        <View style={styles.mediaOptions}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={handleAddPhotoFromGallery}>
            <MaterialIcons name="photo-library" size={24} color="#2D3748" />
            <Text style={styles.mediaText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={handleAddPhotoFromCamera}>
            <MaterialIcons name="camera-alt" size={24} color="#2D3748" />
            <Text style={styles.mediaText}>Camera</Text>
          </TouchableOpacity>
        </View>
        {photo?.uri && (
          <Image source={{uri: photo.uri}} style={styles.previewImage} />
        )}
        <TextInput
          style={styles.titleInput}
          placeholder="Recipe Title..."
          placeholderTextColor="#718096"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.contentInput}
          placeholder="Ingredients (one per line)..."
          placeholderTextColor="#718096"
          value={ingredients}
          onChangeText={setIngredients}
          multiline
          textAlignVertical="top"
        />
        <TextInput
          style={styles.contentInput}
          placeholder="Instructions..."
          placeholderTextColor="#718096"
          value={instructions}
          onChangeText={setInstructions}
          multiline
          textAlignVertical="top"
        />
      </ScrollView>
      <TouchableOpacity style={styles.postButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

// Reels Post Tab
const ReelsPostTab = () => {
  const navigation = useNavigation();
  const [video, setVideo] = useState<MediaItem | null>(null);
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState('');
  const [music, setMusic] = useState('');
  const [musicOptions] = useState([
    'Song 1 - Artist 1',
    'Song 2 - Artist 2',
    'Song 3 - Artist 3',
  ]);
  const [showMusicDropdown, setShowMusicDropdown] = useState(false);

  const handleAddVideoFromGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'video',
      quality: 1 as const,
      includeBase64: false,
      selectionLimit: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.errorCode) {
        Alert.alert(
          'Error',
          `Failed to open gallery: ${response.errorMessage}`,
        );
      } else if (response.assets) {
        const newVideo = response.assets
          .map((asset: Asset) => ({
            uri: asset.uri,
            type: asset.type || 'video',
          }))
          .filter(
            (item): item is MediaItem & {uri: string} => item.uri !== undefined,
          )[0];
        setVideo(newVideo);
      }
    });
  };

  const handleAddVideoFromCamera = () => {
    const options: CameraOptions = {
      mediaType: 'video',
      quality: 1 as const,
      includeBase64: false,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        Alert.alert('Error', `Failed to open camera: ${response.errorMessage}`);
      } else if (response.assets) {
        const newVideo = response.assets
          .map((asset: Asset) => ({
            uri: asset.uri,
            type: asset.type || 'video',
          }))
          .filter(
            (item): item is MediaItem & {uri: string} => item.uri !== undefined,
          )[0];
        setVideo(newVideo);
      }
    });
  };

  const handleSelectMusic = (song: string) => {
    setMusic(song);
    setShowMusicDropdown(false);
  };

  const handleSubmit = () => {
    if (!video || !caption) {
      Alert.alert('Error', 'Please add a video and a caption.');
      return;
    }
    navigation.navigate('PreviewPostScreen', {
      post: {type: 'Reels', video, caption, tags, music},
    });
  };

  return (
    <View style={styles.tabContainer}>
      <ScrollView>
        <View style={styles.mediaOptions}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={handleAddVideoFromGallery}>
            <MaterialIcons name="video-library" size={24} color="#2D3748" />
            <Text style={styles.mediaText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={handleAddVideoFromCamera}>
            <MaterialIcons name="camera-alt" size={24} color="#2D3748" />
            <Text style={styles.mediaText}>Camera</Text>
          </TouchableOpacity>
        </View>
        {video?.uri && (
          <Video
            source={{uri: video.uri}}
            style={styles.previewVideo}
            resizeMode="cover"
            paused={true}
            controls={true}
          />
        )}
        <TextInput
          style={styles.contentInput}
          placeholder="Write a caption..."
          placeholderTextColor="#718096"
          value={caption}
          onChangeText={setCaption}
          multiline
          textAlignVertical="top"
        />
        <TextInput
          style={styles.contentInput}
          placeholder="Tag someone (@username)..."
          placeholderTextColor="#718096"
          value={tags}
          onChangeText={setTags}
        />
        <View style={styles.musicSection}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => setShowMusicDropdown(!showMusicDropdown)}>
            <MaterialIcons name="music-note" size={24} color="#2D3748" />
            <Text style={styles.mediaText}>{music || 'Add Music'}</Text>
          </TouchableOpacity>
          {showMusicDropdown && (
            <View style={styles.dropdown}>
              {musicOptions.map((song, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => handleSelectMusic(song)}>
                  <Text style={styles.dropdownText}>{song}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.postButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const CreatePostScreen = ({navigation}: {navigation: any}) => {
  const [activeTab, setActiveTab] = useState('Normal');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Normal':
        return <NormalPostTab />;
      case 'Recipe':
        return <RecipePostTab />;
      case 'Reels':
        return <ReelsPostTab />;
      default:
        return <NormalPostTab />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Normal' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('Normal')}>
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'Normal' && styles.activeTabLabel,
            ]}>
            Normal Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Recipe' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('Recipe')}>
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'Recipe' && styles.activeTabLabel,
            ]}>
            Recipe Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Reels' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('Reels')}>
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'Reels' && styles.activeTabLabel,
            ]}>
            Reels
          </Text>
        </TouchableOpacity>
      </View>
      {renderTabContent()}
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
  tabBar: {
    flexDirection: 'row',
    // backgroundColor: '#FFFFFF',
    // elevation: 2,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // borderRadius: 8,
    marginBottom: 16,
    marginTop: 26,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#A064FF',
  },
  tabLabel: {
    fontSize: 14,
    color: '#2D3748',
    fontFamily: 'System',
  },
  activeTabLabel: {
    color: '#A064FF',
    fontWeight: '600',
  },
  tabContainer: {
    flex: 1,
  },
  mediaOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  mediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  mediaText: {
    fontSize: 14,
    color: '#2D3748',
    marginLeft: 8,
    fontFamily: 'System',
  },
  mediaPreview: {
    marginBottom: 16,
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  previewVideo: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  titleInput: {
    backgroundColor: '#F7FAFC',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    fontSize: 16,
    color: '#2D3748',
    fontFamily: 'System',
    marginBottom: 16,
  },
  contentInput: {
    backgroundColor: '#F7FAFC',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    fontSize: 16,
    color: '#2D3748',
    fontFamily: 'System',
    textAlignVertical: 'top',
    minHeight: 100,
    marginBottom: 16,
  },
  musicSection: {
    position: 'relative',
    marginBottom: 16,
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    zIndex: 10,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: '#2D3748',
    fontFamily: 'System',
  },
  postButton: {
    backgroundColor: '#A064FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'System',
  },
});

export default CreatePostScreen;
