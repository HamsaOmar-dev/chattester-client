import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from './firebase';
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import './App.css';


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <Chat /> : <SignIn />}
    </div>
  );
}



export default App;
