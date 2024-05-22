from lxml import etree

def bad(xml_data):
  username = input("Enter username:")
  tree = etree.parse(xml_data)
  query = f"//user[username/text()={username}]"
  # bearer:expected python_lang_xpath_injection
  return tree.xpath(query)

def bad2(xml_data):
  tree = etree.parse(xml_data)
  elem = tree.xpath("//user[username='john']")[0]
  root_tree = elem.getroottree()
  
  unsafe = input("Enter xpath hack: ")
  # bearer:expected python_lang_xpath_injection
  root_tree.xpath(f"//{unsafe}")
  
def bad3(xml_data):
  unsafe = input("Enter xpath hack: ")
  tree = etree.XML(xml_data)
  root = tree.getroot()
  # bearer:expected python_lang_xpath_injection
  res = root.xpath(f"//{unsafe}")
  
  elem = res[0]
  # bearer:expected python_lang_xpath_injection
  elem.xpath(f"//{unsafe}")

import xml.etree.ElementTree as ET

def bad4(xml_data):
  unsafe = input("Enter xpath hack: ")
  tree = ET.parse(xml_data)
  root = tree.getroot()
  # bearer:expected python_lang_xpath_injection
  root.findall(f"./{unsafe}")
  
def bad5(xml_string): 
  unsafe = input("Enter xpath hack: ")
  root = ET.fromstring(xml_string)
  # bearer:expected python_lang_xpath_injection
  root.findall(f"./{unsafe}")
  
  root2 = ET.fromstringlist([xml_string])
  # bearer:expected python_lang_xpath_injection
  root2.findall(f"./{unsafe}")
  