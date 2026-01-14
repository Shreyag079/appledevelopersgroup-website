# MongoDB Quick Setup (5 Minutes) ⚡

## Fastest Way: MongoDB Atlas (Cloud)

### 1. Sign Up
- Go to: https://www.mongodb.com/cloud/atlas
- Click "Try Free" → Create account

### 2. Create Cluster
- Choose **M0 FREE**
- Select region → Click **"Create"**

### 3. Create User
- Username: `adgadmin` (or any name)
- Password: Click "Autogenerate" → **SAVE IT!**
- Click **"Create User"**

### 4. Allow Network Access
- Click **"Add IP Address"**
- Click **"Allow Access from Anywhere"** (for development)
- Click **"Confirm"**

### 5. Get Connection String
- Click **"Connect"** → **"Connect your application"**
- Copy the connection string
- Replace `<username>` and `<password>` with your credentials
- Add database name: `adg-club` before the `?`

Example:
```
mongodb+srv://adgadmin:MyPassword123@cluster0.xxxxx.mongodb.net/adg-club?retryWrites=true&w=majority
```

### 6. Create .env File
```bash
cd backend
touch .env
```

Add to `.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://adgadmin:MyPassword123@cluster0.xxxxx.mongodb.net/adg-club?retryWrites=true&w=majority
```

### 7. Test
```bash
npm run server
```

Look for: `✅ Connected to MongoDB`

---

## Need More Details?
See [MONGODB_SETUP.md](./MONGODB_SETUP.md) for complete guide with troubleshooting.

