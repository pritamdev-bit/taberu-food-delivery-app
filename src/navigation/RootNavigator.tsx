// import { useAuth } from '../context/AuthContext';

import { useEffect, useState } from 'react';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabs from './ButtomTabs';

export default function RootNavigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        (async () => {
            const user = await AsyncStorage.getItem('user');
            if (user !== null) {
                setIsLoggedIn(true);
            }
        })();
    }, []);

  return isLoggedIn
    ? <BottomTabs />
    : <AuthNavigator />;
}