# Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm run install-all
```

### Step 2: Set Up MongoDB

**Option A: Local MongoDB**
- Make sure MongoDB is installed and running
- No additional setup needed

**Option B: MongoDB Atlas (Cloud - Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Create `backend/.env` file:
   ```env
   PORT=5000
   MONGODB_URI=your_connection_string_here
   ```

### Step 3: Start Development Servers
```bash
npm run dev
```

This starts:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Step 4: Customize Your Club

1. **Replace Logo**: 
   - Place your logo at `frontend/public/logo.svg` (or logo.png)
   - Update image src in components if using different format

2. **Update Club Name**:
   - Search and replace "ADG" with your club name in:
     - `frontend/src/components/Header.jsx`
     - `frontend/src/components/Hero.jsx`
     - `frontend/src/components/Footer.jsx`

3. **Update Content**:
   - Edit events in `frontend/src/components/Events.jsx`
   - Update stats in `frontend/src/components/About.jsx`
   - Change contact info in `frontend/src/components/Contact.jsx`

4. **Change Colors**:
   - Edit `primary` colors in `frontend/tailwind.config.js`

## 📝 Testing the Feedback Form

1. Make sure backend is running
2. Fill out the contact form
3. Check MongoDB to see submitted feedback
4. Or use: `GET http://localhost:5000/api/feedback`

## 🎨 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations with Framer Motion
✅ Professional gradient design
✅ Feedback form with backend integration
✅ Event showcase section
✅ About section with stats
✅ Modern navigation with smooth scrolling

## 🐛 Troubleshooting

**Port already in use?**
- Change ports in `vite.config.js` (frontend) and `server.js` (backend)

**MongoDB connection error?**
- Check your connection string
- Make sure MongoDB is running (if local)
- Check firewall settings (if Atlas)

**Dependencies not installing?**
- Try deleting `node_modules` and `package-lock.json`
- Run `npm install` again

---

Happy coding! 🎉

