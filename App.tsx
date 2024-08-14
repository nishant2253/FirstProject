// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';

export type RootStackParamList = {
  Home: undefined;
  Chatbot: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0071dc', // Walmart blue
    accent: '#ffc220', // Walmart yellow
  },
};

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary,
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
            name="Chatbot"
            component={ChatbotScreen}
            options={{title: 'Bread Stock Assistant'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
