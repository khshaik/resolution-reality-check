# Resolution Reality Check - Setup Guide

## 🛠️ Complete Installation & Setup Instructions

This guide provides step-by-step instructions for setting up the project on your local machine.

---

## ✅ Prerequisites Checklist

Before starting, verify you have:

- [ ] **Node.js** v14 or higher — [Download](https://nodejs.org/)
- [ ] **npm** (comes with Node.js)
- [ ] **Git** — [Download](https://git-scm.com/)
- [ ] **Code Editor** — VS Code, Sublime, or similar
- [ ] **Terminal/Command Line** access
- [ ] **Groq API Key** — [Get free key](https://console.groq.com/)
- [ ] **GitHub Account** (optional, for pushing code)

### Verify Installation

```bash
# Check Node.js version (should be v14+)
node --version

# Check npm version (should be v6+)
npm --version

# Check Git version
git --version
```

---

## 📥 Step 1: Clone the Repository

### Option A: Using SSH (Recommended)

```bash
git clone git@github.com:khshaik/resolution-reality-check.git
cd resolution-reality-check
```

### Option B: Using HTTPS

```bash
git clone https://github.com/khshaik/resolution-reality-check.git
cd resolution-reality-check
```

### Option C: Download ZIP

1. Go to https://github.com/khshaik/resolution-reality-check
2. Click **"Code"** → **"Download ZIP"**
3. Extract the ZIP file
4. Open terminal in the extracted folder

---

## 📦 Step 2: Install Dependencies

```bash
npm install
```

This will:
- Download all required packages from npm
- Create `node_modules/` folder
- Generate `package-lock.json` file

**Expected output:**
```
added 101 packages, and audited 102 packages in 15s
found 0 vulnerabilities
```

---

## 🔑 Step 3: Configure Environment Variables

### Create .env File

```bash
# Create .env file
touch .env

# Or on Windows:
# type nul > .env
```

### Add API Key

Open `.env` in your editor and add:

```
GROQ_API_KEY=your_actual_api_key_here
PORT=3000
```

**Where to get GROQ_API_KEY:**
1. Go to https://console.groq.com/
2. Sign up for free account
3. Create API key
4. Copy the key (starts with `gsk_`)
5. Paste into `.env`

### Example .env File

```
GROQ_API_KEY=<your-groq-api-key>
PORT=3000
```

⚠️ **Important:** Never commit `.env` to Git. It's already in `.gitignore`.

---

## 🚀 Step 4: Start the Server

```bash
npm start
```

**Expected output:**
```
> resolution-reality-check@1.0.0 start
> node server.js

Resolution Reality Check server running at http://localhost:3000
API endpoint: POST /api/evaluate
```

---

## 🌐 Step 5: Open in Browser

1. Open your browser
2. Go to: **http://localhost:3000**
3. You should see the Resolution Reality Check app

---

## ✅ Step 6: Test the App

### Test 1: Achievable Resolution

1. Enter: **"Read one book per month"**
2. Click **"Get Honest Feedback"**
3. Should show: **✅ ACTUALLY ACHIEVABLE**

### Test 2: Optimistic Resolution

1. Enter: **"Go to gym 5 times a week"**
2. Click **"Get Honest Feedback"**
3. Should show: **🎪 OPTIMISTIC BUT POSSIBLE**

### Test 3: Delusional Resolution

1. Enter: **"Circumnavigate globe on bicycle"**
2. Click **"Get Honest Feedback"**
3. Should show: **🚀 DELUSIONAL (BUT WE ADMIRE THE CONFIDENCE)**

If all tests pass, your setup is complete! ✅

---

## 🛑 Stopping the Server

```bash
# Press Ctrl+C in terminal
# Or Cmd+C on Mac
```

---

## 🔄 Restarting the Server

```bash
# Stop the server (Ctrl+C)
# Then run:
npm start
```

---

## 🐛 Troubleshooting

### Issue: "npm: command not found"

**Solution:** Node.js not installed
```bash
# Install Node.js from https://nodejs.org/
# Then verify:
node --version
npm --version
```

### Issue: "Cannot find module 'express'"

**Solution:** Dependencies not installed
```bash
npm install
```

### Issue: "GROQ_API_KEY not configured"

**Solution:** .env file missing or incorrect
```bash
# Check .env exists
cat .env

# Should show:
# GROQ_API_KEY=your_key_here
# PORT=3000

# If missing, create it:
echo "GROQ_API_KEY=your_key_here" > .env
echo "PORT=3000" >> .env
```

### Issue: "Port 3000 already in use"

**Solution:** Another app using port 3000

**Option A:** Change port in .env
```
PORT=3001
```

**Option B:** Kill process using port 3000
```bash
# macOS/Linux:
lsof -i :3000
kill -9 <PID>

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: "API key not working" (401 error)

**Solution:** Invalid or incomplete API key
```bash
# Check .env file
cat .env

# Verify:
# - No spaces around =
# - Full key is present
# - Key starts with gsk_

# If incorrect, update:
echo "GROQ_API_KEY=new_key_here" > .env
echo "PORT=3000" >> .env

# Restart server:
# Ctrl+C, then npm start
```

### Issue: "Cannot GET /"

**Solution:** Server not running
```bash
# Make sure you're in the project directory
cd resolution-reality-check

# Start server
npm start

# Then open http://localhost:3000
```

### Issue: "Blank page or 404"

**Solution:** index.html not found
```bash
# Check file exists
ls index.html

# Or on Windows:
# dir index.html

# If missing, restore from GitHub
git checkout index.html
```

---

## 📋 Verification Checklist

After setup, verify:

- [ ] Node.js installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] .env file created with API key
- [ ] Server starts without errors (`npm start`)
- [ ] Browser shows app at http://localhost:3000
- [ ] Test resolutions work correctly
- [ ] All 3 categories show correct feedback

---

## 🎯 Next Steps

### For Development

1. Read `DEVELOPER_GUIDE.md`
2. Explore `index.html` and `server.js`
3. Make a small change
4. Test locally
5. Push to GitHub

### For Deployment

1. Read `DEPLOYMENT_GUIDE.md`
2. Choose platform (Render recommended)
3. Follow deployment steps
4. Get live URL

### For Understanding Architecture

1. Read `PROJECT_OVERVIEW.md`
2. Read `ARCHITECTURE.md`
3. Review data flow diagrams
4. Understand API endpoints

---

## 💻 Development Commands

```bash
# Start server
npm start

# Run syntax check
npm test

# Install new package
npm install package-name

# Update packages
npm update

# Remove package
npm uninstall package-name

# View installed packages
npm list
```

---

## 📁 Project Files Reference

| File | Purpose |
|------|---------|
| `index.html` | Frontend UI |
| `server.js` | Backend API |
| `package.json` | Dependencies |
| `.env` | Environment variables |
| `.gitignore` | Git exclusions |
| `README.md` | Quick start |
| `PROJECT_OVERVIEW.md` | Project overview |
| `ARCHITECTURE.md` | System design |
| `DEVELOPER_GUIDE.md` | Developer guide |
| `SETUP_GUIDE.md` | This file |
| `API_DOCUMENTATION.md` | API docs |
| `DEPLOYMENT_GUIDE.md` | Deployment guide |

---

## 🔐 Security Reminders

✅ **Do:**
- Keep `.env` file private
- Never commit `.env` to Git
- Use strong API keys
- Rotate keys if exposed

❌ **Don't:**
- Share `.env` file
- Commit API keys to Git
- Use test keys in production
- Hardcode secrets in code

---

## 📞 Getting Help

If you encounter issues:

1. Check **Troubleshooting** section above
2. Review **DEVELOPER_GUIDE.md**
3. Check **ARCHITECTURE.md** for system design
4. Review error messages carefully
5. Check terminal output for clues

---

## ✨ Setup Complete!

You're now ready to:
- ✅ Run the app locally
- ✅ Make code changes
- ✅ Test features
- ✅ Deploy to production
- ✅ Contribute to the project

Happy coding! 🚀

---

**Last Updated:** Jan 2, 2026
**Status:** ✅ Production Ready
