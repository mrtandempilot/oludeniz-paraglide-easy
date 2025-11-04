# 🚀 Website Upgrade Installation Guide

## 📦 What You're Getting

Your website now has:
- ✅ AI Chat Widget integrated with n8n
- ✅ Dynamic tours from Supabase
- ✅ Real-time booking system
- ✅ Multi-language support (TR/EN)
- ✅ Complete CRM integration

---

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ Node.js installed (v18 or higher)
- ✅ Your Supabase project running
- ✅ Your n8n workflow active
- ✅ Access to your website code

---

## 🔧 Installation Steps

### Step 1: Install Dependencies

```bash
cd your-website-folder
npm install @supabase/supabase-js uuid
```

### Step 2: Add New Files

Copy these files to your project:

```
src/
├── lib/
│   ├── supabase.ts         (NEW)
│   └── n8n.ts              (NEW)
├── hooks/
│   ├── useTours.ts         (NEW)
│   └── useChat.ts          (NEW)
└── components/
    ├── ChatWidget.tsx      (NEW)
    └── ServicesUpdated.tsx (REPLACE Services.tsx)
```

**How to add files:**
1. Create the folders if they don't exist
2. Copy the content from each file I created
3. Paste into new files in your project

### Step 3: Set Up Environment Variables

1. Create `.env` file in your project root:
```bash
cp .env.example .env
```

2. Get your Supabase anon key:
   - Go to: https://app.supabase.com/project/wpprlxuqvrinqefybatt/settings/api
   - Copy the "anon" / "public" key
   - Paste it in `.env`

3. Get your n8n webhook URL:
   - Open n8n
   - Open "Travel Agency - Enhanced CRM" workflow
   - Click "When chat message received" node
   - Copy the webhook URL
   - Paste it in `.env`

4. Your `.env` should look like:
```env
VITE_SUPABASE_URL=https://wpprlxuqvrinqefybatt.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...your-actual-key
VITE_N8N_WEBHOOK_URL=https://your-n8n.com/webhook/a487d0ab...
VITE_WHATSAPP_NUMBER=905321234567
```

### Step 4: Update Index.tsx

Add ChatWidget to your main page:

```typescript
// src/pages/Index.tsx
import Hero from "@/components/Hero";
import ServicesUpdated from "@/components/ServicesUpdated"; // Changed!
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ChatWidget from "@/components/ChatWidget"; // NEW!

const Index = () => {
  return (
    <>
      <SEO />
      <LanguageSwitcher />
      <main className="min-h-screen">
        <Hero />
        <ServicesUpdated /> {/* Changed from Services */}
        <Testimonials />
        <LocationMap />
        <Footer />
      </main>
      <ChatWidget /> {/* NEW! */}
    </>
  );
};

export default Index;
```

### Step 5: Update package.json (if needed)

Make sure you have these dependencies:

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.39.0",
    "uuid": "^9.0.1",
    // ... your existing dependencies
  }
}
```

### Step 6: Restart Development Server

```bash
npm run dev
```

---

## ✅ Testing Checklist

### Test 1: Tours Loading
1. Open website
2. Scroll to "Our Tours" section
3. ✅ Should see 5 tours with prices from Supabase
4. ✅ Should see €150 for Paragliding, €45 for 12 Islands, etc.

### Test 2: Chat Widget
1. Click chat button (bottom right)
2. ✅ Chat window opens
3. ✅ See greeting message
4. Type "Hi"
5. ✅ AI responds from n8n

### Test 3: Booking Flow
1. Click "Book Now" on any tour
2. ✅ Chat opens with pre-filled message
3. Follow AI conversation
4. Complete booking details
5. ✅ Check Supabase - booking should appear in `bookings` table
6. ✅ Check Telegram - you should receive notification

### Test 4: Multi-language
1. Switch language (TR/EN)
2. ✅ Tours show correct language
3. ✅ Chat greetings change language
4. ✅ Everything translates

---

## 🐛 Troubleshooting

### Problem: Tours Not Loading

**Error:** "Failed to load tours"

**Solutions:**
1. Check `.env` file has correct `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
2. Restart dev server after adding `.env`
3. Check browser console for errors
4. Verify tours exist in Supabase:
   ```sql
   SELECT * FROM tours WHERE is_active = true;
   ```

### Problem: Chat Not Responding

**Error:** Messages not sending or no response

**Solutions:**
1. Check `.env` has correct `VITE_N8N_WEBHOOK_URL`
2. Verify n8n workflow is ACTIVE (toggle at top)
3. Check n8n execution log for errors
4. Test webhook directly:
   ```bash
   curl -X POST your-webhook-url \
     -H "Content-Type: application/json" \
     -d '{"chatInput":"test","sessionId":"test123"}'
   ```

### Problem: Environment Variables Not Working

**Error:** undefined URLs or keys

**Solutions:**
1. Restart dev server (CTRL+C, then `npm run dev`)
2. Check `.env` is in project ROOT (not in src/)
3. Variable names must start with `VITE_`
4. No quotes needed: `VITE_KEY=value` not `VITE_KEY="value"`

### Problem: Build Errors

**Error:** Module not found

**Solutions:**
1. Run `npm install` again
2. Delete `node_modules` and `package-lock.json`, run `npm install`
3. Check all import paths are correct
4. Make sure all files are in correct folders

---

## 📱 Mobile Testing

1. Test on mobile device:
   - Chat widget should be responsive
   - Tours should display in grid
   - Booking flow should work smoothly

2. Test WhatsApp button:
   - Click should open WhatsApp
   - Number should be correct

---

## 🚀 Deployment

### For Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_N8N_WEBHOOK_URL`
   - `VITE_WHATSAPP_NUMBER`
4. Deploy!

### For Netlify:

1. Push to GitHub
2. Connect to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy!

---

## 🎨 Customization

### Change Chat Widget Colors

Edit `src/components/ChatWidget.tsx`:

```typescript
// Change gradient colors
className="bg-gradient-to-r from-primary to-secondary"

// Change position
className="fixed bottom-6 right-6" // Change these values
```

### Add Your Tour Images

1. Add images to `src/assets/`
2. Update `ServicesUpdated.tsx`:
```typescript
import paragliding from "@/assets/paragliding.jpg";
import islands from "@/assets/12-islands.jpg";
// etc...
```

3. Update image mapping:
```typescript
const tourImages = {
  'paragliding-babadag': paragliding,
  '12-islands-boat-trip': islands,
  // etc...
};
```

### Adjust Tour Display

Edit `ServicesUpdated.tsx`:
- Change grid columns: `grid-cols-3` → `grid-cols-2`
- Show more/less features: `slice(0, 4)` → `slice(0, 6)`
- Add filters by category
- Add search functionality

---

## 📊 Analytics (Optional)

Add Google Analytics:

```typescript
// In App.tsx or main.tsx
import { useEffect } from 'react';

// Track page views
useEffect(() => {
  window.gtag?.('event', 'page_view', {
    page_path: window.location.pathname,
  });
}, []);

// Track chat opens
const handleChatOpen = () => {
  window.gtag?.('event', 'chat_opened', {
    event_category: 'engagement',
  });
};
```

---

## 🔐 Security Best Practices

### Already Implemented:
- ✅ Using Supabase anon key (safe for frontend)
- ✅ n8n webhook is rate-limited
- ✅ No sensitive data in frontend
- ✅ Session IDs are temporary

### Additional Recommendations:
- 🔒 Enable RLS (Row Level Security) in Supabase
- 🔒 Set up CORS in n8n webhook
- 🔒 Use HTTPS only in production
- 🔒 Monitor webhook usage

---

## 📈 Performance Optimization

### Already Implemented:
- ✅ React Query for caching (5 min cache)
- ✅ Lazy loading images
- ✅ Session storage for chat history

### Can Add:
- 📦 Image optimization (sharp, next/image)
- 🚀 Code splitting
- 💾 Service workers for offline support

---

## 🆘 Need Help?

### Check These First:
1. Browser console (F12) for errors
2. n8n execution log
3. Supabase logs (Settings → API → Logs)
4. Network tab (see if requests are going through)

### Common Issues:
- **Tours showing 3200 TL**: Old hardcoded data, ServicesUpdated.tsx not imported
- **Chat not opening**: Check ChatWidget is imported in Index.tsx
- **No AI response**: n8n workflow not active or webhook URL wrong
- **Blank page**: Check browser console, likely import error

---

## ✅ Success Indicators

You'll know everything works when:
- ✅ Tours load with correct prices from Supabase
- ✅ Chat opens and AI responds
- ✅ Booking creates entries in Supabase
- ✅ Telegram notifications arrive
- ✅ Multi-language works
- ✅ Mobile responsive
- ✅ No console errors

---

## 🎉 You're Done!

Your website is now a **complete travel booking system** with:
- AI-powered chat
- Dynamic tour management
- Automated bookings
- CRM integration
- Multi-channel support ready

**Next Steps:**
- Test thoroughly
- Deploy to production
- Monitor bookings
- Add more tours as needed
- Set up WhatsApp integration (Phase 4)
- Build admin dashboard (Phase 5)

---

Need help? Check the troubleshooting section or let me know! 🚀
