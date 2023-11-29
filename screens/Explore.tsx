import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: string;
  name: string;
}


const Explore = () => {
  const [movies, setMovies] = useState<Item[]>([]);
  const [shows, setShows] = useState<Item[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8',
      },
    };
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
    const moviesResponse = await response.json();
    const moviesData = await moviesResponse.results;
    setMovies(moviesData);

    const tvResponse = await fetch(
      'https://api.themoviedb.org/3/discover/tv',
      options
    );
    const tvResponseJson = await tvResponse.json();
    const tvData = await tvResponseJson.results;
    setShows(tvData);
  };

  const renderItems = (items:Item[]) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {items.map((item: Item, index: number) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {'details': item})}>
        <View key={index} style={styles.card}>
          <Text>{item.title? item.title : item.name}</Text>
          <Icon
            name="heart"
            type="font-awesome"
            color="red"
            size={20}
            containerStyle={styles.heartIcon}
          />
        </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    
  );

  return (
    <View style={styles.movies}>
      <Text style={styles.title}>Movies</Text>
      {renderItems(movies)}

      <Text style={styles.title}>TV</Text>
      {renderItems(shows)}
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  movies: {
    marginTop: 50,
  },

  container: {
    marginTop: 10,
    flexDirection: 'row',
  },

  card: {
    width: 125,
    height: 175,
    padding: 10,
    margin: 5,
    backgroundColor: '#D9D9D9',
  },

  heartIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  title: {
    marginTop:30
  }
});
