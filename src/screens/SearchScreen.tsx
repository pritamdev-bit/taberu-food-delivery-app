import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

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

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!query.trim()) return restaurants;

    return restaurants.filter(
      item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.tag.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <Image source={{uri: item.image}} style={styles.imagePlaceholder}/>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.tag}>{item.tag}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search restaurants..."
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  heading: {
    color: '#000',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
  },

  searchContainer: {
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  input: {
    height: 55,
    fontSize: 16,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#262626',
  },

  imagePlaceholder: {
    width: 65,
    height: 65,
    borderRadius: 16,
    backgroundColor: '#2D2D2D',
  },

  info: {
    marginLeft: 14,
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },

  tag: {
    color: '#A0A0A0',
    fontSize: 14,
  },
});