import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';
import BreadStockScreen, {UserInput} from './src/screens/BreadStockScreen';
import ChatbotResponseScreen from './src/screens/ChatbotResponseScreen';
import GroceryCompareScreen from './src/screens/GroceryCompareScreen';
import GroceryCompareResultScreen from './src/screens/GroceryCompareResultScreen';

export type RootStackParamList = {
  Home: undefined;
  StockAssistant: undefined;
  BreadStock: undefined;
  Chatbot: {userInput: UserInput};
  ChatbotResponse: {response: string};
  GroceryCompare: undefined;
  GroceryCompareResult: {item: string; type: string};
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
            options={{title: 'Walmart Assistant'}}
          />
          <Stack.Screen
            name="StockAssistant"
            component={BreadStockScreen}
            options={{title: 'Stock Assistant'}}
          />
          <Stack.Screen
            name="BreadStock"
            component={BreadStockScreen}
            options={{title: 'Bread Stock'}}
          />
          <Stack.Screen
            name="Chatbot"
            component={ChatbotScreen}
            options={{title: 'Stock Assistant'}}
          />
          <Stack.Screen
            name="ChatbotResponse"
            component={ChatbotResponseScreen}
            options={{title: 'Assistant Response'}}
          />
          <Stack.Screen
            name="GroceryCompare"
            component={GroceryCompareScreen}
            options={{title: 'Grocery Compare'}}
          />
          <Stack.Screen
            name="GroceryCompareResult"
            component={GroceryCompareResultScreen}
            options={{title: 'Compare Results'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
