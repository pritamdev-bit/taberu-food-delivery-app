import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions ,useNavigation } from '@react-navigation/native';

const menuItems = [
  'Edit Profile',
  'Saved',
  'Notifications',
  'Payment Methods',
  'Privacy',
  'Logout',
];

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [user, setUser] = React.useState<any>({
    name: 'Pritam Mandal',
    email: '',
    avatar: 'https://images.pexels.com/photos/7139932/pexels-photo-7139932.jpeg',
    rating: 4.5,
    orderCount: 24,
    favoriteCount: 12,
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
          const localUser = JSON.parse(value);
          setUser({ ...user, email: localUser.email });
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  const handleLogOut = async (item: string) => {
    if (item === 'Logout') {
      await AsyncStorage.removeItem('user');
      setUser({ ...user, email: '' });
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: user.avatar,
            }}
            style={styles.avatar}
          />

          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>

          <TouchableOpacity activeOpacity={0.8} style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        {/* Menu */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              style={styles.menuItem}
              onPress={() => handleLogOut(item)}
            >
              <Text style={styles.menuText}>{item}</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },

  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 999,
    marginBottom: 18,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },

  name: {
    color: '#111',
    fontSize: 28,
    fontWeight: '700',
  },

  email: {
    color: '#7A7A7A',
    fontSize: 15,
    marginTop: 6,
    marginBottom: 20,
  },

  editButton: {
    backgroundColor: '#111',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 16,
  },

  editButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    paddingHorizontal: 20,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFF',
    marginHorizontal: 6,
    paddingVertical: 22,
    borderRadius: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  statNumber: {
    color: '#111',
    fontSize: 24,
    fontWeight: '700',
  },

  statLabel: {
    color: '#777',
    marginTop: 6,
    fontSize: 14,
  },

  menuContainer: {
    marginTop: 35,
    paddingHorizontal: 20,
  },

  menuItem: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  menuText: {
    color: '#111',
    fontSize: 16,
    fontWeight: '500',
  },

  arrow: {
    color: '#999',
    fontSize: 24,
  },
});