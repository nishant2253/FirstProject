// src/screens/BreadStockScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

type BreadStockScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BreadStock'
>;

type Props = {
  navigation: BreadStockScreenNavigationProp;
};

export interface UserInput {
  slicesPerDay: number;
  daysToConsume: number;
  avgPrice: number;
}

const BreadStockScreen: React.FC<Props> = ({navigation}) => {
  const [slicesPerDay, setSlicesPerDay] = useState('');
  const [daysToConsume, setDaysToConsume] = useState('');
  const [avgPrice, setAvgPrice] = useState('');

  const handleSubmit = () => {
    const userInput: UserInput = {
      slicesPerDay: parseInt(slicesPerDay, 10),
      daysToConsume: parseInt(daysToConsume, 10),
      avgPrice: parseFloat(avgPrice),
    };
    navigation.navigate('Chatbot', {userInput});
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bread Stock Calculator</Text>
      <View style={styles.inputContainer}>
        <Icon
          name="bread-slice"
          size={24}
          color="#0071ce"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Slices consumed per day"
          keyboardType="numeric"
          value={slicesPerDay}
          onChangeText={setSlicesPerDay}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon
          name="calendar-range"
          size={24}
          color="#0071ce"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Days to consume stock"
          keyboardType="numeric"
          value={daysToConsume}
          onChangeText={setDaysToConsume}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon
          name="currency-usd"
          size={24}
          color="#0071ce"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Average purchase price ($)"
          keyboardType="numeric"
          value={avgPrice}
          onChangeText={setAvgPrice}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0071ce',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0071ce',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // ... (styles remain the same as in the previous version)
});

export default BreadStockScreen;
