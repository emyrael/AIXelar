/**
 * Vercel Serverless Function for OpenAI Chat API
 * 
 * This function securely handles OpenAI API calls server-side.
 * Your API key is never exposed to the client.
 * 
 * Environment Variables Required in Vercel:
 * - OPENAI_API_KEY: Your OpenAI API key
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // CORS headers for production
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = request.body;

    if (!messages || !Array.isArray(messages)) {
      return response.status(400).json({ 
        error: 'Invalid request: messages array required' 
      });
    }

    // Get API key from environment variable (set in Vercel dashboard)
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      console.error('OpenAI API key not configured');
      return response.status(500).json({ 
        error: 'OpenAI API key not configured. Please set OPENAI_API_KEY in Vercel environment variables.' 
      });
    }

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json();
      console.error('OpenAI API error:', errorData);
      return response.status(openaiResponse.status).json({ 
        error: 'OpenAI API error',
        message: errorData.error?.message || 'Failed to generate response'
      });
    }

    const data = await openaiResponse.json();
    const aiResponse = data.choices[0]?.message?.content || 
      "I apologize, but I'm having trouble processing your request.";

    return response.status(200).json({
      response: aiResponse,
    });

  } catch (error: any) {
    console.error('Error in chat API:', error);
    return response.status(500).json({ 
      error: 'Internal server error',
      message: error.message || 'Failed to generate response'
    });
  }
}

