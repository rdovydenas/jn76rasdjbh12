import { View, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';

import Form from '../../forms';
import CloseButton from '../../components/Button/CloseButton';

const CloseIcon = require('../../icons/close.png');

const LandingModal = ({ isModalOpen, modalType, onClose, navigation }: any) => {
  return (
    <Modal animationType="slide" visible={isModalOpen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F2F5FF',
          }}
        >
          <CloseButton icon={CloseIcon} onClose={onClose} />
          <Form
            onClose={onClose}
            navigation={navigation}
            modalType={modalType}
            defaultValues={
              modalType !== 'Login'
                ? {
                    email: '',
                    name: '',
                    surname: '',
                    password: '',
                    confirmPassword: '',
                    referralCode: '',
                  }
                : { email: '', password: '' }
            }
          />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LandingModal;
