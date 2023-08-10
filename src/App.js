import { useEffect, useState } from 'react';
import Navbaar from './components/header/Navbaar';
// import Newnav from './components/NewnavBar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import SignIn from './components/Signup_signin/SignIn';
import SignUp from './components/Signup_signin/SignUp';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import { Routes,Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import "./App.css";



function App() {

  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])



  return (
    <>
    {
      data ? (
        <>
        
        <Navbaar/>
    {/* <Newnav/> */}
    <Routes>

      <Route path='/' element ={<Maincomp/>}></Route>
      <Route path='/login' element ={<SignIn/>}></Route>
      <Route path='/register' element ={<SignUp/>}></Route>
      <Route path='/getproductsone/:id' element ={<Cart/>}></Route>
      <Route path='/buynow' element ={<Buynow/>}></Route>
      
    </Routes>
    
    <Footer/>
        
        </>
      ) : (
        
          <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>
        
      )
    }
    
    
    
    </>
   
       
  );
}

export default App;
