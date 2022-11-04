import { Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { CloseButtonInterface } from '../../types/ButtonInterface';

const CloseButton = ({ icon, onClose }: CloseButtonInterface) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: 40,
        right: 20,
      }}
      onPress={() => onClose()}
    >
      <Image
        style={{
          height: 30,
          width: 30,
        }}
        source={icon}
      />
    </TouchableOpacity>
  );
};

export default CloseButton;
