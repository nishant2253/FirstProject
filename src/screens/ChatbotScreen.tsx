// src/screens/ChatbotScreen.tsx
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {TextInput, Button, Card, Title} from 'react-native-paper';
import {getBreadRecommendation} from '../api/huggingFaceApi';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {RouteProp} from '@react-navigation/native';

type ChatbotScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Chatbot'
>;

type ChatbotScreenRouteProp = RouteProp<RootStackParamList, 'Chatbot'>;

type Props = {
  navigation: ChatbotScreenNavigationProp;
  route: ChatbotScreenRouteProp;
};

const ChatbotScreen: React.FC<Props> = ({navigation, route}) => {
  const {slicesPerDay, daysToConsume, avgPrice} = route.params.userInput;
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await getBreadRecommendation(
        slicesPerDay,
        daysToConsume,
        avgPrice,
      );
      navigation.navigate('ChatbotResponse', {response: result});
    } catch (error) {
      navigation.navigate('ChatbotResponse', {
        response: 'An error occurred while processing your request.',
      });
    }
    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Confirm Your Input</Title>
          <TextInput
            label="Daily bread slices"
            value={slicesPerDay.toString()}
            disabled
            style={styles.input}
          />
          <TextInput
            label="Days to stock"
            value={daysToConsume.toString()}
            disabled
            style={styles.input}
          />
          <TextInput
            label="Average price ($)"
            value={avgPrice.toString()}
            disabled
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.button}
            loading={loading}>
            Get Recommendation
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  card: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
  responseCard: {
    marginTop: 16,
  },
});

export default ChatbotScreen;
