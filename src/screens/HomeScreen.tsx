import { View, Text, Pressable, Image, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    tag: "Indian",
  },
  {
    id: 2,
    name: "Burger Hub",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    tag: "Fast Food",
  },
  {
    id: 3,
    name: "Pasta Palace",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    tag: "Italian",
  },
  {
    id: 4,
    name: "Sushi World",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    tag: "Japanese",
  },
  {
    id: 5,
    name: "Green Bowl",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    tag: "Healthy",
  },
  {
    id: 6,
    name: "Pizza Corner",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    tag: "Pizza",
  },
  {
    id: 7,
    name: "Dragon Express",
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    tag: "Chinese",
  },
  {
    id: 8,
    name: "Cafe Mocha",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    tag: "Cafe",
  },
];

export default function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <ImageBackground 
        source={require('../../assets/sushi.png')}
      >
        <Text style={{ fontSize: 60, color: 'white', fontWeight: 'bold', textAlign: 'center', margin: 'auto' }}>Taberu - Order Now!</Text>
      </ImageBackground>
      <Text style={{
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
      }}>All Restaurants</Text>

      <FlatList 
        data={restaurants}
        renderItem={({item}) => (
          <Pressable style={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
            padding: 10,
            elevation: 5,
            shadowColor: 'black',
            shadowOpacity: 0.5,
            shadowRadius: 10,
            shadowOffset: {width: 0, height: 2},
            width: 400
          }}>
            <Image source={{uri: item.image}} style={{width: '100%', height: 150, marginBottom: 10}}/>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{fontSize: 15, color: 'gray'}}>{item.tag}</Text>
            <Text style={{fontSize: 15, color: 'gray'}}>Rating: {item.rating}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}