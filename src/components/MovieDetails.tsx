import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { MovieFull } from '../interfaces/MovieDbNowPlaying';
import { Cast } from '../interfaces/CreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';
interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="star-outline" color="grey" size={20} />
          <Text style={{ fontSize: 16, marginLeft: 5 }}>
            {movieFull.vote_average}
          </Text>
          <Text style={{ marginLeft: 2, fontSize: 16 }}>
            {' '}
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}

        <Text style={{ fontSize: 23, marginTop: 20, fontWeight: 'bold' }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>
        <Text style={{ fontSize: 23, marginTop: 20, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18 }}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <Text
            style={{
              fontSize: 23,
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Actores
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, height: 70 }}
          />
        </View>
      </View>
    </>
  );
};
