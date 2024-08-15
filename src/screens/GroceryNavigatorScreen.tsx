import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

type GroceryNavigatorScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GroceryNavigator'
>;

type Props = {
  navigation: GroceryNavigatorScreenNavigationProp;
};

const GroceryNavigatorScreen: React.FC<Props> = ({navigation}) => {
  const [item, setItem] = useState('');
  const [brand, setBrand] = useState('');

  const handleSubmit = () => {
    if (item && brand) {
      navigation.navigate('GroceryLocation', {item, brand});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Which grocery item to locate?"
        value={item}
        onChangeText={setItem}
        style={styles.input}
      />
      <TextInput
        label="Which brand of that category?"
        value={brand}
        onChangeText={setBrand}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        {/* Find Location */}
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
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default GroceryNavigatorScreen;
