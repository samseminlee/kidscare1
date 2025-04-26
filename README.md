
# Childcare Matching Platform (NextAuth.js + i18next Integrated)

This is an upgraded MVP for a childcare matching platform including:

- Google Login via NextAuth.js 🔐
- Multilanguage support (Korean/English) 🌐
- Parent care request + Stripe payment (hourly rate)
- Sitter registration form (free)
- Tailwind-based responsive design

## Setup

1. Clone the repository
2. Install dependencies:

```
npm install
```

3. Create `.env.local`:

```
STRIPE_SECRET_KEY=your_stripe_secret_key_here
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_random_string
NEXTAUTH_URL=http://localhost:3000
```

4. Run dev server:

```
npm run dev
```

## Deployment

Push to GitHub and connect with Vercel. Enjoy 🚀
