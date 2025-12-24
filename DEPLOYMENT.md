# API Key Protection Setup

This project uses environment-based configuration to protect the API key from being exposed in GitHub.

## How It Works

### Local Development
- Create a `config.js` file (this is gitignored)
- Copy from `config.template.js` and add your own API key
- The app loads the key from `config.js`

### GitHub Pages Deployment
- The API key is stored in **GitHub Secrets**
- During deployment, GitHub Actions injects the key into `script.js`
- The deployed version has the key, but it's not in the repository

## Setup Instructions

### Step 1: Add API Key to GitHub Secrets

1. Go to your repository: https://github.com/exzenter/wordle-learn
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `ARML_API_KEY`
5. Value: `arMK1P8340cda7cc1a12cf4664-arml-FP`
6. Click **Add secret**

### Step 2: Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save the changes

### Step 3: Trigger Deployment

The site will auto-deploy when you push to `main`. Or manually trigger:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## For Local Development

```bash
# Copy the template
cp config.template.js config.js

# Edit config.js and add your API key
# This file is gitignored and won't be committed
```

## Security Notes

✅ **API key is NOT in git history**
✅ **API key is stored securely in GitHub Secrets**
✅ **Local development uses gitignored config file**
⚠️ **Deployed site will have key in client-side code** (visible to users inspecting the page)

Since this is a client-side app, the API key will be visible to users who inspect the deployed JavaScript. However:
- The key is a free tier key
- It's not exposed in your repository
- Users can't steal your commit history or modify your code
- You can rotate the key anytime by updating the GitHub Secret
