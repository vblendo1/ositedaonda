import os
import re

def adjust_paths(html_file_path, base_url="https://www.ondaeducacional.com.br/"):
    with open(html_file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace absolute URLs with relative paths
    # This regex looks for href or src attributes and replaces the base URL part
    content = re.sub(r'(href|src)="'+re.escape(base_url)+'([^\"]*)"', r'\1="/\2"', content)
    content = re.sub(r'url\([\"\"]?'+re.escape(base_url)+'([^)]*)[\"\"]?\)', r'url(/\1)', content)

    with open(html_file_path, "w", encoding="utf-8") as f:
        f.write(content)

with open("/home/ubuntu/ondaeducacional_clone/html_files.txt", "r") as f:
    html_files = f.readlines()

for html_file in html_files:
    html_file = html_file.strip()
    if os.path.exists(html_file):
        print(f"Adjusting paths in: {html_file}")
        adjust_paths(html_file)
    else:
        print(f"File not found: {html_file}")
