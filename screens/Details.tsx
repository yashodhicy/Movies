import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const details = route.params.details;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{details.title ? 'Movies' : 'TV Shows'}</Text>
      <Image source={{uri: details.poster_path}} style={styles.image} />
      <View>
        <Text style={styles.name}>
          {details.title ? details.title : details.name}
        </Text>
        <View style={styles.matrices}>
          <Text style={styles.vote}>🎞️ Vote Avg.</Text>
          <Text >★ Popularity</Text>
        </View>
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.overview}>Overview</Text>
        <Text style={styles.description}>{details.overview}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.title}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 30,
    height: '100%',
  },

  title: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '800',
  },

  image: {
    height: 300,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },

  name: {
    fontSize: 24,
    fontWeight: '700',
  },

  overviewContainer: {
    gap: 10,
  },

  overview: {
    fontSize: 18,
    fontWeight: '600',
  },

  description: {
    fontSize: 14,
    fontWeight: '400',
    height: 200,
  },

  matrices: {
    flexDirection: 'row',
    width: '50%',
    gap: 20,
  },

  button: {
    backgroundColor: '#BB2D00',
    width: 274,
    height: 55,
    borderRadius: 7,
    marginHorizontal: '13%',
    justifyContent: 'center',
  },
  vote: {
    color:'brown'
  }
  
});
