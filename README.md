# Resolution Reality Check 🎯

A witty, self-aware New Year's resolution evaluator that tells you honestly whether your 2026 goals are:
- ✅ **Actually Achievable**
- 🎪 **Optimistic But Possible**
- 🚀 **Delusional (But We Admire The Confidence)**

## Features

- **Smart AI-powered evaluation** — Uses Groq API for context-aware, witty feedback
- **Secure backend** — API key stored server-side, never exposed to client
- **Fallback static responses** — Works without API key (uses keyword-based categorization)
- **Beautiful, modern UI** — Glassmorphism design with smooth animations
- **Mobile responsive** — Works on any device

## Setup

### Prerequisites

- Node.js 14+ installed
- npm or yarn

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure API key** (already set in `.env`):
   - The `.env` file contains your Groq API key securely
   - Never commit `.env` to version control

3. **Start the server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## How It Works

1. Enter your New Year's resolution
2. Click "Get Honest Feedback"
3. Frontend sends resolution to backend `/api/evaluate` endpoint
4. Backend uses Groq API (with secure API key) to generate personalized feedback
5. Response is returned to frontend and displayed beautifully
6. If API fails, falls back to static responses

## Security

- ✅ API key stored in `.env` file (server-side only)
- ✅ API key never exposed to client/browser
- ✅ All Groq API calls made from secure backend
- ✅ Frontend only sends resolution text to backend
- ✅ No sensitive data stored in localStorage

## Examples

- **"Read one book per month"** → ✅ Actually Achievable
- **"Go to the gym 5 times a week"** → 🎪 Optimistic But Possible
- **"Circumnavigate the globe on bicycle"** → 🚀 Delusional (But We Admire The Confidence)
- **"Explore space with astronauts"** → 🚀 Delusional (But We Admire The Confidence)
- **"Play cricket with family"** → ✅ Actually Achievable

## Tech Stack

- **Frontend:** HTML5, TailwindCSS, Vanilla JavaScript
- **Backend:** Node.js + Express.js
- **AI:** Groq API (Mixtral 8x7B model)
- **Configuration:** dotenv for environment variables

## Project Structure

```
FUNNYAPP/
├── index.html          # Frontend UI
├── server.js           # Express backend server
├── package.json        # Dependencies
├── .env                # Environment variables (API key)
└── README.md           # This file
```

## Notes

- The app gracefully falls back to static responses if the API is unavailable
- All feedback is designed to be honest but kind
- Perfect for January 1st motivation or anytime you need a reality check on your goals
- API key is secure and never exposed to the browser
