# Chicago Removal Company Website

A modern, professional website for Chicago Removal Company with custom images, built with HTML/CSS and optimized for Cloudflare Pages.

## 🚀 Quick Deploy to Cloudflare Pages

### Option 1: Direct Upload (5 Minutes - Easiest!)

1. **Go to Cloudflare Pages:**
   - Visit [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Click "Workers & Pages" → "Create application" → "Pages" → "Upload assets"

2. **Upload the entire `public` folder:**
   - Drag and drop the whole folder or select all files inside it
   - Make sure the `assets/images` folder is included!

3. **Name your project:** `chicago-removal-company`

4. **Click "Deploy site"**

5. **Your site is live!** 🎉 at `https://chicago-removal-company.pages.dev`

### Option 2: GitHub Integration (Best for Updates)

1. **Create a GitHub repository** at https://github.com/new

2. **Push your code:**
   ```bash
   cd /path/to/this/folder
   git init
   git add .
   git commit -m "Initial commit with custom images"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/chicago-removal.git
   git push -u origin main
   ```

3. **Connect to Cloudflare:**
   - Go to Cloudflare Dashboard → Workers & Pages
   - Click "Create application" → "Pages" → "Connect to Git"
   - Authorize GitHub and select your repository
   - **Build settings:**
     - Framework preset: None
     - Build command: (leave empty)
     - Build output directory: `public`
   - Click "Save and Deploy"

4. **Auto-deploys:** Every time you push to GitHub, Cloudflare will automatically update your site!

## 📁 Project Structure

```
chicago-removal-company/
├── public/                          # Deploy this folder!
│   ├── assets/
│   │   └── images/                  # Your custom images
│   │       ├── clean_empty_living_room_after_junk_removal.png
│   │       ├── friendly_junk_removal_crew_with_truck_and_boxes_in_chicago_neighborhood.png
│   │       ├── modern_minimalist_interior_with_designer_furniture_and_light.png
│   │       ├── movers_carrying_boxes_in_hallway.png
│   │       └── professional_junk_removal_truck_in_chicago_city_street.png
│   ├── index.html                   # Homepage with hero image
│   ├── about.html                   # About page with truck image
│   ├── contact.html                 # Contact form
│   ├── furniture-removal.html       # Furniture service with movers image
│   ├── junk-removal.html           # Junk removal service with clean room image
│   ├── moving-services.html        # Moving service with movers image
│   └── styles.css                   # All styling
├── src/
│   └── index.js                     # Cloudflare Worker (optional)
├── wrangler.toml                    # Cloudflare configuration
├── .gitignore                       # Git ignore file
└── README.md                        # This file
```

## 🖼️ Custom Images

Your website now uses **your own custom images** stored in `public/assets/images/`:

- **Homepage hero:** Professional truck in Chicago
- **About page:** Your removal truck
- **Junk Removal:** Clean empty living room (after service)
- **Furniture Removal:** Movers carrying boxes
- **Moving Services:** Movers in hallway

All images are optimized and will load from your Cloudflare deployment.

### Image Mapping:
```
Homepage Hero → professional_junk_removal_truck_in_chicago_city_street.png
About Page → professional_junk_removal_truck_in_chicago_city_street.png
Junk Removal → clean_empty_living_room_after_junk_removal.png
Furniture Removal → movers_carrying_boxes_in_hallway.png
Moving Services → movers_carrying_boxes_in_hallway.png
```

### To Add More Images:
1. Add new images to `public/assets/images/`
2. Reference them in HTML: `<img src="assets/images/your-image.png" alt="...">`
3. Redeploy to Cloudflare

## 🛠️ Local Development

Test your site locally before deploying:

### Using Python:
```bash
cd public
python -m http.server 8000
```

### Using Node.js:
```bash
npx http-server public -p 8000
```

Then visit `http://localhost:8000` in your browser.

## 📝 Customization

### Update Contact Information:
Find and replace in all HTML files:
- Phone: `(224) 269-1006` → Your number
- Email: `chicagoremovalcompany@gmail.com` → Your email

### Change Brand Colors:
Edit `public/styles.css` variables:
```css
:root {
  --primary: #0d1829;      /* Dark blue */
  --secondary: #e86a33;    /* Orange */
  --background: #fdf9f7;   /* Off-white */
  /* Change these to your brand colors */
}
```

### Update Content:
Just edit the HTML files in the `public` folder:
- `index.html` - Homepage
- `about.html` - Company info
- `junk-removal.html` - Junk removal service details
- `furniture-removal.html` - Furniture removal details
- `moving-services.html` - Moving service details
- `contact.html` - Contact form and info

## 🌐 Custom Domain Setup

After deploying to Cloudflare Pages:

1. **Go to your Pages project** in Cloudflare Dashboard
2. **Click "Custom domains"**
3. **Add your domain** (e.g., chicagoremoval.com)
4. **Update DNS:**
   - If domain is already on Cloudflare: DNS updates automatically
   - If not: Change nameservers to Cloudflare at your registrar
5. **Free SSL certificate** is automatically provisioned!

## 📱 Features

✅ Fully responsive design (mobile, tablet, desktop)  
✅ Custom images optimized for web  
✅ Fast loading times  
✅ SEO-friendly HTML structure  
✅ Mobile-friendly navigation  
✅ Professional styling  
✅ Contact form  
✅ Service detail pages  
✅ Sticky navigation  
✅ Click-to-call phone numbers  
✅ Click-to-email links  

## 🔄 Updating Your Site

### If using GitHub:
```bash
# Make your changes, then:
git add .
git commit -m "Updated content"
git push
```
Cloudflare automatically redeploys!

### If using direct upload:
1. Make changes to files in `public` folder
2. Go to Cloudflare Pages project
3. Click "Create a new deployment"
4. Upload the updated `public` folder
5. Deploy!

## 🐛 Troubleshooting

### Images not loading?
- ✅ Verify `assets/images/` folder exists in `public`
- ✅ Check image filenames match exactly (case-sensitive!)
- ✅ Make sure you uploaded the entire `public` folder
- ✅ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Site not updating?
- Clear Cloudflare cache in dashboard
- Wait 1-2 minutes for deployment to complete
- Try hard refresh in browser

### Forms not working?
- Current form uses JavaScript alert (demo only)
- For real forms, integrate:
  - [Formspree](https://formspree.io) (easiest)
  - [Netlify Forms](https://www.netlify.com/products/forms/)
  - [Cloudflare Workers](https://developers.cloudflare.com/workers/)
  - [Web3Forms](https://web3forms.com)

### Mobile menu not working?
- Check that JavaScript is enabled in browser
- Verify the mobile-menu script is at bottom of HTML files

## 🎨 Image Optimization Tips

Your current images are already web-optimized, but if you add more:

1. **Compress images** before uploading:
   - Use [TinyPNG](https://tinypng.com)
   - Or [Squoosh](https://squoosh.app)
   
2. **Recommended sizes:**
   - Hero images: 1920x1080px
   - Content images: 800-1200px wide
   - Thumbnails: 400-600px wide

3. **File formats:**
   - Use PNG for graphics/logos (with transparency)
   - Use JPG for photos
   - Consider WebP for best compression

## 📊 Performance Tips

- ✅ Images are already optimized
- ✅ CSS is minified and efficient
- ✅ Cloudflare CDN serves files globally
- ✅ Minimal JavaScript for fast loading

### Additional optimizations:
1. Enable Cloudflare's "Auto Minify" for HTML/CSS/JS
2. Enable "Brotli" compression in Cloudflare
3. Use Cloudflare's "Rocket Loader" for async JS loading

## 📞 Support Resources

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **Cloudflare Community:** https://community.cloudflare.com/
- **Support Portal:** https://support.cloudflare.com/

## 💰 Pricing

**Cloudflare Pages is FREE for:**
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- 1 build at a time
- Free SSL certificates

**Perfect for small business websites!**

## 📄 License

All rights reserved © 2026 Chicago Removal Company

---

## ✨ What's Different from Generic Deployment?

Unlike the previous version with Unsplash placeholder images, this version:
- ✅ Uses **YOUR actual custom images**
- ✅ Images are **stored locally** in your deployment
- ✅ **Complete brand consistency** with your visual identity
- ✅ **No external dependencies** - all assets self-hosted
- ✅ **Faster loading** - images served from Cloudflare CDN
- ✅ **Full control** - modify, optimize, or replace images anytime

---

**Ready to deploy?** Just upload the `public` folder to Cloudflare Pages and you're live! 🚀
