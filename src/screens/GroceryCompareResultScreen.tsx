import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Title, Paragraph, Card} from 'react-native-paper';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

type GroceryCompareResultScreenRouteProp = RouteProp<
  RootStackParamList,
  'GroceryCompareResult'
>;

type Props = {
  route: GroceryCompareResultScreenRouteProp;
};

const GroceryCompareResultScreen: React.FC<Props> = ({route}) => {
  const {item, type} = route.params;

  // This is where you would normally fetch or calculate the comparison data
  // For this example, we'll use placeholder data
  const comparisonData = [
    {
      brand: 'Britannia',
      price: '$2.99',
      weight: '400g',
      ingredients: 'Whole Wheat Flour, Water, Yeast, Salt',
    },
    {
      brand: 'Harvest',
      price: '$3.49',
      weight: '450g',
      ingredients: 'Whole Wheat Flour, Water, Yeast, Salt, Sugar',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>{`Comparing ${type} ${item}`}</Title>
      {comparisonData.map((brand, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Title>{brand.brand}</Title>
            <Paragraph>Price: {brand.price}</Paragraph>
            <Paragraph>Weight: {brand.weight}</Paragraph>
            <Paragraph>Ingredients: {brand.ingredients}</Paragraph>
          </Card.Content>
        </Card>
      ))}
      <Paragraph style={styles.note}>
        Note: Key differences would be highlighted here. This space is left for
        manual addition of specific comparisons.
      </Paragraph>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
  },
  note: {
    fontStyle: 'italic',
    marginTop: 20,
  },
});

export default GroceryCompareResultScreen;
