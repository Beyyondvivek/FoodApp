/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

const {width} = Dimensions.get('window');

type StaticBannerProps = {
  imageUrl: string | number;
  height?: number;
  width?: number;
  onPress?: () => void;
  borderRadius?: number;
  overlayText?: string;
  showLoader?: boolean;
};

const StaticBanner: React.FC<StaticBannerProps> = ({
  imageUrl,
  height = 50,
  width = '100%',
  onPress,
  borderRadius = 0,
  overlayText,
  showLoader = false,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.bannerContainer, {height, width}]}
      disabled={!onPress}>
      {/* Image with loading state */}
      <Image
        source={typeof imageUrl === 'string' ? {uri: imageUrl} : imageUrl}
        style={[styles.bannerImage, {borderRadius}]}
        resizeMode="cover"
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => setError(true)}
      />

      {/* Loading Indicator */}
      {showLoader && isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="small" color="#fff" />
        </View>
      )}

      {/* Error State */}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Failed to load image</Text>
        </View>
      )}

      {/* Overlay Text */}
      {overlayText && (
        <View style={styles.overlayContainer}>
          <Text style={styles.overlayText}>{overlayText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#f0f0f0', // Light gray background
    // borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  // overlayContainer: {
  //   position: 'absolute',
  //   bottom: 16,
  //   left: 16,
  //   right: 16,
  //   backgroundColor: 'rgba(0,0,0,0.6)',
  //   padding: 8,
  //   borderRadius: 4,
  // },
  // overlayText: {
  //   color: 'white',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  errorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffebee',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 14,
  },
});

export default StaticBanner;
