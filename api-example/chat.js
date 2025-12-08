/**
 * Example Backend API Endpoint for OpenAI Chat
 * 
 * This is an example Node.js/Express endpoint that securely handles OpenAI API calls.
 * 
 * Setup:
 * 1. Install dependencies: npm install express openai dotenv cors
 * 2. Create .env file with: OPENAI_API_KEY=your_key_here
 * 3. Run: node chat.js
 * 
 * For production, deploy this to:
 * - Vercel Serverless Functions
 * - Netlify Functions
 * - AWS Lambda
 * - Your own Node.js server
 */

const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request: messages array required' });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-3.5-turbo" for cost savings
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || "I apologize, but I'm having trouble processing your request.";

    res.json({
      response: response,
    });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ 
      error: 'Failed to generate response',
      message: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Chat API server running on port ${PORT}`);
});

