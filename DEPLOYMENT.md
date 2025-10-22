# Deployment Guide

This guide helps you deploy the Tolyns Tours & Travel website to various hosting platforms without encountering 404 errors on page refreshes.

## The Problem

Single Page Applications (SPAs) like this React app use client-side routing. When you refresh a page like `/destinations/maasai-mara`, the browser requests that URL from the server. Without proper configuration, the server looks for a file at that path, doesn't find it, and returns a 404 error.

## Solution

The solution is to configure your server to always serve `index.html` for all routes, allowing React Router to handle the routing on the client side.

## Platform-Specific Instructions

### Apache Server (Shared Hosting)

Most shared hosting providers use Apache. The `.htaccess` file in the `public` folder is automatically included when you build and deploy.

**Steps:**
1. Build your project: `npm run build` or `bun run build`
2. Upload the contents of the `dist` folder to your web server's public directory (often `public_html` or `www`)
3. The `.htaccess` file will be automatically deployed with your build

**Requirements:** Your hosting must have `mod_rewrite` enabled (most shared hosts do).

### Nginx Server

If your hosting uses Nginx, add this to your nginx configuration:

```nginx
server {
    listen 80;
    server_name tolynstours.co.ke;
    root /var/www/html;
    index index.html;

    # Serve static files directly
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### Netlify

The `_redirects` file in the `public` folder handles routing automatically.

**Deploy:**
- Connect your Git repository, or
- Drag and drop your `dist` folder to Netlify

### Vercel

The `vercel.json` file in the project root handles routing automatically.

**Deploy:**
- Run `vercel` command, or
- Connect your Git repository

### Other Hosting Providers

#### cPanel / DirectAdmin
Same as Apache - use the `.htaccess` file (included automatically).

#### AWS S3 + CloudFront
Set the error page to redirect 404 errors to `/index.html` with a 200 status code.

#### Firebase Hosting
Add to `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Testing After Deployment

1. Visit your homepage: `https://yourdomain.com`
2. Navigate to a subpage: `https://yourdomain.com/destinations/maasai-mara`
3. Refresh the page (F5 or Ctrl+R)
4. The page should load correctly without a 404 error

## Troubleshooting

### Still getting 404 errors?

1. **Apache:** Verify `mod_rewrite` is enabled on your server
2. **Nginx:** Make sure you've updated the config and restarted: `sudo systemctl restart nginx`
3. **Check .htaccess:** Ensure the `.htaccess` file is in the root of your deployed files
4. **File permissions:** Ensure your `.htaccess` file has proper permissions (usually 644)
5. **Build correctly:** Make sure you're deploying the `dist` folder contents, not the `dist` folder itself

### Contact

If you need help with deployment, contact your hosting provider's support or reach out to your development team.
