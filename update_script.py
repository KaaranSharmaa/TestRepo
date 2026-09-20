import os
import re

image_dir = 'images'
script_file = 'script.js'

images = [f for f in os.listdir(image_dir) if f.lower().endswith('.jpeg')]
images.sort()

photos_array = "const photos = [\n"
for img in images:
    photos_array += f'  {{ src: "images/{img}", caption: "" }},\n'
photos_array += "];"

with open(script_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the const photos array
new_content = re.sub(r'const photos = \[\s*[\s\S]*?\s*\];', photos_array, content)

with open(script_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated script.js with {len(images)} images.")
