import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [authUser, setAuthUser] = useState(null);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log('uid', user.uid);
        setUserId(user.uid);
      } else {
        console.log('user logged out in context');
        setAuthUser(null);
      }
    });

    return function cleanUp() {
      listen();
    };
  }, []);

  const userSignOut = () => {
    console.log('user signed outtttt');
    signOut(auth).then(() => {
      navigate('/');
      console.log('user signed out');
    });
  };

  // Performance boost
  // const value = useMemo(() => ({
  //   authUser, userSignOut
  // }), [authUser, userSignOut]);

  // AuthProvider is just a function that returns the context provider as AuthContext.Provider
  // {children} represents anything wrapped in the component Auth Provider
  // whatever is passed in the value is what can be consumed by other components
  // the value is initialized as null assigned to AuthContext

  return (
    <AuthContext.Provider
      value={{ user: authUser, onSignOut: userSignOut, uid: userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
