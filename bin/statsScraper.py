# statsScraper.py
# --------------------------------------------------
# This script is used to scrape the team stats from 
# basketball-reference.com. Currently for this script to work
# we need to first download the html files to local directory. 
# This because the tables are not loaded and included in the 
# response if we tried to grep them directly from the website 
# in real time. 

from lxml import html
import urllib
import csv

file_name = 'fieldExplanation.txt'
urls_local = {
	"2014_2015": '../data/2014_2015/2014-15 NBA Season Summary _ Basketball-Reference.com.html',
	"2015_2016": '../data/2015_2016/2015-16 NBA Season Summary _ Basketball-Reference.com.html'
}
table_ids = ["team_stats", "opp_stats", "misc_stats", "team_shooting", "opponent_shooting"]
table_file_prefix = '../data/'
excluded_labels = ["ranker", "g", "mp", "arena_name", "attendance"]

for year, url in urls_local.items():
	page = urllib.urlopen(url).read()
	page_element = html.fromstring(page)
	counter = 0
    # This is a list that tracks the headers that are included to avoid duplicate
	current_headers = []
	for table_id in table_ids:
		# open a new file
		table_file_name = table_file_prefix + year + '/' + year + '_' + table_id + '.csv';
		table_file = open(table_file_name, 'wb')
		table_writer = csv.writer(table_file, delimiter=",")
		# extract the headers  
		headers_path = '//*[@id="' + table_id + '"]/thead/tr[not(@class="over_header")]/th/@data-stat'
		headers = page_element.xpath(headers_path)
		# the headers are not in the excluded list and are not included already, but we can have multiple team_names
		headers = filter(lambda element: (element not in excluded_labels) and (element not in current_headers or element == "team_name"), headers)

		# extract the data
		data_path = '//*[@id="' + table_id + '"]/tbody/tr'
		rows = page_element.xpath(data_path)
		# drop the last row because it's average data of all teams
		rows = rows[:-1]

		# construct the xpath for the fields in the row 
		# index is 1 is because we want to extract team name seperately
		field_xpath = 'td[contains(@data-stat,"' + headers[1] + '")'
		for header in headers[2:]:
			field_xpath = field_xpath + ' or contains(@data-stat,"'+ header + '")'
		field_xpath = field_xpath + ' and not(contains(@data-stat, "team_name"))]/text()'

		current_headers = current_headers + headers
		table_writer.writerow(headers)
		for row in rows:
			team_name = row.xpath('td[@data-stat="team_name"]/a/text()')[0]
			# refactor this line of code
			fields = row.xpath(field_xpath)
			fields = [team_name] + fields
			table_writer.writerow(fields)
		table_file.close()