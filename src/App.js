import React, { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import qs from 'qs'
import LoginContainer from './containers/LoginContainer';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }


function App() {

  // const [userId, setUserId] = useState(0)

  // const history = createBrowserHistory();

  // useEffect(() => {
  //   const filterParams = history.location.search.substr(1);
  //   const filtersFromParams = qs.parse(filterParams)
  //   if (filtersFromParams.userId) {
  //     setUserId(Number(filtersFromParams.userId))
  //   }
  // }, []);

  // useEffect(() => {
  //   history.push(`?userId=${userId}`);
  // }, [userId])

  // if(!token) {
  //   return <LoginContainer setToken={setToken} />
  // }
  // debugger
  return (
      
      <LoginContainer />
    )
}

export default App;


