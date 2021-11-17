import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Email() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Email Screen</Text>
    </View>
  );
}

function Phone() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Phone Screen</Text>
    </View>
  );
}

function Fax() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Fax Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Email">
      <Drawer.Screen
        name="Email"
        component={Email}
        options={{ drawerLabel: 'Email' }}
      />
      <Drawer.Screen
        name="Phone"
        component={Phone}
        options={{ drawerLabel: 'Phone' }}
      />
      <Drawer.Screen
        name="Fax"
        component={Fax}
        options={{ drawerLabel: 'Fax' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
