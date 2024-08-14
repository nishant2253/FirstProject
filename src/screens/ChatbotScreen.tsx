// src/screens/ChatbotScreen.tsx
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {TextInput, Button, Card, Title, Paragraph} from 'react-native-paper';
import {getBreadRecommendation} from '../api/huggingFaceApi';

const ChatbotScreen: React.FC = () => {
  const [slicesPerDay, setSlicesPerDay] = useState<string>('');
  const [daysOfStock, setDaysOfStock] = useState<string>('');
  const [averagePrice, setAveragePrice] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await getBreadRecommendation(
        parseInt(slicesPerDay, 10),
        parseInt(daysOfStock, 10),
        parseFloat(averagePrice),
      );
      setResponse(result);
    } catch (error) {
      setResponse('An error occurred while processing your request.');
    }
    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Bread Stock Calculator</Title>
          <TextInput
            label="Daily bread slices"
            value={slicesPerDay}
            onChangeText={setSlicesPerDay}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            label="Days to stock"
            value={daysOfStock}
            onChangeText={setDaysOfStock}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            label="Average price ($)"
            value={averagePrice}
            onChangeText={setAveragePrice}
            keyboardType="numeric"
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
      {response && (
        <Card style={styles.responseCard}>
          <Card.Content>
            <Title>Recommendation</Title>
            <Paragraph>{response}</Paragraph>
          </Card.Content>
        </Card>
      )}
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
