import os
import xml.etree.ElementTree as ET
import pandas as pd

def parse_metrics(xml_file):
    tree = ET.parse(xml_file)
    root = tree.getroot()

    metrics = {}
    # Iterate over all 'statistic-item' elements
    for item in root.iter('statistic-item'):
        # Check if the item has a 'name' attribute
        if 'name' in item.attrib:
            # Get name of the item
            name = item.get('name')
            # Get all attributes of the item as a dictionary
            attributes = item.attrib
            # Remove the 'name' key from the dictionary
            attributes.pop('name', None)
            # Iterate over the attributes and add each one to the metrics
            for attr_name, attr_value in attributes.items():
                # Convert attribute value to float, if possible
                try:
                    attr_value = float(attr_value)
                except ValueError:
                    pass
                # Add the attribute value to the metrics dictionary with the name and attribute name as the key
                metrics[name + "_" + attr_name] = attr_value
    
    return metrics

def compare_metrics(metrics_dict):
    # Convert metrics dictionary to DataFrame
    df = pd.DataFrame(metrics_dict)
    # Calculate differences
    differences = df.diff().dropna()
    return differences

def main():
    # Directory containing the XML files
    directory = 'C:/Users/vs38731/Documents/GitHub/PSR-Dashboard/api'
    # Get list of all XML files in the directory
    xml_files = [f for f in os.listdir(directory) if f.endswith('.xml')]
    
    metrics_dict = {}
    # Iterate over all XML files
    for xml_file in xml_files:
        # Parse metrics from XML file
        metrics = parse_metrics(os.path.join(directory, xml_file))
        # Add metrics to the metrics dictionary with the filename as the key
        metrics_dict[xml_file] = metrics
    
    # Compare metrics
    differences = compare_metrics(metrics_dict)
    
    # Write differences to a text file
    with open('C:/Users/vs38731/Documents/GitHub/PSR-Dashboard/api/differences.txt', 'w') as f:
        f.write(differences.to_string())

main()
