import os
import re

directory = 'src/'

replacements = {
    r'bg-\[\#292824\]': 'bg-outline',
    r'bg-\[\#383632\]': 'bg-outline-hover',
    r'hover:bg-\[\#161616\]': 'hover:bg-surface-container-high',
    r'border-\[\#74716A\]': 'border-muted',
    r'bg-\[\#74716A\]': 'bg-muted',
}

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content
    
    for old, new in replacements.items():
        new_content = re.sub(old, new, new_content)
            
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css')):
            replace_in_file(os.path.join(root, file))

