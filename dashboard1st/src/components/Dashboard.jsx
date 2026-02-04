


import {useEffect,useState} from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";
import axios from "axios";

const Dashboard = ({user}) => {

    // useEffect(()=>{
    //   const checkAuth=async()=>{
    //     try{
    //       const res=await axios.get("http://localhost:3002/me",{
    //         withCredentials:true,
    //       });
    //       if(res.data.success){
    //         setUser(res.data.user);
    //       }
    //       else{
    //         setUser(null)
    //       }
    //     }catch{
    //       setUser(null);
    //     }finally{
    //       setLoading(false);
    //     }
    //   };
    //   checkAuth();
    // },[]);

    // if(loading) return <p>Loading.....</p>


  return (
    <GeneralContextProvider>
      <div className="dashboard-container">
        <WatchList />

        <div className="content">
          {!user && (
            <p style={{ opacity: 0.6 }}>
          Please login to view your data.
        </p>
          )}
         {user && ( <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
            
          </Routes>)}
        </div>
      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;
