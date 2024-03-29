import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Cast } from '../interfaces/CreditsInterface';

interface Props {
  actor: Cast;
}

const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{ uri }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>

        <Text style={{ fontSize: 18, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 52,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 6.27,

    elevation: 10,
    marginLeft: 1,
    marginRight: 10,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
