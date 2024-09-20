/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, Quest, QuestComplete, Welcome, Quiz} from './Screens';
import {
  boxIcon,
  homeIcon,
  menuIcon,
  settingsIcon,
  questIcon,
  homeActiveIcon,
} from './assets';
import {Image, View} from 'react-native';
import styles from './styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBarIcon = (focused: boolean, route: any) => {
  let iconName;
  switch (route.name) {
    case 'home':
      iconName = focused ? homeActiveIcon : homeIcon; //todo touched version
      break;
    case 'settings':
      iconName = focused ? settingsIcon : settingsIcon;
      break;
    case 'menu':
      iconName = focused ? menuIcon : menuIcon;
      break;
    case 'quest':
      iconName = focused ? questIcon : questIcon;
      break;
    case 'box':
      iconName = focused ? boxIcon : boxIcon;
      break;
    default:
      iconName = null;
  }
  return (
    <View style={styles.iconView}>
      <Image
        style={route.name === 'menu' ? styles.imageBig : styles.image}
        source={iconName}
        resizeMode="contain"
      />
    </View>
  );
};

const QuizStackScreen = () => {
  const route = useRoute();
  console.log('route________________', route);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quest"
        component={Quest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="questComplete"
        component={QuestComplete}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainBottomTabStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused}) => renderTabBarIcon(focused, route),

          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#302019',
            paddingTop: 20,
            paddingBottom: 32,
            borderTopWidth: 0,
          },
        };
      }}>
      <Tab.Screen
        name="home"
        component={QuizStackScreen}
        options={{headerShown: false, tabBarLabel: () => null}}
      />
      <Tab.Screen
        name="settings"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="menu"
        component={HomeScreen}
        options={{headerShown: false, tabBarLabel: () => null}}
      />
      <Tab.Screen
        name="quest"
        component={Quiz}
        options={{headerShown: false, tabBarLabel: () => null}}
      />
      <Tab.Screen
        name="box"
        component={HomeScreen}
        options={{headerShown: false, tabBarLabel: () => null}}
      />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={MainBottomTabStackScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
