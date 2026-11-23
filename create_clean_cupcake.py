from PIL import Image, ImageDraw, ImageFilter
import numpy as np

img_path = r'C:\Users\HP\.gemini\antigravity\brain\83a673b4-b08a-400d-b7f4-d2003e851611\.user_uploaded\media_1795459922918_607816ea.jpg'
dest_dir = r'c:\Users\HP\Desktop\bukola site'

im = Image.open(img_path).convert('RGBA')
arr = np.array(im)

# Cupcake vertical: rows 186 to 376 (the bottom line of the liner)
# Cupcake horizontal:
# Let's inspect rows 186 to 378
# The side swooshes connect around rows 310-340 at the sides.
# The liner width at row 374 is approximately cols 440 to 570.
# The frosting maximum width at row 320 is approx cols 410 to 605.

# Let's write a mask for the cupcake only:
mask = np.zeros((arr.shape[0], arr.shape[1]), dtype=bool)

# At each row r between 186 and 378, find the connected component of the cupcake in the center (around col 508)
center_col = 508

for r in range(186, 378):
    # For frosting rows (186 to 325):
    # Width increases from top (col 508) to bottom (cols 415-602)
    # Distance from center <= max_dist
    if r < 230:
        max_half_w = 55
    elif r < 270:
        max_half_w = 75
    elif r < 315:
        max_half_w = 95
    elif r < 335:
        max_half_w = 100 # this cuts off the side swoosh wings!
    else:
        # Liner slopes slightly inward towards bottom
        # r goes 335 -> 378, liner half width goes from 90 -> 65
        progress = (r - 335) / (378 - 335)
        max_half_w = int(90 - progress * 25)
        
    c_start = max(0, center_col - max_half_w)
    c_end = min(arr.shape[1], center_col + max_half_w + 1)
    mask[r, c_start:c_end] = True

# Extract
cupcake_arr = arr.copy()
# Zero out outside mask
cupcake_arr[~mask] = [255, 255, 255, 0]

# Now crop to bounding box of mask
rows = np.where(np.sum(mask, axis=1) > 0)[0]
cols = np.where(np.sum(mask, axis=0) > 0)[0]
cropped = cupcake_arr[rows[0]:rows[-1]+1, cols[0]:cols[-1]+1, :].copy()

# Remove white background
r = cropped[:, :, 0].astype(float)
g = cropped[:, :, 1].astype(float)
b = cropped[:, :, 2].astype(float)
whiteness = np.minimum(r, np.minimum(g, b))

# The purple is ~ [72, 4, 73]
# Set alpha based on distance from white
alpha = np.clip((248 - whiteness) / (248 - 180) * 255, 0, 255).astype(np.uint8)

# Make pixels outside the mask fully transparent
alpha[cropped[:, :, 3] == 0] = 0

# Fill the bottom of the liner cleanly (rows near the bottom)
# To remove the faint white glare at the bottom, replace any semi-transparent pixels in the solid liner base with solid purple!
brand_purple = [72, 4, 73, 255]
h, w = cropped.shape[:2]

# In the bottom 12 rows of the liner, if it's within the liner body, ensure solid purple
for row_idx in range(h - 14, h):
    for col_idx in range(w):
        if alpha[row_idx, col_idx] > 30: # part of the liner
            # if it was washed out / glare, make it solid brand purple
            if whiteness[row_idx, col_idx] > 100:
                cropped[row_idx, col_idx] = brand_purple
                alpha[row_idx, col_idx] = 255

cropped[:, :, 3] = alpha
result_im = Image.fromarray(cropped)

# Trim any empty outer transparent space
bbox = result_im.getbbox()
if bbox:
    result_im = result_im.crop(bbox)

# Save high-res clean cupcake
result_im.save(f'{dest_dir}\\cupcake_only_clean.png')
print(f"Clean cupcake saved! Size: {result_im.size}")

# Now create an ultra-crisp round logo badge for the header and favicon
# Header logo: 120x120 circle or soft-rounded badge with cupcake centered
badge_size = 200
badge = Image.new('RGBA', (badge_size, badge_size), (0, 0, 0, 0))
draw = ImageDraw.Draw(badge)

# Elegant background circle: soft warm cream with subtle gold/purple border
bg_color = (252, 248, 243, 255) # soft cream
border_color = (182, 127, 59, 230) # brand gold

# Draw circle with gold accent ring
draw.ellipse([4, 4, badge_size - 5, badge_size - 5], fill=bg_color, outline=border_color, width=4)

# Resize cupcake to fit badge beautifully
target_h = int(badge_size * 0.72)
aspect = result_im.width / result_im.height
target_w = int(target_h * aspect)
resized_cupcake = result_im.resize((target_w, target_h), Image.LANCZOS)

# Center in badge
paste_x = (badge_size - target_w) // 2
paste_y = (badge_size - target_h) // 2

badge.paste(resized_cupcake, (paste_x, paste_y), resized_cupcake)
badge.save(f'{dest_dir}\\cupcake_badge_logo.png')
print("Badge logo saved!")

# Also make transparent standalone version at standard sizes
result_im.resize((64, 64), Image.LANCZOS).save(f'{dest_dir}\\favicon_cupcake.png')
