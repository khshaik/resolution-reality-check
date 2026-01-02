const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

function normalizeResolutionText(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildDetailedPrompt(category, resolution) {
  const categoryContext = {
    'achievable': {
      title: 'ACTUALLY ACHIEVABLE',
      context: 'This resolution is realistic and within the person\'s control. They\'ve set clear, measurable goals with concrete actions.',
      perspective: 'Focus on how this shows maturity and self-awareness. These are the goals that actually change lives.'
    },
    'optimistic': {
      title: 'OPTIMISTIC BUT POSSIBLE',
      context: 'This resolution requires significant effort, dedication, and lifestyle changes, but it\'s not impossible. It\'s ambitious but achievable with commitment.',
      perspective: 'Acknowledge both the challenge AND the possibility. These goals need a solid plan and discipline.'
    },
    'delusional': {
      title: 'DELUSIONAL (BUT WE ADMIRE THE CONFIDENCE)',
      context: 'This resolution is extremely ambitious, unrealistic, or physically impossible. But that\'s what makes it entertaining and shows beautiful ambition.',
      perspective: 'Celebrate the audacity while being lovingly realistic. This is comedy gold and shows incredible optimism.'
    }
  };

  const ctx = categoryContext[category];

  return `You are a witty, clever New Year's resolution evaluator with a sharp sense of humor. Your job is to give honest but kind feedback that's entertaining and relatable.

RESOLUTION: "${resolution}"
CATEGORY: ${ctx.title}

CONTEXT: ${ctx.context}
PERSPECTIVE: ${ctx.perspective}

ANALYSIS GUIDELINES:
1. Consider what the person is actually trying to accomplish
2. Look for the underlying intention, even if the wording is vague
3. Be specific about WHY this falls into this category
4. Reference the actual words/phrases used in the resolution
5. Use specific, concrete language tied to their goal
6. Match the tone to the category: achievements are celebratory, optimistic ones are encouraging-but-real, delusional ones are lovingly mocking

RESPONSE REQUIREMENTS:
1. Tagline (15-20 words): A witty, relatable opening that captures the essence of this resolution
2. Feedback (40-60 words): Specific, personalized analysis mentioning actual parts of their resolution
3. Quote (15-25 words): A funny, honest quote that a working professional would secretly agree with
4. Encouragement (15-20 words): A final motivational line that's genuinely helpful

Tone: Witty, self-aware, what working professionals secretly need to hear on January 1st.

Respond ONLY with valid JSON:
{
  "tagline": "witty opening specific to their resolution",
  "feedback": "detailed feedback mentioning their specific words and goals",
  "quote": "funny honest quote about this type of goal",
  "encouragement": "genuine motivational line"
}`;
}

// API endpoint to evaluate resolution with AI feedback
app.post('/api/evaluate', async (req, res) => {
  try {
    const { category, resolution } = req.body;

    if (!category || !resolution) {
      return res.status(400).json({ error: 'Missing category or resolution' });
    }

    if (!GROQ_API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const categoryEmoji = {
      'achievable': '✅',
      'optimistic': '🎪',
      'delusional': '🚀'
    };

    const categoryTitle = {
      'achievable': 'ACTUALLY ACHIEVABLE',
      'optimistic': 'OPTIMISTIC BUT POSSIBLE',
      'delusional': 'DELUSIONAL (BUT WE ADMIRE THE CONFIDENCE)'
    };

    const normalizedText = normalizeResolutionText(resolution);
    const prompt = buildDetailedPrompt(category, normalizedText);

    let response;
    try {
      response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'mixtral-8x7b-32768',
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.8,
          max_tokens: 400,
          top_p: 0.9
        }),
        timeout: 30000
      });
    } catch (fetchError) {
      console.error('Network error calling Groq API:', fetchError);
      return res.status(503).json({ error: 'Network error - please try again' });
    }

    if (!response.ok) {
      const error = await response.text();
      console.error('Groq API error:', error, 'Status:', response.status);
      if (response.status === 429) {
        return res.status(429).json({ error: 'API rate limit exceeded - please try again later' });
      }
      if (response.status === 401 || response.status === 403) {
        return res.status(401).json({ error: 'Invalid API key' });
      }
      return res.status(response.status).json({ error: 'Failed to generate feedback' });
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (parseError) {
      console.error('JSON parse error. Content:', content);
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Could not extract JSON from response');
      }
    }

    res.json({
      category,
      categoryEmoji: categoryEmoji[category],
      categoryTitle: categoryTitle[category],
      tagline: parsed.tagline || 'Great goal for 2026!',
      feedback: parsed.feedback || 'Keep up the determination!',
      quote: parsed.quote || 'The best time to start was yesterday, the second best time is now.',
      encouragement: parsed.encouragement || 'You\'ve got this!'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Resolution Reality Check server running at http://localhost:${PORT}`);
  console.log('API endpoint: POST /api/evaluate');
  if (!GROQ_API_KEY) {
    console.warn('WARNING: GROQ_API_KEY not configured. AI feedback will not be available.');
  }
});