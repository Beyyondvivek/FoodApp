/* eslint-disable no-dupe-keys */
import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useCallback,
} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const TAB_BAR_HEIGHT = 90; // Adjust this value based on your tab bar height

interface Reel {
  id: string;
  video: any;
  title: string;
  likes: number;
  comments: Comment[];
  user: string;
  isLiked: boolean;
}
interface Comment {
  id: string;
  user: string;
  text: string;
  likes: number;
  isLiked: boolean;
}

const reelsData: Reel[] = [
  {
    id: '1',
    video: require('../../assets/image/video2.mp4'),
    title: 'Creamy Garlic Pasta 😋',
    likes: 2450,
    comments: [
      {
        id: 'c1',
        user: '@foodie123',
        text: 'This looks amazing! 😍',
        likes: 23,
        isLiked: false,
      },
      {
        id: 'c2',
        user: '@cheflife',
        text: 'Great recipe! 👨🍳',
        likes: 45,
        isLiked: true,
      },
    ],
    user: '@italianchef',
    isLiked: false,
  },
  {
    id: '2',
    video: require('../../assets/image/video1.mp4'),
    title: 'Perfect Homemade Pizza 🍕',
    likes: 3850,
    comments: [
      {
        id: 'c1',
        user: '@foodie123',
        text: 'This looks amazing! 😍',
        likes: 23,
        isLiked: false,
      },
      {
        id: 'c2',
        user: '@cheflife',
        text: 'Great recipe! 👨🍳',
        likes: 45,
        isLiked: true,
      },
      {
        id: 'c3',
        user: '@cheflife',
        text: 'Great recipe! 👨🍳',
        likes: 45,
        isLiked: true,
      },
      {
        id: 'c4',
        user: '@cheflife',
        text: 'Great recipe! 👨🍳',
        likes: 45,
        isLiked: true,
      },
      {
        id: 'c4',
        user: '@cheflife',
        text: 'Great recipe! 👨🍳',
        likes: 45,
        isLiked: true,
      },
      {
        id: 'c4',
        user: '@cheflife',
        text: 'Great recipe! 👨🍳',
        likes: 45,
        isLiked: true,
      },
      {
        id: 'c4',
        user: '@cheflife',
        text: 'Great recipe! 👨🍳',
        likes: 45,
        isLiked: true,
      },
      {
        id: 'c4',
        user: '@cheflife',
        text: 'Great recipe! 👨🍳',
        likes: 45,
        isLiked: true,
      },
    ],
    user: '@pizzalover',
    isLiked: false,
  },
  {
    id: '3',
    video: require('../../assets/image/video1.mp4'),
    title: 'Sushi Masterclass 🍣',
    likes: 5123,
    comments: [
      {
        id: 'c1',
        user: '@foodie123',
        text: 'This looks amazing! 😍',
        likes: 23,
        isLiked: false,
      },
      {
        id: 'c2',
        user: '@cheflife',
        text: 'Great recipe! 👨🍳',
        likes: 45,
        isLiked: true,
      },
    ],
    user: '@sushimaster',
    isLiked: false,
  },
];

type VideoPlayerProps = {
  source: any;
  paused: boolean;
};

const VideoPlayer = forwardRef<VideoRef, VideoPlayerProps>(
  ({source, paused}, ref) => (
    <Video
      ref={ref}
      source={source}
      paused={paused}
      style={styles.video}
      resizeMode="cover"
      repeat={true}
      ignoreSilentSwitch="ignore"
      playWhenInactive={false}
      playInBackground={false}
      controls={false}
    />
  ),
);

const VideoFeed = () => {
  const [reels, setReels] = useState(reelsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [commentVisible, setCommentVisible] = useState(false);
  const [commentText, setCommentText] = useState('');
  const videoRefs = useRef<Map<string, VideoRef>>(new Map()).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const doubleTapRef = useRef(false);
  const commentsListRef = useRef<FlatList>(null);
  const videoHeight = SCREEN_HEIGHT - TAB_BAR_HEIGHT;

  const playCurrentVideo = useCallback(() => {
    const currentReel = reels[currentIndex];
    const ref = videoRefs.get(currentReel.id);
    if (ref) {
      ref.seek(0);
      ref.resume();
    }

    // Pause all other videos
    reels.forEach((reel, index) => {
      if (index !== currentIndex) {
        const videoRef = videoRefs.get(reel.id);
        videoRef?.pause();
      }
    });
  }, [currentIndex, reels, videoRefs]);

  useEffect(() => {
    playCurrentVideo();
  }, [currentIndex, playCurrentVideo]);

  const handleLike = (id: string) => {
    setReels(prev =>
      prev.map(reel =>
        reel.id === id
          ? {
              ...reel,
              likes: reel.isLiked ? reel.likes - 1 : reel.likes + 1,
              isLiked: !reel.isLiked,
            }
          : reel,
      ),
    );

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleDoubleTap = () => {
    if (!doubleTapRef.current) {
      doubleTapRef.current = true;
      setTimeout(() => {
        doubleTapRef.current = false;
      }, 300);
    } else {
      handleLike(reels[currentIndex].id);
    }
  };

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      const newComment: Comment = {
        id: Date.now().toString(),
        user: '@currentuser', // Replace with actual user
        text: commentText,
        likes: 0,
        isLiked: false,
      };

      setReels(prev =>
        prev.map(reel =>
          reel.id === reels[currentIndex].id
            ? {
                ...reel,
                comments: [newComment, ...reel.comments],
              }
            : reel,
        ),
      );
      setCommentText('');
      setTimeout(() => {
        commentsListRef.current?.scrollToOffset({offset: 0, animated: true});
      }, 100);
    }
  };

  const renderComment = ({item}: {item: Comment}) => (
    <View style={styles.commentItem}>
      <View style={styles.commentContent}>
        <Text style={styles.commentUser}>{item.user}</Text>
        <Text style={styles.commentText}>{item.text}</Text>
        <View style={styles.commentActions}>
          <Text style={styles.commentTime}>2h</Text>
          <Text style={styles.commentLikes}>{item.likes} likes</Text>
          <TouchableOpacity>
            <Text style={styles.commentReply}>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.commentLike}>
        <Icon
          name={item.isLiked ? 'favorite' : 'favorite-border'}
          size={16}
          color={item.isLiked ? '#ff3040' : '#fff'}
        />
      </TouchableOpacity>
    </View>
  );

  const renderReel = ({item, index}: {item: Reel; index: number}) => (
    <View style={[styles.reelContainer, {height: videoHeight}]}>
      <TouchableWithoutFeedback onPress={handleDoubleTap}>
        <VideoPlayer
          //   ref={(ref: VideoRef | null) => {
          //     if (ref) {
          //       videoRefs.set(item.id, ref);
          //     }
          //   }}
          //   source={item.video}
          //   paused={index !== currentIndex}
          ref={(ref: VideoRef | null) => {
            if (ref && !videoRefs.has(item.id)) {
              videoRefs.set(item.id, ref);
              // Auto-play first video
              if (index === 0 && currentIndex === 0) {
                ref.resume();
              }
            }
          }}
          source={item.video}
          paused={index !== currentIndex}
        />
      </TouchableWithoutFeedback>

      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'transparent', 'rgba(0,0,0,0.7)']}
        style={styles.gradientOverlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.user}>{item.user}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.user}</Text>
          </View>
          <View style={styles.controls}>
            <TouchableOpacity onPress={() => handleLike(item.id)}>
              <Animated.View
                style={{transform: [{scale: item.isLiked ? scaleAnim : 1}]}}>
                <Icon
                  name={item.isLiked ? 'favorite' : 'favorite-border'}
                  size={32}
                  color={item.isLiked ? '#ff3040' : '#fff'}
                />
              </Animated.View>
              <Text style={styles.countText}>{item.likes}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCommentVisible(true)}>
              <Icon name="comment" size={32} color="#fff" />
              <Text style={styles.countText}>{item.comments.length}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="share" size={32} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        renderItem={renderReel}
        keyExtractor={item => item.id}
        pagingEnabled
        snapToInterval={videoHeight}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        getItemLayout={(data, index) => ({
          length: videoHeight,
          offset: videoHeight * index,
          index,
        })}
      />

      {commentVisible && (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.commentContainer}>
          <View style={{padding: 16, flex: 1}}>
            <View style={styles.commentHeader}>
              <Text style={styles.commentTitle}>
                Comments • {reels[currentIndex].comments.length}
              </Text>
              <TouchableOpacity onPress={() => setCommentVisible(false)}>
                <Icon name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            <FlatList
              ref={commentsListRef}
              data={reels[currentIndex].comments}
              renderItem={renderComment}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.commentList}
              keyboardDismissMode="interactive"
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={styles.commentInputContainer}>
            <TextInput
              style={styles.commentInput}
              placeholder="Add a comment..."
              placeholderTextColor="#888"
              value={commentText}
              onChangeText={setCommentText}
              onSubmitEditing={handleCommentSubmit}
            />
            <TouchableOpacity
              onPress={handleCommentSubmit}
              disabled={!commentText.trim()}>
              <Text
                style={[
                  styles.commentPost,
                  !commentText.trim() && styles.disabledPost,
                ]}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // paddingHorizontal: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    opacity: 0.9,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
  },
  reelContainer: {
    width: SCREEN_WIDTH,
    // height: SCREEN_HEIGHT,
    justifyContent: 'center',
    height: '100%',
    borderColor: 'red', // Temporary debug
    borderWidth: 1,
  },
  video: {
    // // flex: 1,
    // width: SCREEN_WIDTH,
    // height: '100%',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderColor: 'blue', // Temporary debug
    borderWidth: 1,
  },
  gradientOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    padding: 16,
  },
  contentContainer: {
    marginTop: 48,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  user: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  controls: {
    alignSelf: 'flex-end',
    gap: 24,
    alignItems: 'center',
  },
  countText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 4,
  },
  commentContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: SCREEN_HEIGHT * 0.6, // 60% of screen height
    backgroundColor: 'rgb(39, 39, 39)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  commentTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  commentInput: {
    backgroundColor: '#333',
    borderRadius: 24,
    padding: 12,
    color: '#fff',
    width: '80%',
    flex:1,
  },
  //comment styles

  commentList: {
    paddingHorizontal: 16,
    flexGrow: 1,
    paddingBottom: 0,
  },
  commentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  commentContent: {
    flex: 1,
    marginRight: 16,
  },
  commentUser: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  commentText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  commentActions: {
    flexDirection: 'row',
    gap: 12,
  },
  commentTime: {
    color: '#888',
    fontSize: 12,
  },
  commentLikes: {
    color: '#888',
    fontSize: 12,
  },
  commentReply: {
    color: '#888',
    fontSize: 12,
    fontWeight: '600',
  },
  commentLike: {
    padding: 8,
    alignSelf: 'flex-start',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#000',
    borderTopWidth: 0.5,
    borderTopColor: '#333',
    width: SCREEN_WIDTH,
    justifyContent: 'space-between',
    gap:6
  },
  commentPost: {
    color: '#4CAF50',
    fontWeight: '600',
    paddingRight: 26,
  },
  disabledPost: {
    color: '#666',
  },
});

export default VideoFeed;
