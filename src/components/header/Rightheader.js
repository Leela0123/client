import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../ContextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import "./rightheader.css";

function Rightheader( {Logclose,userlog}) {
    const {account, setAccount} = useContext(LoginContext);
    // console.log(account);
  return (
    <>
    <div className='rightheader'>
<div className='right_nav'>
{
  account ? <Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar> :
  <Avatar className='avtar' ></Avatar>
}

{account ? <h3>Hello, {account.fname.toUpperCase()}</h3> : ""}

</div>
<div className='nav_btn' onClick={()=> Logclose()}>
<NavLink to='/'>Home</NavLink>
<NavLink to='/'>Shop by category</NavLink>
<Divider style={{ width: "100%", marginLeft: "-20px"}} />
<NavLink to='/'>Today's Deal</NavLink>
        {
        account ? <NavLink to="/buynow">Your Order</NavLink> : <NavLink to="/login">Your Order</NavLink>
        }


<Divider style={{ width: "100%", marginLeft: "-20px"}} />

<div className="flag">
                    <NavLink to="/" style={{ marginTop: 14 }}>Settings</NavLink>
                    <img src="./india.png" style={{ width: 35, marginLeft: 10 }} />
                </div>

                {
                    account ?
                        <div className="flag">
                            <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                            <h3 onClick={()=>userlog()} style={{ cursor: "pointer", fontWeight: 500 }}>Log Out</h3>
                        </div>
                        : <NavLink to="/login">Sign in</NavLink>
                }


</div>

    </div>
    </>
  )
}

export default Rightheader