# Vercel Deployment Guide for Xelar

## ✅ Important: DO NOT Commit .env File

Your `.env` file contains your OpenAI API key and should **NEVER** be committed to Git. It's already in `.gitignore`, which is correct.

## 🚀 Deployment Steps

### Option 1: Secure Backend API (Recommended)

This uses a Vercel serverless function to keep your API key secure.

#### Step 1: Install Vercel CLI (if not already installed)
```bash
npm i -g vercel
```

#### Step 2: Set Environment Variables in Vercel

**Via Vercel Dashboard:**
1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on **Settings** → **Environment Variables**
3. Add the following:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (starts with `sk-proj-...`)
   - **Environment:** Production, Preview, Development (select all)

**Via Vercel CLI:**
```bash
vercel env add OPENAI_API_KEY
# Paste your API key when prompted
# Select: Production, Preview, Development
```

#### Step 3: Update Your Code to Use Backend API

The code is already configured to use the backend API when `VITE_USE_BACKEND_API=true`.

**Before deploying, update your `.env` file locally:**
```env
VITE_USE_BACKEND_API=true
VITE_OPENAI_API_ENDPOINT=/api/chat
```

**Or set these in Vercel Environment Variables:**
- `VITE_USE_BACKEND_API=true`
- `VITE_OPENAI_API_ENDPOINT=/api/chat`

#### Step 4: Deploy to Vercel

```bash
# If first time deploying
vercel

# If already deployed, push to Git and Vercel will auto-deploy
git add .
git commit -m "Add Vercel serverless function for OpenAI API"
git push origin main
```

Vercel will automatically detect your project and deploy it.

---

### Option 2: Client-Side API (Less Secure - Not Recommended)

⚠️ **Warning:** This exposes your API key in the client-side code. Only use for testing.

#### Step 1: Set Environment Variables in Vercel

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add:
   - **Name:** `VITE_OPENAI_API_KEY`
   - **Value:** Your OpenAI API key
   - **Environment:** Production, Preview, Development

#### Step 2: Keep Current Code

Make sure `VITE_USE_BACKEND_API=false` in your environment variables (or don't set it).

---

## 🔧 Troubleshooting

### Issue: "OpenAI API key not configured"

**Solution:** Make sure you've set `OPENAI_API_KEY` in Vercel Environment Variables.

### Issue: CORS errors

**Solution:** The serverless function already includes CORS headers. If you still see errors, check that the function is deployed correctly.

### Issue: Function timeout

**Solution:** The `vercel.json` file sets `maxDuration: 30` seconds. If you need more time, increase this value.

### Issue: API endpoint not found

**Solution:** 
- Make sure `api/chat.ts` exists in your project root
- Check that `vercel.json` is configured correctly
- Verify the function is deployed: Check Vercel Dashboard → Functions tab

---

## 📝 Environment Variables Summary

### For Secure Backend API (Recommended):
```
OPENAI_API_KEY=sk-proj-... (set in Vercel, NOT in .env)
VITE_USE_BACKEND_API=true (set in Vercel)
VITE_OPENAI_API_ENDPOINT=/api/chat (set in Vercel)
```

### For Client-Side API (Not Recommended):
```
VITE_OPENAI_API_KEY=sk-proj-... (set in Vercel)
VITE_USE_BACKEND_API=false (or don't set it)
```

---

## ✅ Checklist Before Deploying

- [ ] `.env` file is in `.gitignore` (already done ✅)
- [ ] `api/chat.ts` exists in project root
- [ ] `vercel.json` is configured
- [ ] Environment variables are set in Vercel Dashboard
- [ ] Code is committed and pushed to Git
- [ ] Vercel project is connected to your Git repository

---

## 🎯 After Deployment

1. Test the chat widget on your live site
2. Check Vercel Dashboard → Functions tab for any errors
3. Monitor API usage in OpenAI Dashboard
4. Set up rate limiting if needed (Vercel Pro plan)

---

## 🔒 Security Best Practices

1. ✅ **Use Backend API** (Option 1) - Keeps API key secure
2. ✅ **Never commit `.env`** - Already in `.gitignore`
3. ✅ **Set environment variables in Vercel** - Not in code
4. ✅ **Monitor API usage** - Check OpenAI Dashboard regularly
5. ✅ **Set up rate limiting** - Prevent abuse (Vercel Pro)

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Functions: https://vercel.com/docs/functions
- OpenAI API Docs: https://platform.openai.com/docs

