# GitHub Pages Setup Guide

This guide will help you deploy your portfolio site to GitHub Pages.

## Prerequisites
- Your code is pushed to a GitHub repository
- You have admin access to the repository

## Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository on GitHub.com
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions` (recommended - uses the workflow we created)
   - OR **Source**: `Deploy from a branch` → Select `gh-pages` branch and `/ (root)` folder
5. Click **Save**

## Step 2: Configure Custom Domain (dhanushrepaka.com)

Since you have a custom domain:

1. In the **Pages** settings, scroll to **Custom domain**
2. Enter: `dhanushrepaka.com`
3. Check **Enforce HTTPS** (recommended)
4. Click **Save**

## Step 3: DNS Configuration

Configure your domain's DNS records:

### Option A: Using A Records (Recommended)
Add these A records to your domain's DNS:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### Option B: Using CNAME Record
Add this CNAME record:
```
Type: CNAME
Name: @
Value: yourusername.github.io
TTL: 3600
```

**Note:** If using CNAME, you may also need:
```
Type: CNAME
Name: www
Value: yourusername.github.io
TTL: 3600
```

## Step 4: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your React app when you push to `main` branch
- Deploy to GitHub Pages
- Update your site automatically

### To trigger deployment:

1. **Automatic**: Just push to `main` branch
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

2. **Manual**: Go to **Actions** tab → Select workflow → **Run workflow**

## Step 5: Verify Deployment

1. Wait 2-5 minutes after pushing
2. Check the **Actions** tab to see if deployment succeeded
3. Visit your site:
   - Custom domain: `https://dhanushrepaka.com`
   - GitHub Pages: `https://yourusername.github.io/repository-name`

## Troubleshooting

### Build fails
- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Verify `yarn install` works locally

### Site not updating
- Clear browser cache
- Check GitHub Actions for deployment status
- Verify the workflow completed successfully

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain settings in GitHub Pages
- Ensure CNAME file is in `frontend/public/CNAME`

### 404 errors on refresh
- This is normal for React Router
- GitHub Pages will serve `index.html` for all routes
- The routing is already configured in `App.js`

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
cd frontend
yarn install
yarn build

# Install gh-pages if not installed
yarn add -D gh-pages

# Deploy
yarn deploy
```

## Files Created

- `.github/workflows/deploy.yml` - Automatic deployment workflow
- `frontend/public/CNAME` - Custom domain configuration
- `frontend/package.json` - Updated with deployment scripts

## Next Steps

1. Push all changes to GitHub
2. Enable GitHub Pages in repository settings
3. Configure your custom domain DNS
4. Wait for first deployment (check Actions tab)
5. Visit your live site!

Your site will automatically update every time you push to the `main` branch! 🚀
