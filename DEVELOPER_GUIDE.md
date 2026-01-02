# Resolution Reality Check - Developer Guide

## 👨‍💻 Welcome to the Project!

This guide helps you understand the codebase and start contributing.

---

## 📚 Prerequisites

- **Node.js** v14+ — [Download](https://nodejs.org/)
- **npm** (included with Node.js)
- **Git** — [Download](https://git-scm.com/)
- **Code Editor** — VS Code recommended
- **GitHub Account** — For pushing code
- **Groq API Key** — [Get free](https://console.groq.com/)

---

## 🚀 Quick Start

```bash
# Clone repository
git clone git@github.com:khshaik/resolution-reality-check.git
cd resolution-reality-check

# Install dependencies
npm install

# Create .env file
echo "GROQ_API_KEY=your_key_here" > .env
echo "PORT=3000" >> .env

# Start server
npm start

# Open browser
open http://localhost:3000
```

---

## 📁 Project Structure

```
resolution-reality-check/
├── index.html              # Frontend UI (HTML5 + TailwindCSS + JS)
├── server.js               # Express backend (Node.js)
├── package.json            # Dependencies
├── .env                    # Environment variables (local only)
├── .gitignore              # Git exclusions
└── Documentation/
    ├── PROJECT_OVERVIEW.md
    ├── ARCHITECTURE.md
    ├── DEVELOPER_GUIDE.md (this file)
    ├── SETUP_GUIDE.md
    ├── API_DOCUMENTATION.md
    └── DEPLOYMENT_GUIDE.md
```

---

## 🔍 Code Overview

### Frontend (index.html)

**Main Functions:**

```javascript
categorizeResolution(text)
  // Analyzes resolution text
  // Returns: 'achievable' | 'optimistic' | 'delusional'

async generateAIFeedback(category, resolution)
  // Calls backend /api/evaluate
  // Returns: formatted HTML with feedback

async evaluateResolution()
  // Main flow: categorize → get feedback → display

resetApp()
  // Clear input, hide results, refocus
```

**Key Variables:**

```javascript
evaluationPrompts    // Static responses for each category
keywords             // Lists of keywords for categorization
categoryEmoji        // Emoji for each category
categoryTitle        // Full category names
```

### Backend (server.js)

**Main Endpoints:**

```javascript
GET /
  // Serves index.html

POST /api/evaluate
  // Input: { category, resolution }
  // Output: { category, categoryEmoji, categoryTitle, tagline, feedback, quote, encouragement }
  // Process:
  //   1. Validate input
  //   2. Check API key
  //   3. Build AI prompt
  //   4. Call Groq API
  //   5. Parse response
  //   6. Return formatted feedback
```

**Key Functions:**

```javascript
normalizeResolutionText(text)
  // Lowercase, remove special chars, trim

buildDetailedPrompt(category, resolution)
  // Creates detailed prompt for AI model

app.post('/api/evaluate', async (req, res))
  // Main API handler
```

---

## 🔄 Data Flow

```
1. User enters resolution in browser
2. categorizeResolution() analyzes text locally
3. POST /api/evaluate with { category, resolution }
4. Backend validates and builds prompt
5. Calls Groq API with prompt
6. Parses JSON response
7. Returns formatted feedback
8. Frontend displays beautiful card
```

---

## 🧠 Resolution Categorization

**Achievable Keywords:**
- read, walk, meditate, journal, sleep, practice, hobby, organize, cook

**Optimistic Keywords:**
- gym, exercise, language, skill, business, promotion, certification, degree

**Delusional Keywords:**
- billionaire, famous, perfect, superhero, mountain, everest, space, astronaut, international cricket

**Pattern Detection:**
- Extreme language: "never", "always", "perfect", "overnight"
- Travel: "trek", "climb", "expedition", "world tour"
- Dangerous: "lion", "tiger", "shark", "wild animal"
- Space: "space", "astronaut", "explore space"
- Politics: "prime minister", "president", "international"

---

## 🔐 Security

**API Key Protection:**
- Stored in `.env` (local development)
- Set as environment variable in production
- Never exposed to browser
- `.gitignore` prevents accidental commits

**Code Security:**
- Input validation on backend
- Error handling with fallbacks
- CORS configured
- No hardcoded secrets

---

## 📝 Making Changes

### Workflow

```bash
# 1. Create feature branch
git checkout -b feature/your-feature-name

# 2. Make changes
# Edit files...

# 3. Test locally
npm start
# Open http://localhost:3000
# Test your changes

# 4. Commit changes
git add .
git commit -m "Add feature description"

# 5. Push to GitHub
git push origin feature/your-feature-name

# 6. Create Pull Request on GitHub
# GitHub will show option to create PR

# 7. Merge to main
# After review, merge PR

# 8. Render auto-deploys
# Changes live in 2-3 minutes
```

### Common Changes

**Add new keyword for categorization:**
```javascript
// In index.html, keywords object
delusional: [
  // ... existing keywords
  'new-keyword'  // Add here
]
```

**Update static feedback:**
```javascript
// In index.html, evaluationPrompts object
achievable: [
  "✅ ACTUALLY ACHIEVABLE",
  "New tagline here",
  "New advice here",
  "New encouragement here"
]
```

**Modify API endpoint:**
```javascript
// In server.js
app.post('/api/evaluate', async (req, res) => {
  // Edit logic here
})
```

---

## 🐛 Debugging

### Local Testing

```bash
# Start server with logging
npm start

# Open browser DevTools (F12)
# Check Console tab for errors
# Check Network tab for API calls
```

### Common Issues

**Issue: "Cannot find module 'express'"**
```bash
Solution: npm install
```

**Issue: "GROQ_API_KEY not configured"**
```bash
Solution: Check .env file has correct key
```

**Issue: "Port 3000 already in use"**
```bash
Solution: Change PORT in .env or kill process
```

**Issue: API returns 401 (Unauthorized)**
```bash
Solution: Verify GROQ_API_KEY is correct and complete
```

---

## 📚 File-by-File Guide

### index.html

**Lines 1-50:** HTML structure and styling
**Lines 51-120:** TailwindCSS animations
**Lines 121-160:** Evaluation prompts and keywords
**Lines 161-210:** Categorization logic
**Lines 211-280:** AI feedback generation
**Lines 281-320:** Event handlers and initialization

### server.js

**Lines 1-15:** Imports and configuration
**Lines 16-25:** Middleware setup
**Lines 26-35:** GET / route
**Lines 36-185:** POST /api/evaluate route
**Lines 186-195:** Server startup

---

## 🧪 Testing

### Manual Testing

```bash
# Test achievable resolution
Input: "Read one book per month"
Expected: ✅ Actually Achievable

# Test optimistic resolution
Input: "Go to gym 5 times a week"
Expected: 🎪 Optimistic But Possible

# Test delusional resolution
Input: "Circumnavigate globe on bicycle"
Expected: 🚀 Delusional (But We Admire The Confidence)
```

### API Testing (curl)

```bash
curl -X POST http://localhost:3000/api/evaluate \
  -H "Content-Type: application/json" \
  -d '{
    "category": "optimistic",
    "resolution": "Go to gym 5 times a week"
  }'
```

---

## 📖 Documentation Map

| Document | Purpose |
|----------|---------|
| README.md | Quick start |
| PROJECT_OVERVIEW.md | Big picture |
| ARCHITECTURE.md | System design |
| DEVELOPER_GUIDE.md | This file - coding guide |
| SETUP_GUIDE.md | Installation steps |
| API_DOCUMENTATION.md | API endpoints |
| DEPLOYMENT_GUIDE.md | Deployment options |

---

## 🎓 Learning Path

**Day 1:** Read PROJECT_OVERVIEW.md + ARCHITECTURE.md
**Day 2:** Follow SETUP_GUIDE.md, run locally
**Day 3:** Explore index.html and server.js
**Day 4:** Make a small change, test, push to GitHub
**Day 5:** Review ARCHITECTURE.md again, understand data flow

---

## 🔗 Useful Resources

- **Express.js Docs:** https://expressjs.com
- **Groq API Docs:** https://console.groq.com/docs
- **TailwindCSS Docs:** https://tailwindcss.com
- **Node.js Docs:** https://nodejs.org/docs
- **Git Docs:** https://git-scm.com/doc

---

## 💡 Tips for Contributors

1. **Read the code first** — Understand before changing
2. **Test locally** — Always test changes before pushing
3. **Write clear commits** — Describe what you changed
4. **Keep it simple** — Don't over-engineer
5. **Follow existing patterns** — Match code style
6. **Document changes** — Update docs if needed
7. **Ask questions** — Don't hesitate to ask

---

## 🚀 Next Steps

1. Clone the repository
2. Follow Quick Start section
3. Explore the codebase
4. Make a small change
5. Test locally
6. Push to GitHub
7. See auto-deploy on Render

Happy coding! 🎉

---

**Last Updated:** Jan 2, 2026
**Status:** ✅ Production Ready
