# ADG Technical Club Website

A modern, professional website for ADG Technical Club built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

## Features

- 🎨 **Modern UI/UX**: Beautiful, responsive design with smooth animations
- 🚀 **Fast Performance**: Built with Vite for lightning-fast development and builds
- 📱 **Fully Responsive**: Works seamlessly on all devices
- 💬 **Feedback System**: Submit questions and feedback with backend integration
- 🎯 **Dynamic Content**: Easy to update events, stats, and information
- 🎭 **Smooth Animations**: Powered by Framer Motion

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS with custom gradients and animations

## Project Structure

```
ADG Website/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx      # Entry point
│   └── package.json
├── backend/           # Express.js backend
│   ├── server.js      # Express server
│   └── package.json
└── package.json       # Root package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

   Or install separately:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

2. **Set up MongoDB:**
   
   📖 **See detailed instructions in [MONGODB_SETUP.md](./MONGODB_SETUP.md)**
   
   Quick options:
   - **Option 1: MongoDB Atlas (Cloud - Recommended)**
     - Free tier available
     - No local installation needed
     - See `MONGODB_SETUP.md` for step-by-step guide
   
   - **Option 2: Local MongoDB**
     - Install MongoDB on your computer
     - See `MONGODB_SETUP.md` for installation instructions
   
   After setup, create `backend/.env` file:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

3. **Start the development servers:**
   ```bash
   npm run dev
   ```

   This will start both frontend (http://localhost:3000) and backend (http://localhost:5000) concurrently.

   Or run them separately:
   ```bash
   # Terminal 1 - Backend
   npm run server

   # Terminal 2 - Frontend
   npm run client
   ```

## Customization

### Adding Your Club Logo

1. Place your logo file in `frontend/public/logo.png` (or any image format)
2. Update the logo in `frontend/src/components/Header.jsx`:
   ```jsx
   <img src="/logo.png" alt="ADG Logo" className="w-12 h-12" />
   ```

### Updating Club Information

- **Club Name**: Update in `Header.jsx`, `Hero.jsx`, and `Footer.jsx`
- **Stats**: Modify the `stats` array in `About.jsx`
- **Events**: Update the `events` array in `Events.jsx`
- **Contact Info**: Edit the `contactInfo` array in `Contact.jsx`

### Styling

- Tailwind config: `frontend/tailwind.config.js`
- Global styles: `frontend/src/index.css`
- Primary color: Modify the `primary` color in `tailwind.config.js`

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/feedback` - Submit feedback/question
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Question about events",
    "message": "Your message here"
  }
  ```
- `GET /api/feedback` - Get all feedback (for admin)

## Building for Production

```bash
# Build frontend
cd frontend
npm run build

# The built files will be in frontend/dist/
```

## Environment Variables

Create `backend/.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/adg-club
```

## License

MIT License - feel free to use this project for your club!

## Support

For questions or issues, please contact the development team or open an issue in the repository.

---

Built with ❤️ for ADG Technical Club

