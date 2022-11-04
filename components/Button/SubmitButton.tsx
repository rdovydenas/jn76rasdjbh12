import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FormSubmitInterface } from '../../types/ButtonInterface';

const SubmitButton = ({
  text,
  onSubmit,
  bgColor,
  handleSubmit,
}: FormSubmitInterface) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        width: 275,
        padding: 15,
        borderRadius: 8,
        marginTop: 15,
      }}
      onPress={handleSubmit(onSubmit)}
    >
      <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
