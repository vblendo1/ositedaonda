from bs4 import BeautifulSoup
import re
import os
from urllib.parse import urljoin

# Ensure the directory exists
os.makedirs("/home/ubuntu/ondaeducacional_clone", exist_ok=True)

with open("/home/ubuntu/ondaeducacional/index.html", "r") as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, "html.parser")

links = set()
base_url = "https://www.ondaeducacional.com.br/"

# Find all href attributes for link tags (CSS)
for link_tag in soup.find_all("link", href=True):
    href = link_tag["href"]
    if href.endswith((".css")):
        links.add(urljoin(base_url, href))

# Find all src attributes for script and img tags (JS, images)
for src_tag in soup.find_all(["script", "img"], src=True):
    src = src_tag["src"]
    if src.endswith((".js", ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp")):
        links.add(urljoin(base_url, src))

# Also look for background-image in style attributes
for tag in soup.find_all(style=True):
    style = tag["style"]
    matches = re.findall(r'url\(([^)]+)\)', style)
    for match in matches:
        # Remove potential quotes from the URL
        match = match.strip("\"'")
        if match.endswith((".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp")):
            links.add(urljoin(base_url, match))

with open("/home/ubuntu/ondaeducacional_clone/all_assets_urls.txt", "w") as f_out:
    for link in sorted(list(links)):
        f_out.write(link + "\n")
