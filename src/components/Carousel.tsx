import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  TouchableOpacity,
} from 'react-native';


const {width: SCREEN_WIDTH} = Dimensions.get('window');

type CarouselItem = {
  id: string;
  title: string;
  description: string;
  image: any;
  backgroundColor: string;
};

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: '1',
    backgroundColor: '#6366f1',
    image: {uri: 'https://picsum.photos/600/400?random=1'},
    title: '',
    description: '',
  },
  {
    id: '2',

    backgroundColor: '#10b981',
    image: {uri: 'https://picsum.photos/600/400?random=2'},
    title: '',
    description: '',
  },
  {
    id: '3',

    backgroundColor: '#f59e0b',
    image: {uri: 'https://picsum.photos/600/400?random=3'},
    title: '',
    description: '',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<any>(null);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 50 && currentIndex > 0) {
        scrollTo(currentIndex - 1);
      } else if (
        gestureState.dx < -50 &&
        currentIndex < CAROUSEL_ITEMS.length - 1
      ) {
        scrollTo(currentIndex + 1);
      }
    },
  });

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x: index * SCREEN_WIDTH,
        animated: true,
      });
      setCurrentIndex(index);
    }
  };

  const getImageStyle = (index: number) => {
    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];

    return {
      opacity: scrollX.interpolate({
        inputRange,
        outputRange: [0.6, 1, 0.6],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          scale: scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselWrapper} {...panResponder.panHandlers}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}>
          {CAROUSEL_ITEMS.map((item, index) => (
            <View key={item.id} style={styles.slide}>
              <Animated.View
                style={[styles.imageContainer, getImageStyle(index)]}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="cover"
                />
              </Animated.View>
              {/* <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View> */}
            </View>
          ))}
        </Animated.ScrollView>
      </View>

      <View style={styles.pagination}>
        {CAROUSEL_ITEMS.map((_, index) => (
          <TouchableOpacity
            key={`dot-${index}`}
            onPress={() => scrollTo(index)}
            style={styles.dotContainer}>
            <Animated.View
              style={[
                styles.dot,
                {
                  width: scrollX.interpolate({
                    inputRange: [
                      (index - 1) * SCREEN_WIDTH,
                      index * SCREEN_WIDTH,
                      (index + 1) * SCREEN_WIDTH,
                    ],
                    outputRange: [8, 16, 8],
                    extrapolate: 'clamp',
                  }),
                  opacity: scrollX.interpolate({
                    inputRange: [
                      (index - 1) * SCREEN_WIDTH,
                      index * SCREEN_WIDTH,
                      (index + 1) * SCREEN_WIDTH,
                    ],
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: 'clamp',
                  }),
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250, // Fixed height that won't take full screen
    marginVertical: -16,
  },
  carouselWrapper: {
    flex: 1,
    borderRadius: 0,
    overflow: 'hidden',
  },
  slide: {
    width: SCREEN_WIDTH,
    height: '100%',
    // paddingHorizontal: 16,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 0,
    overflow: 'hidden',
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  dotContainer: {
    padding: 6,
  },
  dot: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6366f1',
    marginHorizontal: 4,
  },
});

export default Carousel;
