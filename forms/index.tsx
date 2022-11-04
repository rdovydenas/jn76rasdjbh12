import {
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginUser from '../hooks/LoginUser';

import { RegisterSchema, LoginSchema } from '../schemas/schemas';

import SubmitButton from '../components/Button/SubmitButton';
import Capitalize from '../hooks/Capitalize';

const Form = ({ defaultValues, modalType, navigation, onClose }: any) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(modalType !== 'Login' ? RegisterSchema : LoginSchema),
  });

  const inputKeys = control._defaultValues;

  const onSubmit = (data: any) => {
    LoginUser(data, navigation);
    onClose();
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={0}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Object.keys(inputKeys).map((defaultValue) => (
          <View key={defaultValue}>
            <Text style={{ marginBottom: 5, fontWeight: '600' }}>
              {Capitalize(defaultValue.split(/(?=[A-Z])/).join(' '))}
            </Text>
            <View
              style={{
                backgroundColor: '#DFB2F4',
                width: 275,
                borderRadius: 8,
                marginBottom: 15,
              }}
            >
              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => (
                  <>
                    <TextInput
                      keyboardType="default"
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      style={{ padding: 15, color: 'white', fontWeight: '700' }}
                      secureTextEntry={
                        defaultValue.includes('Password') ||
                        defaultValue.includes('password')
                          ? true
                          : false
                      }
                    />
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: -20,
                        right: 0,
                        color: 'red',
                      }}
                    >
                      {error?.message}
                    </Text>
                  </>
                )}
                name={defaultValue}
              />
            </View>
          </View>
        ))}
        <SubmitButton
          text={modalType !== 'Login' ? 'Submit' : modalType}
          bgColor="#55D6C2"
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Form;
