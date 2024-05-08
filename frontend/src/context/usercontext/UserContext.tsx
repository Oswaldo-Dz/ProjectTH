import React, { createContext, useContext, useState } from 'react';

type User = {
    id: number;
  name: string;
  email: string;
  password: string;
};

type UserContextValue = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

class UserContextValueIterator implements Iterable<UserContextValue> {
  private readonly userContextValue: UserContextValue;
  private index: number = 0;

  constructor(userContextValue: UserContextValue) {
    this.userContextValue = userContextValue;
  }

  [Symbol.iterator](): Iterator<UserContextValue> {
    return {
      next: () => {
        const result = {
          value: this.userContextValue,
          done: this.index++ >= 1,
        };

        return result;
      },
    };
  }
}

const UserContext = createContext<UserContextValue>({
  user: {
      name: '', email: '',
      id: 0,
      password: ''
  },
  setUser: () => {},
});

interface ProviderProps{
    children: React.ReactNode;
}
export function UserProvider({ children }:ProviderProps){
  const [user, setUser] = useState<User>({id:0, name: '', email:'', password:''});
const userContextValue: UserContextValue = {
    user, setUser,
};
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
    const context = useContext(UserContext);
  
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
  
    const { user, setUser } = context;
    const UserContextValueIteratorInstance = new UserContextValueIterator(context);

    return { user, setUser, UserContextValueIterator: UserContextValueIteratorInstance };
  };