import React, {useContext, useEffect, useState} from 'react'
import './navbaar.css';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from '../ContextProvider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Rightheader from './Rightheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Navbaar() {
   
   const {account, setAccount} = useContext(LoginContext);
  // console.log(account);
const history = useNavigate();

  //Code from meterial ui for menu and menuitem
const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

 
//Searching process
const [text, setText] = useState("");
console.log(text);
// only for search


// const dispatch = useDispatch();

// useEffect(() => {
//     dispatch(getProducts());
// }, [dispatch])


// const [open, setOpen] = useState(false);
const [liopen, setLiopen] = useState(true);
const { products } = useSelector(state => state.getproductsdata);






  const [dropen, setDropen] = useState(false);

  const getdetailsvaliduser = async () => {
    const res = await fetch("/validuser", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    const data = await res.json();
     console.log(data);

    if (res.status !== 201) {
        console.log("first login");
    } else {
        console.log("cart add ho gya hain");
        setAccount(data);
    }
 }

//For Drawer in Left side
 const handleopen = ()=>{
  setDropen(true);
 }

 const handleClosedr = () => {
  setDropen(false)
}


const logoutuser = async () => {
  const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      credentials: "include"
  });

  const data2 = await res2.json();
   console.log(data2);

  if (res2.status !== 201) {
      console.log("error");
  } else {
      console.log("Data invalid");
      // alert("LOGOUT")
      toast.success("User Logout 😃!", {
        position: "top-center"
    });
      history("/");
      setAccount(false);
     
  }
}

//iteams likh sakte
const getText = (text) => {
  setText(text)
   setLiopen(false)
}

useEffect(() => {
  getdetailsvaliduser();
},[]);
  
  return (
<header>
  <nav>


  <div className='left'>

  <IconButton className='hamburgur' onClick={handleopen}>
            <MenuIcon style={{color:'#fff'}} />
          </IconButton>
          <Drawer open={dropen} onClose={handleClosedr}>
                  <Rightheader Logclose={handleClosedr} userlog ={logoutuser}/>
          </Drawer>



    <div className='navlogo'>
    <NavLink to='/'><img src="./amazon_PNG25.png" alt="logo" /></NavLink>
    </div>
    <div className='nav_searchbaar'>
      <input type='text' name='' 
       onChange={(e) => getText(e.target.value)}
      placeholder='Search your products' id=''/>
      <div className='search_icon'>
<SearchIcon  id='search'/>
      </div>

      {/* SEARCH FILTER */}

      {
                            text &&
                            <List className="extrasearch" hidden={liopen}>
                                {
                                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                        <ListItem>
                                            <NavLink to={`/getproductsone/${product.id}`} onClick={() => setLiopen(true)}>
                                                {product.title.longTitle}
                                            </NavLink>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        }           

    </div>
  
  </div>
  <div className='right'>
    <div className='nav_btn'>
     <NavLink to='/login'>Signin</NavLink>

    </div>
    <div className='cart_btn'>
{
  account ? <NavLink to='/buynow'>

       <Badge badgeContent= {account.carts.length} color="primary">
             <ShoppingCartIcon id='icon'/>
       </Badge>
    
      </NavLink> : <NavLink to='/login'>

            <Badge badgeContent= {0} color="primary">
                  <ShoppingCartIcon id='icon'/>
            </Badge>
  
      </NavLink>
}


<p>Cart</p>
    </div>
{
  account ? <Avatar className='avtar2'
  
  id="basic-button"
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick} >
  {account.fname[0].toUpperCase()}
  </Avatar> :
  <Avatar className='avtar'

  id="basic-button"
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}>

  </Avatar>
}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={handleClose}>My account</MenuItem>
        {
          account ? <MenuItem onClick={() => { handleClose(); logoutuser(); }}  style={{ margin: 10 }}><LogoutIcon style={{fontSize:16,marginRight:3}}/>Logout</MenuItem> : ""
        }
        
      </Menu>  
      <ToastContainer />
  </div>
  </nav>
  </header>
  )
}

export default Navbaar
