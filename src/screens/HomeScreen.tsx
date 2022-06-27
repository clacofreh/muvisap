import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

import { useMovies } from '../hooks/useMovies';
import HorizontalSlider from '../components/HorizontalSlider';
import { CarouselCustom } from '../components/Carousel';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View>
          <CarouselCustom sliderWidth={windowWidth} movie={nowPlaying} />
        </View>
        {/* peliculas populares */}
        <HorizontalSlider title="Popular" movie={popular} />
        <HorizontalSlider title="Top Rated" movie={topRated} />
        <HorizontalSlider title="Upcoming" movie={upcoming} />
      </View>
    </ScrollView>
  );
};
