from bs4 import BeautifulSoup
import os

# Ensure the directory exists
os.makedirs("/home/ubuntu/ondaeducacional_clone", exist_ok=True)

with open("/home/ubuntu/ondaeducacional_clone/www.ondaeducacional.com.br/index.html", "r") as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, "html.parser")

# Extract inline CSS
inline_css = []
for style_tag in soup.find_all("style"):
    inline_css.append(style_tag.get_text())

with open("/home/ubuntu/ondaeducacional_clone/inline_styles.css", "w") as f_css:
    f_css.write("\n".join(inline_css))

# Extract inline JavaScript and external script URLs
inline_js = []
external_js_urls = []
for script_tag in soup.find_all("script"):
    if script_tag.get("src"):
        external_js_urls.append(script_tag["src"])
    else:
        inline_js.append(script_tag.get_text())

with open("/home/ubuntu/ondaeducacional_clone/inline_scripts.js", "w") as f_js:
    f_js.write("\n".join(inline_js))

with open("/home/ubuntu/ondaeducacional_clone/external_js_urls.txt", "w") as f_ext_js:
    for url in external_js_urls:
        f_ext_js.write(url + "\n")
