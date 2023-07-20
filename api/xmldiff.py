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

def main():
    # Parse metrics from the first XML file
    metrics_1 = parse_metrics('C:/Users/vs38731/Documents/GitHub/PSR-Dashboard/api/R9.xml')
    # Parse metrics from the second XML file
    metrics_2 = parse_metrics('C:/Users/vs38731/Documents/GitHub/PSR-Dashboard/api/R10.xml')

    # Convert the metrics dictionaries to DataFrames
    df1 = pd.DataFrame(metrics_1, index=[0])
    df2 = pd.DataFrame(metrics_2, index=[0])

    # Concatenate the two DataFrames along the column axis
    df = pd.concat([df1, df2], axis=0)

    # Calculate differences
    differences = df.diff().dropna()

    # Write differences to a text file
    with open('C:/Users/vs38731/Documents/GitHub/PSR-Dashboard/api/differences.txt', 'w') as f:
        f.write(differences.to_string())

main()
