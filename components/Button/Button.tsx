import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonInterface } from '../../types/ButtonInterface';

const Button = ({ text, bgColor, onPress }: ButtonInterface) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        width: 275,
        padding: 15,
        borderRadius: 8,
        marginTop: 15,
      }}
      onPress={() => onPress(text)}
    >
      <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
