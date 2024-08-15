import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';
import BreadStockScreen, {UserInput} from './src/screens/BreadStockScreen'; // Corrected import
import ChatbotResponseScreen from './src/screens/ChatbotResponseScreen';

export type RootStackParamList = {
  Home: undefined;
  BreadStock: undefined;
  Chatbot: {userInput: UserInput};
  ChatbotResponse: {response: string};
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
            name="BreadStock"
            component={BreadStockScreen} // Added BreadStock screen
            options={{title: 'Bread Stock'}}
          />
          <Stack.Screen
            name="Chatbot"
            component={ChatbotScreen}
            options={{title: 'Bread Stock Assistant'}}
          />
          <Stack.Screen
            name="ChatbotResponse"
            component={ChatbotResponseScreen}
            options={{title: 'Assistant Response'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
