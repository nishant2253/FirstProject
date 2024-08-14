// src/screens/HomeScreen.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
//assets\walmart-background.jpg
const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/walmart-background.jpg')}
      style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Stock Smart</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('BreadStock')}>
            <Icon name="bread-slice" size={40} color="#0071ce" />
            <Text style={styles.iconText}>Bread</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, styles.disabled]}>
            <Icon name="grain" size={40} color="#b3b3b3" />
            <Text style={styles.disabledText}>Pulses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, styles.disabled]}>
            <Icon name="bottle-tonic" size={40} color="#b3b3b3" />
            <Text style={styles.disabledText}>Oil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, styles.disabled]}>
            <Icon name="barley" size={40} color="#b3b3b3" />
            <Text style={styles.disabledText}>Wheat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0071ce',
    textAlign: 'center',
    marginVertical: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    width: '40%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconText: {
    marginTop: 10,
    color: '#0071ce',
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    marginTop: 10,
    color: '#b3b3b3',
    fontWeight: 'bold',
  },
  // ... (styles remain the same as in the previous version)
});

export default HomeScreen;
