import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

type GroceryLocationScreenRouteProp = RouteProp<
  RootStackParamList,
  'GroceryLocation'
>;

type Props = {
  route: GroceryLocationScreenRouteProp;
};

const GroceryLocationScreen: React.FC<Props> = ({route}) => {
  const {item, brand} = route.params;

  // Generate random location details
  const latitude = (Math.random() * (90 - -90) + -90).toFixed(6);
  const longitude = (Math.random() * (180 - -180) + -180).toFixed(6);
  const shelfNumber = Math.floor(Math.random() * 100) + 1;
  const areaNumber = Math.floor(Math.random() * 10) + 1;
  const floor = Math.floor(Math.random() * 3) + 1;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Location for {brand} {item}
      </Text>
      Harvest bread stock
      <Image
        source={require('../../assets/store-map-placeholder.png')} // Update this path to your actual image
        style={styles.mapImage}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          Coordinates: {latitude}, {longitude}
        </Text>
        <Text style={styles.info}>Shelf Number: {shelfNumber}</Text>
        <Text style={styles.info}>Area Number: {areaNumber}</Text>
        <Text style={styles.info}>Floor: {floor}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapImage: {
    width: Dimensions.get('window').width - 40, // Full width minus padding
    height: 200, // Adjust this value as needed
    marginBottom: 20,
  },
  infoContainer: {
    alignSelf: 'stretch',
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default GroceryLocationScreen;
