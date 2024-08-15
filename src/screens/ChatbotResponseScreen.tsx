// src/screens/ChatbotResponseScreen.tsx
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

type ChatbotResponseScreenRouteProp = RouteProp<
  RootStackParamList,
  'ChatbotResponse'
>;

type Props = {
  route: ChatbotResponseScreenRouteProp;
};

const ChatbotResponseScreen: React.FC<Props> = ({route}) => {
  const {response} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Recommendation</Title>
          <Paragraph>{response}</Paragraph>
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
});

export default ChatbotResponseScreen;
