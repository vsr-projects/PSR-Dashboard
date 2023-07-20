import os
import re
from collections import defaultdict

def project_structure(directory):
    structure_output = []
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        level = root.replace(directory, '').count(os.sep)
        indent = ' ' * 4 * (level)
        structure_output.append('{}{}/'.format(indent, os.path.basename(root)))
        sub_indent = ' ' * 4 * (level + 1)
        for f in files:
            structure_output.append('{}{}'.format(sub_indent, f))
    return structure_output

def component_hierarchy(directory):
    # Placeholder for hierarchy
    hierarchy = defaultdict(list)
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".jsx"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    lines = f.readlines()
                    for line in lines:
                        # Regex to find React components
                        matches = re.findall(r'<(\w+)', line)
                        for match in matches:
                            hierarchy[file].append(match)
    return hierarchy

def write_output_to_file(structure_output, hierarchy, filename):
    with open(filename, 'w') as f:
        f.write("Project Structure:\n")
        for line in structure_output:
            f.write(line + "\n")
        f.write("\nComponent Hierarchy:\n")
        for parent, children in hierarchy.items():
            f.write(f'{parent}: {", ".join(children)}\n')

project_directory = "C:/Users/vs38731/Documents/GitHub/PSR-Dashboard/"
structure_output = project_structure(project_directory)
hierarchy = component_hierarchy(project_directory)
write_output_to_file(structure_output, hierarchy, 'output.txt')
