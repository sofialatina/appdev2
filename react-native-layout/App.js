import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';

export default function App() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLogin ? (
        <Login switchScreen={() => setIsLogin(false)} />
      ) : (
        <Signup switchScreen={() => setIsLogin(true)} />
      )}
    </SafeAreaView>
  );
}
