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
resolution-reality-check/
│
├── node_modules/                 # Installed Node.js dependencies
│
├── notes/                        # Project documentation & internal notes
│   ├── migration/                # Migration-related notes (if any)
│   ├── API_DOCUMENTATION.md      # API endpoints & request/response details
│   ├── ARCHITECTURE.md           # High-level system architecture
│   ├── DEPLOYMENT_GUIDE.md       # Deployment steps & environment setup
│   ├── DEVELOPER_GUIDE.md        # Developer instructions & workflows
│   ├── PROJECT_OVERVIEW.md       # Purpose, scope & app overview
│   ├── SETUP_GUIDE.md            # Local setup instructions
│   └── TECH_STACK.md             # Technology stack details
│
├── snips/                        # Code snippets / experiments / prompt drafts
│
├── .env                          # Environment variables (Groq API key, config)
├── .gitignore                    # Git ignore rules
│
├── index.html                    # Frontend UI (ResolutionRoulette interface)
│
├── package.json                  # Project metadata, scripts & dependencies
├── package-lock.json             # Locked dependency versions
│
├── README.md                     # Main project README
│
└── server.js                     # Node.js / Express backend (AI logic & API)

```

## Deployment

### Quick Deploy to Render (Recommended)

Deploy your app for **free, forever** on Render.com:

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Go to Render.com**
   - Sign up with GitHub
   - Click "New +" → "Web Service"
   - Select your repository

3. **Configure**
   - Name: `resolution-reality-check`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: `Free`

4. **Add Environment Variable**
   - Key: `GROQ_API_KEY`
   - Value: Your Groq API key

5. **Deploy** — Done! Your app is live 🎉

**See `RENDER_MIGRATION.md` for detailed step-by-step guide.**

### Other Deployment Options

- **Fly.io** — Free tier with global deployment
- **Replit** — No GitHub needed, built-in IDE
- **StackBlitz** — Browser-based development

See `DEPLOYMENT_GUIDE.md` for all options.

---

## 📚 Documentation

This project includes comprehensive documentation:

| Document | Purpose |
|----------|---------|
| **README.md** | Quick start (this file) |
| **SETUP_GUIDE.md** | Local installation & setup |
| **PROJECT_OVERVIEW.md** | Big picture overview & architecture |
| **ARCHITECTURE.md** | System design & data flow |
| **DEVELOPER_GUIDE.md** | Code guide for developers |
| **API_DOCUMENTATION.md** | API endpoints & examples |
| **RENDER_MIGRATION.md** | Detailed Render deployment guide |
| **DEPLOYMENT_GUIDE.md** | All deployment platform options |
| **STACKBLITZ_MIGRATION.md** | StackBlitz deployment guide |

**Start here:** New to the project? Read `PROJECT_OVERVIEW.md` first.

---

## 🚀 Quick Links

- **Live App:** https://resolution-reality-check.onrender.com
- **GitHub Repository:** https://github.com/khshaik/resolution-reality-check
- **Groq API:** https://console.groq.com/
- **Render Dashboard:** https://render.com/dashboard

---

## 🎓 Learning Path

**For New Developers:**
1. Read `PROJECT_OVERVIEW.md` (10 min)
2. Read `ARCHITECTURE.md` (15 min)
3. Follow `SETUP_GUIDE.md` (20 min)
4. Read `DEVELOPER_GUIDE.md` (15 min)
5. Start coding! 🚀

**For Deployment:**
1. Read `RENDER_MIGRATION.md` (detailed guide)
2. Or `DEPLOYMENT_GUIDE.md` (all options)
3. Follow step-by-step instructions
4. Get your live URL

---

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start server (production)
npm start

# Start server (development with auto-reload)
npm run dev

# Syntax check
npm test

# Install new package
npm install package-name

# Update packages
npm update
```

---

## 📊 Project Status

| Item | Status |
|------|--------|
| **Development** | ✅ Complete |
| **Testing** | ✅ Complete |
| **Documentation** | ✅ Complete |
| **Deployment** | ✅ Live |
| **Security** | ✅ Secure |
| **Performance** | ✅ Optimized |

**Current Version:** 1.0.0
**Last Updated:** Jan 2, 2026
**Live URL:** https://resolution-reality-check.onrender.com

---

## 🤝 Contributing

Want to improve the app? Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and test locally
4. Commit: `git commit -m "Add feature description"`
5. Push: `git push origin feature/your-feature`
6. Create a Pull Request

See `DEVELOPER_GUIDE.md` for detailed contribution guidelines.

---

## 🐛 Troubleshooting

### Local Setup Issues
See `SETUP_GUIDE.md` → Troubleshooting section

### Deployment Issues
See `RENDER_MIGRATION.md` → Troubleshooting section

### API Issues
See `API_DOCUMENTATION.md` → Troubleshooting section

### General Issues
See `DEVELOPER_GUIDE.md` → Debugging section

---

## 📞 Support

- **Documentation:** Check the docs folder (*.md files)
- **GitHub Issues:** Report bugs on GitHub
- **GitHub Discussions:** Ask questions
- **Groq API Support:** https://console.groq.com/support

---

## Notes

- The app gracefully falls back to static responses if the API is unavailable
- All feedback is designed to be honest but kind
- Perfect for January 1st motivation or anytime you need a reality check on your goals
- API key is secure and never exposed to the browser
- Auto-deploys from GitHub to Render on every push to main branch
- Completely free to run and deploy forever