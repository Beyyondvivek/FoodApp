import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons'; // or use 'react-native-vector-icons/Ionicons'

interface VideoCardProps {
  uri: string;
  title: string;
  description: string;
  onPress: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ uri, title, description, onPress }) => {
  return (
    <View style={styles.card}>
      <Video
        source={{ uri }}
        muted
        repeat
        paused={false}
        resizeMode="cover"
        style={styles.video}
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
        {/* <TouchableOpacity style={styles.button} onPress={onPress}>
          <Ionicons name="play-circle" size={20} color="#fff" />
          <Text style={styles.buttonText}> Watch Full Video</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 400,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    // backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  desc: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingVertical: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
