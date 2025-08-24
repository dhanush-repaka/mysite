# Images Directory

## How to Update Your Professional Photo

1. **Upload your professional photo** to this directory (`/app/frontend/public/images/`)
2. **Recommended naming**: `dhanush-profile.jpg` or `professional-photo.jpg`
3. **Recommended specs**:
   - Size: 400x400px minimum (square aspect ratio)
   - Format: JPG or PNG
   - File size: Under 500KB for faster loading

## Update the Image in Code

After uploading your photo, update the image source in:
- **File**: `/app/frontend/src/components/Header.jsx`
- **Line**: Around line 15-20
- **Change**: Replace the Unsplash URL with: `"/images/your-photo-name.jpg"`

### Example:
```jsx
<img
  src="/images/dhanush-profile.jpg"  // ← Change this line
  alt="Dhanush Repaka"
  className="w-full h-full object-cover"
/>
```

## Current Image Location
The professional photo is displayed in:
- Header/Hero section (large circular profile image)
- Size: 192px × 192px (w-48 h-48 in Tailwind)

## Git Repository Structure
```
/app/frontend/
├── public/
│   ├── images/          ← Upload your professional photo here
│   │   └── README.md    ← This file
│   └── index.html
├── src/
│   ├── components/
│   │   └── Header.jsx   ← Update image source here
│   └── ...
```