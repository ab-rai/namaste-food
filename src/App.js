import './App.css';
// import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';

import {Outlet} from 'react-router-dom';
function App() {
  return (
    <div className="m-1">
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
    </div>
  );
}

export default App;
