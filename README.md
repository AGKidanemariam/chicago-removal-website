# Chicago Removal Company Website

Professional website for Chicago Removal Company with junk removal, furniture removal, and moving services.

## 🌐 Live Website
Your website will be live at: `https://chicago-removal-company.pages.dev`

## 📁 File Structure

```
chicago-removal-website/
├── public/                  ← Website files (this deploys)
│   ├── assets/images/      ← All images including logo
│   ├── index.html          ← Homepage
│   ├── about.html
│   ├── contact.html
│   ├── furniture-removal.html
│   ├── junk-removal.html
│   ├── moving-services.html
│   └── styles.css
├── src/
│   └── index.js            ← Cloudflare Worker for form handling
├── wrangler.toml           ← Cloudflare configuration
├── DATABASE_SETUP.md       ← How to set up contact form database
└── README.md               ← This file
```

## ✏️ How to Edit Your Website

### Edit on GitHub (Easy):
1. Click on any file (e.g., `public/index.html`)
2. Click the pencil icon (✏️ Edit)
3. Make your changes
4. Click "Commit changes" at bottom
5. Your site auto-updates in 1-2 minutes!

### Edit Locally (Advanced):
1. Clone this repo: `git clone https://github.com/AGKidanemariam/chicago-removal-website.git`
2. Edit files in the `public` folder
3. Commit and push: 
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```
4. Site auto-deploys!

## 🎨 Quick Edits You Might Want:

### Change Phone Number:
Find and replace `(224) 269-1006` in all HTML files

### Change Email:
Find and replace `chicagoremovalcompany@gmail.com` in all HTML files

### Update Service Descriptions:
Edit the content in:
- `public/junk-removal.html`
- `public/furniture-removal.html`
- `public/moving-services.html`

### Change Colors:
Edit `public/styles.css` - look for these CSS variables at the top:
```css
:root {
  --primary: #0d1829;      /* Dark blue */
  --secondary: #e86a33;    /* Orange */
  /* Change these colors! */
}
```

### Replace Images:
1. Upload new image to `public/assets/images/`
2. Update the image path in the HTML file
3. Commit changes

## 📞 Contact Info
- **Phone:** (224) 269-1006
- **Email:** chicagoremovalcompany@gmail.com
- **Service Area:** Chicago & Surrounding Suburbs

## 🗄️ Database Setup
See **DATABASE_SETUP.md** for instructions on connecting your contact form to save submissions to your Cloudflare D1 database.

## 📄 Pages
- Homepage: `index.html`
- About: `about.html`
- Junk Removal: `junk-removal.html`
- Furniture Removal: `furniture-removal.html`
- Moving Services: `moving-services.html`
- Contact: `contact.html`

## 🎨 Your Branding
- **Logo:** `public/assets/images/crc-logo.png`
- **Colors:** Navy Blue (#0d1829) and Orange (#e86a33)
- **Fonts:** Oswald (headings), Inter (body)

---

**Need help?** All documentation is included in this repository!
