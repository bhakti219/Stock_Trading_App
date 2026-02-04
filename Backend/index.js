require("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const User = require("./model/UserModel"); 

const {HoldingsModel}=require("./model/HoldingsModel");
const {PositionsModel}=require("./model/PositionsModel");
const {OrdersModel}=require("./model/OrdersModel");
const { Signup,Login } = require("./controller/AuthController");



const app=express();

const PORT=process.env.PORT|| 3002;
const uri=process.env.MONGO_URL;
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());


app.use(cors({
    origin: ["http://localhost:5173"], // change to 3000 if React runs there
    // methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

const verifyToken =(req,res,next)=>{
  const token=req.cookies.token;
  console.log("COOKIES 👉", req.cookies);
  if(!token){
    return res.status(401).json({success:false});
  }
  try{
  const decode=jwt.verify(token,process.env.TOKEN_KEY);
  req.userId=decode.id;
    next();
  }catch(err){
    return res.status(401).json({success:false});
  }
  
  // jwt.verify(token,process.env.TOKEN_KEY,(err,decoded)=>{
    // if(err) return res.json({success:false});
    // req.userId=decode.id;
    // next();
  }









// app.get("/addHoldings",async(req,res)=>{
//     let tempHoldings=[
//         {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   }, 
//     ]

//  tempHoldings.forEach((item)=>{
//    let newHolding=new HoldingsModel({
//     name: item.name,
//     qty: item.qty,
//     price: item.price,
//     avg:item.avg,
//     net: item.net,
//     day: item.day,
//    })
//    newHolding.save();
//  })
//  res.send("Donne!")
// })

// app.get("/addPositions",async(req,res)=>{
//     let tempPositions=[
//         {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//     ]
//   tempPositions.forEach((item)=>{
//     let newPositions=new PositionsModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     })
//     newPositions.save();
//   })
//  res.send("All Positions saved!:)")
// })

app.post("/signup", Signup);
app.post("/login", Login);
// app.post('/check-auth',(req, res) => {
//   const token = req.cookies.token
//   if (!token) {
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await User.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })
// })
app.get('/allHoldings',async(req,res)=>{
   let allHoldings=await HoldingsModel.find({});
   res.json(allHoldings);
})
app.get('/allPositions',async(req,res)=>{
   let allPositions=await PositionsModel.find({});
   res.json(allPositions);
})

app.post("/newOrder",async(req,res)=>{
   
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
     })
     console.log(newOrder);
     await newOrder.save();
     res.status(201).json({ message: "User logged in successfully", success: true });
    })


//get the username
app.get('/me',verifyToken,async(req,res)=>{
  console.log("/me triggered")
  try{
    const user=await User.findById(req.userId).select("username email");
    if(!user){
      return res.json({success:false});

    }
  res.json({
  success: true,
  user: {
    id: user._id,
    username: user.username,
  },
})
  }catch(err){
    res.json({success:false});
  }
});

//LogOut Route
app.post("/logout",(req,res)=>{
  res.clearCookie("token",{
      httpOnly: true,
  sameSite: "none",
  secure: false, 
  });
  res.json({success:true});
})


mongoose
  .connect(uri)
  .then(() => {
    console.log("DB Connected!");
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("DB connection error:", err);
  });
