# Resolution Reality Check - Architecture Document

## 🏗️ System Architecture

### High-Level Architecture Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                              │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  Browser (index.html)                                      │  │
│  │  ├─ UI Components (input, buttons, cards)                 │  │
│  │  ├─ Resolution Categorization Logic (JavaScript)          │  │
│  │  ├─ API Communication (Fetch)                             │  │
│  │  └─ Response Display & Animations                         │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                    HTTP/HTTPS (REST)
                           │
┌──────────────────────────▼───────────────────────────────────────┐
│                      APPLICATION LAYER                            │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  Express.js Server (Node.js)                              │  │
│  │  ├─ Routing (GET /, POST /api/evaluate)                   │  │
│  │  ├─ Middleware (CORS, JSON parsing)                       │  │
│  │  ├─ Request validation                                    │  │
│  │  ├─ Resolution categorization                             │  │
│  │  ├─ AI prompt generation                                  │  │
│  │  └─ Response formatting                                   │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                    HTTPS (API Call)
                           │
┌──────────────────────────▼───────────────────────────────────────┐
│                      EXTERNAL SERVICES                            │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  Groq API (Cloud)                                          │  │
│  │  ├─ Model: Mixtral 8x7B                                    │  │
│  │  ├─ Endpoint: api.groq.com/openai/v1/chat/completions    │  │
│  │  ├─ Auth: Bearer token (GROQ_API_KEY)                     │  │
│  │  └─ Response: JSON (tagline, feedback, quote, etc.)       │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📦 Component Architecture

### Frontend Components

```
index.html
├── Header Section
│   ├── Title: "Resolution Reality Check"
│   ├── Subtitle: "Let's be honest about your 2026 goals"
│   └── Description
│
├── Input Section
│   ├── Textarea: Resolution input
│   ├── Button: "Get Honest Feedback"
│   └── Loading state (spinner)
│
├── Result Section
│   ├── Verdict Card
│   │   ├── Category emoji (✅/🎪/🚀)
│   │   ├── Category title
│   │   ├── Tagline
│   │   ├── Feedback text
│   │   ├── Quote
│   │   └─ Encouragement
│   └── Button: "Try Another Resolution"
│
└── Styling
    ├── TailwindCSS utilities
    ├── Custom animations
    ├── Glassmorphism effects
    └── Responsive design
```

### Backend Components

```
server.js
├── Configuration
│   ├── Express app setup
│   ├── Middleware (CORS, JSON)
│   ├── Environment variables
│   └── Port configuration
│
├── Routes
│   ├── GET / → Serve index.html
│   └── POST /api/evaluate → Process resolution
│
├── Business Logic
│   ├── normalizeResolutionText() → Clean input
│   ├── buildDetailedPrompt() → Create AI prompt
│   ├── Groq API call → Get AI response
│   ├── JSON parsing → Extract response
│   └── Response formatting → Return to client
│
└── Error Handling
    ├── Input validation
    ├── API error handling
    ├── Fallback responses
    └── Logging
```

---

## 🔄 Data Flow

### Request Flow

```
1. USER INPUT
   └─ User enters resolution text
      └─ Example: "Go to gym 5 times a week"

2. FRONTEND PROCESSING
   └─ categorizeResolution(text)
      ├─ Keyword matching
      ├─ Pattern detection
      ├─ Score calculation
      └─ Returns: 'achievable' | 'optimistic' | 'delusional'

3. API REQUEST
   └─ POST /api/evaluate
      ├─ Headers: Content-Type: application/json
      └─ Body: { category, resolution }

4. BACKEND PROCESSING
   └─ Receive request
      ├─ Validate inputs
      ├─ Check API key
      ├─ Normalize text
      ├─ Build prompt
      └─ Call Groq API

5. GROQ API CALL
   └─ POST https://api.groq.com/openai/v1/chat/completions
      ├─ Model: mixtral-8x7b-32768
      ├─ Messages: [{ role: 'user', content: prompt }]
      ├─ Temperature: 0.8
      ├─ Max tokens: 400
      └─ Returns: JSON response

6. RESPONSE PROCESSING
   └─ Parse Groq response
      ├─ Extract JSON
      ├─ Format fields
      └─ Return to frontend

7. FRONTEND DISPLAY
   └─ Receive response
      ├─ Hide loading state
      ├─ Display verdict card
      ├─ Show emoji, tagline, feedback
      └─ Enable "Try Another" button
```

### Response Format

```json
{
  "category": "optimistic",
  "categoryEmoji": "🎪",
  "categoryTitle": "OPTIMISTIC BUT POSSIBLE",
  "tagline": "You're playing on hard mode, but hey, we respect the ambition.",
  "feedback": "Going to the gym 5 times a week requires serious commitment...",
  "quote": "Will it be easy? Absolutely not. Impossible? Also no.",
  "encouragement": "Bring coffee. Lots of coffee."
}
```

---

## 🧠 Resolution Categorization Logic

### Categorization Algorithm

```
Input: Resolution text (string)
Output: Category ('achievable' | 'optimistic' | 'delusional')

Process:
1. Normalize text (lowercase, remove special chars)
2. Initialize scores: delusional=0, optimistic=0, achievable=0

3. Keyword Matching
   ├─ Check delusional keywords
   │  └─ Examples: billionaire, superhero, perfect, never fail
   ├─ Check optimistic keywords
   │  └─ Examples: gym, language, business, promotion
   └─ Check achievable keywords
      └─ Examples: read, walk, meditate, journal

4. Pattern Detection
   ├─ Extreme language detection
   │  └─ "never", "always", "perfect", "overnight"
   ├─ Travel/expedition detection
   │  └─ "mountain", "everest", "trek", "circumnavigate"
   ├─ Dangerous activity detection
   │  └─ "lion", "tiger", "shark", "wild animal"
   ├─ Space exploration detection
   │  └─ "space", "astronaut", "explore space"
   ├─ International sports/politics detection
   │  └─ "international", "represent", "prime minister"
   └─ Extreme physical challenges
      └─ "north pole", "south pole", "bicycle", "globe"

5. Specific Goal Detection
   ├─ Measurable goals (with numbers)
   │  └─ "5 times a week", "3 months", "100 pages"
   └─ Family/friend activities
      └─ "with family", "with friends"

6. Score Comparison
   ├─ If delusional > optimistic AND delusional > achievable
   │  └─ Return 'delusional'
   ├─ Else if optimistic > achievable
   │  └─ Return 'optimistic'
   └─ Else
      └─ Return 'achievable'
```

### Example Categorizations

```
Input: "Read one book per month"
├─ Keywords: "read" (achievable +1), "month" (optimistic +2)
├─ Patterns: Specific timeframe (achievable +2)
└─ Result: achievable ✅

Input: "Go to gym 5 times a week"
├─ Keywords: "gym" (optimistic +2), "exercise" (optimistic +2)
├─ Patterns: Specific number (optimistic +2)
└─ Result: optimistic 🎪

Input: "Circumnavigate globe on bicycle"
├─ Keywords: "circumnavigate" (delusional +3), "globe" (delusional +3)
├─ Patterns: Extreme physical challenge (delusional +3)
└─ Result: delusional 🚀
```

---

## 🔐 Security Architecture

### API Key Protection

```
Local Development:
  .env file (not committed)
  └─ GROQ_API_KEY=actual_key_here

Production (Render):
  Environment Variables
  └─ GROQ_API_KEY=actual_key_here (set in Render dashboard)

Code:
  server.js
  └─ const GROQ_API_KEY = process.env.GROQ_API_KEY
     (reads from environment, never hardcoded)

Git:
  .gitignore
  └─ .env (excluded from all commits)
```

### Request Validation

```
Frontend → Backend:
├─ Check category exists
├─ Check resolution text exists
├─ Check resolution not empty
└─ Validate JSON format

Backend → Groq:
├─ Check API key configured
├─ Check API key not null
├─ Validate prompt format
└─ Handle API errors gracefully
```

### Error Handling

```
Error Scenarios:
├─ Missing API key
│  └─ Return: 500 "API key not configured"
├─ Invalid input
│  └─ Return: 400 "Missing category or resolution"
├─ Groq API error
│  └─ Return: 503 "Network error - please try again"
├─ Rate limit exceeded
│  └─ Return: 429 "API rate limit exceeded"
├─ Invalid API key
│  └─ Return: 401 "Invalid API key"
└─ JSON parse error
   └─ Fallback: Use default response
```

---

## 📊 Data Models

### Resolution Input

```javascript
{
  category: string,      // 'achievable' | 'optimistic' | 'delusional'
  resolution: string     // User's resolution text
}
```

### Feedback Response

```javascript
{
  category: string,           // Category from input
  categoryEmoji: string,      // ✅ | 🎪 | 🚀
  categoryTitle: string,      // Full category name
  tagline: string,            // Witty opening (15-20 words)
  feedback: string,           // Specific analysis (40-60 words)
  quote: string,              // Funny honest quote (15-25 words)
  encouragement: string       // Motivational line (15-20 words)
}
```

### Environment Variables

```javascript
{
  GROQ_API_KEY: string,   // Groq API authentication key
  PORT: number            // Server port (default: 3000)
}
```

---

## 🔗 Integration Points

### External APIs

**Groq API**
```
Endpoint: https://api.groq.com/openai/v1/chat/completions
Method: POST
Auth: Bearer token (GROQ_API_KEY)
Model: mixtral-8x7b-32768
Rate Limit: Depends on plan (free tier: ~30 req/min)
Response Time: 2-3 seconds
```

### Internal APIs

**GET /**
```
Purpose: Serve frontend
Response: index.html
Status: 200
```

**POST /api/evaluate**
```
Purpose: Evaluate resolution with AI
Request: { category, resolution }
Response: { category, categoryEmoji, categoryTitle, tagline, feedback, quote, encouragement }
Status: 200 (success) | 400 (bad request) | 500 (server error)
```

---

## 🚀 Deployment Architecture

### Local Development

```
Developer Machine
├─ Node.js runtime
├─ npm packages (express, cors, dotenv)
├─ .env file (local API key)
└─ Express server on port 3000
```

### Production (Render)

```
Render.com
├─ Web Service
│  ├─ Runtime: Node.js
│  ├─ Build: npm install
│  ├─ Start: npm start
│  ├─ Port: Auto-assigned (exposed via HTTPS)
│  └─ Environment Variables: GROQ_API_KEY, PORT
├─ Auto-deployment
│  ├─ Trigger: GitHub push to main
│  ├─ Build time: 1-2 minutes
│  └─ Deploy time: 1-2 minutes
└─ Monitoring
   ├─ Logs: Available in dashboard
   ├─ Metrics: CPU, memory, requests
   └─ Health checks: Automatic
```

---

## 📈 Scalability Considerations

### Current Capacity

```
Free Tier (Render):
├─ Concurrent connections: ~100
├─ Requests per minute: ~60
├─ Memory: 512 MB
├─ CPU: 0.1 vCPU
└─ Uptime: 99.9%
```

### Scaling Path

```
If traffic increases:
├─ Upgrade Render plan
│  └─ More CPU, memory, concurrent connections
├─ Add caching
│  └─ Cache common resolutions
├─ Database (optional)
│  └─ Store user feedback history
└─ Load balancing
   └─ Multiple instances
```

---

## 🔄 CI/CD Pipeline

### Current Pipeline

```
Developer
  ↓
git push origin main
  ↓
GitHub
  ↓
Webhook notification
  ↓
Render
  ↓
Build: npm install
  ↓
Test: Syntax check
  ↓
Deploy: npm start
  ↓
Live Application
```

### Future Enhancements

```
Could add:
├─ Automated tests (Jest, Mocha)
├─ Linting (ESLint)
├─ Code coverage (Istanbul)
├─ Pre-commit hooks (Husky)
└─ Staging environment
```

---

## 🛠️ Technology Decisions

### Why Node.js + Express?

✅ **Advantages:**
- Lightweight and fast
- Great for I/O-heavy operations (API calls)
- Large ecosystem (npm packages)
- Easy to deploy
- Single language (JavaScript) for frontend + backend

### Why Groq API?

✅ **Advantages:**
- Free tier available
- Fast inference (2-3 seconds)
- High-quality responses (Mixtral 8x7B)
- Easy to use (OpenAI-compatible)
- No rate limiting on free tier

### Why TailwindCSS?

✅ **Advantages:**
- Utility-first approach
- Minimal CSS output
- Easy responsive design
- Beautiful default styles
- No CSS files to maintain

### Why Render?

✅ **Advantages:**
- Completely free forever
- Auto-deploy from GitHub
- Easy environment variables
- Good uptime SLA
- No credit card required

---

## 📝 Architecture Decisions Log

| Decision | Rationale | Alternative |
|----------|-----------|-------------|
| Vanilla JS (no framework) | Lightweight, no build step | React, Vue |
| Express.js | Minimal, flexible | Fastify, Hapi |
| Groq API | Free, fast, high-quality | OpenAI, Anthropic |
| TailwindCSS | Utility-first, minimal CSS | Bootstrap, Material UI |
| Render | Free, auto-deploy | Heroku, AWS, DigitalOcean |

---

## 🔮 Future Architecture Improvements

### Phase 2 Features

```
├─ User accounts
│  └─ Save resolution history
├─ Database
│  └─ Store feedback, track trends
├─ Analytics
│  └─ Track popular resolutions
├─ Sharing
│  └─ Share results on social media
└─ Mobile app
   └─ Native iOS/Android
```

### Phase 3 Enhancements

```
├─ Multiple AI models
│  └─ Switch between Groq, OpenAI, etc.
├─ Caching layer
│  └─ Redis for common resolutions
├─ Microservices
│  └─ Separate categorization service
├─ WebSocket
│  └─ Real-time feedback streaming
└─ GraphQL
   └─ Alternative to REST API
```

---

**Last Updated:** Jan 2, 2026
**Status:** ✅ Production Ready
