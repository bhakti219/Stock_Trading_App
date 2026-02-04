**🚀 Finedge – Stock Trading Platform**
Finedge is a** full-stack stock trading web application** inspired by real-world trading platforms. It includes a secure authentication system, a feature-rich trading dashboard, and a separate marketing/landing website, following industry-level architecture and best practices.

**⭐ Highlights 
✅ JWT Authentication with HTTP-Only Cookies
✅ Protected Routes & Secure User Sessions
✅ Modular MongoDB Schemas (User, Orders, Holdings, etc.)
✅ Real Trading Dashboard with Charts & Portfolio Data
✅ Separate Landing Website + Trading App
✅ Scalable, Production-Ready Folder Structure**

**🧠 What This Project Demonstrates**
How real fintech apps secure user data
How JWT tokens are generated, stored, decoded, and verified
Proper frontend–backend separation
Clean React component architecture
Debugging and fixing common auth & React mistakes

**🏗️ Project Architecture**
Finedge/
│
├── Backend/
│   ├── schemas/               # MongoDB Schemas
│   │   ├── UserSchema.js
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   ├── PositionsSchema.js
│   │   └── WatchListSchema.js
│   │
│   ├── utils/
│   │   └── SecretToken.js     # JWT creation & verification
│   │
│   ├── controllers/           # Auth & data logic
│   └── package.json
│
├── frontend/                  # Landing Website
│   ├── src/
│   │   ├── Landing_page/
│   │   │   ├── Home/
│   │   │   ├── Products/
│   │   │   ├── Pricing/
│   │   │   └── Support/
│   │   │
│   │   ├── Navbar.jsx
│   │   ├── Footer1.jsx
│   │   ├── OpenAccount.jsx
│   │   └── NotFound.jsx
│   └── package.json
│
├── dashboard1st/               # Trading Dashboard
│   ├── src/components/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Orders.jsx
│   │   ├── Holdings.jsx
│   │   ├── Positions.jsx
│   │   ├── WatchList.jsx
│   │   └── TopBar.jsx
│   │
│   ├── GeneralContext.jsx     # Global state management
│   └── package.json


**🔐 Authentication & Security (Core Feature)**
**🔹 JWT-Based Authentication**
JWT token generated during **signup & login**
Token stored in** HTTP-only cookies**
Prevents **XSS attacks** (JavaScript cannot access token)

**🔹 User Verification Flow**
User logs in / signs up
Server creates JWT using user _id
Token stored in cookie
Token is decoded & verified on protected routes
User data (like username) is fetched securely
⚠️ Frontend never directly accesses the token

**📊 Trading Dashboard Features**
🔐 Protected dashboard (login required)
📈 Holdings & Positions tracking
🧾 Order management (Buy / Sell)
👁 Watchlist functionality
💰 Funds summary
📊 Charts for portfolio visualization
🌐 Global state handled using React Context API

**🌐 Landing Website Features**
Product overview pages
Pricing information
Signup & onboarding flow
Support & navigation pages
Clean routing with fallback (NotFound)
Reusable UI components

**🛠 Tech Stack**

**Frontend**
React
Vite
CSS
Context API

**Backend**
Node.js
Express.js
MongoDB (Mongoose)
Security
JWT
HTTP-Only Cookies
bcrypt for password hashing

**🧪 Key Learnings & Mistakes Solved**
❌ Calling hooks incorrectly → fixed Invalid Hook Call
❌ Token misuse → learned decode vs verify
❌ Client-side token access → fixed with HTTP-only cookies
❌ Auth state issues → solved using proper backend verification

**✅ Understood real-world auth flow end-to-end**

**🚀 Future Improvements**
Role-based access control
Refresh tokens
Live stock prices integration
Deployment with environment-based configs


**👩‍💻 Author
Bhakti Pandhare
Computer Engineering Student | Full-Stack Developer
Passionate about building secure, scalable web applications**
