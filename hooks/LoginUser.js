import { isEqual } from 'lodash';

const users = [
  {
    email: 'Rolandas@rolandas.lt',
    password: 'Rolandas123',
  },
  {
    email: 'bebras@rolandas.lt',
    password: 'bebrassss',
  },
  {
    email: 'antansas@rolandas.lt',
    password: 'antansas',
  },
];

export default LoginUser = (data, navigation) => {
  users.map((user) => {
    if (isEqual(user, data)) {
      navigation.navigate('Dashboard', { user: user });
    }
  });
};
