// src/screens/ChatbotScreen.tsx
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {getHuggingFaceResponse} from '../api/gptApi';

type ChatbotScreenRouteProp = RouteProp<RootStackParamList, 'Chatbot'>;

type Props = {
  route: ChatbotScreenRouteProp;
};

const ChatbotScreen: React.FC<Props> = ({route}) => {
  const {userInput} = route.params;
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHuggingFaceAIResponse = async () => {
      try {
        const huggingFaceAIResponse = await getHuggingFaceResponse(userInput);
        setResponse(huggingFaceAIResponse);
      } catch (error) {
        setResponse(
          'Sorry, there was an error processing your request. Please try again later.',
        );
      } finally {
        setLoading(false);
      }
    };
    fetchHuggingFaceAIResponse();
  }, [userInput]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>AI Recommendation</Text>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0071ce" />
          <Text style={styles.loadingText}>Generating recommendation...</Text>
        </View>
      ) : (
        <View style={styles.responseContainer}>
          <Text style={styles.response}>{response}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0071ce',
    textAlign: 'center',
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#0071ce',
  },
  responseContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  response: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
});

export default ChatbotScreen;
