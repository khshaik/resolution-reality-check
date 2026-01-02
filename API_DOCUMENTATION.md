# Resolution Reality Check - API Documentation

## 📡 API Endpoints

### Overview

The Resolution Reality Check API provides a single endpoint for evaluating New Year's resolutions with AI-powered feedback.

---

## POST /api/evaluate

Evaluates a resolution and returns categorized feedback.

### Request

**URL:** `POST /api/evaluate`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "category": "string",
  "resolution": "string"
}
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category` | string | Yes | Category: `achievable`, `optimistic`, or `delusional` |
| `resolution` | string | Yes | User's resolution text (1-500 characters) |

### Response

**Status Code:** `200 OK`

**Body:**
```json
{
  "category": "optimistic",
  "categoryEmoji": "🎪",
  "categoryTitle": "OPTIMISTIC BUT POSSIBLE",
  "tagline": "You're playing on hard mode, but hey, we respect the ambition.",
  "feedback": "Going to the gym 5 times a week requires serious commitment, consistency, and probably some sacrifice. But it's not impossible—just don't expect it to happen by February. This is a marathon, not a sprint.",
  "quote": "Will it be easy? Absolutely not. Impossible? Also no.",
  "encouragement": "Bring coffee. Lots of coffee."
}
```

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `category` | string | Resolution category |
| `categoryEmoji` | string | Emoji representation (✅/🎪/🚀) |
| `categoryTitle` | string | Full category name |
| `tagline` | string | Witty opening line (15-20 words) |
| `feedback` | string | Specific analysis (40-60 words) |
| `quote` | string | Funny honest quote (15-25 words) |
| `encouragement` | string | Motivational closing (15-20 words) |

---

## Error Responses

### 400 Bad Request

**When:** Missing or invalid parameters

```json
{
  "error": "Missing category or resolution"
}
```

### 401 Unauthorized

**When:** Invalid API key

```json
{
  "error": "Invalid API key"
}
```

### 429 Too Many Requests

**When:** Rate limit exceeded

```json
{
  "error": "API rate limit exceeded - please try again later"
}
```

### 500 Internal Server Error

**When:** Server error or API key not configured

```json
{
  "error": "API key not configured"
}
```

```json
{
  "error": "Internal server error",
  "message": "Error details here"
}
```

### 503 Service Unavailable

**When:** Network error or Groq API unavailable

```json
{
  "error": "Network error - please try again"
}
```

---

## Examples

### Example 1: Achievable Resolution

**Request:**
```bash
curl -X POST http://localhost:3000/api/evaluate \
  -H "Content-Type: application/json" \
  -d '{
    "category": "achievable",
    "resolution": "Read one book per month"
  }'
```

**Response:**
```json
{
  "category": "achievable",
  "categoryEmoji": "✅",
  "categoryTitle": "ACTUALLY ACHIEVABLE",
  "tagline": "This is the kind of goal that separates the dreamers from the doers.",
  "feedback": "Your resolution 'Read one book per month' is refreshingly realistic. You've identified something genuinely within your control. That's the sweet spot where New Year's resolutions actually become reality.",
  "quote": "You've got this. Seriously. No delusion required.",
  "encouragement": "The universe is nodding in approval."
}
```

### Example 2: Optimistic Resolution

**Request:**
```bash
curl -X POST http://localhost:3000/api/evaluate \
  -H "Content-Type: application/json" \
  -d '{
    "category": "optimistic",
    "resolution": "Go to gym 5 times a week"
  }'
```

**Response:**
```json
{
  "category": "optimistic",
  "categoryEmoji": "🎪",
  "categoryTitle": "OPTIMISTIC BUT POSSIBLE",
  "tagline": "You're playing on hard mode, but hey, we respect the ambition.",
  "feedback": "Your resolution 'Go to gym 5 times a week' requires commitment, consistency, and probably some sacrifice. But it's not impossible—just don't expect it to happen by February. This is a marathon, not a sprint.",
  "quote": "Will it be easy? Absolutely not. Impossible? Also no.",
  "encouragement": "Bring coffee. Lots of coffee."
}
```

### Example 3: Delusional Resolution

**Request:**
```bash
curl -X POST http://localhost:3000/api/evaluate \
  -H "Content-Type: application/json" \
  -d '{
    "category": "delusional",
    "resolution": "Circumnavigate globe on bicycle"
  }'
```

**Response:**
```json
{
  "category": "delusional",
  "categoryEmoji": "🚀",
  "categoryTitle": "DELUSIONAL (BUT WE ADMIRE THE CONFIDENCE)",
  "tagline": "This is the energy we need more of in the world.",
  "feedback": "Your resolution 'Circumnavigate globe on bicycle' is the kind of goal that makes life interesting. It's ambitious. It's bold. It might be slightly unrealistic, but that's what makes it fun. If you somehow pull it off, you'll have the best story at every party.",
  "quote": "If you pull this off, you'll be a legend. If not, at least you tried spectacularly.",
  "encouragement": "We're rooting for you, you beautiful dreamer."
}
```

---

## JavaScript/Fetch Example

```javascript
async function evaluateResolution(category, resolution) {
  try {
    const response = await fetch('/api/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category,
        resolution
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Feedback:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage
evaluateResolution('optimistic', 'Go to gym 5 times a week');
```

---

## Python Example

```python
import requests
import json

def evaluate_resolution(category, resolution):
    url = 'http://localhost:3000/api/evaluate'
    headers = {'Content-Type': 'application/json'}
    data = {
        'category': category,
        'resolution': resolution
    }
    
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code == 200:
        feedback = response.json()
        print(json.dumps(feedback, indent=2))
        return feedback
    else:
        print(f'Error: {response.status_code}')
        print(response.json())

# Usage
evaluate_resolution('optimistic', 'Go to gym 5 times a week')
```

---

## Rate Limiting

**Free Tier (Groq API):**
- Requests per minute: ~30
- Concurrent requests: 1
- Response time: 2-3 seconds

**Handling Rate Limits:**
```javascript
if (response.status === 429) {
  // Wait and retry
  setTimeout(() => evaluateResolution(), 5000);
}
```

---

## Authentication

**API Key Location:** Environment variable `GROQ_API_KEY`

**How it Works:**
1. API key stored server-side in `.env` (local) or environment variable (production)
2. Never exposed to client/browser
3. Backend uses key to call Groq API
4. Client never needs to authenticate

**Security:**
- ✅ API key never sent to client
- ✅ All Groq API calls made server-side
- ✅ Client only sends resolution text
- ✅ Safe to use publicly

---

## Performance

| Metric | Value |
|--------|-------|
| Response Time | 2-3 seconds |
| Cold Start | ~30 seconds (first request) |
| Warm Response | 2-3 seconds |
| Timeout | 30 seconds |
| Max Request Size | 1 MB |

---

## Validation Rules

**Category:**
- Must be: `achievable`, `optimistic`, or `delusional`
- Case-sensitive
- Required

**Resolution:**
- Minimum length: 1 character
- Maximum length: 500 characters
- Required
- Cannot be empty or whitespace only

---

## Status Codes

| Code | Meaning | When |
|------|---------|------|
| 200 | Success | Request processed successfully |
| 400 | Bad Request | Missing or invalid parameters |
| 401 | Unauthorized | Invalid API key |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Server Error | Internal server error |
| 503 | Service Unavailable | Groq API unavailable |

---

## CORS

**Enabled:** Yes

**Allowed Origins:** All (`*`)

**Allowed Methods:** GET, POST, OPTIONS

**Allowed Headers:** Content-Type

---

## Testing the API

### Using cURL

```bash
# Test achievable
curl -X POST http://localhost:3000/api/evaluate \
  -H "Content-Type: application/json" \
  -d '{"category":"achievable","resolution":"Read one book per month"}'

# Test optimistic
curl -X POST http://localhost:3000/api/evaluate \
  -H "Content-Type: application/json" \
  -d '{"category":"optimistic","resolution":"Go to gym 5 times a week"}'

# Test delusional
curl -X POST http://localhost:3000/api/evaluate \
  -H "Content-Type: application/json" \
  -d '{"category":"delusional","resolution":"Circumnavigate globe on bicycle"}'
```

### Using Postman

1. Create new POST request
2. URL: `http://localhost:3000/api/evaluate`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "category": "optimistic",
  "resolution": "Go to gym 5 times a week"
}
```
5. Click Send

---

## Troubleshooting

### "API key not configured"
- Check `.env` file has `GROQ_API_KEY`
- Verify key is not empty
- Restart server after adding key

### "Invalid API key"
- Verify key is complete (no truncation)
- Check for extra spaces
- Get new key from https://console.groq.com/

### "Network error"
- Check internet connection
- Verify Groq API is accessible
- Check firewall settings

### "Rate limit exceeded"
- Wait 1-2 minutes
- Reduce request frequency
- Upgrade Groq plan if needed

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 2, 2026 | Initial API release |

---

**Last Updated:** Jan 2, 2026
**Status:** ✅ Production Ready
