// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BreadStockScreen, {UserInput} from './src/screens/BreadStockScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';

export type RootStackParamList = {
  Home: undefined;
  BreadStock: undefined;
  Chatbot: {userInput: UserInput};
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0071ce',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Walmart Food Stock'}}
        />
        <Stack.Screen
          name="BreadStock"
          component={BreadStockScreen}
          options={{title: 'Bread Stock Calculator'}}
        />
        <Stack.Screen
          name="Chatbot"
          component={ChatbotScreen}
          options={{title: 'AI Recommendation'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
