import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return function cleanUp() {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      // console.log('user signed out');
    });
  };

  return (
    <AuthContext.Provider value={authUser}>
      {authUser ? (
        <button
          type="button"
          placeholder="signed out"
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={userSignOut}
        >
          signout
        </button>
      ) : (
        ''
      )}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
