import React from 'react';
import {
  View,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ListRenderItem,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Comment, Reel} from './types';


interface CommentListProps {
  reel: Reel;
  onClose: () => void;
  commentText: string;
  setCommentText: (text: string) => void;
  handleCommentSubmit: () => void;
}

const CommentList = ({
  reel,
  onClose,
  commentText,
  setCommentText,
  handleCommentSubmit,
}: CommentListProps) => {
  const renderComment: ListRenderItem<Comment> = ({item}) => (
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.commentContainer}>
      <View style={styles.commentHeader}>
        <Text style={styles.commentTitle}>
          Comments • {reel.comments.length}
        </Text>
        <TouchableOpacity onPress={onClose}>
          <Icon name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList<Comment>
        data={reel.comments}
        renderItem={renderComment}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.commentList}
        keyboardDismissMode="interactive"
      />

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
  );
};

export default CommentList;
export const styles = StyleSheet.create({
  // Comment List Styles
  commentContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '80%',
    backgroundColor: 'rgba(0,0,0,0.95)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  commentTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  commentList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
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
    lineHeight: 18,
    marginBottom: 6,
  },
  commentActions: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
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
    padding: 16,
    backgroundColor: '#000',
    borderTopWidth: 0.5,
    borderTopColor: '#333',
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#fff',
    marginRight: 12,
    fontSize: 14,
  },
  commentPost: {
    color: '#4CAF50',
    fontWeight: '600',
    fontSize: 14,
  },
  disabledPost: {
    color: '#666',
  },

  // Existing Reels Styles
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  reelContainer: {
    width: '50%',
    height: '50%',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
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
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 6,
  },
  user: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 6,
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
    fontSize: 12,
    fontWeight: '500',
  },
});
