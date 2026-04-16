import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation,  useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Details', {
        itemId: 86, 
        otherParam: 'anything you want here'
        })}>
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen({ route }) {
  const navigation = useNavigation();
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
      <Button onPress={() => navigation.setParams({
          itemId: Math.floor(Math.random() * 100),
      })}>
        Update Item ID
      </Button>
      <Button onPress={() => navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
        }
      >
        Go to Details again
      </Button>
      <Button onPress={() => navigation.goBack()}>
        Go back
      </Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: 'lemonchiffon' },
    headerTintColor: 'midnightblue',
  },
  screens: {
    Home: { 
      screen: HomeScreen,
      options: { title: 'overview' }
    },
    Details: { screen: DetailsScreen, 
      initialParams: { itemId: 42},
     },
  },
});

const Navigation = createStaticNavigation(RootStack);
export default function App() {
  return <Navigation />;
}