import { View } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/MovieDbNowPlaying';
import MoviePoster from './MoviePoster';
import Carousel from 'react-native-snap-carousel';
interface Props {
  movie: Movie[];
  sliderWidth: number;
}
export const CarouselCustom = ({ movie, sliderWidth }: Props) => {
  return (
    <View>
      <Carousel
        data={movie}
        sliderWidth={sliderWidth}
        renderItem={({ item }: any) => <MoviePoster movie={item} />}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
      />
    </View>
  );
};
/* Falta el tipo de dato que recibe y el item a renderizar */
