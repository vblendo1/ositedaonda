import requests
import os
from urllib.parse import urlparse

image_dir = "/home/ubuntu/ondaeducacional_clone/images"
os.makedirs(image_dir, exist_ok=True)

with open("/home/ubuntu/ondaeducacional_clone/all_assets_urls.txt", "r") as f:
    urls = f.readlines()

for url in urls:
    url = url.strip()
    if not url:
        continue

    # Check if the URL is likely an image
    if any(url.lower().endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']):
        try:
            response = requests.get(url, stream=True, timeout=10)
            response.raise_for_status()

            # Extract filename from URL
            a = urlparse(url)
            filename = os.path.basename(a.path)
            if not filename:
                # Fallback for URLs without a clear filename in path
                filename = url.split('/')[-1].split('?')[0] + '.png' # Default to .png if no extension

            filepath = os.path.join(image_dir, filename)

            with open(filepath, 'wb') as out_file:
                for chunk in response.iter_content(chunk_size=8192):
                    out_file.write(chunk)
            print(f"Downloaded image: {url} to {filepath}")
        except requests.exceptions.RequestException as e:
            print(f"Error downloading image {url}: {e}")
