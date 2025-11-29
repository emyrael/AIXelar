# Contact Form Setup Instructions

The contact form is now configured to send emails directly to **info@aixelar.io** without redirecting users to their email client.

## Option 1: Using Formspree (Recommended - Easiest)

1. **Sign up for Formspree**: Go to https://formspree.io and create a free account
2. **Create a new form**: Click "New Form" and name it "AIXelar Contact"
3. **Set email recipient**: Enter `info@aixelar.io` as the email address
4. **Get your form ID**: Copy the form endpoint (e.g., `https://formspree.io/f/xjvqkxyz`)
5. **Update the code**: In `src/components/ContactSection.tsx`, replace `YOUR_FORM_ID` with your form ID from step 4

The form is already configured - you just need to add your Formspree form ID!

## Option 2: Using EmailJS (Alternative)

If you prefer EmailJS:

1. **Sign up**: Go to https://www.emailjs.com and create a free account
2. **Create email service**: Add Gmail/Outlook service and connect your email
3. **Create email template**: Set recipient to `info@aixelar.io`
4. **Get credentials**: Copy your Public Key, Service ID, and Template ID
5. **Install package**: Run `npm install @emailjs/browser`
6. **Update ContactSection.tsx**: Replace Formspree code with EmailJS implementation

## Current Implementation

The form currently uses Formspree. Once you add your Formspree form ID, it will:
- ✅ Submit entirely on the platform (no email client redirect)
- ✅ Send emails directly to info@aixelar.io
- ✅ Show success/error messages to users
- ✅ Include loading states during submission
- ✅ Work on all devices and browsers

## Testing

After setup, test the form:
1. Fill out all fields
2. Click "Send Message"
3. Check your email at info@aixelar.io
4. You should receive the form submission

## Free Tier Limits

- **Formspree**: 50 submissions/month (free)
- **EmailJS**: 200 emails/month (free)

Both are sufficient for most business websites.

