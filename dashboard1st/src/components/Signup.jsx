import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp =()=> {
   const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async (e) => {
     e.preventDefault();
     
         try {
      const res = await axios.post(
        "http://localhost:3002/signup",
        { email, password ,username },
        { withCredentials: true }
      );
      if(res.data.success){
        navigate("/");
      }
      else{
        alert(res.data.message);
      }
      
    } catch (err) {
      console.error(err);
    }
    
  };

  return (
    <Card variant="outlined" sx={{ width: 300, margin: "auto", marginTop: 10 }}>
      <CardContent>
        <form onSubmit={handleSignup}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button fullWidth variant="contained" type="submit" >
          SignUp
        </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUp;
