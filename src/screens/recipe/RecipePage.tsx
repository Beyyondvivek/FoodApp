/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import {Recipe, Comment} from '../feed/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const RecipeDetailScreen: React.FC = () => {
//   const [recipe] = useState<Recipe>({
//     id: 1,
//     name: 'Spicy Chicken Curry',
//     image: 'image1.jpg',
//     description: 'A flavorful curry with tender chicken and aromatic spices.',
//     ingredients: [
//       '500g chicken breast',
//       '2 tbsp olive oil',
//       '1 onion, chopped',
//       '2 garlic cloves, minced',
//       '1 tbsp curry powder',
//       '200ml coconut milk',
//       'Salt to taste',
//     ],
//     instructions: [
//       'Heat oil in a pan over medium heat.',
//       'Add onion and garlic, sauté until golden.',
//       'Stir in curry powder and cook for 1 minute.',
//       'Add chicken, cook until browned.',
//       'Pour in coconut milk, simmer for 20 minutes.',
//       'Season with salt and serve hot.',
//     ],
//     carbs: 25,
//     nutrients: ['Rich in protein', 'Boosts immunity', 'Supports muscle growth'],
//     calories: 350,
//     protein: 30,
//     fat: 15,
//   });

//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       user: 'Foodie123',
//       text: 'Amazing recipe! So tasty!',
//       timestamp: '2025-04-15 14:30',
//       likes: 0,
//       isLiked: false,
//     },
//   ]);
//   const [newComment, setNewComment] = useState('');
//   const [votes, setVotes] = useState(0);
//   // const [shares, setShares] = useState(0); // New state for share count
//   const [isFollowing, setIsFollowing] = useState(false);

//   const getImageSource = () => {
//     switch (recipe.image) {
//       case 'image1.jpg':
//         return require('../../assets/image/image1.jpg');
//       default:
//         return require('../../assets/image/image1.jpg');
//     }
//   };

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         {
//           id: comments.length + 1,
//           user: 'You',
//           text: newComment,
//           timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
//           likes: 0,
//           isLiked: false,
//         },
//       ]);
//       setNewComment('');
//     }
//   };

//   const handleVote = () => {
//     setVotes(votes + 1);
//   };

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing);
//   };

//   const handleCommentLike = (commentId: number) => {
//     setComments(
//       comments.map(comment =>
//         comment.id === commentId
//           ? {
//               ...comment,
//               likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
//               isLiked: !comment.isLiked,
//             }
//           : comment,
//       ),
//     );
//   };

//   //   const handleShare = () => {
//   //     setShares(shares + 1); // Simulate a share action
//   //     // You can add sharing logic here (e.g., Share API)
//   //   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image source={getImageSource()} style={styles.image} />
//       <View style={styles.statsRow}>
//         <View style={styles.statItem}>
//           <MaterialIcons name="thumb-up" size={20} color="#A064FF" />
//           <Text style={styles.statText}>{votes} Votes</Text>
//         </View>
//         <View style={styles.statItem}>
//           <MaterialIcons name="comment" size={20} color="#A064FF" />
//           <Text style={styles.statText}>{comments.length} Comments</Text>
//         </View>
//         <View style={styles.statItem}>
//           <MaterialIcons name="share" size={20} color="#A064FF" />
//           <Text style={styles.statText}>Shares</Text>
//         </View>
//       </View>
//       <View style={styles.header}>
//         <Text style={styles.name}>{recipe.name}</Text>
//         <View style={styles.interactionRow}>
//           <TouchableOpacity style={styles.voteButton} onPress={handleVote}>
//             <MaterialIcons name="thumb-up" size={24} color="#A064FF" />
//             <Text style={styles.voteText}>{votes}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.followButton} onPress={handleFollow}>
//             <Text style={styles.followText}>
//               {isFollowing ? 'Following' : 'Follow'}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <Text style={styles.description}>{recipe.description}</Text>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Ingredients</Text>
//         {recipe.ingredients.map((ingredient, index) => (
//           <Text key={index} style={styles.listItem}>
//              {ingredient}
//           </Text>
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Instructions</Text>
//         {recipe.instructions.map((step, index) => (
//           <Text key={index} style={styles.listItem}>
//             {index + 1}. {step}
//           </Text>
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Nutritional Values</Text>
//         <View style={styles.nutritionContainer}>
//           <View style={styles.nutritionItem}>
//             <Text style={styles.nutritionLabel}>Calories:</Text>
//             <Text style={styles.nutritionValue}>{recipe.calories} kcal</Text>
//           </View>
//           <View style={styles.nutritionItem}>
//             <Text style={styles.nutritionLabel}>Carbs:</Text>
//             <Text style={styles.nutritionValue}>{recipe.carbs}g</Text>
//           </View>
//           <View style={styles.nutritionItem}>
//             <Text style={styles.nutritionLabel}>Protein:</Text>
//             <Text style={styles.nutritionValue}>{recipe.protein}g</Text>
//           </View>
//           <View style={styles.nutritionItem}>
//             <Text style={styles.nutritionLabel}>Fat:</Text>
//             <Text style={styles.nutritionValue}>{recipe.fat}g</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
//         {recipe.nutrients.map((benefit, index) => (
//           <Text key={index} style={styles.listItem}>
//             {benefit}
//           </Text>
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Comments</Text>
//         <FlatList
//           data={comments}
//           renderItem={({item}) => (
//             <View style={styles.commentContainer}>
//               <View style={styles.commentHeader}>
//                 <Text style={styles.commentUser}>{item.user}</Text>
//                 <TouchableOpacity onPress={() => handleCommentLike(item.id)}>
//                   <MaterialIcons
//                     name={item.isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                     size={18}
//                     color="#A064FF"
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.commentLikes}>{item.likes}</Text>
//               </View>
//               <Text style={styles.commentText}>{item.text}</Text>
//               <Text style={styles.commentTime}>{item.timestamp}</Text>
//             </View>
//           )}
//           keyExtractor={item => item.id.toString()}
//           ListEmptyComponent={
//             <Text style={styles.noComments}>No comments yet!</Text>
//           }
//         />
//         <View style={styles.commentInputContainer}>
//           <TextInput
//             style={styles.commentInput}
//             value={newComment}
//             onChangeText={setNewComment}
//             placeholder="Add a comment..."
//             multiline
//           />
//           <TouchableOpacity
//             style={styles.commentButton}
//             onPress={handleAddComment}>
//             <Text style={styles.commentButtonText}>Post</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default RecipeDetailScreen;
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     borderRadius: 15,
//     marginBottom: 10,
//     backgroundColor: '#e0e0e0',
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },
//   statItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 8,
//     borderRadius: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   statText: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#333',
//   },
//   interactionRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   voteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//   },
//   voteText: {
//     fontSize: 16,
//     color: '#A064FF',
//     marginLeft: 5,
//   },
//   followButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//   },
//   followText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   description: {
//     fontSize: 18,
//     color: '#666',
//     textAlign: 'left',
//     marginBottom: 14,
//     lineHeight: 22,
//     fontWeight: '600',
//   },
//   section: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 10,
//   },
//   listItem: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 5,
//     fontWeight: '600',
//   },
//   nutritionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     flexWrap: 'wrap',
//     width: '100%',
//   },
//   nutritionItem: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   nutritionLabel: {
//     fontSize: 16,
//     color: '#444',
//     marginRight: 5,
//   },
//   nutritionValue: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//   },
//   commentContainer: {
//     marginBottom: 15,
//   },
//   commentHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   commentUser: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     marginRight: 10,
//   },
//   commentLikes: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//   },
//   commentText: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   commentTime: {
//     fontSize: 12,
//     color: '#999',
//   },
//   noComments: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   commentInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   commentInput: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10,
//     backgroundColor: '#fff',
//   },
//   commentButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 10,
//   },
//   commentButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//   },
// });

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import {Recipe, Comment} from '../feed/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const RecipeDetailScreen: React.FC = () => {
//   const [recipe] = useState<Recipe>({
//     id: 1,
//     name: 'Spicy Chicken Curry',
//     image: 'image1.jpg',
//     description: 'A flavorful curry with tender chicken and aromatic spices.',
//     ingredients: [
//       '500g chicken breast',
//       '2 tbsp olive oil',
//       '1 onion, chopped',
//       '2 garlic cloves, minced',
//       '1 tbsp curry powder',
//       '200ml coconut milk',
//       'Salt to taste',
//     ],
//     instructions: [
//       'Heat oil in a pan over medium heat.',
//       'Add onion and garlic, sauté until golden.',
//       'Stir in curry powder and cook for 1 minute.',
//       'Add chicken, cook until browned.',
//       'Pour in coconut milk, simmer for 20 minutes.',
//       'Season with salt and serve hot.',
//     ],
//     carbs: 25,
//     nutrients: ['Rich in protein', 'Boosts immunity', 'Supports muscle growth'],
//     calories: 350,
//     protein: 30,
//     fat: 15,
//   });

//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       user: 'Foodie123',
//       text: 'Amazing recipe! So tasty!',
//       timestamp: '2025-04-15 14:30',
//       likes: 0,
//       isLiked: false,
//     },
//   ]);
//   const [newComment, setNewComment] = useState('');
//   const [votes, setVotes] = useState(0);
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [activeTab, setActiveTab] = useState<'instructions' | 'health'>(
//     'instructions',
//   );

//   const getImageSource = () => {
//     switch (recipe.image) {
//       case 'image1.jpg':
//         return require('../../assets/image/image1.jpg');
//       default:
//         return require('../../assets/image/image1.jpg');
//     }
//   };

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         {
//           id: comments.length + 1,
//           user: 'You',
//           text: newComment,
//           timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
//           likes: 0,
//           isLiked: false,
//         },
//       ]);
//       setNewComment('');
//     }
//   };

//   const handleVote = () => {
//     setVotes(votes + 1);
//   };

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing);
//   };

//   const handleCommentLike = (commentId: number) => {
//     setComments(
//       comments.map(comment =>
//         comment.id === commentId
//           ? {
//               ...comment,
//               likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
//               isLiked: !comment.isLiked,
//             }
//           : comment,
//       ),
//     );
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image source={getImageSource()} style={styles.image} />
//       <View style={styles.sectionTop}>
//         <View style={styles.statsRow}>
//           <View style={styles.statItem}>
//             <MaterialIcons name="thumb-up" size={20} color="#A064FF" />
//             <Text style={styles.statText}>{votes}</Text>
//           </View>
//           <View style={styles.statItem}>
//             <MaterialIcons name="comment" size={20} color="#A064FF" />
//             <Text style={styles.statText}>{comments.length}</Text>
//           </View>
//           <View style={styles.statItem}>
//             <MaterialIcons name="share" size={20} color="#A064FF" />
//             {/* <Text style={styles.statText}>Shares</Text> */}
//           </View>
//         </View>
//         <View style={styles.header}>
//           <Text style={styles.name}>{recipe.name}</Text>
//           <View style={styles.interactionRow}>
//             <TouchableOpacity style={styles.voteButton} onPress={handleVote}>
//               <MaterialIcons name="thumb-up" size={24} color="#A064FF" />
//               <Text style={styles.voteText}>{votes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.followButton}
//               onPress={handleFollow}>
//               <Text style={styles.followText}>
//                 {isFollowing ? 'Following' : 'Follow'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <Text style={styles.description}>{recipe.description}</Text>

//         {/* Tab Bar */}
//         <View style={styles.tabContainer}>
//           <TouchableOpacity
//             style={[
//               styles.tab,
//               activeTab === 'instructions' && styles.activeTab,
//             ]}
//             onPress={() => setActiveTab('instructions')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'instructions' && styles.activeTabText,
//               ]}>
//               Recipe Instructions
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'health' && styles.activeTab]}
//             onPress={() => setActiveTab('health')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'health' && styles.activeTabText,
//               ]}>
//               Health Meter
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Tab Content */}
//         {activeTab === 'instructions' ? (
//           <>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Ingredients</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: 'lightgrey',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.ingredients.map((ingredient, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {ingredient}
//                 </Text>
//               ))}
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Instructions</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: 'lightgrey',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.instructions.map((step, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {index + 1}. {step}
//                 </Text>
//               ))}
//             </View>
//           </>
//         ) : (
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Health Meter</Text>
//             <View
//               style={{
//                 width: '80%',
//                 height: 1,
//                 backgroundColor: 'lightgrey',
//                 marginBottom: 6,
//               }}
//             />
//             <View style={styles.healthMeter}>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Calories:</Text>
//                 <Text style={styles.healthValue}>{recipe.calories} kcal</Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Carbs:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.carbs}g ({((recipe.carbs / 300) * 100).toFixed(1)}% of
//                   300g)
//                 </Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Protein:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.protein}g ({((recipe.protein / 50) * 100).toFixed(1)}%
//                   of 50g)
//                 </Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Fat:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.fat}g ({((recipe.fat / 70) * 100).toFixed(1)}% of 70g)
//                 </Text>
//               </View>
//               <Text style={styles.healthNote}>
//                 Based on general daily recommended intake (varies by
//                 individual).
//               </Text>
//             </View>
//             <View>
//               <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: 'lightgrey',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.nutrients.map((benefit, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {benefit}
//                 </Text>
//               ))}
//             </View>
//           </View>
//         )}

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Comments</Text>
//           <FlatList
//             data={comments}
//             renderItem={({item}) => (
//               <View style={styles.commentContainer}>
//                 <View style={styles.commentHeader}>
//                   <Text style={styles.commentUser}>{item.user}</Text>
//                   <TouchableOpacity onPress={() => handleCommentLike(item.id)}>
//                     <MaterialIcons
//                       name={item.isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                       size={18}
//                       color="#A064FF"
//                     />
//                   </TouchableOpacity>
//                   <Text style={styles.commentLikes}>{item.likes}</Text>
//                 </View>
//                 <Text style={styles.commentText}>{item.text}</Text>
//                 <Text style={styles.commentTime}>{item.timestamp}</Text>
//               </View>
//             )}
//             keyExtractor={item => item.id.toString()}
//             ListEmptyComponent={
//               <Text style={styles.noComments}>No comments yet!</Text>
//             }
//           />
//           <View style={styles.commentInputContainer}>
//             <TextInput
//               style={styles.commentInput}
//               value={newComment}
//               onChangeText={setNewComment}
//               placeholder="Add a comment..."
//               multiline
//             />
//             <TouchableOpacity
//               style={styles.commentButton}
//               onPress={handleAddComment}>
//               <Text style={styles.commentButtonText}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default RecipeDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     // padding: 10,
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: 350,
//     // borderRadius: 15,
//     marginBottom: 0,
//     backgroundColor: 'white',
//     // borderBottomRightRadius: 60,
//     // borderBottomLeftRadius: 60,
//     borderTopRightRadius: 8,
//     borderTopLeftRadius: 8,
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 15,
//     backgroundColor: 'white',
//     height: 50,
//     // elevation: 2,
//     // borderTopRightRadius: 20,
//     // borderTopLeftRadius: 20,
//     // paddingHorizontal: 10,
//   },
//   statItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // backgroundColor: '#fff',
//     // padding: 8,
//     // borderRadius: 10,
//     // elevation: 2,
//     // shadowColor: '#000',
//     // shadowOffset: {width: 0, height: 1},
//     // shadowOpacity: 0.1,
//     // shadowRadius: 3,
//   },
//   statText: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#333',
//   },
//   interactionRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   voteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//   },
//   voteText: {
//     fontSize: 16,
//     color: '#A064FF',
//     marginLeft: 5,
//   },
//   followButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//   },
//   followText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   description: {
//     fontSize: 18,
//     color: 'black',
//     textAlign: 'left',
//     marginBottom: 14,
//     lineHeight: 22,
//     fontWeight: '400',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     overflow: 'hidden',
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#A064FF',
//   },
//   tabText: {
//     fontSize: 16,
//     color: '#333',
//     fontWeight: '600',
//   },
//   activeTabText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   section: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 8,
//     elevation: 14,
//     shadowColor: 'lightgrey',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   sectionTop: {
//     width: '100%',
//     backgroundColor: '#fff',
//     // borderTopRightRadius: 60,
//     // borderTopLeftRadius: 60,
//     padding: 16,
//     marginBottom: 8,
//     elevation: 4,
//     shadowColor: 'black',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 10,
//     // alignSelf:'center',
//   },
//   listItem: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 5,
//     fontWeight: '600',
//   },
//   nutritionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     flexWrap: 'wrap',
//     width: '100%',
//   },
//   nutritionItem: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   nutritionLabel: {
//     fontSize: 16,
//     color: '#444',
//     marginRight: 5,
//   },
//   nutritionValue: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//   },
//   healthMeter: {
//     marginBottom: 15,
//   },
//   healthItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   healthLabel: {
//     fontSize: 16,
//     color: '#444',
//   },
//   healthValue: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//   },
//   healthNote: {
//     fontSize: 12,
//     color: '#999',
//     textAlign: 'center',
//   },
//   commentContainer: {
//     marginBottom: 15,
//   },
//   commentHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   commentUser: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     marginRight: 10,
//   },
//   commentLikes: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//   },
//   commentText: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   commentTime: {
//     fontSize: 12,
//     color: '#999',
//   },
//   noComments: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   commentInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   commentInput: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10,
//     backgroundColor: '#fff',
//   },
//   commentButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 10,
//   },
//   commentButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//   },
// });

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import {Recipe, Comment} from '../feed/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const RecipeDetailScreen: React.FC = () => {
//   const [recipe] = useState<Recipe>({
//     id: 1,
//     name: 'Spicy Chicken Curry',
//     image: 'image1.jpg',
//     description: 'A flavorful curry with tender chicken and aromatic spices.',
//     ingredients: [
//       '500g chicken breast',
//       '2 tbsp olive oil',
//       '1 onion, chopped',
//       '2 garlic cloves, minced',
//       '1 tbsp curry powder',
//       '200ml coconut milk',
//       'Salt to taste',
//     ],
//     instructions: [
//       'Heat oil in a pan over medium heat.',
//       'Add onion and garlic, sauté until golden.',
//       'Stir in curry powder and cook for 1 minute.',
//       'Add chicken, cook until browned.',
//       'Pour in coconut milk, simmer for 20 minutes.',
//       'Season with salt and serve hot.',
//     ],
//     carbs: 25,
//     nutrients: ['Rich in protein', 'Boosts immunity', 'Supports muscle growth'],
//     calories: 350,
//     protein: 30,
//     fat: 15,
//   });

//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       user: 'Foodie123',
//       text: 'Amazing recipe! So tasty!',
//       timestamp: '2025-04-15 14:30',
//       likes: 0,
//       isLiked: false,
//     },
//   ]);
//   const [newComment, setNewComment] = useState('');
//   const [votes, setVotes] = useState(0);
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [activeTab, setActiveTab] = useState<'instructions' | 'health'>(
//     'instructions',
//   );

//   const getImageSource = () => {
//     switch (recipe.image) {
//       case 'image1.jpg':
//         return require('../../assets/image/image1.jpg');
//       default:
//         return require('../../assets/image/image1.jpg');
//     }
//   };

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         {
//           id: comments.length + 1,
//           user: 'You',
//           text: newComment,
//           timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
//           likes: 0,
//           isLiked: false,
//         },
//       ]);
//       setNewComment('');
//     }
//   };

//   const handleVote = () => {
//     setVotes(votes + 1);
//   };

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing);
//   };

//   const handleCommentLike = (commentId: number) => {
//     setComments(
//       comments.map(comment =>
//         comment.id === commentId
//           ? {
//               ...comment,
//               likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
//               isLiked: !comment.isLiked,
//             }
//           : comment,
//       ),
//     );
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={getImageSource()} style={styles.image} />
//         <View style={styles.authorOverlay}>
//           <Text style={styles.authorText}>By Chef Anita</Text>
//         </View>
//         <TouchableOpacity style={styles.bookmarkBadge}>
//           <MaterialIcons name="bookmark-border" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.sectionTop}>
//         <View style={styles.statsRow}>
//           <View style={styles.statItem}>
//             <MaterialIcons name="thumb-up" size={20} color="#A064FF" />
//             <Text style={styles.statText}>{votes}</Text>
//           </View>
//           <View style={styles.statItem}>
//             <MaterialIcons name="comment" size={20} color="#A064FF" />
//             <Text style={styles.statText}>{comments.length}</Text>
//           </View>
//           <View style={styles.statItem}>
//             <MaterialIcons name="share" size={20} color="#A064FF" />
//             {/* <Text style={styles.statText}>Shares</Text> */}
//           </View>
//         </View>
//         <View style={styles.header}>
//           <Text style={styles.name}>{recipe.name}</Text>
//           <View style={styles.interactionRow}>
//             <TouchableOpacity style={styles.voteButton} onPress={handleVote}>
//               <MaterialIcons name="thumb-up" size={24} color="#A064FF" />
//               <Text style={styles.voteText}>{votes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.followButton}
//               onPress={handleFollow}>
//               <Text style={styles.followText}>
//                 {isFollowing ? 'Following' : 'Follow'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <Text style={styles.description}>{recipe.description}</Text>

//         {/* Tab Bar */}
//         <View style={styles.tabContainer}>
//           <TouchableOpacity
//             style={[
//               styles.tab,
//               activeTab === 'instructions' && styles.activeTab,
//             ]}
//             onPress={() => setActiveTab('instructions')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'instructions' && styles.activeTabText,
//               ]}>
//               Recipe Instructions
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'health' && styles.activeTab]}
//             onPress={() => setActiveTab('health')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'health' && styles.activeTabText,
//               ]}>
//               Health Meter
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Tab Content */}
//         {activeTab === 'instructions' ? (
//           <>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Ingredients</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: 'lightgrey',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.ingredients.map((ingredient, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {ingredient}
//                 </Text>
//               ))}
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Instructions</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: 'lightgrey',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.instructions.map((step, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {index + 1}. {step}
//                 </Text>
//               ))}
//             </View>
//           </>
//         ) : (
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Health Meter</Text>
//             <View
//               style={{
//                 width: '80%',
//                 height: 1,
//                 backgroundColor: 'lightgrey',
//                 marginBottom: 6,
//               }}
//             />
//             <View style={styles.healthMeter}>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Calories:</Text>
//                 <Text style={styles.healthValue}>{recipe.calories} kcal</Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Carbs:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.carbs}g ({((recipe.carbs / 300) * 100).toFixed(1)}% of
//                   300g)
//                 </Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Protein:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.protein}g ({((recipe.protein / 50) * 100).toFixed(1)}%
//                   of 50g)
//                 </Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Fat:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.fat}g ({((recipe.fat / 70) * 100).toFixed(1)}% of 70g)
//                 </Text>
//               </View>
//               <Text style={styles.healthNote}>
//                 Based on general daily recommended intake (varies by
//                 individual).
//               </Text>
//             </View>
//             <View>
//               <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: 'lightgrey',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.nutrients.map((benefit, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {benefit}
//                 </Text>
//               ))}
//             </View>
//           </View>
//         )}

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Comments</Text>
//           <FlatList
//             data={comments}
//             renderItem={({item}) => (
//               <View style={styles.commentContainer}>
//                 <View style={styles.commentHeader}>
//                   <Text style={styles.commentUser}>{item.user}</Text>
//                   <TouchableOpacity onPress={() => handleCommentLike(item.id)}>
//                     <MaterialIcons
//                       name={item.isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                       size={18}
//                       color="#A064FF"
//                     />
//                   </TouchableOpacity>
//                   <Text style={styles.commentLikes}>{item.likes}</Text>
//                 </View>
//                 <Text style={styles.commentText}>{item.text}</Text>
//                 <Text style={styles.commentTime}>{item.timestamp}</Text>
//               </View>
//             )}
//             keyExtractor={item => item.id.toString()}
//             ListEmptyComponent={
//               <Text style={styles.noComments}>No comments yet!</Text>
//             }
//           />
//           <View style={styles.commentInputContainer}>
//             <TextInput
//               style={styles.commentInput}
//               value={newComment}
//               onChangeText={setNewComment}
//               placeholder="Add a comment..."
//               multiline
//             />
//             <TouchableOpacity
//               style={styles.commentButton}
//               onPress={handleAddComment}>
//               <Text style={styles.commentButtonText}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default RecipeDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     position: 'relative',
//     width: '100%',
//   },
//   image: {
//     width: '100%',
//     height: 350,
//     borderTopRightRadius: 8,
//     borderTopLeftRadius: 8,
//     backgroundColor: 'white',
//   },
//   authorOverlay: {
//     position: 'absolute',
//     bottom: 10,
//     left: 10,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 4,
//   },
//   authorText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     textShadowOffset: {width: 1, height: 1},
//     textShadowRadius: 2,
//   },
//   bookmarkBadge: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     backgroundColor: '#A064FF',
//     borderRadius: 12,
//     padding: 4,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 15,
//     backgroundColor: 'white',
//     height: 50,
//   },
//   statItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statText: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#333',
//   },
//   interactionRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   voteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//   },
//   voteText: {
//     fontSize: 16,
//     color: '#A064FF',
//     marginLeft: 5,
//   },
//   followButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//   },
//   followText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   description: {
//     fontSize: 18,
//     color: 'black',
//     textAlign: 'left',
//     marginBottom: 14,
//     lineHeight: 22,
//     fontWeight: '400',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     overflow: 'hidden',
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#A064FF',
//   },
//   tabText: {
//     fontSize: 16,
//     color: '#333',
//     fontWeight: '600',
//   },
//   activeTabText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   section: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 8,
//     elevation: 14,
//     shadowColor: 'lightgrey',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   sectionTop: {
//     width: '100%',
//     backgroundColor: '#fff',
//     padding: 16,
//     marginBottom: 8,
//     elevation: 4,
//     shadowColor: 'black',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 10,
//   },
//   listItem: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 5,
//     fontWeight: '600',
//   },
//   nutritionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     flexWrap: 'wrap',
//     width: '100%',
//   },
//   nutritionItem: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   nutritionLabel: {
//     fontSize: 16,
//     color: '#444',
//     marginRight: 5,
//   },
//   nutritionValue: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//   },
//   healthMeter: {
//     marginBottom: 15,
//   },
//   healthItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   healthLabel: {
//     fontSize: 14,
//     color: '#444',
//   },
//   healthValue: {
//     fontSize: 14,
//     color: '#A064FF',
//     fontWeight: '500',
//   },
//   healthNote: {
//     fontSize: 12,
//     color: '#999',
//     textAlign: 'center',
//   },
//   commentContainer: {
//     marginBottom: 15,
//   },
//   commentHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   commentUser: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     marginRight: 10,
//   },
//   commentLikes: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//   },
//   commentText: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   commentTime: {
//     fontSize: 12,
//     color: '#999',
//   },
//   noComments: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   commentInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   commentInput: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10,
//     backgroundColor: '#fff',
//   },
//   commentButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 10,
//   },
//   commentButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//   },
// });

// import React, {useState, useRef} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   Share,
//   Animated,
// } from 'react-native';
// import {Recipe, Comment} from '../feed/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const RecipeDetailScreen: React.FC = () => {
//   const [recipe] = useState<Recipe>({
//     id: 1,
//     name: 'Spicy Chicken Curry',
//     image: 'image1.jpg',
//     description: 'A flavorful curry with tender chicken and aromatic spices.',
//     ingredients: [
//       '500g chicken breast',
//       '2 tbsp olive oil',
//       '1 onion, chopped',
//       '2 garlic cloves, minced',
//       '1 tbsp curry powder',
//       '200ml coconut milk',
//       'Salt to taste',
//     ],
//     instructions: [
//       'Heat oil in a pan over medium heat.',
//       'Add onion and garlic, sauté until golden.',
//       'Stir in curry powder and cook for 1 minute.',
//       'Add chicken, cook until browned.',
//       'Pour in coconut milk, simmer for 20 minutes.',
//       'Season with salt and serve hot.',
//     ],
//     carbs: 25,
//     nutrients: ['Rich in protein', 'Boosts immunity', 'Supports muscle growth'],
//     calories: 350,
//     protein: 30,
//     fat: 15,
//   });

//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       user: 'Foodie123',
//       text: 'Amazing recipe! So tasty!',
//       timestamp: '2025-04-15 14:30',
//       likes: 0,
//       isLiked: false,
//     },
//   ]);
//   const [newComment, setNewComment] = useState('');
//   const [likes, setLikes] = useState(225); // Initial 225 likes
//   const [dislikes, setDislikes] = useState(12); // Initial 12 dislikes
//   const [isLiked, setIsLiked] = useState(false);
//   const [isDisliked, setIsDisliked] = useState(false);
//   const [shares, setShares] = useState(16); // Initial 16 shares
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [activeTab, setActiveTab] = useState<'instructions' | 'health'>(
//     'instructions',
//   );
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   const likeAnim = useRef(new Animated.Value(1)).current;
//   const dislikeAnim = useRef(new Animated.Value(1)).current;

//   const getImageSource = () => {
//     switch (recipe.image) {
//       case 'image1.jpg':
//         return require('../../assets/image/image1.jpg');
//       default:
//         return require('../../assets/image/image1.jpg');
//     }
//   };

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         {
//           id: comments.length + 1,
//           user: 'You',
//           text: newComment,
//           timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
//           likes: 0,
//           isLiked: false,
//         },
//       ]);
//       setNewComment('');
//     }
//   };

//   const triggerAnimation = (anim: Animated.Value) => {
//     anim.setValue(1);
//     Animated.sequence([
//       Animated.timing(anim, {
//         toValue: 1.1, // Subtle scale increase
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   const handleLike = () => {
//     if (isLiked) {
//       setIsLiked(false);
//       setLikes(prevLikes => prevLikes - 1);
//     } else {
//       if (isDisliked) {
//         setIsDisliked(false);
//         setDislikes(prevDislikes => prevDislikes - 1);
//       }
//       setIsLiked(true);
//       setLikes(prevLikes => prevLikes + 1);
//       triggerAnimation(likeAnim);
//     }
//   };

//   const handleDislike = () => {
//     if (isDisliked) {
//       setIsDisliked(false);
//       setDislikes(prevDislikes => prevDislikes - 1);
//     } else {
//       if (isLiked) {
//         setIsLiked(false);
//         setLikes(prevLikes => prevLikes - 1);
//       }
//       setIsDisliked(true);
//       setDislikes(prevDislikes => prevDislikes + 1);
//       triggerAnimation(dislikeAnim);
//     }
//   };

//   const handleShare = async () => {
//     try {
//       const result = await Share.share({
//         message: `Check out this recipe: ${recipe.name} - ${recipe.description}\nView it here: [your-app-link]`,
//       });
//       if (result.action === Share.sharedAction) {
//         setShares(prevShares => prevShares + 1);
//       }
//     } catch (error) {
//       // Silently handle error without alert
//     }
//   };

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing);
//   };

//   const handleCommentLike = (commentId: number) => {
//     setComments(
//       comments.map(comment =>
//         comment.id === commentId
//           ? {
//               ...comment,
//               likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
//               isLiked: !comment.isLiked,
//             }
//           : comment,
//       ),
//     );
//   };

//   const handleBookmark = () => {
//     setIsBookmarked(!isBookmarked);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={getImageSource()} style={styles.image} />
//         <View style={styles.authorOverlay}>
//           <Text style={styles.authorText}>By Chef Anita</Text>
//         </View>
//         <TouchableOpacity style={styles.bookmarkBadge} onPress={handleBookmark}>
//           <MaterialIcons
//             name={isBookmarked ? 'bookmark' : 'bookmark-border'}
//             size={24}
//             color="#fff"
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.sectionTop}>
//         <View style={styles.statsRow}>
//           <TouchableOpacity style={styles.statItem} onPress={handleLike}>
//             <Animated.View style={{transform: [{scale: likeAnim}]}}>
//               <MaterialIcons
//                 name={isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                 size={24}
//                 color="#A064FF"
//               />
//             </Animated.View>
//             <Text style={styles.statText}>
//               {likes}
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.statItem} onPress={handleDislike}>
//             <Animated.View style={{transform: [{scale: dislikeAnim}]}}>
//               <MaterialIcons
//                 name={isDisliked ? 'thumb-down' : 'thumb-down-off-alt'}
//                 size={24}
//                 color="#A064FF"
//               />
//             </Animated.View>
//             <Text style={styles.statText}>
//               {dislikes}
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.statItem} onPress={handleShare}>
//             <MaterialIcons name="share" size={24} color="#A064FF" />
//             <Text style={styles.statText}>
//               {shares}
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.header}>
//           <Text style={styles.name}>{recipe.name}</Text>
//           <TouchableOpacity style={styles.followButton} onPress={handleFollow}>
//             <Text style={styles.followText}>
//               {isFollowing ? 'Following' : 'Follow'}
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.description}>{recipe.description}</Text>

//         {/* Tab Bar */}
//         <View style={styles.tabContainer}>
//           <TouchableOpacity
//             style={[
//               styles.tab,
//               activeTab === 'instructions' && styles.activeTab,
//             ]}
//             onPress={() => setActiveTab('instructions')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'instructions' && styles.activeTabText,
//               ]}>
//               Recipe Instructions
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'health' && styles.activeTab]}
//             onPress={() => setActiveTab('health')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'health' && styles.activeTabText,
//               ]}>
//               Health Meter
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Tab Content */}
//         {activeTab === 'instructions' ? (
//           <>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Ingredients</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: '#E5E7EB',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.ingredients.map((ingredient, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {ingredient}
//                 </Text>
//               ))}
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Instructions</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: '#E5E7EB',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.instructions.map((step, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {index + 1}. {step}
//                 </Text>
//               ))}
//             </View>
//           </>
//         ) : (
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Health Meter</Text>
//             <View
//               style={{
//                 width: '80%',
//                 height: 1,
//                 backgroundColor: '#E5E7EB',
//                 marginBottom: 6,
//               }}
//             />
//             <View style={styles.healthMeter}>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Calories:</Text>
//                 <Text style={styles.healthValue}>{recipe.calories} kcal</Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Carbs:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.carbs}g ({((recipe.carbs / 300) * 100).toFixed(1)}% of
//                   300g)
//                 </Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Protein:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.protein}g ({((recipe.protein / 50) * 100).toFixed(1)}%
//                   of 50g)
//                 </Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Fat:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.fat}g ({((recipe.fat / 70) * 100).toFixed(1)}% of 70g)
//                 </Text>
//               </View>
//               <Text style={styles.healthNote}>
//                 Based on general daily recommended intake (varies by
//                 individual).
//               </Text>
//             </View>
//             <View>
//               <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: '#E5E7EB',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.nutrients.map((benefit, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {benefit}
//                 </Text>
//               ))}
//             </View>
//           </View>
//         )}

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Comments</Text>
//           <FlatList
//             data={comments}
//             renderItem={({item}) => (
//               <View style={styles.commentContainer}>
//                 <View style={styles.commentHeader}>
//                   <Text style={styles.commentUser}>{item.user}</Text>
//                   <TouchableOpacity onPress={() => handleCommentLike(item.id)}>
//                     <MaterialIcons
//                       name={item.isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                       size={18}
//                       color="#A064FF"
//                     />
//                   </TouchableOpacity>
//                   <Text style={styles.commentLikes}>{item.likes}</Text>
//                 </View>
//                 <Text style={styles.commentText}>{item.text}</Text>
//                 <Text style={styles.commentTime}>{item.timestamp}</Text>
//               </View>
//             )}
//             keyExtractor={item => item.id.toString()}
//             ListEmptyComponent={
//               <Text style={styles.noComments}>No comments yet!</Text>
//             }
//           />
//           <View style={styles.commentInputContainer}>
//             <TextInput
//               style={styles.commentInput}
//               value={newComment}
//               onChangeText={setNewComment}
//               placeholder="Add a comment..."
//               multiline
//             />
//             <TouchableOpacity
//               style={styles.commentButton}
//               onPress={handleAddComment}>
//               <Text style={styles.commentButtonText}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default RecipeDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: 'white',
//     // alignItems: 'center',
//     paddingBottom: 20,
//   },
//   imageContainer: {
//     // position: 'relative',
//     width: '100%',
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: 350,
//     borderTopRightRadius: 15,
//     borderTopLeftRadius: 15,
//   },
//   authorOverlay: {
//     position: 'absolute',
//     bottom: 15,
//     left: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 8,
//   },
//   authorText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '600',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     textShadowOffset: {width: 1, height: 1},
//     textShadowRadius: 2,
//     fontFamily: 'System',
//   },
//   bookmarkBadge: {
//     position: 'absolute',
//     top: 15,
//     right: 15,
//     backgroundColor: '#A064FF',
//     borderRadius: 15,
//     padding: 6,
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginVertical: 15,
//     // paddingHorizontal: 10,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     alignItems:'center',
//     alignContent:'center',textAlign:'center',
//     alignSelf:'center',
//   },
//   statItem: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign:'center',
//     alignContent:'center',
//     alignSelf:'center',
//     // padding: 8,
//     // backgroundColor: '#F7FAFC',
//     // borderRadius: 8,
//   },
//   statText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     // paddingHorizontal: 20,
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#2D3748',
//     fontFamily: 'System',
//     textTransform: 'capitalize',
//   },
//   followButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   followText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   description: {
//     fontSize: 18,
//     color: 'black',
//     textAlign: 'left',
//     // marginHorizontal: 20,
//     marginBottom: 20,
//     // lineHeight: 26,
//     fontWeight: '400',
//     fontFamily: 'System',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 20,
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     overflow: 'hidden',
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 14,
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#A064FF',
//   },
//   tabText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   activeTabText: {
//     color: '#FFF',
//     fontWeight: '600',
//   },
//   section: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 15,
//     elevation: 6,
//     shadowColor: '#CBD5E0',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//   },
//   sectionTop: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     padding: 20,
//     marginBottom: 15,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 12,
//     fontFamily: 'System',
//   },
//   listItem: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 8,
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   healthMeter: {
//     marginBottom: 15,
//   },
//   healthItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   healthLabel: {
//     fontSize: 16,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   healthValue: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   healthNote: {
//     fontSize: 12,
//     color: '#718096',
//     textAlign: 'center',
//     fontFamily: 'System',
//   },
//   commentContainer: {
//     marginBottom: 15,
//   },
//   commentHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   commentUser: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#2D3748',
//     marginRight: 10,
//     fontFamily: 'System',
//   },
//   commentLikes: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//     fontFamily: 'System',
//   },
//   commentText: {
//     fontSize: 14,
//     color: 'black',
//     marginBottom: 6,
//     fontFamily: 'System',
//   },
//   commentTime: {
//     fontSize: 12,
//     color: '#718096',
//     fontFamily: 'System',
//   },
//   noComments: {
//     fontSize: 14,
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 10,
//     fontFamily: 'System',
//   },
//   commentInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   commentInput: {
//     flex: 1,
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     marginRight: 10,
//     backgroundColor: '#FFF',
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   commentButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     borderRadius: 10,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   commentButtonText: {
//     color: '#FFF',
//     fontSize: 14,
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
// });

// import React, {useState, useRef} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   Share,
//   Animated,
// } from 'react-native';
// import {Recipe, Comment} from '../feed/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import RecipeCarousel from '../../components/RecipeCard';
// import RecipeCard from './NutritionalDish';
// import SquareCarousel from '../../components/SquareCarousel';

// const RecipeDetailScreen: React.FC = () => {
//   const [recipe] = useState<Recipe>({
//     id: 1,
//     name: 'Spicy Chicken Curry',
//     image: 'image1.jpg',
//     description: 'A flavorful curry with tender chicken and aromatic spices.',
//     ingredients: [
//       '500g chicken breast',
//       '2 tbsp olive oil',
//       '1 onion, chopped',
//       '2 garlic cloves, minced',
//       '1 tbsp curry powder',
//       '200ml coconut milk',
//       'Salt to taste',
//     ],
//     instructions: [
//       'Heat oil in a pan over medium heat.',
//       'Add onion and garlic, sauté until golden.',
//       'Stir in curry powder and cook for 1 minute.',
//       'Add chicken, cook until browned.',
//       'Pour in coconut milk, simmer for 20 minutes.',
//       'Season with salt and serve hot.',
//     ],
//     carbs: 25,
//     nutrients: ['Rich in protein', 'Boosts immunity', 'Supports muscle growth'],
//     calories: 350,
//     protein: 30,
//     fat: 15,
//   });

//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       user: 'Foodie123',
//       text: 'Amazing recipe! So tasty!',
//       timestamp: '2025-04-15 14:30',
//       likes: 0,
//       isLiked: false,
//     },
//   ]);
//   const [newComment, setNewComment] = useState('');
//   const [likes, setLikes] = useState(225); // Initial 225 likes
//   const [dislikes, setDislikes] = useState(12); // Initial 12 dislikes
//   const [isLiked, setIsLiked] = useState(false);
//   const [isDisliked, setIsDisliked] = useState(false);
//   const [shares, setShares] = useState(16); // Initial 16 shares
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [activeTab, setActiveTab] = useState<'instructions' | 'health'>(
//     'instructions',
//   );
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   const likeAnim = useRef(new Animated.Value(1)).current;
//   const dislikeAnim = useRef(new Animated.Value(1)).current;
//   const scrollRef = useRef<ScrollView>(null); // Ref for ScrollView to scroll to comments

//   const getImageSource = () => {
//     switch (recipe.image) {
//       case 'image1.jpg':
//         return require('../../assets/image/image1.jpg');
//       default:
//         return require('../../assets/image/image1.jpg');
//     }
//   };

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         {
//           id: comments.length + 1,
//           user: 'You',
//           text: newComment,
//           timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
//           likes: 0,
//           isLiked: false,
//         },
//       ]);
//       setNewComment('');
//     }
//   };

//   const triggerAnimation = (anim: Animated.Value) => {
//     anim.setValue(1);
//     Animated.sequence([
//       Animated.timing(anim, {
//         toValue: 1.1, // Subtle scale increase
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   const handleLike = () => {
//     if (isLiked) {
//       setIsLiked(false);
//       setLikes(prevLikes => prevLikes - 1);
//     } else {
//       if (isDisliked) {
//         setIsDisliked(false);
//         setDislikes(prevDislikes => prevDislikes - 1);
//       }
//       setIsLiked(true);
//       setLikes(prevLikes => prevLikes + 1);
//       triggerAnimation(likeAnim);
//     }
//   };

//   const handleDislike = () => {
//     if (isDisliked) {
//       setIsDisliked(false);
//       setDislikes(prevDislikes => prevDislikes - 1);
//     } else {
//       if (isLiked) {
//         setIsLiked(false);
//         setLikes(prevLikes => prevLikes - 1);
//       }
//       setIsDisliked(true);
//       setDislikes(prevDislikes => prevDislikes + 1);
//       triggerAnimation(dislikeAnim);
//     }
//   };

//   const handleShare = async () => {
//     try {
//       const result = await Share.share({
//         message: `Check out this recipe: ${recipe.name} - ${recipe.description}\nView it here: [your-app-link]`,
//       });
//       if (result.action === Share.sharedAction) {
//         setShares(prevShares => prevShares + 1);
//       }
//     } catch (error) {
//       // Silently handle error without alert
//     }
//   };

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing);
//   };

//   const handleCommentLike = (commentId: number) => {
//     setComments(
//       comments.map(comment =>
//         comment.id === commentId
//           ? {
//               ...comment,
//               likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
//               isLiked: !comment.isLiked,
//             }
//           : comment,
//       ),
//     );
//   };

//   const handleBookmark = () => {
//     setIsBookmarked(!isBookmarked);
//   };

//   const scrollToComments = () => {
//     scrollRef.current?.scrollToEnd({animated: true});
//   };

//   return (
//     <ScrollView ref={scrollRef} contentContainerStyle={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={getImageSource()} style={styles.image} />
//         <View style={styles.authorOverlay}>
//           <Text style={styles.authorText}>By Chef Anita</Text>
//         </View>
//         <TouchableOpacity style={styles.bookmarkBadge} onPress={handleBookmark}>
//           <MaterialIcons
//             name={isBookmarked ? 'bookmark' : 'bookmark-border'}
//             size={36}
//             color="#fff"
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.sectionTop}>
//         <View style={styles.statsRow}>
//           <TouchableOpacity style={styles.statItem} onPress={handleLike}>
//             <Animated.View style={{transform: [{scale: likeAnim}]}}>
//               <MaterialIcons
//                 name={isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                 size={24}
//                 color="#A064FF"
//               />
//             </Animated.View>
//             <Text style={styles.statText}>{likes}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.statItem} onPress={handleDislike}>
//             <Animated.View style={{transform: [{scale: dislikeAnim}]}}>
//               <MaterialIcons
//                 name={isDisliked ? 'thumb-down' : 'thumb-down-off-alt'}
//                 size={24}
//                 color="#A064FF"
//               />
//             </Animated.View>
//             <Text style={styles.statText}>{dislikes}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.statItem} onPress={handleShare}>
//             <MaterialIcons name="share" size={24} color="#A064FF" />
//             <Text style={styles.statText}>{shares}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.statItem} onPress={scrollToComments}>
//             <MaterialIcons name="comment" size={24} color="#A064FF" />
//             <Text style={styles.statText}>{comments.length}</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.header}>
//           <Text style={styles.name}>{recipe.name}</Text>
//           <TouchableOpacity
//             style={styles.followButton}
//             onPress={handleFollow}
//             activeOpacity={0.9}>
//             <Text style={styles.followText}>
//               {isFollowing ? 'Following' : 'Follow'}
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.description}>{recipe.description}</Text>

//         {/* Tab Bar */}
//         <View style={styles.tabContainer}>
//           <TouchableOpacity
//             style={[
//               styles.tab,
//               activeTab === 'instructions' && styles.activeTab,
//             ]}
//             onPress={() => setActiveTab('instructions')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'instructions' && styles.activeTabText,
//               ]}>
//               Recipe Instructions
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'health' && styles.activeTab]}
//             onPress={() => setActiveTab('health')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'health' && styles.activeTabText,
//               ]}>
//               Health Meter
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Tab Content */}
//         {activeTab === 'instructions' ? (
//           <>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Ingredients</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: '#E5E7EB',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.ingredients.map((ingredient, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {ingredient}
//                 </Text>
//               ))}
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Instructions</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: '#E5E7EB',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.instructions.map((step, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {index + 1}. {step}
//                 </Text>
//               ))}
//             </View>
//           </>
//         ) : (
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Health Meter</Text>
//             <View
//               style={{
//                 width: '80%',
//                 height: 1,
//                 backgroundColor: '#E5E7EB',
//                 marginBottom: 6,
//               }}
//             />
//             <View style={styles.healthMeter}>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Calories:</Text>
//                 <Text style={styles.healthValue}>{recipe.calories} kcal</Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Carbs:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.carbs}g ({((recipe.carbs / 300) * 100).toFixed(1)}% of
//                   300g)
//                 </Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Protein:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.protein}g ({((recipe.protein / 50) * 100).toFixed(1)}%
//                   of 50g)
//                 </Text>
//               </View>
//               <View style={styles.healthItem}>
//                 <Text style={styles.healthLabel}>Fat:</Text>
//                 <Text style={styles.healthValue}>
//                   {recipe.fat}g ({((recipe.fat / 70) * 100).toFixed(1)}% of 70g)
//                 </Text>
//               </View>
//               <Text style={styles.healthNote}>
//                 Based on general daily recommended intake (varies by
//                 individual).
//               </Text>
//             </View>
//             <View>
//               <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: '#E5E7EB',
//                   marginBottom: 6,
//                 }}
//               />
//               {recipe.nutrients.map((benefit, index) => (
//                 <Text key={index} style={styles.listItem}>
//                   {benefit}
//                 </Text>
//               ))}
//             </View>
//           </View>
//         )}
//       </View>
//       <View style={styles.sectionComment}>
//         <Text style={styles.sectionTitle}>Comments</Text>
//         <FlatList
//           data={comments}
//           renderItem={({item}) => (
//             <View style={styles.commentContainer}>
//               <View style={styles.commentHeader}>
//                 <Text style={styles.commentUser}>{item.user}</Text>
//                 <View style={{flexDirection: 'row', display: 'flex'}}>
//                   <TouchableOpacity onPress={() => handleCommentLike(item.id)}>
//                     <MaterialIcons
//                       name={item.isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                       size={18}
//                       color="#A064FF"
//                     />
//                   </TouchableOpacity>
//                   <Text style={styles.commentLikes}>{item.likes}</Text>
//                 </View>
//               </View>
//               <Text style={styles.commentText}>{item.text}</Text>
//               <Text style={styles.commentTime}>{item.timestamp}</Text>
//             </View>
//           )}
//           keyExtractor={item => item.id.toString()}
//           ListEmptyComponent={
//             <Text style={styles.noComments}>No comments yet!</Text>
//           }
//         />
//         <View style={styles.commentInputContainer}>
//           <TextInput
//             style={styles.commentInput}
//             value={newComment}
//             onChangeText={setNewComment}
//             placeholder="Add a comment..."
//             multiline
//           />
//           <TouchableOpacity
//             style={styles.commentButton}
//             onPress={handleAddComment}>
//             <Text style={styles.commentButtonText}>Post</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View>
//         <SquareCarousel />
//       </View>
//     </ScrollView>
//   );
// };

// export default RecipeDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#F7FAFC',
//     // alignItems: 'center',
//     paddingBottom: 50,
//   },
//   imageContainer: {
//     // position: 'relative',
//     width: '100%',
//     // overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: 350,
//     borderTopRightRadius: 15,
//     borderTopLeftRadius: 15,
//   },
//   authorOverlay: {
//     position: 'absolute',
//     bottom: 15,
//     left: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 8,
//   },
//   authorText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '600',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     textShadowOffset: {width: 1, height: 1},
//     textShadowRadius: 2,
//     fontFamily: 'System',
//   },
//   bookmarkBadge: {
//     position: 'absolute',
//     top: 0,
//     right: 15,
//     // backgroundColor: '#A064FF',
//     borderRadius: 15,
//     // padding: 6,
//     // elevation: 6,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginVertical: 0,
//     borderRadius: 10,
//     // elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   statItem: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     // padding: 8,
//     // backgroundColor: '#F7FAFC',
//     borderRadius: 8,
//   },
//   statText: {
//     fontSize: 16,
//     color: '#A064FF',
//     // marginLeft: 8,
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     // paddingHorizontal: 20,
//     marginBottom: 8,
//     marginTop: 12,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#2D3748',
//     fontFamily: 'System',
//     textTransform: 'capitalize',
//   },
//   followButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     // elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   followText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '800',
//     fontFamily: 'System',
//   },
//   description: {
//     fontSize: 18,
//     color: 'black',
//     textAlign: 'left',
//     marginBottom: 10,
//     lineHeight: 20,
//     fontWeight: '400',
//     fontFamily: 'System',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 20,
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     elevation: 1,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     overflow: 'hidden',
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 14,
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#A064FF',
//   },
//   tabText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   activeTabText: {
//     color: '#FFF',
//     fontWeight: '600',
//   },
//   section: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     // padding: 20,
//     marginBottom: 15,
//     elevation: 6,
//     shadowColor: '#CBD5E0',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//   },

//   sectionComment: {
//     width: '100%',
//     backgroundColor: '#F5f5f5',
//     borderRadius: 8,
//     // padding: 20,
//     // marginBottom: 15,
//     elevation: 0,
//     shadowColor: '#CBD5E0',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     padding: 20,
//   },
//   sectionTop: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     padding: 20,
//     // marginBottom: 15,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: 'black',
//     marginBottom: 12,
//     fontFamily: 'System',
//   },
//   listItem: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 8,
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   healthMeter: {
//     marginBottom: 15,
//   },
//   healthItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   healthLabel: {
//     fontSize: 16,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   healthValue: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   healthNote: {
//     fontSize: 12,
//     color: '#718096',
//     textAlign: 'center',
//     fontFamily: 'System',
//   },
//   commentContainer: {
//     marginBottom: 15,
//   },
//   commentHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//     justifyContent: 'space-between',
//   },
//   commentUser: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: 'black',
//     marginRight: 10,
//     fontFamily: 'System',
//   },
//   commentLikes: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//     fontFamily: 'System',
//   },
//   commentText: {
//     fontSize: 14,
//     color: 'black',
//     marginBottom: 2,
//     fontFamily: 'System',
//   },
//   commentTime: {
//     fontSize: 12,
//     color: '#718096',
//     fontFamily: 'System',
//   },
//   noComments: {
//     fontSize: 14,
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 10,
//     fontFamily: 'System',
//   },
//   commentInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   commentInput: {
//     flex: 1,
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     marginRight: 10,
//     backgroundColor: '#FFF',
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   commentButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     borderRadius: 10,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   commentButtonText: {
//     color: '#FFF',
//     fontSize: 14,
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
// });

// import React, {useState, useRef, useEffect} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   Share,
//   Animated,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import {Recipe, Comment} from '../feed/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import RecipeCarousel from '../../components/RecipeCard';
// import RecipeCard from './NutritionalDish';
// import SquareCarousel from '../../components/SquareCarousel';
// import {useNavigation} from '@react-navigation/native';

// // Define props interface for CustomHeader
// interface CustomHeaderProps {
//   title: string;
//   onBackPress: () => void;
//   headerBackground: Animated.AnimatedInterpolation<string>;
//   headerTitleColor: Animated.AnimatedInterpolation<string>;
// }

// const CustomHeader: React.FC<CustomHeaderProps> = ({
//   title,
//   onBackPress,
//   headerBackground,
//   headerTitleColor,
// }) => {
//   return (
//     <Animated.View
//       style={[styles.headerContainer, {backgroundColor: headerBackground}]}>
//       <StatusBar
//         barStyle="dark-content"
//         translucent
//         backgroundColor="transparent"
//       />
//       <View style={styles.headerContent}>
//         <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
//           <MaterialIcons name="arrow-back" size={24} color="#2D3748" />
//         </TouchableOpacity>
//         <Animated.Text style={[styles.headerTitle, {color: headerTitleColor}]}>
//           {title}
//         </Animated.Text>
//         <View style={styles.placeholder} />
//       </View>
//     </Animated.View>
//   );
// };

// const RecipeDetailScreen: React.FC = () => {
//   const [recipe] = useState<Recipe>({
//     id: 1,
//     name: 'Spicy Chicken Curry',
//     image: 'image1.jpg',
//     description: 'A flavorful curry with tender chicken and aromatic spices.',
//     ingredients: [
//       '500g chicken breast',
//       '2 tbsp olive oil',
//       '1 onion, chopped',
//       '2 garlic cloves, minced',
//       '1 tbsp curry powder',
//       '200ml coconut milk',
//       'Salt to taste',
//     ],
//     instructions: [
//       'Heat oil in a pan over medium heat.',
//       'Add onion and garlic, sauté until golden.',
//       'Stir in curry powder and cook for 1 minute.',
//       'Add chicken, cook until browned.',
//       'Pour in coconut milk, simmer for 20 minutes.',
//       'Season with salt and serve hot.',
//     ],
//     carbs: 25,
//     nutrients: ['Rich in protein', 'Boosts immunity', 'Supports muscle growth'],
//     calories: 350,
//     protein: 30,
//     fat: 15,
//   });

//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       user: 'Foodie123',
//       text: 'Amazing recipe! So tasty!',
//       timestamp: '2025-04-15 14:30',
//       likes: 0,
//       isLiked: false,
//     },
//   ]);
//   const [newComment, setNewComment] = useState('');
//   const [likes, setLikes] = useState(225);
//   const [dislikes, setDislikes] = useState(12);
//   const [isLiked, setIsLiked] = useState(false);
//   const [isDisliked, setIsDisliked] = useState(false);
//   const [shares, setShares] = useState(16);
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [activeTab, setActiveTab] = useState<'instructions' | 'health'>(
//     'instructions',
//   );

//   const likeAnim = useRef(new Animated.Value(1)).current;
//   const dislikeAnim = useRef(new Animated.Value(1)).current;
//   const scrollRef = useRef<ScrollView>(null);
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const headerBackground = scrollY.interpolate({
//     inputRange: [0, 50],
//     outputRange: ['transparent', '#FFF'],
//     extrapolate: 'clamp',
//   });
//   const headerTitleColor = scrollY.interpolate({
//     inputRange: [0, 50],
//     outputRange: ['#FFF', '#2D3748'], // White initially, black on white background
//     extrapolate: 'clamp',
//   });
//   const navigation = useNavigation();

//   const getImageSource = () => {
//     switch (recipe.image) {
//       case 'image1.jpg':
//         return require('../../assets/image/image1.jpg');
//       default:
//         return require('../../assets/image/image1.jpg');
//     }
//   };

//   useEffect(() => {
//     let lastScrollY = 0;
//     const scrollListener = scrollY.addListener(({value}) => {
//       console.log('Scroll value:', value);
//     });

//     return () => scrollY.removeListener(scrollListener);
//   }, []);

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         {
//           id: comments.length + 1,
//           user: 'You',
//           text: newComment,
//           timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
//           likes: 0,
//           isLiked: false,
//         },
//       ]);
//       setNewComment('');
//     }
//   };

//   const triggerAnimation = (anim: Animated.Value) => {
//     anim.setValue(1);
//     Animated.sequence([
//       Animated.timing(anim, {
//         toValue: 1.1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   const handleLike = () => {
//     if (isLiked) {
//       setIsLiked(false);
//       setLikes(prevLikes => prevLikes - 1);
//     } else {
//       if (isDisliked) {
//         setIsDisliked(false);
//         setDislikes(prevDislikes => prevDislikes - 1);
//       }
//       setIsLiked(true);
//       setLikes(prevLikes => prevLikes + 1);
//       triggerAnimation(likeAnim);
//     }
//   };

//   const handleDislike = () => {
//     if (isDisliked) {
//       setIsDisliked(false);
//       setDislikes(prevDislikes => prevDislikes - 1);
//     } else {
//       if (isLiked) {
//         setIsLiked(false);
//         setLikes(prevLikes => prevLikes - 1);
//       }
//       setIsDisliked(true);
//       setDislikes(prevDislikes => prevDislikes + 1);
//       triggerAnimation(dislikeAnim);
//     }
//   };

//   const handleShare = async () => {
//     try {
//       const result = await Share.share({
//         message: `Check out this recipe: ${recipe.name} - ${recipe.description}\nView it here: [your-app-link]`,
//       });
//       if (result.action === Share.sharedAction) {
//         setShares(prevShares => prevShares + 1);
//       }
//     } catch (error) {
//       // Silently handle error
//     }
//   };

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing);
//   };

//   const handleCommentLike = (commentId: number) => {
//     setComments(
//       comments.map(comment =>
//         comment.id === commentId
//           ? {
//               ...comment,
//               likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
//               isLiked: !comment.isLiked,
//             }
//           : comment,
//       ),
//     );
//   };

//   const scrollToComments = () => {
//     scrollRef.current?.scrollToEnd({animated: true});
//   };

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <CustomHeader
//         title="Profile"
//         onBackPress={handleBackPress}
//         headerBackground={headerBackground}
//         headerTitleColor={headerTitleColor}
//       />
//       <ScrollView
//         ref={scrollRef}
//         contentContainerStyle={styles.container}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollY}}}],
//           {useNativeDriver: false},
//         )}
//         scrollEventThrottle={16}>
//         <View style={styles.imageContainer}>
//           <Image source={getImageSource()} style={styles.image} />
//           <View style={styles.authorOverlay}>
//             <Text style={styles.authorText}>By Chef Anita</Text>
//           </View>
//         </View>
//         <View style={styles.sectionTop}>
//           <View style={styles.statsRow}>
//             <TouchableOpacity style={styles.statItem} onPress={handleLike}>
//               <Animated.View style={{transform: [{scale: likeAnim}]}}>
//                 <MaterialIcons
//                   name={isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                   size={24}
//                   color="#A064FF"
//                 />
//               </Animated.View>
//               <Text style={styles.statText}>{likes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.statItem} onPress={handleDislike}>
//               <Animated.View style={{transform: [{scale: dislikeAnim}]}}>
//                 <MaterialIcons
//                   name={isDisliked ? 'thumb-down' : 'thumb-down-off-alt'}
//                   size={24}
//                   color="#A064FF"
//                 />
//               </Animated.View>
//               <Text style={styles.statText}>{dislikes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.statItem} onPress={handleShare}>
//               <MaterialIcons name="share" size={24} color="#A064FF" />
//               <Text style={styles.statText}>{shares}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.statItem}
//               onPress={scrollToComments}>
//               <MaterialIcons name="comment" size={24} color="#A064FF" />
//               <Text style={styles.statText}>{comments.length}</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.header}>
//             <Text style={styles.name}>{recipe.name}</Text>
//             <TouchableOpacity
//               style={styles.followButton}
//               onPress={handleFollow}
//               activeOpacity={0.9}>
//               <Text style={styles.followText}>
//                 {isFollowing ? 'Following' : 'Follow'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.description}>{recipe.description}</Text>

//           {/* Tab Bar */}
//           <View style={styles.tabContainer}>
//             <TouchableOpacity
//               style={[
//                 styles.tab,
//                 activeTab === 'instructions' && styles.activeTab,
//               ]}
//               onPress={() => setActiveTab('instructions')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   activeTab === 'instructions' && styles.activeTabText,
//                 ]}>
//                 Recipe Instructions
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.tab, activeTab === 'health' && styles.activeTab]}
//               onPress={() => setActiveTab('health')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   activeTab === 'health' && styles.activeTabText,
//                 ]}>
//                 Health Meter
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {/* Tab Content */}
//           {activeTab === 'instructions' ? (
//             <>
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Ingredients</Text>
//                 <View
//                   style={{
//                     width: '80%',
//                     height: 1,
//                     backgroundColor: '#E5E7EB',
//                     marginBottom: 6,
//                   }}
//                 />
//                 {recipe.ingredients.map((ingredient, index) => (
//                   <Text key={index} style={styles.listItem}>
//                     {ingredient}
//                   </Text>
//                 ))}
//               </View>
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Instructions</Text>
//                 <View
//                   style={{
//                     width: '80%',
//                     height: 1,
//                     backgroundColor: '#E5E7EB',
//                     marginBottom: 6,
//                   }}
//                 />
//                 {recipe.instructions.map((step, index) => (
//                   <Text key={index} style={styles.listItem}>
//                     <Text style={{fontWeight: '800'}}>{index + 1}</Text>. {step}
//                   </Text>
//                 ))}
//               </View>
//             </>
//           ) : (
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Health Meter</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: '#E5E7EB',
//                   marginBottom: 6,
//                 }}
//               />
//               <View style={styles.healthMeter}>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Calories:</Text>
//                   <Text style={styles.healthValue}>{recipe.calories} kcal</Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Carbs:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.carbs}g ({((recipe.carbs / 300) * 100).toFixed(1)}%
//                     of 300g)
//                   </Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Protein:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.protein}g (
//                     {((recipe.protein / 50) * 100).toFixed(1)}% of 50g)
//                   </Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Fat:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.fat}g ({((recipe.fat / 70) * 100).toFixed(1)}% of
//                     70g)
//                   </Text>
//                 </View>
//                 <Text style={styles.healthNote}>
//                   Based on general daily recommended intake (varies by
//                   individual).
//                 </Text>
//               </View>
//               <View>
//                 <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
//                 <View
//                   style={{
//                     width: '80%',
//                     height: 1,
//                     backgroundColor: '#E5E7EB',
//                     marginBottom: 6,
//                   }}
//                 />
//                 {recipe.nutrients.map((benefit, index) => (
//                   <Text key={index} style={styles.listItem}>
//                     {benefit}
//                   </Text>
//                 ))}
//               </View>
//             </View>
//           )}
//         </View>
//         <View style={styles.sectionComment}>
//           <Text style={styles.sectionTitle}>Comments</Text>
//           <FlatList
//             data={comments}
//             renderItem={({item}) => (
//               <View style={styles.commentContainer}>
//                 <View style={styles.commentHeader}>
//                   <Text style={styles.commentUser}>{item.user}</Text>
//                   <View style={{flexDirection: 'row', display: 'flex'}}>
//                     <TouchableOpacity
//                       onPress={() => handleCommentLike(item.id)}>
//                       <MaterialIcons
//                         name={item.isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                         size={18}
//                         color="#A064FF"
//                       />
//                     </TouchableOpacity>
//                     <Text style={styles.commentLikes}>{item.likes}</Text>
//                   </View>
//                 </View>
//                 <Text style={styles.commentText}>{item.text}</Text>
//                 <Text style={styles.commentTime}>{item.timestamp}</Text>
//               </View>
//             )}
//             keyExtractor={item => item.id.toString()}
//             ListEmptyComponent={
//               <Text style={styles.noComments}>No comments yet!</Text>
//             }
//           />
//           <View style={styles.commentInputContainer}>
//             <TextInput
//               style={styles.commentInput}
//               value={newComment}
//               onChangeText={setNewComment}
//               placeholder="Add a comment..."
//               multiline
//             />
//             <TouchableOpacity
//               style={styles.commentButton}
//               onPress={handleAddComment}>
//               <Text style={styles.commentButtonText}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View>
//           <SquareCarousel />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default RecipeDetailScreen;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     // backgroundColor: 'transparent',
//   },
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#F7FAFC',
//     paddingBottom: 50,
//   },
//   imageContainer: {
//     width: '100%',
//   },
//   image: {
//     width: '100%',
//     height: 350,
//     borderBottomRightRadius: 24,
//     borderBottomLeftRadius: 24,
//   },
//   authorOverlay: {
//     position: 'absolute',
//     bottom: 15,
//     left: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 8,
//   },
//   authorText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '600',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     textShadowOffset: {width: 1, height: 1},
//     textShadowRadius: 2,
//     fontFamily: 'System',
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginVertical: 0,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     height: '6%',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   statItem: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   statText: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 8,
//     marginTop: 12,
//     padding: 4,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#2D3748',
//     fontFamily: 'System',
//     textTransform: 'capitalize',
//   },
//   followButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   followText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '800',
//     fontFamily: 'System',
//   },
//   description: {
//     fontSize: 18,
//     color: 'black',
//     textAlign: 'left',
//     marginBottom: 10,
//     lineHeight: 20,
//     fontWeight: '400',
//     fontFamily: 'System',
//     padding: 4,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 20,
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     elevation: 1,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     overflow: 'hidden',
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 14,
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#A064FF',
//   },
//   tabText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   activeTabText: {
//     color: '#FFF',
//     fontWeight: '600',
//   },
//   section: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     marginBottom: 15,
//     elevation: 6,
//     shadowColor: '#CBD5E0',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     padding: 6,
//     paddingBottom: 12,
//   },
//   sectionComment: {
//     width: '100%',
//     backgroundColor: '#F5F5F5',
//     borderRadius: 14,
//     elevation: 2,
//     shadowColor: 'grey',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     padding: 20,
//     borderWidth: 0.2,
//   },
//   sectionTop: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     padding: 10,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     marginBottom: -26,
//     borderTopStartRadius: 16,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: 'black',
//     marginBottom: 12,
//     fontFamily: 'System',
//   },
//   listItem: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 8,
//     fontWeight: '700',
//     fontFamily: 'System',
//     marginLeft: 6,
//     textTransform: 'capitalize',
//   },
//   healthMeter: {
//     marginBottom: 15,
//   },
//   healthItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   healthLabel: {
//     fontSize: 16,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   healthValue: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   healthNote: {
//     fontSize: 12,
//     color: '#718096',
//     textAlign: 'center',
//     fontFamily: 'System',
//   },
//   commentContainer: {
//     marginBottom: 15,
//   },
//   commentHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//     justifyContent: 'space-between',
//   },
//   commentUser: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: 'black',
//     marginRight: 10,
//     fontFamily: 'System',
//   },
//   commentLikes: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//     fontFamily: 'System',
//   },
//   commentText: {
//     fontSize: 14,
//     color: 'black',
//     marginBottom: 2,
//     fontFamily: 'System',
//   },
//   commentTime: {
//     fontSize: 12,
//     color: '#718096',
//     fontFamily: 'System',
//   },
//   noComments: {
//     fontSize: 14,
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 10,
//     fontFamily: 'System',
//   },
//   commentInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   commentInput: {
//     flex: 1,
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     marginRight: 10,
//     backgroundColor: '#FFF',
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   commentButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     borderRadius: 10,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   commentButtonText: {
//     color: '#FFF',
//     fontSize: 14,
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 100,
//     zIndex: 1000,
//     paddingTop: StatusBar.currentHeight || 0,
//     elevation: 0,
//     shadowOpacity: 0,
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     height: '100%',
//     backgroundColor: 'transparent',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '800',
//     fontFamily: 'System',
//     paddingHorizontal: 20,
//   },
//   backButton: {
//     padding: 5,
//   },
//   placeholder: {
//     width: 24,
//     height: 24,
//   },
// });

/* eslint-disable react-native/no-inline-styles */
// import React, {useState, useRef, useEffect} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   Share,
//   Animated,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import {Recipe, Comment} from '../feed/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import RecipeCarousel from '../../components/RecipeCard';
// import RecipeCard from './NutritionalDish';
// import SquareCarousel from '../../components/SquareCarousel';
// import {useNavigation} from '@react-navigation/native';

// // Define props interface for CustomHeader
// interface CustomHeaderProps {
//   title: string;
//   onBackPress: () => void;
//   headerBackground: Animated.AnimatedInterpolation<string>;
//   headerTitleColor: Animated.AnimatedInterpolation<string>;
// }

// const CustomHeader: React.FC<CustomHeaderProps> = ({
//   title,
//   onBackPress,
//   headerBackground,
//   headerTitleColor,
// }) => {
//   return (
//     <Animated.View
//       style={[styles.headerContainer, {backgroundColor: headerBackground}]}>
//       <StatusBar
//         barStyle="dark-content"
//         translucent
//         backgroundColor="transparent"
//       />
//       <View style={styles.headerContent}>
//         <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
//           <MaterialIcons name="arrow-back" size={24} color="#2D3748" />
//         </TouchableOpacity>
//         <Animated.Text style={[styles.headerTitle, {color: headerTitleColor}]}>
//           {title}
//         </Animated.Text>
//         <View style={styles.placeholder} />
//       </View>
//     </Animated.View>
//   );
// };

// const RecipeDetailScreen: React.FC = () => {
//   const [recipe] = useState<Recipe>({
//     id: 1,
//     name: 'Spicy Chicken Curry',
//     image: 'image1.jpg',
//     description: 'A flavorful curry with tender chicken and aromatic spices.',
//     ingredients: [
//       '500g chicken breast',
//       '2 tbsp olive oil',
//       '1 onion, chopped',
//       '2 garlic cloves, minced',
//       '1 tbsp curry powder',
//       '200ml coconut milk',
//       'Salt to taste',
//     ],
//     instructions: [
//       'Heat oil in a pan over medium heat.',
//       'Add onion and garlic, sauté until golden.',
//       'Stir in curry powder and cook for 1 minute.',
//       'Add chicken, cook until browned.',
//       'Pour in coconut milk, simmer for 20 minutes.',
//       'Season with salt and serve hot.',
//     ],
//     carbs: 25,
//     nutrients: ['Rich in protein', 'Boosts immunity', 'Supports muscle growth'],
//     calories: 350,
//     protein: 30,
//     fat: 15,
//   });

//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       user: 'Foodie123',
//       text: 'Amazing recipe! So tasty!',
//       timestamp: '2025-04-15 14:30',
//       likes: 0,
//       isLiked: false,
//     },
//   ]);
//   const [newComment, setNewComment] = useState('');
//   const [likes, setLikes] = useState(225);
//   const [dislikes, setDislikes] = useState(12);
//   const [isLiked, setIsLiked] = useState(false);
//   const [isDisliked, setIsDisliked] = useState(false);
//   const [shares, setShares] = useState(16);
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [activeTab, setActiveTab] = useState<'instructions' | 'health'>(
//     'instructions',
//   );

//   const likeAnim = useRef(new Animated.Value(1)).current;
//   const dislikeAnim = useRef(new Animated.Value(1)).current;
//   const scrollRef = useRef<ScrollView>(null);
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const headerBackground = scrollY.interpolate({
//     inputRange: [0, 50],
//     outputRange: ['transparent', '#FFF'],
//     extrapolate: 'clamp',
//   });
//   const headerTitleColor = scrollY.interpolate({
//     inputRange: [0, 50],
//     outputRange: ['#FFF', '#2D3748'],
//     extrapolate: 'clamp',
//   });
//   const navigation = useNavigation();

//   // Animation for ingredient and instruction boxes
//   const fadeAnims = recipe.ingredients.map(
//     () => useRef(new Animated.Value(0)).current,
//   );
//   const instructionAnims = recipe.instructions.map(
//     () => useRef(new Animated.Value(0)).current,
//   );

//   useEffect(() => {
//     // Animate ingredients
//     fadeAnims.forEach((anim, index) => {
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }).start();
//     });
//     // Animate instructions
//     instructionAnims.forEach((anim, index) => {
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }).start();
//     });
//   }, []);

//   const getImageSource = () => {
//     switch (recipe.image) {
//       case 'image1.jpg':
//         return require('../../assets/image/image1.jpg');
//       default:
//         return require('../../assets/image/image1.jpg');
//     }
//   };

//   useEffect(() => {
//     let lastScrollY = 0;
//     const scrollListener = scrollY.addListener(({value}) => {
//       console.log('Scroll value:', value);
//     });

//     return () => scrollY.removeListener(scrollListener);
//   }, []);

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         {
//           id: comments.length + 1,
//           user: 'You',
//           text: newComment,
//           timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
//           likes: 0,
//           isLiked: false,
//         },
//       ]);
//       setNewComment('');
//     }
//   };

//   const triggerAnimation = (anim: Animated.Value) => {
//     anim.setValue(1);
//     Animated.sequence([
//       Animated.timing(anim, {
//         toValue: 1.1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   const handleLike = () => {
//     if (isLiked) {
//       setIsLiked(false);
//       setLikes(prevLikes => prevLikes - 1);
//     } else {
//       if (isDisliked) {
//         setIsDisliked(false);
//         setDislikes(prevDislikes => prevDislikes - 1);
//       }
//       setIsLiked(true);
//       setLikes(prevLikes => prevLikes + 1);
//       triggerAnimation(likeAnim);
//     }
//   };

//   const handleDislike = () => {
//     if (isDisliked) {
//       setIsDisliked(false);
//       setDislikes(prevDislikes => prevDislikes - 1);
//     } else {
//       if (isLiked) {
//         setIsLiked(false);
//         setLikes(prevLikes => prevLikes - 1);
//       }
//       setIsDisliked(true);
//       setDislikes(prevDislikes => prevDislikes + 1);
//       triggerAnimation(dislikeAnim);
//     }
//   };

//   const handleShare = async () => {
//     try {
//       const result = await Share.share({
//         message: `Check out this recipe: ${recipe.name} - ${recipe.description}\nView it here: [your-app-link]`,
//       });
//       if (result.action === Share.sharedAction) {
//         setShares(prevShares => prevShares + 1);
//       }
//     } catch (error) {
//       // Silently handle error
//     }
//   };

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing);
//   };

//   const handleCommentLike = (commentId: number) => {
//     setComments(
//       comments.map(comment =>
//         comment.id === commentId
//           ? {
//               ...comment,
//               likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
//               isLiked: !comment.isLiked,
//             }
//           : comment,
//       ),
//     );
//   };

//   const scrollToComments = () => {
//     scrollRef.current?.scrollToEnd({animated: true});
//   };

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <CustomHeader
//         title="Profile"
//         onBackPress={handleBackPress}
//         headerBackground={headerBackground}
//         headerTitleColor={headerTitleColor}
//       />
//       <ScrollView
//         ref={scrollRef}
//         contentContainerStyle={styles.container}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollY}}}],
//           {useNativeDriver: false},
//         )}
//         scrollEventThrottle={16}>
//         <View style={styles.imageContainer}>
//           <Image source={getImageSource()} style={styles.image} />
//           <View
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}>
//             <View style={styles.authorOverlay}>
//               <Text style={styles.authorText}>By Chef Anita</Text>
//             </View>
//             <View style={styles.prepOverlay}>
//               <Text style={styles.authorText}>Time: 20m</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.sectionTop}>
//           <View style={styles.statsRow}>
//             <TouchableOpacity style={styles.statItem} onPress={handleLike}>
//               <Animated.View style={{transform: [{scale: likeAnim}]}}>
//                 <MaterialIcons
//                   name={isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                   size={24}
//                   color="#A064FF"
//                 />
//               </Animated.View>
//               <Text style={styles.statText}>{likes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.statItem} onPress={handleDislike}>
//               <Animated.View style={{transform: [{scale: dislikeAnim}]}}>
//                 <MaterialIcons
//                   name={isDisliked ? 'thumb-down' : 'thumb-down-off-alt'}
//                   size={24}
//                   color="#A064FF"
//                 />
//               </Animated.View>
//               <Text style={styles.statText}>{dislikes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.statItem} onPress={handleShare}>
//               <MaterialIcons name="share" size={24} color="#A064FF" />
//               <Text style={styles.statText}>{shares}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.statItem}
//               onPress={scrollToComments}>
//               <MaterialIcons name="comment" size={24} color="#A064FF" />
//               <Text style={styles.statText}>{comments.length}</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.header}>
//             <Text style={styles.name}>{recipe.name}</Text>
//             <TouchableOpacity
//               style={styles.followButton}
//               onPress={handleFollow}
//               activeOpacity={0.9}>
//               <Text style={styles.followText}>
//                 {isFollowing ? 'Following' : 'Follow'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.description}>{recipe.description}</Text>

//           {/* Tab Bar */}
//           <View style={styles.tabContainer}>
//             <TouchableOpacity
//               style={[
//                 styles.tab,
//                 activeTab === 'instructions' && styles.activeTab,
//               ]}
//               onPress={() => setActiveTab('instructions')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   activeTab === 'instructions' && styles.activeTabText,
//                 ]}>
//                 Recipe Instructions
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.tab, activeTab === 'health' && styles.activeTab]}
//               onPress={() => setActiveTab('health')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   activeTab === 'health' && styles.activeTabText,
//                 ]}>
//                 Health Meter
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {/* Tab Content */}
//           {activeTab === 'instructions' ? (
//             <>
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Ingredients</Text>
//                 <View style={styles.divider} />
//                 {recipe.ingredients.map((ingredient, index) => (
//                   <Animated.View
//                     key={index}
//                     style={[styles.itemBox, {opacity: fadeAnims[index]}]}>
//                     <TouchableOpacity activeOpacity={0.8}>
//                       <Text style={styles.itemText}>{ingredient}</Text>
//                     </TouchableOpacity>
//                   </Animated.View>
//                 ))}
//               </View>
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Instructions</Text>
//                 <View style={styles.divider} />
//                 {recipe.instructions.map((step, index) => (
//                   <Animated.View
//                     key={index}
//                     style={[
//                       styles.itemBox,
//                       {opacity: instructionAnims[index]},
//                     ]}>
//                     <TouchableOpacity activeOpacity={0.8}>
//                       <Text style={styles.itemText}>
//                         <Text style={styles.stepNumber}>{index + 1}.</Text>{' '}
//                         {step}
//                       </Text>
//                     </TouchableOpacity>
//                   </Animated.View>
//                 ))}
//               </View>
//             </>
//           ) : (
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Health Meter</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: '#E5E7EB',
//                   marginBottom: 6,
//                 }}
//               />
//               <View style={styles.healthMeter}>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Calories:</Text>
//                   <Text style={styles.healthValue}>{recipe.calories} kcal</Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Carbs:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.carbs}g ({((recipe.carbs / 300) * 100).toFixed(1)}%
//                     of 300g)
//                   </Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Protein:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.protein}g (
//                     {((recipe.protein / 50) * 100).toFixed(1)}% of 50g)
//                   </Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Fat:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.fat}g ({((recipe.fat / 70) * 100).toFixed(1)}% of
//                     70g)
//                   </Text>
//                 </View>
//                 <Text style={styles.healthNote}>
//                   Based on general daily recommended intake (varies by
//                   individual).
//                 </Text>
//               </View>
//               <View>
//                 <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
//                 <View
//                   style={{
//                     width: '80%',
//                     height: 1,
//                     backgroundColor: '#E5E7EB',
//                     marginBottom: 6,
//                   }}
//                 />
//                 {recipe.nutrients.map((benefit, index) => (
//                   <Text key={index} style={styles.listItem}>
//                     {benefit}
//                   </Text>
//                 ))}
//               </View>
//             </View>
//           )}
//         </View>
//         <View style={styles.sectionComment}>
//           <Text style={styles.sectionTitle}>Comments</Text>
//           <FlatList
//             data={comments}
//             renderItem={({item}) => (
//               <View style={styles.commentContainer}>
//                 <View style={styles.commentHeader}>
//                   <Text style={styles.commentUser}>{item.user}</Text>
//                   <View style={{flexDirection: 'row', display: 'flex'}}>
//                     <TouchableOpacity
//                       onPress={() => handleCommentLike(item.id)}>
//                       <MaterialIcons
//                         name={item.isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                         size={18}
//                         color="#A064FF"
//                       />
//                     </TouchableOpacity>
//                     <Text style={styles.commentLikes}>{item.likes}</Text>
//                   </View>
//                 </View>
//                 <Text style={styles.commentText}>{item.text}</Text>
//                 <Text style={styles.commentTime}>{item.timestamp}</Text>
//               </View>
//             )}
//             keyExtractor={item => item.id.toString()}
//             ListEmptyComponent={
//               <Text style={styles.noComments}>No comments yet!</Text>
//             }
//           />
//           <View style={styles.commentInputContainer}>
//             <TextInput
//               style={styles.commentInput}
//               value={newComment}
//               onChangeText={setNewComment}
//               placeholder="Add a comment..."
//               multiline
//             />
//             <TouchableOpacity
//               style={styles.commentButton}
//               onPress={handleAddComment}>
//               <Text style={styles.commentButtonText}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View>
//           <SquareCarousel />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default RecipeDetailScreen;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#F7FAFC',
//     paddingBottom: 50,
//   },
//   imageContainer: {
//     width: '100%',
//   },
//   image: {
//     width: '100%',
//     height: 350,
//     borderBottomRightRadius: 24,
//     borderBottomLeftRadius: 24,
//   },
//   authorOverlay: {
//     position: 'absolute',
//     bottom: 15,
//     left: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 8,
//   },
//   prepOverlay: {
//     position: 'absolute',
//     bottom: 15,
//     left: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 8,
//   },
//   authorText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '600',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     textShadowOffset: {width: 1, height: 1},
//     textShadowRadius: 2,
//     fontFamily: 'System',
//     alignSelf:'flex-end',
//     alignContent:'flex-end'
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginVertical: 0,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     height: '6%',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   statItem: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   statText: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 8,
//     marginTop: 12,
//     padding: 4,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#2D3748',
//     fontFamily: 'System',
//     textTransform: 'capitalize',
//   },
//   followButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   followText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '800',
//     fontFamily: 'System',
//   },
//   description: {
//     fontSize: 18,
//     color: 'black',
//     textAlign: 'left',
//     marginBottom: 10,
//     lineHeight: 20,
//     fontWeight: '400',
//     fontFamily: 'System',
//     padding: 4,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 20,
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     elevation: 1,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     overflow: 'hidden',
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 14,
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#A064FF',
//   },
//   tabText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   activeTabText: {
//     color: '#FFF',
//     fontWeight: '600',
//   },
//   section: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     marginBottom: 15,
//     elevation: 6,
//     shadowColor: '#CBD5E0',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     padding: 16,
//   },
//   sectionComment: {
//     width: '100%',
//     backgroundColor: '#F5F5F5',
//     borderRadius: 14,
//     elevation: 2,
//     shadowColor: 'grey',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     padding: 20,
//     borderWidth: 0.2,
//   },
//   sectionTop: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     padding: 10,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     marginBottom: -26,
//     borderTopStartRadius: 16,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#2D3748',
//     marginBottom: 12,
//     fontFamily: 'System',
//   },
//   divider: {
//     width: '100%',
//     height: 1,
//     backgroundColor: '#E5E7EB',
//     marginBottom: 12,
//   },
//   itemBox: {
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     padding: 12,
//     marginBottom: 8,
//     shadowColor: 'lightgrey',
//     // shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 2,
//     // height: 60,
//   },
//   itemText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     fontFamily: 'System',
//     textTransform: 'capitalize',
//   },
//   stepNumber: {
//     fontWeight: '800',
//     color: '#A064FF',
//   },
//   healthMeter: {
//     marginBottom: 15,
//   },
//   healthItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   healthLabel: {
//     fontSize: 16,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   healthValue: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   healthNote: {
//     fontSize: 12,
//     color: '#718096',
//     textAlign: 'center',
//     fontFamily: 'System',
//   },
//   commentContainer: {
//     marginBottom: 15,
//   },
//   commentHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//     justifyContent: 'space-between',
//   },
//   commentUser: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: 'black',
//     marginRight: 10,
//     fontFamily: 'System',
//   },
//   commentLikes: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//     fontFamily: 'System',
//   },
//   commentText: {
//     fontSize: 14,
//     color: 'black',
//     marginBottom: 2,
//     fontFamily: 'System',
//   },
//   commentTime: {
//     fontSize: 12,
//     color: '#718096',
//     fontFamily: 'System',
//   },
//   noComments: {
//     fontSize: 14,
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 10,
//     fontFamily: 'System',
//   },
//   commentInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   commentInput: {
//     flex: 1,
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     marginRight: 10,
//     backgroundColor: '#FFF',
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   commentButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     borderRadius: 10,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   commentButtonText: {
//     color: '#FFF',
//     fontSize: 14,
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 100,
//     zIndex: 1000,
//     paddingTop: StatusBar.currentHeight || 0,
//     elevation: 0,
//     shadowOpacity: 0,
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     height: '100%',
//     backgroundColor: 'transparent',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '800',
//     fontFamily: 'System',
//     paddingHorizontal: 20,
//   },
//   backButton: {
//     padding: 5,
//   },
//   placeholder: {
//     width: 24,
//     height: 24,
//   },
// });

/* eslint-disable react-native/no-inline-styles */
// import React, {useState, useRef, useEffect} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   Share,
//   Animated,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import {Recipe, Comment} from '../feed/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import RecipeCarousel from '../../components/RecipeCard';
// import RecipeCard from './NutritionalDish';
// import SquareCarousel from '../../components/SquareCarousel';
// import {useNavigation} from '@react-navigation/native';

// // Define props interface for CustomHeader
// interface CustomHeaderProps {
//   title: string;
//   onBackPress: () => void;
//   headerBackground: Animated.AnimatedInterpolation<string>;
//   headerTitleColor: Animated.AnimatedInterpolation<string>;
// }

// const CustomHeader: React.FC<CustomHeaderProps> = ({
//   title,
//   onBackPress,
//   headerBackground,
//   headerTitleColor,
// }) => {
//   return (
//     <Animated.View
//       style={[styles.headerContainer, {backgroundColor: headerBackground}]}>
//       <StatusBar
//         barStyle="dark-content"
//         translucent
//         backgroundColor="transparent"
//       />
//       <View style={styles.headerContent}>
//         <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
//           <MaterialIcons name="arrow-back" size={24} color="#2D3748" />
//         </TouchableOpacity>
//         <Animated.Text style={[styles.headerTitle, {color: headerTitleColor}]}>
//           {title}
//         </Animated.Text>
//         <View style={styles.placeholder} />
//       </View>
//     </Animated.View>
//   );
// };

// const RecipeDetailScreen: React.FC = () => {
//   const [recipe] = useState<Recipe>({
//     id: 1,
//     name: 'Spicy Chicken Curry',
//     image: 'image1.jpg',
//     description: 'A flavorful curry with tender chicken and aromatic spices.',
//     ingredients: [
//       '500g chicken breast',
//       '2 tbsp olive oil',
//       '1 onion, chopped',
//       '2 garlic cloves, minced',
//       '1 tbsp curry powder',
//       '200ml coconut milk',
//       'Salt to taste',
//     ],
//     instructions: [
//       'Heat oil in a pan over medium heat.',
//       'Add onion and garlic, sauté until golden.',
//       'Stir in curry powder and cook for 1 minute.',
//       'Add chicken, cook until browned.',
//       'Pour in coconut milk, simmer for 20 minutes.',
//       'Season with salt and serve hot.',
//     ],
//     carbs: 25,
//     nutrients: ['Rich in protein', 'Boosts immunity', 'Supports muscle growth'],
//     calories: 350,
//     protein: 30,
//     fat: 15,
//   });

//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       user: 'Foodie123',
//       text: 'Amazing recipe! So tasty!',
//       timestamp: '2025-04-15 14:30',
//       likes: 0,
//       isLiked: false,
//     },
//   ]);
//   const [newComment, setNewComment] = useState('');
//   const [likes, setLikes] = useState(225);
//   const [dislikes, setDislikes] = useState(12);
//   const [isLiked, setIsLiked] = useState(false);
//   const [isDisliked, setIsDisliked] = useState(false);
//   const [shares, setShares] = useState(16);
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [activeTab, setActiveTab] = useState<'instructions' | 'health'>(
//     'instructions',
//   );

//   const likeAnim = useRef(new Animated.Value(1)).current;
//   const dislikeAnim = useRef(new Animated.Value(1)).current;
//   const scrollRef = useRef<ScrollView>(null);
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const headerBackground = scrollY.interpolate({
//     inputRange: [0, 50],
//     outputRange: ['transparent', '#FFF'],
//     extrapolate: 'clamp',
//   });
//   const headerTitleColor = scrollY.interpolate({
//     inputRange: [0, 50],
//     outputRange: ['#FFF', '#2D3748'],
//     extrapolate: 'clamp',
//   });
//   const navigation = useNavigation();

//   // Animation for ingredient and instruction boxes
//   const fadeAnims = recipe.ingredients.map(
//     () => useRef(new Animated.Value(0)).current,
//   );
//   const instructionAnims = recipe.instructions.map(
//     () => useRef(new Animated.Value(0)).current,
//   );

//   useEffect(() => {
//     // Animate ingredients
//     fadeAnims.forEach((anim, index) => {
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }).start();
//     });
//     // Animate instructions
//     instructionAnims.forEach((anim, index) => {
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }).start();
//     });
//   }, []);

//   const getImageSource = () => {
//     switch (recipe.image) {
//       case 'image1.jpg':
//         return require('../../assets/image/image1.jpg');
//       default:
//         return require('../../assets/image/image1.jpg');
//     }
//   };

//   useEffect(() => {
//     let lastScrollY = 0;
//     const scrollListener = scrollY.addListener(({value}) => {
//       console.log('Scroll value:', value);
//     });

//     return () => scrollY.removeListener(scrollListener);
//   }, []);

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         {
//           id: comments.length + 1,
//           user: 'You',
//           text: newComment,
//           timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
//           likes: 0,
//           isLiked: false,
//         },
//       ]);
//       setNewComment('');
//     }
//   };

//   const triggerAnimation = (anim: Animated.Value) => {
//     anim.setValue(1);
//     Animated.sequence([
//       Animated.timing(anim, {
//         toValue: 1.1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   const handleLike = () => {
//     if (isLiked) {
//       setIsLiked(false);
//       setLikes(prevLikes => prevLikes - 1);
//     } else {
//       if (isDisliked) {
//         setIsDisliked(false);
//         setDislikes(prevDislikes => prevDislikes - 1);
//       }
//       setIsLiked(true);
//       setLikes(prevLikes => prevLikes + 1);
//       triggerAnimation(likeAnim);
//     }
//   };

//   const handleDislike = () => {
//     if (isDisliked) {
//       setIsDisliked(false);
//       setDislikes(prevDislikes => prevDislikes - 1);
//     } else {
//       if (isLiked) {
//         setIsLiked(false);
//         setLikes(prevLikes => prevLikes - 1);
//       }
//       setIsDisliked(true);
//       setDislikes(prevDislikes => prevDislikes + 1);
//       triggerAnimation(dislikeAnim);
//     }
//   };

//   const handleShare = async () => {
//     try {
//       const result = await Share.share({
//         message: `Check out this recipe: ${recipe.name} - ${recipe.description}\nView it here: [your-app-link]`,
//       });
//       if (result.action === Share.sharedAction) {
//         setShares(prevShares => prevShares + 1);
//       }
//     } catch (error) {
//       // Silently handle error
//     }
//   };

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing);
//   };

//   const handleCommentLike = (commentId: number) => {
//     setComments(
//       comments.map(comment =>
//         comment.id === commentId
//           ? {
//               ...comment,
//               likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
//               isLiked: !comment.isLiked,
//             }
//           : comment,
//       ),
//     );
//   };

//   const scrollToComments = () => {
//     scrollRef.current?.scrollToEnd({animated: true});
//   };

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   const handleProfilePress = () => {
//     navigation.navigate('UserProfile', {userId: 'chef_anita'});
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <CustomHeader
//         title="Profile"
//         onBackPress={handleBackPress}
//         headerBackground={headerBackground}
//         headerTitleColor={headerTitleColor}
//       />
//       <ScrollView
//         ref={scrollRef}
//         contentContainerStyle={styles.container}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollY}}}],
//           {useNativeDriver: false},
//         )}
//         scrollEventThrottle={16}>
//         <View style={styles.imageContainer}>
//           <Image source={getImageSource()} style={styles.image} />
//           <View style={styles.prepOverlay}>
//             <Text style={styles.authorText}>Time: 20m</Text>
//           </View>
//         </View>
//         <View style={styles.sectionTop}>
//           <View style={styles.statsRow}>
//             <TouchableOpacity style={styles.statItem} onPress={handleLike}>
//               <Animated.View style={{transform: [{scale: likeAnim}]}}>
//                 <MaterialIcons
//                   name={isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                   size={24}
//                   color="#A064FF"
//                 />
//               </Animated.View>
//               <Text style={styles.statText}>{likes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.statItem} onPress={handleDislike}>
//               <Animated.View style={{transform: [{scale: dislikeAnim}]}}>
//                 <MaterialIcons
//                   name={isDisliked ? 'thumb-down' : 'thumb-down-off-alt'}
//                   size={24}
//                   color="#A064FF"
//                 />
//               </Animated.View>
//               <Text style={styles.statText}>{dislikes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.statItem} onPress={handleShare}>
//               <MaterialIcons name="share" size={24} color="#A064FF" />
//               <Text style={styles.statText}>{shares}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.statItem}
//               onPress={scrollToComments}>
//               <MaterialIcons name="comment" size={24} color="#A064FF" />
//               <Text style={styles.statText}>{comments.length}</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.header}>
//             <TouchableOpacity
//               style={styles.profileContainer}
//               onPress={handleProfilePress}
//               activeOpacity={0.8}>
//               <Image
//                 source={require('../../assets/image/image1.jpg')}
//                 style={styles.profileAvatar}
//               />
//               <View style={styles.textContainer}>
//                 <Text style={styles.authorText}>Chef Anita</Text>
//                 <Text style={styles.recipeNameText}>{recipe.name}</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.followButton}
//               onPress={handleFollow}
//               activeOpacity={0.9}>
//               <Text style={styles.followText}>
//                 {isFollowing ? 'Following' : 'Follow'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.description}>{recipe.description}</Text>

//           {/* Tab Bar */}
//           <View style={styles.tabContainer}>
//             <TouchableOpacity
//               style={[
//                 styles.tab,
//                 activeTab === 'instructions' && styles.activeTab,
//               ]}
//               onPress={() => setActiveTab('instructions')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   activeTab === 'instructions' && styles.activeTabText,
//                 ]}>
//                 Recipe Instructions
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.tab, activeTab === 'health' && styles.activeTab]}
//               onPress={() => setActiveTab('health')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   activeTab === 'health' && styles.activeTabText,
//                 ]}>
//                 Health Meter
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {/* Tab Content */}
//           {activeTab === 'instructions' ? (
//             <>
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Ingredients</Text>
//                 <View style={styles.divider} />
//                 {recipe.ingredients.map((ingredient, index) => (
//                   <Animated.View
//                     key={index}
//                     style={[styles.itemBox, {opacity: fadeAnims[index]}]}>
//                     <TouchableOpacity activeOpacity={0.8}>
//                       <Text style={styles.itemText}>{ingredient}</Text>
//                     </TouchableOpacity>
//                   </Animated.View>
//                 ))}
//               </View>
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Instructions</Text>
//                 <View style={styles.divider} />
//                 {recipe.instructions.map((step, index) => (
//                   <Animated.View
//                     key={index}
//                     style={[
//                       styles.itemBox,
//                       {opacity: instructionAnims[index]},
//                     ]}>
//                     <TouchableOpacity activeOpacity={0.8}>
//                       <Text style={styles.itemText}>
//                         <Text style={styles.stepNumber}>{index + 1}.</Text>{' '}
//                         {step}
//                       </Text>
//                     </TouchableOpacity>
//                   </Animated.View>
//                 ))}
//               </View>
//             </>
//           ) : (
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Health Meter</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: '#E5E7EB',
//                   marginBottom: 6,
//                 }}
//               />
//               <View style={styles.healthMeter}>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Calories:</Text>
//                   <Text style={styles.healthValue}>{recipe.calories} kcal</Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Carbs:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.carbs}g ({((recipe.carbs / 300) * 100).toFixed(1)}%
//                     of 300g)
//                   </Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Protein:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.protein}g (
//                     {((recipe.protein / 50) * 100).toFixed(1)}% of 50g)
//                   </Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Fat:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.fat}g ({((recipe.fat / 70) * 100).toFixed(1)}% of
//                     70g)
//                   </Text>
//                 </View>
//                 <Text style={styles.healthNote}>
//                   Based on general daily recommended intake (varies by
//                   individual).
//                 </Text>
//               </View>
//               <View>
//                 <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
//                 <View
//                   style={{
//                     width: '80%',
//                     height: 1,
//                     backgroundColor: '#E5E7EB',
//                     marginBottom: 6,
//                   }}
//                 />
//                 {recipe.nutrients.map((benefit, index) => (
//                   <Text key={index} style={styles.listItem}>
//                     {benefit}
//                   </Text>
//                 ))}
//               </View>
//             </View>
//           )}
//         </View>
//         <View style={styles.sectionComment}>
//           <Text style={styles.sectionTitle}>Comments</Text>
//           <FlatList
//             data={comments}
//             renderItem={({item}) => (
//               <View style={styles.commentContainer}>
//                 <View style={styles.commentHeader}>
//                   <Text style={styles.commentUser}>{item.user}</Text>
//                   <View style={{flexDirection: 'row', display: 'flex'}}>
//                     <TouchableOpacity
//                       onPress={() => handleCommentLike(item.id)}>
//                       <MaterialIcons
//                         name={item.isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                         size={18}
//                         color="#A064FF"
//                       />
//                     </TouchableOpacity>
//                     <Text style={styles.commentLikes}>{item.likes}</Text>
//                   </View>
//                 </View>
//                 <Text style={styles.commentText}>{item.text}</Text>
//                 <Text style={styles.commentTime}>{item.timestamp}</Text>
//               </View>
//             )}
//             keyExtractor={item => item.id.toString()}
//             ListEmptyComponent={
//               <Text style={styles.noComments}>No comments yet!</Text>
//             }
//           />
//           <View style={styles.commentInputContainer}>
//             <TextInput
//               style={styles.commentInput}
//               value={newComment}
//               onChangeText={setNewComment}
//               placeholder="Add a comment..."
//               multiline
//             />
//             <TouchableOpacity
//               style={styles.commentButton}
//               onPress={handleAddComment}>
//               <Text style={styles.commentButtonText}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View>
//           <SquareCarousel />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default RecipeDetailScreen;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#F7FAFC',
//     paddingBottom: 50,
//   },
//   imageContainer: {
//     width: '100%',
//   },
//   image: {
//     width: '100%',
//     height: 350,
//     borderBottomRightRadius: 24,
//     borderBottomLeftRadius: 24,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileAvatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#E2E8F0', // Fallback background
//   },
//   textContainer: {
//     flexDirection: 'column',
//     marginLeft: 8,
//   },
//   authorText: {
//     color: '#2D3748',
//     fontSize: 18,
//     fontWeight: '700',
//     fontFamily: 'System',
//   },
//   recipeNameText: {
//     color: '#2D3748',
//     fontSize: 16,
//     fontWeight: '600',
//     fontFamily: 'System',
//     textTransform: 'capitalize',
//   },
//   prepOverlay: {
//     position: 'absolute',
//     bottom: 15,
//     right: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginVertical: 0,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     height: '6%',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   statItem: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   statText: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 8,
//     marginTop: 12,
//     padding: 4,
//   },
//   followButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   followText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '800',
//     fontFamily: 'System',
//   },
//   description: {
//     fontSize: 18,
//     color: 'black',
//     textAlign: 'left',
//     marginBottom: 10,
//     lineHeight: 20,
//     fontWeight: '400',
//     fontFamily: 'System',
//     padding: 4,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 20,
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     elevation: 1,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     overflow: 'hidden',
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 14,
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#A064FF',
//   },
//   tabText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   activeTabText: {
//     color: '#FFF',
//     fontWeight: '600',
//   },
//   section: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     // marginBottom: 15,
//     elevation: 6,
//     shadowColor: '#CBD5E0',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     padding: 16,
//   },
//   sectionComment: {
//     width: '100%',
//     backgroundColor: '#F5F5F5',
//     borderRadius: 14,
//     elevation: 2,
//     shadowColor: 'grey',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     padding: 20,
//     borderWidth: 0.2,
//   },
//   sectionTop: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     padding: 10,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     marginBottom: -26,
//     borderTopStartRadius: 16,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#2D3748',
//     marginBottom: 12,
//     fontFamily: 'System',
//   },
//   divider: {
//     width: '100%',
//     height: 1,
//     backgroundColor: '#E5E7EB',
//     marginBottom: 12,
//   },
//   itemBox: {
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     padding: 14,
//     marginBottom: 8,
//     shadowColor: 'lightgrey',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   itemText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     fontFamily: 'System',
//     textTransform: 'capitalize',
//   },
//   stepNumber: {
//     fontWeight: '800',
//     color: '#A064FF',
//   },
//   healthMeter: {
//     marginBottom: 15,
//   },
//   healthItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   healthLabel: {
//     fontSize: 16,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   healthValue: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   healthNote: {
//     fontSize: 12,
//     color: '#718096',
//     textAlign: 'center',
//     fontFamily: 'System',
//   },
//   commentContainer: {
//     marginBottom: 15,
//   },
//   commentHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//     justifyContent: 'space-between',
//   },
//   commentUser: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: 'black',
//     marginRight: 10,
//     fontFamily: 'System',
//   },
//   commentLikes: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//     fontFamily: 'System',
//   },
//   commentText: {
//     fontSize: 14,
//     color: 'black',
//     marginBottom: 2,
//     fontFamily: 'System',
//   },
//   commentTime: {
//     fontSize: 12,
//     color: '#718096',
//     fontFamily: 'System',
//   },
//   noComments: {
//     fontSize: 14,
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 10,
//     fontFamily: 'System',
//   },
//   commentInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   commentInput: {
//     flex: 1,
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     marginRight: 10,
//     backgroundColor: '#FFF',
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   commentButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     borderRadius: 10,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   commentButtonText: {
//     color: '#FFF',
//     fontSize: 14,
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 100,
//     zIndex: 1000,
//     paddingTop: StatusBar.currentHeight || 0,
//     elevation: 0,
//     shadowOpacity: 0,
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     height: '100%',
//     backgroundColor: 'transparent',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '800',
//     fontFamily: 'System',
//     paddingHorizontal: 20,
//   },
//   backButton: {
//     padding: 5,
//   },
//   placeholder: {
//     width: 24,
//     height: 24,
//   },
// });

/* eslint-disable react-native/no-inline-styles */
// import React, {useState, useRef, useEffect} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   Share,
//   Animated,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import {Recipe, Comment} from '../feed/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import RecipeCarousel from '../../components/RecipeCard';
// import RecipeCard from './NutritionalDish';
// import SquareCarousel from '../../components/SquareCarousel';
// import {useNavigation} from '@react-navigation/native';

// // Define props interface for CustomHeader
// interface CustomHeaderProps {
//   title: string;
//   onBackPress: () => void;
//   headerBackground: Animated.AnimatedInterpolation<string>;
//   headerTitleColor: Animated.AnimatedInterpolation<string>;
// }

// const CustomHeader: React.FC<CustomHeaderProps> = ({
//   title,
//   onBackPress,
//   headerBackground,
//   headerTitleColor,
// }) => {
//   return (
//     <Animated.View
//       style={[styles.headerContainer, {backgroundColor: headerBackground}]}>
//       <StatusBar
//         barStyle="dark-content"
//         translucent
//         backgroundColor="transparent"
//       />
//       <View style={styles.headerContent}>
//         <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
//           <MaterialIcons name="arrow-back" size={24} color="#2D3748" />
//         </TouchableOpacity>
//         <Animated.Text style={[styles.headerTitle, {color: headerTitleColor}]}>
//           {title}
//         </Animated.Text>
//         <View style={styles.placeholder} />
//       </View>
//     </Animated.View>
//   );
// };

// const RecipeDetailScreen: React.FC = () => {
//   const [recipe] = useState<Recipe>({
//     id: 1,
//     name: 'Spicy Chicken Curry',
//     image: 'image1.jpg',
//     description: 'A flavorful curry with tender chicken and aromatic spices.',
//     ingredients: [
//       '500g chicken breast',
//       '2 tbsp olive oil',
//       '1 onion, chopped',
//       '2 garlic cloves, minced',
//       '1 tbsp curry powder',
//       '200ml coconut milk',
//       'Salt to taste',
//     ],
//     instructions: [
//       'Heat oil in a pan over medium heat.',
//       'Add onion and garlic, sauté until golden.',
//       'Stir in curry powder and cook for 1 minute.',
//       'Add chicken, cook until browned.',
//       'Pour in coconut milk, simmer for 20 minutes.',
//       'Season with salt and serve hot.',
//     ],
//     carbs: 25,
//     nutrients: ['Rich in protein', 'Boosts immunity', 'Supports muscle growth'],
//     calories: 350,
//     protein: 30,
//     fat: 15,
//   });

//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       user: 'Foodie123',
//       text: 'Amazing recipe! So tasty!',
//       timestamp: '2025-04-15 14:30',
//       likes: 0,
//       isLiked: false,
//     },
//   ]);
//   const [newComment, setNewComment] = useState('');
//   const [likes, setLikes] = useState(225);
//   const [dislikes, setDislikes] = useState(12);
//   const [isLiked, setIsLiked] = useState(false);
//   const [isDisliked, setIsDisliked] = useState(false);
//   const [shares, setShares] = useState(16);
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [activeTab, setActiveTab] = useState<'instructions' | 'health'>(
//     'instructions',
//   );
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const likeAnim = useRef(new Animated.Value(1)).current;
//   const dislikeAnim = useRef(new Animated.Value(1)).current;
//   const scrollRef = useRef<ScrollView>(null);
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const headerBackground = scrollY.interpolate({
//     inputRange: [0, 50],
//     outputRange: ['transparent', '#FFF'],
//     extrapolate: 'clamp',
//   });
//   const headerTitleColor = scrollY.interpolate({
//     inputRange: [0, 50],
//     outputRange: ['#FFF', '#2D3748'],
//     extrapolate: 'clamp',
//   });
//   const navigation = useNavigation();

//   // Animation for ingredient and instruction boxes
//   const fadeAnims = recipe.ingredients.map(
//     () => useRef(new Animated.Value(0)).current,
//   );
//   const instructionAnims = recipe.instructions.map(
//     () => useRef(new Animated.Value(0)).current,
//   );

//   useEffect(() => {
//     // Animate ingredients
//     fadeAnims.forEach((anim, index) => {
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }).start();
//     });
//     // Animate instructions
//     instructionAnims.forEach((anim, index) => {
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }).start();
//     });
//   }, []);

//   const getImageSource = () => {
//     switch (recipe.image) {
//       case 'image1.jpg':
//         return require('../../assets/image/image1.jpg');
//       default:
//         return require('../../assets/image/image1.jpg');
//     }
//   };

//   useEffect(() => {
//     const scrollListener = scrollY.addListener(({value}) => {
//       setLastScrollY(value);
//     });
//     return () => scrollY.removeListener(scrollListener);
//   }, [scrollY]);

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         {
//           id: comments.length + 1,
//           user: 'You',
//           text: newComment,
//           timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
//           likes: 0,
//           isLiked: false,
//         },
//       ]);
//       setNewComment('');
//     }
//   };

//   const triggerAnimation = (anim: Animated.Value) => {
//     anim.setValue(1);
//     Animated.sequence([
//       Animated.timing(anim, {
//         toValue: 1.1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   const handleLike = () => {
//     if (isLiked) {
//       setIsLiked(false);
//       setLikes(prevLikes => prevLikes - 1);
//     } else {
//       if (isDisliked) {
//         setIsDisliked(false);
//         setDislikes(prevDislikes => prevDislikes - 1);
//       }
//       setIsLiked(true);
//       setLikes(prevLikes => prevLikes + 1);
//       triggerAnimation(likeAnim);
//     }
//   };

//   const handleDislike = () => {
//     if (isDisliked) {
//       setIsDisliked(false);
//       setDislikes(prevDislikes => prevDislikes - 1);
//     } else {
//       if (isLiked) {
//         setIsLiked(false);
//         setLikes(prevLikes => prevLikes - 1);
//       }
//       setIsDisliked(true);
//       setDislikes(prevDislikes => prevDislikes + 1);
//       triggerAnimation(dislikeAnim);
//     }
//   };

//   const handleShare = async () => {
//     try {
//       const result = await Share.share({
//         message: `Check out this recipe: ${recipe.name} - ${recipe.description}\nView it here: [your-app-link]`,
//       });
//       if (result.action === Share.sharedAction) {
//         setShares(prevShares => prevShares + 1);
//       }
//     } catch (error) {
//       // Silently handle error
//     }
//   };

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing);
//   };

//   const handleCommentLike = (commentId: number) => {
//     setComments(
//       comments.map(comment =>
//         comment.id === commentId
//           ? {
//               ...comment,
//               likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
//               isLiked: !comment.isLiked,
//             }
//           : comment,
//       ),
//     );
//   };

//   const scrollToComments = () => {
//     scrollRef.current?.scrollToEnd({animated: true});
//   };

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   const handleProfilePress = () => {
//     navigation.navigate('UserProfile', {userId: 'chef_anita'});
//   };

//   const handleTabChange = (tab: 'instructions' | 'health') => {
//     setActiveTab(tab);
//     // Restore scroll position after layout settles
//     setTimeout(() => {
//       scrollRef.current?.scrollTo({y: lastScrollY, animated: false});
//     }, 0);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <CustomHeader
//         title="Profile"
//         onBackPress={handleBackPress}
//         headerBackground={headerBackground}
//         headerTitleColor={headerTitleColor}
//       />
//       <ScrollView
//         ref={scrollRef}
//         contentContainerStyle={styles.container}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollY}}}],
//           {useNativeDriver: false},
//         )}
//         scrollEventThrottle={16}>
//         <View style={styles.imageContainer}>
//           <Image source={getImageSource()} style={styles.image} />
//           <View style={styles.prepOverlay}>
//             <Text style={styles.authorText}>Time: 20m</Text>
//           </View>
//         </View>
//         <View style={styles.sectionTop}>
//           <View style={styles.statsRow}>
//             <TouchableOpacity style={styles.statItem} onPress={handleLike}>
//               <Animated.View style={{transform: [{scale: likeAnim}]}}>
//                 <MaterialIcons
//                   name={isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                   size={24}
//                   color="#A064FF"
//                 />
//               </Animated.View>
//               <Text style={styles.statText}>{likes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.statItem} onPress={handleDislike}>
//               <Animated.View style={{transform: [{scale: dislikeAnim}]}}>
//                 <MaterialIcons
//                   name={isDisliked ? 'thumb-down' : 'thumb-down-off-alt'}
//                   size={24}
//                   color="#A064FF"
//                 />
//               </Animated.View>
//               <Text style={styles.statText}>{dislikes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.statItem} onPress={handleShare}>
//               <MaterialIcons name="share" size={24} color="#A064FF" />
//               <Text style={styles.statText}>{shares}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.statItem}
//               onPress={scrollToComments}>
//               <MaterialIcons name="comment" size={24} color="#A064FF" />
//               <Text style={styles.statText}>{comments.length}</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.header}>
//             <TouchableOpacity
//               style={styles.profileContainer}
//               onPress={handleProfilePress}
//               activeOpacity={0.8}>
//               <Image
//                 source={require('../../assets/image/image1.jpg')}
//                 style={styles.profileAvatar}
//               />
//               <View style={styles.textContainer}>
//                 <Text style={styles.authorText}>Chef Anita</Text>
//                 <Text style={styles.recipeNameText}>{recipe.name}</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.followButton}
//               onPress={handleFollow}
//               activeOpacity={0.9}>
//               <Text style={styles.followText}>
//                 {isFollowing ? 'Following' : 'Follow'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.description}>{recipe.description}</Text>

//           {/* Tab Bar */}
//           <View style={styles.tabContainer}>
//             <TouchableOpacity
//               style={[
//                 styles.tab,
//                 activeTab === 'instructions' && styles.activeTab,
//               ]}
//               onPress={() => handleTabChange('instructions')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   activeTab === 'instructions' && styles.activeTabText,
//                 ]}>
//                 Recipe Instructions
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.tab, activeTab === 'health' && styles.activeTab]}
//               onPress={() => handleTabChange('health')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   activeTab === 'health' && styles.activeTabText,
//                 ]}>
//                 Health Meter
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {/* Tab Content */}
//           {activeTab === 'instructions' ? (
//             <>
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Ingredients</Text>
//                 {/* <View style={styles.divider} /> */}
//                 {recipe.ingredients.map((ingredient, index) => (
//                   <Animated.View
//                     key={index}
//                     style={[styles.itemBox, {opacity: fadeAnims[index]}]}>
//                     <TouchableOpacity activeOpacity={0.8}>
//                       <Text style={styles.itemText}>{ingredient}</Text>
//                     </TouchableOpacity>
//                   </Animated.View>
//                 ))}
//               </View>
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Instructions</Text>
//                 {/* <View style={styles.divider} /> */}
//                 {recipe.instructions.map((step, index) => (
//                   <Animated.View
//                     key={index}
//                     style={[
//                       styles.itemBox,
//                       {opacity: instructionAnims[index]},
//                     ]}>
//                     <TouchableOpacity activeOpacity={0.8}>
//                       <Text style={styles.itemText}>
//                         <Text style={styles.stepNumber}>{index + 1}.</Text>{' '}
//                         {step}
//                       </Text>
//                     </TouchableOpacity>
//                   </Animated.View>
//                 ))}
//               </View>
//             </>
//           ) : (
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Health Meter</Text>
//               <View
//                 style={{
//                   width: '80%',
//                   height: 1,
//                   backgroundColor: '#E5E7EB',
//                   marginBottom: 6,
//                 }}
//               />
//               <View style={styles.healthMeter}>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Calories:</Text>
//                   <Text style={styles.healthValue}>{recipe.calories} kcal</Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Carbs:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.carbs}g ({((recipe.carbs / 300) * 100).toFixed(1)}%
//                     of 300g)
//                   </Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Protein:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.protein}g (
//                     {((recipe.protein / 50) * 100).toFixed(1)}% of 50g)
//                   </Text>
//                 </View>
//                 <View style={styles.healthItem}>
//                   <Text style={styles.healthLabel}>Fat:</Text>
//                   <Text style={styles.healthValue}>
//                     {recipe.fat}g ({((recipe.fat / 70) * 100).toFixed(1)}% of
//                     70g)
//                   </Text>
//                 </View>
//                 <Text style={styles.healthNote}>
//                   Based on general daily recommended intake (varies by
//                   individual).
//                 </Text>
//               </View>
//               <View>
//                 <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
//                 <View
//                   style={{
//                     width: '80%',
//                     height: 1,
//                     backgroundColor: '#E5E7EB',
//                     marginBottom: 6,
//                   }}
//                 />
//                 {recipe.nutrients.map((benefit, index) => (
//                   <Text key={index} style={styles.listItem}>
//                     {benefit}
//                   </Text>
//                 ))}
//               </View>
//             </View>
//           )}
//         </View>
//         <View style={styles.sectionComment}>
//           <Text style={styles.sectionTitle}>Comments</Text>
//           <FlatList
//             data={comments}
//             renderItem={({item}) => (
//               <View style={styles.commentContainer}>
//                 <View style={styles.commentHeader}>
//                   <Text style={styles.commentUser}>{item.user}</Text>
//                   <View style={{flexDirection: 'row', display: 'flex'}}>
//                     <TouchableOpacity
//                       onPress={() => handleCommentLike(item.id)}>
//                       <MaterialIcons
//                         name={item.isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
//                         size={18}
//                         color="#A064FF"
//                       />
//                     </TouchableOpacity>
//                     <Text style={styles.commentLikes}>{item.likes}</Text>
//                   </View>
//                 </View>
//                 <Text style={styles.commentText}>{item.text}</Text>
//                 <Text style={styles.commentTime}>{item.timestamp}</Text>
//               </View>
//             )}
//             keyExtractor={item => item.id.toString()}
//             ListEmptyComponent={
//               <Text style={styles.noComments}>No comments yet!</Text>
//             }
//           />
//           <View style={styles.commentInputContainer}>
//             <TextInput
//               style={styles.commentInput}
//               value={newComment}
//               onChangeText={setNewComment}
//               placeholder="Add a comment..."
//               multiline
//             />
//             <TouchableOpacity
//               style={styles.commentButton}
//               onPress={handleAddComment}>
//               <Text style={styles.commentButtonText}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View>
//           <SquareCarousel />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default RecipeDetailScreen;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#F7FAFC',
//     paddingBottom: 50,
//   },
//   imageContainer: {
//     width: '100%',
//   },
//   image: {
//     width: '100%',
//     height: 350,
//     borderBottomRightRadius: 24,
//     borderBottomLeftRadius: 24,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileAvatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#E2E8F0', // Fallback background
//   },
//   textContainer: {
//     flexDirection: 'column',
//     marginLeft: 8,
//   },
//   authorText: {
//     color: '#2D3748',
//     fontSize: 18,
//     fontWeight: '700',
//     fontFamily: 'System',
//   },
//   recipeNameText: {
//     color: '#2D3748',
//     fontSize: 16,
//     fontWeight: '600',
//     fontFamily: 'System',
//     textTransform: 'capitalize',
//   },
//   prepOverlay: {
//     position: 'absolute',
//     bottom: 15,
//     right: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginVertical: 0,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     // height: '6%',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   statItem: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   statText: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 8,
//     marginTop: 12,
//     padding: 4,
//   },
//   followButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   followText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '800',
//     fontFamily: 'System',
//   },
//   description: {
//     fontSize: 18,
//     color: 'black',
//     textAlign: 'left',
//     marginBottom: 10,
//     lineHeight: 20,
//     fontWeight: '400',
//     fontFamily: 'System',
//     padding: 4,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 0,
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     elevation: 1,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     overflow: 'hidden',
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 14,
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#A064FF',
//   },
//   tabText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   activeTabText: {
//     color: '#FFF',
//     fontWeight: '600',
//   },
//   section: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     marginBottom: 16,
//     elevation: 6,
//     shadowColor: '#CBD5E0',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     padding: 16,
//   },
//   sectionComment: {
//     width: '100%',
//     backgroundColor: '#F5F5F5',
//     borderRadius: 14,
//     elevation: 2,
//     shadowColor: 'grey',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     padding: 20,
//     borderWidth: 0.2,
//   },
//   sectionTop: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     padding: 10,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     marginBottom: -26,
//     borderTopStartRadius: 16,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#2D3748',
//     marginBottom: 12,
//     fontFamily: 'System',
//   },
//   divider: {
//     width: '100%',
//     height: 1,
//     backgroundColor: '#E5E7EB',
//     marginBottom: 12,
//   },
//   itemBox: {
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     padding: 12,
//     marginBottom: 8,
//     shadowColor: 'lightgrey',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   itemText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     fontFamily: 'System',
//     textTransform: 'capitalize',
//   },
//   stepNumber: {
//     fontWeight: '800',
//     color: '#A064FF',
//   },
//   healthMeter: {
//     marginBottom: 15,
//   },
//   healthItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   healthLabel: {
//     fontSize: 16,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   healthValue: {
//     fontSize: 16,
//     color: '#A064FF',
//     fontWeight: '500',
//     fontFamily: 'System',
//   },
//   healthNote: {
//     fontSize: 12,
//     color: '#718096',
//     textAlign: 'center',
//     fontFamily: 'System',
//   },
//   commentContainer: {
//     marginBottom: 15,
//   },
//   commentHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//     justifyContent: 'space-between',
//   },
//   commentUser: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: 'black',
//     marginRight: 10,
//     fontFamily: 'System',
//   },
//   commentLikes: {
//     fontSize: 14,
//     color: '#A064FF',
//     marginLeft: 5,
//     fontFamily: 'System',
//   },
//   commentText: {
//     fontSize: 14,
//     color: 'black',
//     marginBottom: 2,
//     fontFamily: 'System',
//   },
//   commentTime: {
//     fontSize: 12,
//     color: '#718096',
//     fontFamily: 'System',
//   },
//   noComments: {
//     fontSize: 14,
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 10,
//     fontFamily: 'System',
//   },
//   commentInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   commentInput: {
//     flex: 1,
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     marginRight: 10,
//     backgroundColor: '#FFF',
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'System',
//   },
//   commentButton: {
//     backgroundColor: '#A064FF',
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     borderRadius: 10,
//     elevation: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   commentButtonText: {
//     color: '#FFF',
//     fontSize: 14,
//     fontWeight: '600',
//     fontFamily: 'System',
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 100,
//     zIndex: 1000,
//     paddingTop: StatusBar.currentHeight || 0,
//     elevation: 0,
//     shadowOpacity: 0,
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     height: '100%',
//     backgroundColor: 'transparent',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '800',
//     fontFamily: 'System',
//     paddingHorizontal: 20,
//   },
//   backButton: {
//     padding: 5,
//   },
//   placeholder: {
//     width: 24,
//     height: 24,
//   },
// });

/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Share,
  Animated,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';
import {Recipe, Comment} from '../feed/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RecipeCarousel from '../../components/RecipeCard';
import RecipeCard from './NutritionalDish';
import SquareCarousel from '../../components/SquareCarousel';
import {useNavigation} from '@react-navigation/native';

// Define props interface for CustomHeader
interface CustomHeaderProps {
  title: string;
  onBackPress: () => void;
  onMenuPress: () => void;
  headerBackground: Animated.AnimatedInterpolation<string>;
  headerTitleColor: Animated.AnimatedInterpolation<string>;
  headerTitleOpacity: Animated.AnimatedInterpolation<number>;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  onBackPress,
  onMenuPress,
  headerBackground,
  headerTitleColor,
  headerTitleOpacity,
}) => {
  return (
    <Animated.View
      style={[styles.headerContainer, {backgroundColor: headerBackground}]}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#2D3748" />
        </TouchableOpacity>
        <Animated.Text
          style={[
            styles.headerTitle,
            {color: headerTitleColor, opacity: headerTitleOpacity},
          ]}>
          {title}
        </Animated.Text>
        <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
          <MaterialIcons name="more-vert" size={24} color="#2D3748" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const RecipeDetailScreen: React.FC = () => {
  const [recipe] = useState<Recipe>({
    id: 1,
    name: 'Spicy Chicken Curry',
    image: 'image1.jpg',
    description: 'A flavorful curry with tender chicken and aromatic spices.',
    ingredients: [
      '500g chicken breast',
      '2 tbsp olive oil',
      '1 onion, chopped',
      '2 garlic cloves, minced',
      '1 tbsp curry powder',
      '200ml coconut milk',
      'Salt to taste',
    ],
    instructions: [
      'Heat oil in a pan over medium heat.',
      'Add onion and garlic, sauté until golden.',
      'Stir in curry powder and cook for 1 minute.',
      'Add chicken, cook until browned.',
      'Pour in coconut milk, simmer for 20 minutes.',
      'Season with salt and serve hot.',
    ],
    carbs: 25,
    nutrients: ['Rich in protein', 'Boosts immunity', 'Supports muscle growth'],
    calories: 350,
    protein: 30,
    fat: 15,
  });

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: 'Foodie123',
      text: 'Amazing recipe! So tasty!',
      timestamp: '2025-04-15 14:30',
      likes: 0,
      isLiked: false,
    },
  ]);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(225);
  const [dislikes, setDislikes] = useState(12);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [shares, setShares] = useState(16);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState<'instructions' | 'health'>(
    'instructions',
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const likeAnim = useRef(new Animated.Value(1)).current;
  const dislikeAnim = useRef(new Animated.Value(1)).current;
  const scrollRef = useRef<ScrollView>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerBackground = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: ['transparent', '#FFF'],
    extrapolate: 'clamp',
  });
  const headerTitleColor = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: ['#FFF', '#2D3748'],
    extrapolate: 'clamp',
  });
  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const navigation = useNavigation();

  // Animation for ingredient and instruction boxes
  const fadeAnims = recipe.ingredients.map(
    () => useRef(new Animated.Value(0)).current,
  );
  const instructionAnims = recipe.instructions.map(
    () => useRef(new Animated.Value(0)).current,
  );

  // ProgressBar Component
  interface ProgressBarProps {
    label: string;
    value: string;
    percentage: number;
    animValue: Animated.Value;
  }

  const ProgressBar: React.FC<ProgressBarProps> = ({
    label,
    value,
    percentage,
    animValue,
  }) => {
    const widthAnim = animValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.progressBarContainer}>
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabel}>{label}</Text>
          <Text style={styles.progressValue}>
            {value} ({percentage.toFixed(1)}%)
          </Text>
        </View>
        <View style={styles.progressBarBackground}>
          <Animated.View style={[styles.progressBarFill, {width: widthAnim}]} />
        </View>
      </View>
    );
  };

  useEffect(() => {
    // Animate ingredients
    fadeAnims.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true,
      }).start();
    });
    // Animate instructions
    instructionAnims.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  const getImageSource = () => {
    switch (recipe.image) {
      case 'image1.jpg':
        return require('../../assets/image/image1.jpg');
      default:
        return require('../../assets/image/image1.jpg');
    }
  };

  useEffect(() => {
    const scrollListener = scrollY.addListener(({value}) => {
      setLastScrollY(value);
    });
    return () => scrollY.removeListener(scrollListener);
  }, [scrollY]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          user: 'You',
          text: newComment,
          timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
          likes: 0,
          isLiked: false,
        },
      ]);
      setNewComment('');
    }
  };

  const triggerAnimation = (anim: Animated.Value) => {
    anim.setValue(1);
    Animated.sequence([
      Animated.timing(anim, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(anim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes(prevLikes => prevLikes - 1);
    } else {
      if (isDisliked) {
        setIsDisliked(false);
        setDislikes(prevDislikes => prevDislikes - 1);
      }
      setIsLiked(true);
      setLikes(prevLikes => prevLikes + 1);
      triggerAnimation(likeAnim);
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setIsDisliked(false);
      setDislikes(prevDislikes => prevDislikes - 1);
    } else {
      if (isLiked) {
        setIsLiked(false);
        setLikes(prevLikes => prevLikes - 1);
      }
      setIsDisliked(true);
      setDislikes(prevDislikes => prevDislikes + 1);
      triggerAnimation(dislikeAnim);
    }
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this recipe: ${recipe.name} - ${recipe.description}\nView it here: [your-app-link]`,
      });
      if (result.action === Share.sharedAction) {
        setShares(prevShares => prevShares + 1);
      }
    } catch (error) {
      // Silently handle error
    }
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleCommentLike = (commentId: number) => {
    setComments(
      comments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
              isLiked: !comment.isLiked,
            }
          : comment,
      ),
    );
  };

  const scrollToComments = () => {
    scrollRef.current?.scrollToEnd({animated: true});
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleProfilePress = () => {
    navigation.navigate('ProfileScreen', {userId: 'chef_anita'});
  };

  const handleTabChange = (tab: 'instructions' | 'health') => {
    setActiveTab(tab);
    setTimeout(() => {
      scrollRef.current?.scrollTo({y: lastScrollY, animated: false});
    }, 0);
  };

  const handleMenuPress = () => {
    setModalVisible(true);
  };

  const handleModalOption = (option: string) => {
    switch (option) {
      case 'Save Recipe':
        // Placeholder: Add save logic (e.g., save to local storage or backend)
        console.log('Saving recipe...');
        break;
      case 'View Details':
        // Placeholder: Navigate to a details screen or show more info
        console.log('Viewing details...');
        break;
      case 'Share':
        handleShare();
        break;
      case 'Report':
        // Placeholder: Add report logic
        console.log('Reporting recipe...');
        break;
    }
    setModalVisible(false);
  };
  // Animation for progress bars
  const caloriesAnim = useRef(new Animated.Value(0)).current;
  const carbsAnim = useRef(new Animated.Value(0)).current;
  const proteinAnim = useRef(new Animated.Value(0)).current;
  const fatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate ingredients
    fadeAnims.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true,
      }).start();
    });
    // Animate instructions
    instructionAnims.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true,
      }).start();
    });
    // Animate progress bars
    Animated.parallel([
      Animated.timing(caloriesAnim, {
        toValue: (recipe.calories / 2000) * 100,
        duration: 600,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(carbsAnim, {
        toValue: (recipe.carbs / 300) * 100,
        duration: 600,
        delay: 100,
        useNativeDriver: false,
      }),
      Animated.timing(proteinAnim, {
        toValue: (recipe.protein / 50) * 100,
        duration: 600,
        delay: 200,
        useNativeDriver: false,
      }),
      Animated.timing(fatAnim, {
        toValue: (recipe.fat / 70) * 100,
        duration: 600,
        delay: 300,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <CustomHeader
          // title="Profile"
          onBackPress={handleBackPress}
          onMenuPress={handleMenuPress}
          headerBackground={headerBackground}
          headerTitleColor={headerTitleColor}
          headerTitleOpacity={headerTitleOpacity}
        />
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.container}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}>
          <View style={styles.imageContainer}>
            <Image source={getImageSource()} style={styles.image} />
            <View style={styles.prepOverlay}>
              <Text style={styles.timeText}>Time: 20m</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <TouchableOpacity style={styles.statItem} onPress={handleLike}>
              <Animated.View style={{transform: [{scale: likeAnim}]}}>
                <MaterialIcons
                  name={isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
                  size={22}
                  color="#A064FF"
                />
              </Animated.View>
              <Text style={styles.statText}>{likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statItem} onPress={handleDislike}>
              <Animated.View style={{transform: [{scale: dislikeAnim}]}}>
                <MaterialIcons
                  name={isDisliked ? 'thumb-down' : 'thumb-down-off-alt'}
                  size={22}
                  color="#A064FF"
                />
              </Animated.View>
              <Text style={styles.statText}>{dislikes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statItem} onPress={handleShare}>
              <MaterialIcons name="share" size={22} color="#A064FF" />
              <Text style={styles.statText}>{shares}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.statItem}
              onPress={scrollToComments}>
              <MaterialIcons name="comment" size={22} color="#A064FF" />
              <Text style={styles.statText}>{comments.length}</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#f7f7f7', borderRadius: 12}}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.profileContainer}
                onPress={handleProfilePress}
                activeOpacity={0.8}>
                <Image
                  source={require('../../assets/image/image1.jpg')}
                  style={styles.profileAvatar}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.authorText}>Chef Anita</Text>
                  <Text style={styles.recipeNameText}>{recipe.name}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.followButton}
                onPress={handleFollow}
                activeOpacity={0.9}>
                <Text style={styles.followText}>
                  {isFollowing ? 'Following' : 'Follow'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionTop}>
            <Text style={styles.description}>{recipe.description}</Text>

            {/* Tab Bar */}
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  activeTab === 'instructions' && styles.activeTab,
                ]}
                onPress={() => handleTabChange('instructions')}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'instructions' && styles.activeTabText,
                  ]}>
                  Recipe Instructions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'health' && styles.activeTab]}
                onPress={() => handleTabChange('health')}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'health' && styles.activeTabText,
                  ]}>
                  Health Meter
                </Text>
              </TouchableOpacity>
            </View>

            {/* Tab Content */}
            {activeTab === 'instructions' ? (
              <>
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Ingredients</Text>
                  <View style={styles.divider} />
                  {recipe.ingredients.map((ingredient, index) => (
                    <Animated.View
                      key={index}
                      style={[styles.itemBox, {opacity: fadeAnims[index]}]}>
                      <TouchableOpacity activeOpacity={0.8}>
                        <Text style={styles.itemText}>{ingredient}</Text>
                      </TouchableOpacity>
                    </Animated.View>
                  ))}
                </View>
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Instructions</Text>
                  <View style={styles.divider} />
                  {recipe.instructions.map((step, index) => (
                    <Animated.View
                      key={index}
                      style={[
                        styles.itemBox,
                        {opacity: instructionAnims[index]},
                      ]}>
                      <TouchableOpacity activeOpacity={0.8}>
                        <Text style={styles.itemText}>
                          <Text style={styles.stepNumber}>{index + 1}.</Text>{' '}
                          {step}
                        </Text>
                      </TouchableOpacity>
                    </Animated.View>
                  ))}
                </View>
              </>
            ) : (
              // <View style={styles.section}>
              //   <Text style={styles.sectionTitle}>Health Meter</Text>
              //   <View
              //     style={{
              //       width: '80%',
              //       height: 1,
              //       backgroundColor: '#E5E7EB',
              //       marginBottom: 6,
              //     }}
              //   />
              //   <View style={styles.healthMeter}>
              //     <View style={styles.healthItem}>
              //       <Text style={styles.healthLabel}>Calories:</Text>
              //       <Text style={styles.healthValue}>{recipe.calories} kcal</Text>
              //     </View>
              //     <View style={styles.healthItem}>
              //       <Text style={styles.healthLabel}>Carbs:</Text>
              //       <Text style={styles.healthValue}>
              //         {recipe.carbs}g ({((recipe.carbs / 300) * 100).toFixed(1)}%
              //         of 300g)
              //       </Text>
              //     </View>
              //     <View style={styles.healthItem}>
              //       <Text style={styles.healthLabel}>Protein:</Text>
              //       <Text style={styles.healthValue}>
              //         {recipe.protein}g (
              //         {((recipe.protein / 50) * 100).toFixed(1)}% of 50g)
              //       </Text>
              //     </View>
              //     <View style={styles.healthItem}>
              //       <Text style={styles.healthLabel}>Fat:</Text>
              //       <Text style={styles.healthValue}>
              //         {recipe.fat}g ({((recipe.fat / 70) * 100).toFixed(1)}% of
              //         70g)
              //       </Text>
              //     </View>
              //     <Text style={styles.healthNote}>
              //       Based on general daily recommended intake (varies by
              //       individual).
              //     </Text>
              //   </View>
              //   <View>
              //     <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
              //     <View
              //       style={{
              //         width: '80%',
              //         height: 1,
              //         backgroundColor: '#E5E7EB',
              //         marginBottom: 6,
              //       }}
              //     />
              //     {recipe.nutrients.map((benefit, index) => (
              //       <Text key={index} style={styles.listItem}>
              //         {benefit}
              //       </Text>
              //     ))}
              //   </View>
              // </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Health Meter</Text>
                <View
                  style={{
                    width: '80%',
                    height: 1,
                    backgroundColor: '#E5E7EB',
                    marginBottom: 6,
                  }}
                />
                <View style={styles.healthMeter}>
                  <ProgressBar
                    label="Calories"
                    value={`${recipe.calories} kcal`}
                    percentage={(recipe.calories / 2000) * 100}
                    animValue={caloriesAnim}
                  />
                  <ProgressBar
                    label="Carbs"
                    value={`${recipe.carbs}g`}
                    percentage={(recipe.carbs / 300) * 100}
                    animValue={carbsAnim}
                  />
                  <ProgressBar
                    label="Protein"
                    value={`${recipe.protein}g`}
                    percentage={(recipe.protein / 50) * 100}
                    animValue={proteinAnim}
                  />
                  <ProgressBar
                    label="Fat"
                    value={`${recipe.fat}g`}
                    percentage={(recipe.fat / 70) * 100}
                    animValue={fatAnim}
                  />
                  <Text style={styles.healthNote}>
                    Based on general daily recommended intake (varies by
                    individual).
                  </Text>
                </View>
                <View>
                  <Text style={styles.sectionTitle}>Nutritional Benefits</Text>
                  <View
                    style={{
                      width: '80%',
                      height: 1,
                      backgroundColor: '#E5E7EB',
                      marginBottom: 6,
                    }}
                  />
                  {recipe.nutrients.map((benefit, index) => (
                    <Text key={index} style={styles.listItem}>
                      {benefit}
                    </Text>
                  ))}
                </View>
              </View>
            )}
            <TouchableOpacity
              style={{
                backgroundColor: '#A064FF',
                borderRadius: 12,
                elevation: 3,
                shadowColor: 'grey',
                paddingVertical: 10,
                marginBottom: 8,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: 'white', fontWeight:'500'}}>Request Recipe</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionComment}>
            <Text style={styles.sectionTitle}>Comments</Text>
            <FlatList
              data={comments}
              renderItem={({item}) => (
                <View style={styles.commentContainer}>
                  <View style={styles.commentHeader}>
                    <Text style={styles.commentUser}>{item.user}</Text>
                    <View style={{flexDirection: 'row', display: 'flex'}}>
                      <TouchableOpacity
                        onPress={() => handleCommentLike(item.id)}>
                        <MaterialIcons
                          name={item.isLiked ? 'thumb-up' : 'thumb-up-off-alt'}
                          size={18}
                          color="#A064FF"
                        />
                      </TouchableOpacity>
                      <Text style={styles.commentLikes}>{item.likes}</Text>
                    </View>
                  </View>
                  <Text style={styles.commentText}>{item.text}</Text>
                  <Text style={styles.commentTime}>{item.timestamp}</Text>
                </View>
              )}
              keyExtractor={item => item.id.toString()}
              ListEmptyComponent={
                <Text style={styles.noComments}>No comments yet!</Text>
              }
            />
            <View style={styles.commentInputContainer}>
              <TextInput
                style={styles.commentInput}
                value={newComment}
                onChangeText={setNewComment}
                placeholder="Add a comment..."
                multiline
              />
              <TouchableOpacity
                style={styles.commentButton}
                onPress={handleAddComment}>
                <Text style={styles.commentButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <SquareCarousel />
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* Bottom Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalBackdrop}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.modalOption}
                onPress={() => handleModalOption('Save Recipe')}>
                <Text style={styles.modalOptionText}>Save Recipe</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalOption}
                onPress={() => handleModalOption('View Details')}>
                <Text style={styles.modalOptionText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalOption}
                onPress={() => handleModalOption('Share')}>
                <Text style={styles.modalOptionText}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalOption}
                onPress={() => handleModalOption('Report')}>
                <Text style={styles.modalOptionText}>Report</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingBottom: 50,
  },
  imageContainer: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 350,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E2E8F0', // Fallback background
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  authorText: {
    color: '#2D3748',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'System',
  },
  timeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'System',
  },
  recipeNameText: {
    color: '#2D3748',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'System',
    textTransform: 'capitalize',
  },
  prepOverlay: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    alignSelf: 'center',
  },
  statItem: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 8,
  },
  statText: {
    fontSize: 14,
    color: '#A064FF',
    fontWeight: '500',
    fontFamily: 'System',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
    marginTop: 12,
    paddingHorizontal: 10,
    // backgroundColor:'lightgrey'
  },
  followButton: {
    backgroundColor: '#A064FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  followText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'System',
  },
  description: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    marginBottom: 10,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'System',
    padding: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#A064FF',
  },
  tabText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'System',
  },
  activeTabText: {
    color: '#FFF',
    fontWeight: '600',
  },
  section: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 15,
    elevation: 6,
    shadowColor: '#CBD5E0',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    padding: 16,
  },
  sectionComment: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    elevation: 2,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    padding: 20,
    borderWidth: 0.2,
    marginTop: 25,
  },
  sectionTop: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 10,
    elevation: 4,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: -26,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 12,
    fontFamily: 'System',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 12,
  },
  itemBox: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    // borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 8,
    marginBottom: 8,
    // shadowColor: 'lightgrey',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.2,
    // shadowRadius: 8,
    // elevation: 2,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    fontFamily: 'System',
    textTransform: 'capitalize',
  },
  stepNumber: {
    fontWeight: '800',
    color: '#A064FF',
  },
  healthMeter: {
    marginBottom: 15,
  },
  healthNote: {
    fontSize: 12,
    color: '#718096',
    textAlign: 'center',
    fontFamily: 'System',
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 8,
    fontFamily: 'System',
  },
  progressBarContainer: {
    marginBottom: 16,
  },
  progressLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 16,
    color: '#2D3748',
    fontWeight: '600',
    fontFamily: 'System',
  },
  progressValue: {
    fontSize: 16,
    color: '#A064FF',
    fontWeight: '500',
    fontFamily: 'System',
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#E2E8F0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#A064FF',
    borderRadius: 5,
  },
  commentContainer: {
    marginBottom: 15,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    justifyContent: 'space-between',
  },
  commentUser: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2D3748',
    marginRight: 10,
    fontFamily: 'System',
  },
  commentLikes: {
    fontSize: 14,
    color: '#A064FF',
    marginLeft: 5,
    fontFamily: 'System',
  },
  commentText: {
    fontSize: 14,
    color: '#2D3748',
    marginBottom: 2,
    fontFamily: 'System',
  },
  commentTime: {
    fontSize: 12,
    color: '#718096',
    fontFamily: 'System',
  },
  noComments: {
    fontSize: 14,
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'System',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginRight: 10,
    backgroundColor: '#FFF',
    fontSize: 14,
    color: '#2D3748',
    fontFamily: 'System',
  },
  commentButton: {
    backgroundColor: '#A064FF',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  commentButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'System',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 1000,
    paddingTop: StatusBar.currentHeight || 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: '100%',
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'System',
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 28,
  },
  menuButton: {
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 28,
  },
  modalBackdrop: {
    flex: 1,
    // backgroundColor: 'rgba(77, 77, 77, 0.5)',
    justifyContent: 'flex-end',
    height: '100%',
  },
  modalContainer: {
    width: '100%',
    height: '40%',
    backgroundColor: 'rgb(250, 250, 250)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    borderColor: 'lightgrey',
    borderWidth: 1,
    elevation: 2,
    shadowColor: 'grey',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  modalOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  modalOptionText: {
    fontSize: 18,
    color: '#2D3748',
    fontWeight: '600',
    fontFamily: 'System',
  },
  closeButton: {
    backgroundColor: '#A064FF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'System',
  },
});
