import os
import re

directory = 'src/'

replacements = {
    "#0D0D0D": "#0B0B0A",
    "#0d0d0d": "#0B0B0A",
    "#141414": "#121211",
    "#111111": "#121211",
    "#080808": "#0B0B0A",
    "#1A1A1A": "#181817",
    "#252525": "#292824",
    "#3E3E3E": "#383632",
    "#3e3e3e": "#383632",
    "#4A4A4A": "#383632",
    "#B8A98A": "#B89B72",
    "#C9BC9F": "#D0B58A",
    "#E5E2E1": "#F2F0EA",
    "#F5F5F4": "#F2F0EA",
    "#A1A19A": "#A6A39B",
    "#6F6D68": "#74716A",
}

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content
    
    # Class replacements
    new_content = new_content.replace('hover:text-white', 'hover:text-[#F2F0EA]')
    new_content = new_content.replace('text-white', 'text-[#F2F0EA]')
    new_content = new_content.replace('bg-white', 'bg-[#B89B72]')
    
    # Hex replacements
    for old, new in replacements.items():
        new_content = re.sub(re.escape(old), new, new_content, flags=re.IGNORECASE)
            
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css')):
            replace_in_file(os.path.join(root, file))

