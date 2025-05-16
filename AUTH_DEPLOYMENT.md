# Authentication Deployment Instructions

## Environment Variables for Production

When deploying to production, make sure to set the following environment variables on your hosting platform (e.g., Vercel, Netlify, etc.):

```
MONGODB_URI=mongodb+srv://your_production_mongodb_uri
AUTH_SECRET=your_production_auth_secret

# Google OAuth 
AUTH_GOOGLE_ID=your_production_google_client_id
AUTH_GOOGLE_SECRET=your_production_google_client_secret

# Resend (Magic Links)
RESEND_API_KEY=your_production_resend_api_key
RESEND_FROM=your_production_from_email

# IMPORTANT: Set this to your production domain
NEXTAUTH_URL=https://blindandosuenos.com
```

## Important Notes

1. **NEXTAUTH_URL:** This must be set to your production domain URL. OAuth providers and magic links will not work correctly if this points to localhost.

2. **OAuth Callback URLs:** Make sure to add your production domain to the allowed callback URLs in your Google OAuth console.

3. **Email From Address:** Ensure your RESEND_FROM email address is properly set up and verified in Resend.

## Testing Authentication in Production

After deployment:
1. Test regular email/password login
2. Test Google OAuth login
3. Test magic link login by sending an email to yourself

If you encounter any issues with magic links or OAuth in production, double-check that your NEXTAUTH_URL is correctly set to your production domain. 