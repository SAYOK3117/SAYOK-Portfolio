import os
import re

directory = 'src/'

replacements = {
    r'bg-\[\#0B0B0A\]': 'bg-background',
    r'bg-\[\#121211\]': 'bg-surface-container',
    r'bg-\[\#181817\]': 'bg-surface-container-high',
    
    r'border-\[\#292824\]': 'border-outline',
    r'border-\[\#383632\]': 'border-outline-hover',
    r'hover:border-\[\#383632\]': 'hover:border-outline-hover',
    r'hover:border-\[\#292824\]': 'hover:border-outline',

    r'text-\[\#F2F0EA\]': 'text-on-surface',
    r'hover:text-\[\#F2F0EA\]': 'hover:text-on-surface',
    r'text-\[\#A6A39B\]': 'text-on-surface-variant',
    r'hover:text-\[\#A6A39B\]': 'hover:text-on-surface-variant',
    r'text-\[\#74716A\]': 'text-muted',
    r'text-\[\#0B0B0A\]': 'text-on-primary', # Usually high contrast on accent

    r'text-\[\#B89B72\]': 'text-secondary',
    r'hover:text-\[\#B89B72\]': 'hover:text-secondary',
    r'bg-\[\#B89B72\]': 'bg-secondary',
    r'border-\[\#B89B72\]': 'border-secondary',
    r'hover:border-\[\#B89B72\]': 'hover:border-secondary',
    
    r'bg-\[\#D0B58A\]': 'bg-secondary-fixed',
    r'hover:bg-\[\#D0B58A\]': 'hover:bg-secondary-fixed',
    
    r'text-white': 'text-on-surface',
    r'bg-white': 'bg-on-surface',
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

