import requests
import pandas as pd
import csv

# import all district and city names, remove empties and section header
df = pd.read_csv('Jilin all cities and districts.csv', encoding = "gb2312")
df=df.dropna()