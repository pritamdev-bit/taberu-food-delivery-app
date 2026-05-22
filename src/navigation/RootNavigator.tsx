// import { useAuth } from '../context/AuthContext';

import { useState } from 'react';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

export default function RootNavigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn
    ? <DrawerNavigator />
    : <AuthNavigator />;
}