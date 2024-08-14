// src/components/FoodIcon.tsx
import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableRipple, Surface, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface FoodIconProps {
  name: string;
  icon: string;
  onPress: () => void;
}

const FoodIcon: React.FC<FoodIconProps> = ({name, icon, onPress}) => {
  return (
    <TouchableRipple onPress={onPress} style={styles.touchable}>
      <Surface style={styles.surface}>
        <Icon name={icon} size={40} color="#0071dc" />
        <Text style={styles.name}>{name}</Text>
      </Surface>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 12,
    overflow: 'hidden',
    margin: 8,
  },
  surface: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FoodIcon;
