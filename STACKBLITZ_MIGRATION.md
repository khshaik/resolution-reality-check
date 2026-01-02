# StackBlitz Migration Guide

This guide walks you through hosting the Resolution Reality Check app on StackBlitz.

## Option 1: Quick Import (Recommended)

### Step 1: Create StackBlitz Project from GitHub

1. Go to [stackblitz.com](https://stackblitz.com)
2. Click **"Create WebContainer"** or **"Start a new project"**
3. Select **"Node.js"** as the template
4. StackBlitz will create a new project with Node.js support

### Step 2: Upload Your Files

1. In the StackBlitz editor, delete the default files
2. Upload these files from your local project:
   - `index.html`
   - `server.js`
   - `package.json`
   - `.env`

Or use the **"Import from GitHub"** option if you push to GitHub first.

### Step 3: Configure Environment Variables

1. In StackBlitz, click the **"Secrets"** icon (lock icon in left sidebar)
2. Add a new secret:
   - **Key:** `GROQ_API_KEY`
   - **Value:** `<your-groq-api-key>`
3. Click **"Add Secret"**

### Step 4: Install Dependencies

1. StackBlitz automatically runs `npm install` when you open the project
2. Wait for the installation to complete (you'll see it in the terminal)

### Step 5: Start the Server

1. StackBlitz should automatically start the server
2. You'll see a preview URL appear (e.g., `https://your-project.stackblitz.io`)
3. Click the preview to open your app

---

## Option 2: Manual Setup in StackBlitz

### Step 1: Create New Node.js Project

1. Go to [stackblitz.com](https://stackblitz.com)
2. Click **"Create WebContainer"** → **"Node.js"**
3. Name your project (e.g., "resolution-reality-check")

### Step 2: Replace Files

In the StackBlitz editor:

**Delete default files:**
- Delete `src/` folder
- Delete any default files

**Create new files:**
- Create `index.html` (copy content from your local file)
- Create `server.js` (copy content from your local file)
- Update `package.json` (copy content from your local file)

### Step 3: Add Environment Variables

1. Click the **"Secrets"** button (lock icon) in the left sidebar
2. Add secret:
   ```
   GROQ_API_KEY = YOUR_API_KEY_HERE
   ```

### Step 4: Update server.js for StackBlitz

Modify the top of `server.js` to handle StackBlitz environment:

```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// StackBlitz uses environment variables differently
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ... rest of server.js remains the same
```

### Step 5: Start the Server

1. Open the terminal in StackBlitz (bottom panel)
2. Run:
   ```bash
   npm install
   npm start
   ```
3. StackBlitz will show a preview URL

---

## Option 3: Deploy to Production (Vercel/Netlify)

If you want a permanent public URL:

### Using Vercel (Recommended for Node.js)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your GitHub repository
5. Add environment variable:
   - **Name:** `GROQ_API_KEY`
   - **Value:** `YOUR_API_KEY_HERE`
6. Click **"Deploy"**

Your app will be live at `https://your-project.vercel.app`

### Using Netlify (For static + serverless)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click **"New site from Git"**
4. Select your repository
5. Build settings:
   - **Build command:** `npm install`
   - **Publish directory:** `.`
6. Add environment variable in **Site settings** → **Build & deploy** → **Environment**
7. Deploy

---

## Troubleshooting

### Issue: "Module not found" errors

**Solution:** Make sure `package.json` is in the root directory and contains:
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  }
}
```

### Issue: API key not working

**Solution:** 
- Verify the secret is added in StackBlitz (Secrets panel)
- Restart the server after adding the secret
- Check that `process.env.GROQ_API_KEY` is being read correctly

### Issue: Port already in use

**Solution:** StackBlitz automatically assigns a free port. The preview URL will show the correct port.

### Issue: CORS errors

**Solution:** The `cors` middleware is already configured in `server.js`. If issues persist, update:
```javascript
app.use(cors({
  origin: '*',
  credentials: true
}));
```

---

## File Structure for StackBlitz

```
resolution-reality-check/
├── index.html           # Frontend UI
├── server.js            # Express backend
├── package.json         # Dependencies
├── .env                 # Environment variables (created locally, secrets in StackBlitz)
└── README.md            # Documentation
```

---

## Sharing Your StackBlitz Project

Once deployed:

1. **StackBlitz URL:** Share the preview URL directly
   - Example: `https://stackblitz.com/edit/node-abc123`

2. **Public Preview:** Click the **"Share"** button in StackBlitz to get a shareable link

3. **GitHub Integration:** Push to GitHub and share the GitHub link

---

## Environment Variables in StackBlitz

StackBlitz handles secrets differently than `.env` files:

- **Local development:** Use `.env` file
- **StackBlitz:** Use the **Secrets** panel (lock icon)
- **Production (Vercel/Netlify):** Use their environment variable settings

The code automatically reads from `process.env.GROQ_API_KEY` in all environments.

---

## Next Steps

1. Choose your hosting option (StackBlitz, Vercel, or Netlify)
2. Follow the steps above
3. Test the app with a sample resolution
4. Share the public URL

Your app is now ready for the world! 🚀
