# Resolution Reality Check - Render Quick Start

## ⚡ Deploy in 5 Minutes

Get your Resolution Reality Check app live on Render.com in just 5 minutes!

---

## 🎯 What You'll Get

- ✅ Live app at `https://your-app.onrender.com`
- ✅ Free forever (no credit card needed)
- ✅ Auto-deploy from GitHub
- ✅ AI-powered feedback with Groq API
- ✅ Beautiful, modern UI

---

## 📋 Prerequisites

- [ ] **GitHub Account** — [Create free](https://github.com/signup)
- [ ] **Render Account** — [Create free](https://render.com)
- [ ] **Groq API Key** — [Get free](https://console.groq.com/)
- [ ] **Code pushed to GitHub** — Your repository

---

## ⏱️ 5-Minute Setup

### Step 1: Verify GitHub Repository (1 min)

1. Go to your GitHub repository: `resolution-reality-check`
2. Verify these files exist in root:
   - `index.html`
   - `server.js`
   - `package.json`
   - `.gitignore`
3. Repository should be **Public**

### Step 2: Sign Up on Render (1 min)

1. Go to https://render.com
2. Click **"Sign up"**
3. Choose **"Sign up with GitHub"**
4. Authorize Render to access GitHub

### Step 3: Create Web Service (1 min)

1. Log in to Render dashboard
2. Click **"New +"** (top right)
3. Select **"Web Service"**
4. Select your `resolution-reality-check` repository
5. Click **"Connect"**

### Step 4: Configure Service (1 min)

Fill in these fields:

| Field | Value |
|-------|-------|
| **Name** | `resolution-reality-check` |
| **Environment** | `Node` |
| **Region** | `Singapore` (or closest to you) |
| **Branch** | `main` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Plan** | `Free` |

### Step 5: Add API Key & Deploy (1 min)

1. Scroll to **"Environment"** section
2. Click **"Add Environment Variable"**
3. Enter:
   - **Key:** `GROQ_API_KEY`
   - **Value:** Your Groq API key (starts with `gsk_`)
4. Click **"Create Web Service"**
5. Wait 2-3 minutes for deployment

---

## ✅ You're Done!

Once deployment completes:

1. You'll see status: **"Live"** (green)
2. Copy your URL: `https://resolution-reality-check.onrender.com`
3. Open in browser
4. Test with a resolution
5. Share your live app! 🎉

---

## 🧪 Quick Test

1. Enter: **"Read one book per month"**
2. Click **"Get Honest Feedback"**
3. Should show: **✅ ACTUALLY ACHIEVABLE**

If it works, you're all set!

---

## 🔄 Auto-Deploy

Every time you push to GitHub:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Render automatically:
- Pulls latest code
- Runs `npm install`
- Runs `npm start`
- Deploys new version (2-3 min)

No manual action needed!

---

## 🐛 Troubleshooting

### "Build failed"
- Check `package.json` is in root
- Verify all dependencies are listed
- Check build logs in Render dashboard

### "API key not working"
- Verify key starts with `gsk_`
- Check for extra spaces
- Restart service in Settings

### "Blank page"
- Check `index.html` exists in root
- Check browser console (F12)
- Check Render logs

### "Service keeps restarting"
- Check logs for error messages
- Test locally: `npm start`
- Fix errors and push to GitHub

---

## 📚 Need More Help?

- **Detailed Guide:** See `RENDER_MIGRATION.md`
- **Setup Issues:** See `SETUP_GUIDE.md`
- **API Issues:** See `API_DOCUMENTATION.md`
- **Code Questions:** See `DEVELOPER_GUIDE.md`

---

## 🚀 Next Steps

### Share Your App
```
Your live URL: https://resolution-reality-check.onrender.com
Share with friends!
```

### Make Changes
```bash
# Edit code locally
# Push to GitHub
git push origin main

# Render auto-deploys in 2-3 minutes
```

### Monitor Performance
1. Go to Render dashboard
2. Click your service
3. View **Logs** and **Metrics**

---

## 💡 Pro Tips

✅ **Keep API key secure**
- Never commit `.env` to GitHub
- Always use environment variables
- Rotate key if exposed

✅ **Monitor your app**
- Check logs regularly
- Watch metrics for issues
- Set up alerts if needed

✅ **Optimize performance**
- Keep dependencies minimal
- Optimize code
- Consider upgrading plan if needed

---

## 📊 Render Features

| Feature | Free Tier |
|---------|-----------|
| **Web Services** | Unlimited |
| **Bandwidth** | Unlimited |
| **Storage** | 100 GB |
| **Memory** | 512 MB |
| **CPU** | 0.1 vCPU |
| **Uptime SLA** | 99.9% |
| **Cost** | $0/month |

**Forever free!** No hidden charges.

---

## 🎉 Congratulations!

Your Resolution Reality Check app is now:
- ✅ **Live** on Render
- ✅ **Free** forever
- ✅ **Auto-deploying** from GitHub
- ✅ **Secure** with API key
- ✅ **Ready** to evaluate resolutions

**Share your live URL and start getting honest feedback on your 2026 goals!** 🚀

---

## 📞 Quick Links

- **Render Dashboard:** https://render.com/dashboard
- **GitHub Repository:** https://github.com/khshaik/resolution-reality-check
- **Groq API Console:** https://console.groq.com/
- **Project Documentation:** See README.md

---

**Time to Deploy:** ⏱️ 5 minutes
**Cost:** 💰 $0/month
**Status:** ✅ Production Ready

Happy deploying! 🎊

---

**Last Updated:** Jan 2, 2026
**Version:** 1.0.0
