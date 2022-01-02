import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ChatEngine } from "react-chat-engine";
import firebase from "firebase/compat/app";


import NavBar from './NavBar';

function Chat() {

  const [person, setPerson] = useState({})
  
  function getUsers() {
    const user = firebase.auth().currentUser;
    user.providerData.map((userInfo) => {
      const userData = {
        name: userInfo.displayName,
        email: userInfo.email,
        uid: userInfo.uid
      }

      setPerson(userData);

      axios.post('http://localhost:5000/', userData)
        .then((res)=> console.log(res.data))
        .catch((err)=> console.log(err));

      axios
        .get("https://api.chatengine.io/users/83573/", {
          headers: { "PRIVATE-KEY": "4711eb38-221f-463e-8c0b-30221618476d" },
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

      // axios
      //   .post("https://api.chatengine.io/users/", {
      //     username: userInfo.displayName,
      //     email: userInfo.email,
      //     secret: userInfo.uid,
      //   }, {
      //     headers: { 'PRIVATE-KEY': '4711eb38-221f-463e-8c0b-30221618476d' } 
      //   })
      //   .then((res) => console.log(res.data))
      //   .catch((err) => console.log(err));

    });
  }

  useEffect(()=> {
    getUsers();
  }, []);
  
  return (
    <div>
      <NavBar />
      <ChatEngine 
      height="100vh" 
      projectID="e237cbee-f80a-4d5e-9e30-e981515948cb" 
      userName='hamsa' 
      userSecret='hamsaomar21' />
    </div>
  );
}

export default Chat;