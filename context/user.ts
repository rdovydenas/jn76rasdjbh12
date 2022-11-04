import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type UserContextInterface = {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
};

export const UserContext = createContext<UserContextInterface>({
  username: '',
  setUsername: () => '',
});

export const useUserContext = () => useContext(UserContext);
