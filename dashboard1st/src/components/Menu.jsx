import React, { useState,useEffect } from "react";

import { Link,useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";



const Menu =  ({user,setUser}) => {
 const [selectedMenu , setSelectedMenu]=useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);
  const navigate=useNavigate();



  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  }
  const handleProfileClick=(index)=>{
    setIsProfileDropdownOpen(true);
  }

  const menuClass="menu";
  const activeMenuClass="menu selected";



  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul style={{paddingTop:"30px",color:"white"}}>
          <li>
            <Link style={{textDecoration:"none",color:"black"}} to="/" onClick={()=>handleMenuClick(0)} >
             <p  className={selectedMenu==0? activeMenuClass:menuClass}>
                Dashboard
              </p>
            </Link>
              
           
          </li>
            <li>
            <Link style={{textDecoration:"none",color:"black"}} to="/orders" onClick={()=>handleMenuClick(1)} >
             <p  className={selectedMenu==1? activeMenuClass:menuClass}>
                Orders
              </p>
            </Link>
              
           
          </li>
            <li>
            <Link style={{textDecoration:"none",color:"black"}} to="/holdings" onClick={()=>handleMenuClick(2)} >
             <p  className={selectedMenu==2? activeMenuClass:menuClass}>
               Holdings
              </p>
            </Link>
              
           
          </li>
           <li>
            <Link style={{textDecoration:"none",color:"black"}} to="/positions" onClick={()=>handleMenuClick(3)} >
             <p  className={selectedMenu==3? activeMenuClass:menuClass}>
                Positions
              </p>
            </Link>
              
           
          </li>
           <li>
            <Link style={{textDecoration:"none",color:"black"}} to="/funds" onClick={()=>handleMenuClick(4)} >
             <p  className={selectedMenu==4? activeMenuClass:menuClass}>
                Funds
              </p>
            </Link>
              
           
          </li>
          <li>
            <Link style={{textDecoration:"none",color:"black"}} to="/apps" onClick={()=>handleMenuClick(5)} >
             <p  className={selectedMenu==5? activeMenuClass: menuClass}>
               Apps
              </p>
            </Link>
              
           
          </li>

         {!user && ( 
          <>
           <li>
        <Button variant="contained" size="small" onClick={()=>navigate("/login")}>Login</Button>
      </li>
           <li>
        <Button variant="contained" size="small" onClick={()=>navigate("/signup")}>SignUp</Button>
      </li>
      </>
      )}
      {user && (
         <li>
        <Button variant="contained" size="small" onClick={async()=>{
          await axios.post("http://localhost:3002/logout",{},{
            withCredentials:true,
          })
          setUser(null);
          navigate("/");

        }}>Logout</Button>
      </li>
      )}
        </ul>
        <hr />
     
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{user?user.username[0].toUpperCase():"U"}</div>
          <p className="username">{user?.username||"Guest"}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;