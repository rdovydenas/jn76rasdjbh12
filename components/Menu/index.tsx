import { Image, TouchableOpacity } from 'react-native';
import React from 'react';

const CloseIcon = require('../../icons/close.png');

const Menu = () => {
  return (
    <TouchableOpacity
      style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        style={{ height: 40, width: 40, tintColor: 'white' }}
        source={CloseIcon}
      />
    </TouchableOpacity>
  );
};

export default Menu;
