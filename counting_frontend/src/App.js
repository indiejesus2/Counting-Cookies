import React, { useState } from 'react';
import LoginContainer from './containers/LoginContainer';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }


function App() {

  const [session, setSession] = useState(null)
  // if(!token) {
  //   return <LoginContainer setToken={setToken} />
  // }
  // debugger
  return (
      <LoginContainer setSession={setSession}/>
    )
}

export default App;
