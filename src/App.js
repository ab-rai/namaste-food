import { useEffect, useState } from 'react';
import './App.css';
// import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';

import {Outlet} from 'react-router-dom';
import appStore from './utils/appStore';
function App() {
  const [userName,setUserName] = useState("Default");
  useEffect(()=>{
    setUserName('Akshay Saini');
  },[])
  return (
    <Provider store = {appStore}>
      <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="m-1">
          <Header></Header>
          <Outlet/>
          <Footer></Footer>
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
