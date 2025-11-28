# Creating the OG Image PNG

Many messaging apps and social platforms require PNG format for Open Graph images, not SVG.

## Quick Steps:

1. **Open the generator**: Open `public/og-image-generator.html` in your browser
2. **Right-click** on the generated image
3. **Save as** `og-image.png` in the `public` folder
4. **Deploy** - The meta tags in `index.html` are already configured to use `og-image.png`

## Alternative: Use Online Converter

1. Open `public/og-image.svg` in a browser or image editor
2. Convert to PNG at 1200x630px resolution
3. Save as `og-image.png` in the `public` folder

## Verify

After creating the PNG, test your link preview using:
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

**Note**: Social platforms cache images aggressively. You may need to use their debugger tools to clear the cache and see the new image.

