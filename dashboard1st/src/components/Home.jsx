import { useState,useEffect } from "react";
import TopBar from "./TopBar"
import Dashboard from "./Dashboard"
import axios from "axios"

function Home() {
     const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3002/me", { withCredentials: true });
         console.log("ME API RESPONSE 👉", res.message);
        if (res.data.success) setUser(res.data.user);
      } catch (err){
         console.log("ME API Error RESPONSE 👉", err.message);
      }
      finally { setLoading(false); }
    };
    fetchUser();

  },
   []); 
 if (loading) return <p>Loading...</p>;

    return ( 
        <div>
            <TopBar user={user} setUser={setUser} />
            <Dashboard user={user}/>
        </div>
     );
}

export default Home;