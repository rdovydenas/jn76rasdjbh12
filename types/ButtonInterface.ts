import { ImageSourcePropType } from 'react-native';

export interface ButtonInterface {
  text: string;
  bgColor: string;
  onPress(value: string): void;
}

export interface FormSubmitInterface {
  text: string;
  onSubmit(data: any): any;
  bgColor: string;
  handleSubmit: any;
}

export interface CloseButtonInterface {
  icon: ImageSourcePropType;
  onClose: VoidFunction;
}
