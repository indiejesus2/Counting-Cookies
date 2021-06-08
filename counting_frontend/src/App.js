import React, { useState } from 'react';
import LoginContainer from './containers/LoginContainer';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }


function App() {
  // if(!token) {
  //   return <LoginContainer setToken={setToken} />
  // }
    
  return (
      <LoginContainer />
    )
}

export default App;
