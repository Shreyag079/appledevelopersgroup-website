# MongoDB Setup Guide

This guide will help you set up MongoDB for your ADG Technical Club website. You can choose between **Local MongoDB** (runs on your computer) or **MongoDB Atlas** (cloud-based, free tier available).

---

## Option 1: MongoDB Atlas (Cloud - Recommended for Beginners) 🌐

MongoDB Atlas is a cloud database service. It's free to start and doesn't require local installation.

### Step 1: Create MongoDB Atlas Account

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click **"Try Free"** or **"Sign Up"**
3. Fill in your details and create an account
4. Verify your email address

### Step 2: Create a Cluster

1. After logging in, you'll see the **"Deploy a cloud database"** screen
2. Choose **"M0 FREE"** (Free Shared Cluster) - This is perfect for development
3. Select a **Cloud Provider** (AWS, Google Cloud, or Azure)
4. Choose a **Region** closest to you
5. Click **"Create"** (cluster name is optional)

### Step 3: Create Database User

1. In the **"Security Quickstart"** section:
   - Choose **"Username and Password"**
   - Enter a username (e.g., `adgadmin`)
   - Click **"Autogenerate Secure Password"** or create your own
   - **IMPORTANT**: Save this password! You'll need it later.
   - Click **"Create User"**

### Step 4: Configure Network Access

1. In the **"Network Access"** section:
   - Click **"Add IP Address"**
   - For development, click **"Allow Access from Anywhere"** (adds `0.0.0.0/0`)
   - Click **"Confirm"**
   - ⚠️ **Note**: For production, you should restrict this to specific IPs

### Step 5: Get Your Connection String

1. Click **"Connect"** button on your cluster
2. Choose **"Connect your application"**
3. Select **"Node.js"** as the driver
4. Copy the connection string (it looks like this):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your actual credentials
6. Add your database name at the end (before `?`):
   ```
   mongodb+srv://adgadmin:yourpassword@cluster0.xxxxx.mongodb.net/adg-club?retryWrites=true&w=majority
   ```

### Step 6: Configure Your Backend

1. Create a file `backend/.env`:
   ```bash
   cd backend
   touch .env
   ```

2. Add your connection string to `.env`:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://adgadmin:yourpassword@cluster0.xxxxx.mongodb.net/adg-club?retryWrites=true&w=majority
   ```
   **Replace** `yourpassword` and the cluster URL with your actual values!

3. Save the file

### Step 7: Test the Connection

1. Start your backend:
   ```bash
   npm run server
   ```

2. You should see: `✅ Connected to MongoDB`

---

## Option 2: Local MongoDB Installation 💻

If you prefer to run MongoDB on your local machine:

### For macOS:

#### Method 1: Using Homebrew (Recommended)

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install MongoDB**:
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   ```

3. **Start MongoDB**:
   ```bash
   brew services start mongodb-community
   ```

4. **Verify it's running**:
   ```bash
   brew services list
   ```
   You should see `mongodb-community` with status "started"

5. **Test connection**:
   ```bash
   mongosh
   ```
   If it connects, type `exit` to leave

#### Method 2: Using MongoDB Installer

1. Go to [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Select:
   - Version: Latest
   - Platform: macOS
   - Package: TGZ or DMG
3. Download and run the installer
4. Follow the installation wizard
5. MongoDB will be installed in `/usr/local/mongodb`

### For Windows:

1. Go to [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Select:
   - Version: Latest
   - Platform: Windows
   - Package: MSI
3. Download and run the installer
4. Choose **"Complete"** installation
5. Check **"Install MongoDB as a Service"**
6. Click **"Install"**

MongoDB will start automatically as a Windows service.

### For Linux (Ubuntu/Debian):

1. **Import MongoDB GPG key**:
   ```bash
   curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
   ```

2. **Add MongoDB repository**:
   ```bash
   echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
   ```

3. **Update and install**:
   ```bash
   sudo apt-get update
   sudo apt-get install -y mongodb-org
   ```

4. **Start MongoDB**:
   ```bash
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

### Configure Backend for Local MongoDB

1. Create `backend/.env`:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/adg-club
   ```

2. The default local connection string is: `mongodb://localhost:27017/adg-club`

3. Start your backend:
   ```bash
   npm run server
   ```

---

## Troubleshooting 🔧

### MongoDB Atlas Issues:

**"Authentication failed"**
- Double-check your username and password in the connection string
- Make sure you replaced `<username>` and `<password>` with actual values
- Ensure there are no extra spaces in the connection string

**"IP not whitelisted"**
- Go to Network Access in Atlas
- Add your current IP address or use `0.0.0.0/0` for development

**"Connection timeout"**
- Check your internet connection
- Verify the cluster is running (check Atlas dashboard)
- Make sure the connection string is correct

### Local MongoDB Issues:

**"Cannot connect to MongoDB"**
- Make sure MongoDB is running:
  - macOS: `brew services list`
  - Windows: Check Services (services.msc)
  - Linux: `sudo systemctl status mongod`

**"Port 27017 already in use"**
- Another MongoDB instance might be running
- Stop other instances or change the port

**"Permission denied"**
- macOS/Linux: Try with `sudo`
- Windows: Run as Administrator

---

## Verify Your Setup ✅

1. **Start your backend server**:
   ```bash
   npm run server
   ```

2. **Look for this message**:
   ```
   ✅ Connected to MongoDB
   🚀 Server running on http://localhost:5000
   ```

3. **Test the API**:
   - Open browser: `http://localhost:5000/api/health`
   - Should see: `{"status":"OK","message":"Server is running"}`

4. **Test the feedback form**:
   - Start frontend: `npm run client` (in another terminal)
   - Go to Contact section
   - Submit a test message
   - Check MongoDB to see if it was saved

---

## Which Option Should I Choose? 🤔

**Choose MongoDB Atlas if:**
- ✅ You're new to MongoDB
- ✅ You want easy setup (no installation)
- ✅ You need access from multiple devices
- ✅ You're working on a team project
- ✅ You want automatic backups

**Choose Local MongoDB if:**
- ✅ You prefer local development
- ✅ You want to work offline
- ✅ You need more control over the database
- ✅ You're comfortable with command line

---

## Next Steps 🚀

Once MongoDB is set up:

1. ✅ Your `.env` file is configured
2. ✅ Backend connects successfully
3. ✅ You can now submit feedback through the website
4. ✅ All feedback will be stored in MongoDB

**View your data:**
- **Atlas**: Go to Collections tab in MongoDB Atlas dashboard
- **Local**: Use MongoDB Compass (GUI) or `mongosh` (CLI)

---

## Need Help? 💬

- MongoDB Atlas Docs: [https://docs.atlas.mongodb.com/](https://docs.atlas.mongodb.com/)
- MongoDB Community Docs: [https://docs.mongodb.com/manual/](https://docs.mongodb.com/manual/)
- MongoDB University (Free Courses): [https://university.mongodb.com/](https://university.mongodb.com/)

Happy coding! 🎉

