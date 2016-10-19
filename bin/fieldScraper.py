# fieldScraper.py
# --------------------------------------------------
# This script is used to scrape the fields and their
# explanations from basketball-reference.com into a 
# JSON file
# 

from lxml import html
import json
import urllib
import operator

file_name = '../data/Metadata/fieldExplanation.csv'
url = 'http://www.basketball-reference.com/leagues/NBA_2016.html'
url_local = '../data/2015_2016/2015-16 NBA Season Summary _ Basketball-Reference.com.html'
table_ids = ["team_stats", "opp_stats", "misc_stats", "team_shooting", "opponent_shooting"]
# opp_table_ids = ["opp_stats", "opponent_shooting"]
excluded_labels = ["ranker", "g", "mp", "arena_name", "attendance"]
char_mapping = {
	"%": "_pct",
	"-": "_",
	"'" : "_",
	"<" : "_less_than",
	">" : "_greater_than"
}

page = urllib.urlopen(url_local).read()
page_element = html.fromstring(page)

output = {}
counter = 0

for table_id in table_ids:
	fields_path = '//*[@id="' + table_id + '"]/thead/tr[not(@class="over_header")]/th'
	fields = page_element.xpath(fields_path)
	for field in fields:
		key = field.xpath("@data-stat")[0]
		value = field.xpath("@aria-label")[0]
		if key not in excluded_labels: 
			for old_str, new_str in char_mapping.items():
				key.replace(old_str, new_str)
			output[key] = value

sorted_output = sorted(output.items(), key=operator.itemgetter(0))
explation_file = open(file_name, 'wb')
for item in sorted_output:
	explation_file.write(item[0] + ", " + item[1] + "\n")
explation_file.close()