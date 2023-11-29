import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Details = () => {
 
  const navigation = useNavigation();
  const route = useRoute()
  const details = route.params.details;
  return (
    <View>
      <Text>{details.title? 'Movies' : 'TV Shows'}</Text>
      <TouchableOpacity onPress={()=>navigation.popToTop()}>
        <Text>Explore</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})