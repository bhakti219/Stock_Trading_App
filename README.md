# Finedge

## ⭐ Highlights
- ✅ JWT Authentication with HTTP-Only Cookies
- ✅ Protected Routes & Secure User Sessions
- ✅ Modular MongoDB Schemas (User, Orders, Holdings, etc.)
- ✅ Trading Dashboard with Charts & Portfolio Data
- ✅ Separate Landing Website + Trading App
- ✅ Scalable, Production-Style Folder Structure

---

## 🧠 What This Project Demonstrates
- How real fintech apps secure user data
- How JWT tokens are generated, stored, decoded, and verified
- Clean frontend–backend separation
- Debugging common authentication & React issues

---

## 🏗 Project Architecture

Finedge/
├── Backend/
│ ├── schemas/
│ │ ├── UserSchema.js
│ │ ├── OrdersSchema.js
│ │ ├── HoldingsSchema.js
│ │ ├── PositionsSchema.js
│ │ └── WatchListSchema.js
│ ├── utils/
│ │ └── SecretToken.js
│ └── package.json
│
├── frontend/
│ ├── Navbar.jsx
│ ├── Footer1.jsx
│ └── Landing pages
│
├── dashboard1st/
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── Dashboard.jsx
│ ├── Orders.jsx
│ ├── Holdings.jsx
│ ├── Positions.jsx
│ ├── WatchList.jsx
│ └── TopBar.jsx



---

## 🔐 Authentication & Security
- JWT-based authentication
- Token generated on signup/login
- Token stored in HTTP-only cookies
- Frontend never accesses token directly
- Backend verifies token before serving data

---

## 👩‍💻 Author
**Bhakti Pandhare  
Computer Engineering Student  
Full-Stack Development Enthusiast**
