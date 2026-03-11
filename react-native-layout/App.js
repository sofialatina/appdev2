import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Todo from './screens/Todo';

export default function App() {

  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      {isAuthenticated ? (
        <Todo />
      ) : isLogin ? (
        <Login
          switchScreen={() => setIsLogin(false)}
          onLogin={() => setIsAuthenticated(true)}
        />
      ) : (
        <Signup
          switchScreen={() => setIsLogin(true)}
          onSignup={() => setIsAuthenticated(true)}
        />
      )}

    </SafeAreaView>
  );
}