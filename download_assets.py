import requests
import os

css_output_path = "/home/ubuntu/ondaeducacional_clone/styles.css"
js_output_path = "/home/ubuntu/ondaeducacional_clone/scripts.js"

# Clear previous content
open(css_output_path, "w").close()
open(js_output_path, "w").close()

with open("/home/ubuntu/ondaeducacional_clone/all_assets_urls.txt", "r") as f:
    urls = f.readlines()

for url in urls:
    url = url.strip()
    if not url:
        continue

    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()  # Raise an HTTPError for bad responses (4xx or 5xx)

        content_type = response.headers.get("Content-Type", "").lower()

        if "text/css" in content_type or url.endswith(".css"):
            with open(css_output_path, "a") as f_css:
                f_css.write(response.text + "\n")
            print(f"Downloaded CSS: {url}")
        elif "application/javascript" in content_type or "text/javascript" in content_type or url.endswith(".js"):
            with open(js_output_path, "a") as f_js:
                f_js.write(response.text + "\n")
            print(f"Downloaded JS: {url}")
        else:
            print(f"Skipping non-CSS/JS content from {url} (Content-Type: {content_type})")

    except requests.exceptions.RequestException as e:
        print(f"Error downloading {url}: {e}")
