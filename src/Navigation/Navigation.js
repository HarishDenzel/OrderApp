import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';
import Order_Screen from '../Screens/Order_Screen';
import Cart_Screen from '../Screens/Cart_Screen';
import { Apptheme } from '../Utils/Theme';

const Stack = createStackNavigator();


const beforeLoggedIn = {
    Order_Screen:Order_Screen,
    Cart_Screen:Cart_Screen
   
   
  };
  function HomeStack() {
    return (
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        {Object.entries({
          ...beforeLoggedIn,
        }).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    );
  }
const Navigation = () => {
    return (
      <NavigationContainer theme={Apptheme}>
       <HomeStack />
      </NavigationContainer>
    );
  };
  
  export default Navigation;