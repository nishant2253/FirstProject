import React from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import FoodIcon from '../components/FoodIcon';
import {Surface} from 'react-native-paper';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <Surface style={styles.container}>
      <FoodIcon
        name="Stock Assistant"
        icon="store"
        onPress={() => navigation.navigate('StockAssistant')}
      />
      <FoodIcon
        name="Grocery Compare"
        icon="compare"
        onPress={() => navigation.navigate('GroceryCompare')}
      />
      {/* <FoodIcon
        name="Bread"
        icon="bread-slice"
        onPress={() => navigation.navigate('BreadStock')}
      />
      <FoodIcon name="Pulses" icon="food-variant" onPress={() => {}} />
      <FoodIcon name="Oil" icon="oil" onPress={() => {}} />
      <FoodIcon name="Wheat" icon="grain" onPress={() => {}} /> */}
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
});

export default HomeScreen;
