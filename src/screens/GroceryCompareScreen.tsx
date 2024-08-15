import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

type GroceryCompareScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GroceryCompare'
>;

type Props = {
  navigation: GroceryCompareScreenNavigationProp;
};

const GroceryCompareScreen: React.FC<Props> = ({navigation}) => {
  const [item, setItem] = useState('');
  const [type, setType] = useState('');

  const handleCompare = () => {
    if (item && type) {
      navigation.navigate('GroceryCompareResult', {item, type});
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Compare Grocery Items</Title>
      <TextInput
        label="Grocery Item (e.g., Bread)"
        value={item}
        onChangeText={setItem}
        style={styles.input}
      />
      <TextInput
        label="Type (e.g., Whole Wheat)"
        value={type}
        onChangeText={setType}
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleCompare}
        disabled={!item || !type}>
        Compare
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
});

export default GroceryCompareScreen;
