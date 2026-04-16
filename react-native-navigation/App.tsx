import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation,  useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({route}) {
  const navigation = useNavigation();
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
      alert('New post: ' + route.params?.post);
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Details', {
        itemId: 86, 
        otherParam: 'nxx investigation team'
        })}>
        Go to Details
      </Button>
      <Button
        onPress={() =>
          navigation.navigate('More', {
            screen: 'Settings',
            params: { userId: 'jane' },
          })
        }
      >
        Go to Settings (Tab)
      </Button>
    </View>
  );
}

function DetailsScreen({ route }) {
  const navigation = useNavigation();
  const { itemId, otherParam } = route.params;
  const [postText, setPostText] = React.useState('');

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
      <Button onPress={() => {
        navigation.popTo('Home', { post: postText });
      }}>
        Fin
      </Button>
       <Button
        onPress={() => {
          navigation.popTo('Home', { post: postText });
        }}
      >
        Send Post Back to Home
      </Button>
    </View>
  );
}

function SettingsScreen({ route }) {
  const { userId } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>User: {userId}</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator({
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

const MoreStack = createNativeStackNavigator({
  screens: {
    Settings: SettingsScreen,
  },
});

const RootTabs = createBottomTabNavigator({
  screens: {
    Home: HomeStack,
    More: MoreStack,
  },
});

const Navigation = createStaticNavigation(RootTabs);
export default function App() {
  return <Navigation />;
}