# StackBlitz Quick Start (5 Minutes)

## Fastest Way to Deploy

### Step 1: Go to StackBlitz
Visit: https://stackblitz.com/fork/node

### Step 2: Create Project
1. Click **"Create WebContainer"**
2. Select **"Node.js"** template
3. Name it: `resolution-reality-check`

### Step 3: Upload Files
In the StackBlitz editor:

1. **Delete** the `src/` folder (right-click → delete)
2. **Create** these files in root:
   - `index.html` — Copy from your local file
   - `server.js` — Copy from your local file
   - Update `package.json` — Copy from your local file

### Step 4: Add API Key (Secrets)
1. Click the **lock icon** (Secrets) in left sidebar
2. Click **"Add Secret"**
3. Enter:
   - **Key:** `GROQ_API_KEY`
   - **Value:** `YOUR_API_KEY_HERE`
4. Click **"Add"**

### Step 5: Install & Run
1. Open terminal (bottom of screen)
2. Run:
   ```bash
   npm install
   npm start
   ```
3. Wait for: `Resolution Reality Check server running at...`
4. Click the preview URL that appears

### Done! 🎉
Your app is now live on StackBlitz!

---

## Share Your Project

**Option A: StackBlitz Link**
- Click **"Share"** button
- Copy the link
- Share with anyone

**Option B: Fork Link**
- Copy the URL from address bar
- Anyone can click it to fork your project

**Option C: GitHub**
- Push to GitHub
- Share the GitHub link
- Others can import it to StackBlitz

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Module not found" | Make sure `package.json` has all dependencies |
| API key not working | Restart server after adding secret (Ctrl+C, then `npm start`) |
| Port error | StackBlitz auto-assigns port, just use preview URL |
| Blank page | Check browser console (F12) for errors |

---

## File Checklist

Before uploading to StackBlitz, ensure you have:

- [ ] `index.html` — Frontend UI
- [ ] `server.js` — Backend server
- [ ] `package.json` — With express, cors, dotenv
- [ ] API key ready to add as secret

That's it! You're ready to deploy. 🚀
