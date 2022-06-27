import { FlatList, Text, View } from 'react-native';
import React from 'react';
import MoviePoster from './MoviePoster';
import { Movie } from '../interfaces/MovieDbNowPlaying';

interface Props {
  title?: string;
  movie: Movie | Movie[] | undefined;
}

const HorizontalSlider = ({ movie, title }: Props) => {
  return (
    <View style={{ height: !!title ? 260 : 220 }}>
      {title && (
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movie as any}
        renderItem={({ item }: any) => (
          <MoviePoster width={140} height={200} movie={item} />
        )}
        keyExtractor={(item: any) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
