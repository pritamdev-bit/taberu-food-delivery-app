// navigation/DrawerNavigator.tsx

import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './ButtomTabs';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}