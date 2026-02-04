import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login =()=> {
      const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault(); // ⭐ prevent page reload
    console.log("🚀 handleLogin started");

    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await axios.post(
        "http://localhost:3002/login",
        { email, password },
        { withCredentials: true }
      );

     

      setSuccessMsg(res.data.message);
       console.log("LOGIN RESPONSE 👉", res.data);

      if (res.data.success) {
        navigate("/");
      }
      else{
        alert(res.data.message);
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Card variant="outlined" sx={{ width: 300, margin: "auto", marginTop: 10 }}>
      <CardContent>
        {/* ✅ FORM START */}
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"   // ⭐ important
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        {/* ✅ FORM END */}
          {errorMsg && (
          <Alert severity="error" sx={{ mt: 2,mb:4,ml:4 }}>
            {errorMsg}
          </Alert>
        )}

        {successMsg && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {successMsg}
          </Alert>
        )}

       
      </CardContent>
    </Card>
   
  );
};

export default Login;
