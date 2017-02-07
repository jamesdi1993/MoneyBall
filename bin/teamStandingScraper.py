from selenium import webdriver
from selenium import common
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from lxml import html
from lxml import etree
import urllib
import csv
import datetime
import os
import sys
import io
import argparse

parser = argparse.ArgumentParser(description='Provide the season to get team stats for.')
parser.add_argument('-s', metavar = "<year1>-<year2>", help = "The season to get team stats for")
parser.add_argument('-d', metavar = "<yyyy>-<mm>-<dd>", help = "The specific day to get team stats for")

args = parser.parse_args()
today = datetime.date.today().strftime('%Y-%m-%d')
default_year = "2016_2017"

year = args.s
day = args.d
if year == None:
	year = default_year
else:
	year = year.replace('-','_')
if day == None:
	day = today

directory = "../data/" + year + "/stats/" + today + "/"
url = "http://stats.nba.com/standings/"
url_local = directory + "2016-2017" + " NBA.com_Stats _ Standings By Day"
table_wrapper_name = "nba-stat-table"
table_name = "team_standings"
table_xpath = "//div[@class='nba-stat-table']/div[@class='nba-stat-table__overflow']/table"

# check if the directory exists, if not create a new one
if not os.path.exists(directory):
    os.makedirs(directory)

# TODO: use a more programmatic way to determine the indices of the column
# Can look at BeautifulSoup or Panda Data frames;

# These indices correspond to Team, WIN%, Home record, Away Record, Last 10, Winning/Losing Streak
column_indices = [0, 3, 7, 8, 10, 11]
team_mapping = {
    "Golden State Warriors" : "Golden State Warriors",
    "San Antonio Spurs" : "San Antonio Spurs",
    "Houston Rockets" : "Houston Rockets",
    "LA Clippers" : "Los Angeles Clippers",
    "Utah Jazz" : "Utah Jazz",
    "Oklahoma City Thunder" : "Oklahoma City Thunder",
    "Memphis Grizzlies" : "Memphis Grizzlies",
    "Denver Nuggets" : "Denver Nuggets",
    "Portland Trail Blazers" : "Portland Trail Blazers",
    "New Orleans Pelicans" : "New Orleans Pelicans",
    "Sacramento Kings" : "Sacramento Kings",
    "Minnesota Timberwolves" : "Minnesota Timberwolves",
    "Dallas Mavericks": "Dallas Mavericks",
    "Los Angeles Lakers" : "Los Angeles Lakers",
    "Phoenix Suns" : "Phoenix Suns",
    "Cleveland Cavaliers" : "Cleveland Cavaliers",
    "Toronto Raptors" : "Toronto Raptors",
    "Boston Celtics" : "Boston Celtics",
    "Atlanta Hawks" : "Atlanta Hawks",
    "Washington Wizards" : "Washington Wizards",
    "Charlotte Hornets" : "Charlotte Hornets",
    "Indiana Pacers" : "Indiana Pacers",
    "Chicago Bulls" : "Chicago Bulls",
    "Milwaukee Bucks" : "Milwaukee Bucks",
    "Detroit Pistons" : "Detroit Pistons",
    "New York Knicks" : "New York Knicks",
    "Orlando Magic" : "Orlando Magic",
    "Philadelphia 76ers" : "Philadelphia 76ers",
    "Miami Heat" : "Miami Heat",
    "Brooklyn Nets" : "Brooklyn Nets"
}

driver = webdriver.Chrome('../lib/chromedriver')
driver.set_page_load_timeout(15)
try:
    driver.get(url)
except TimeoutException:
    print "The driver timed out"
try:
    print "Waiting for table: ", table_wrapper_name, " to load."
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, table_xpath)))
    page = driver.page_source
    # write the page source to file for later retrieval
    html_source = io.open(url_local, 'w', encoding="utf-8")
    html_source.write(page)
    html_source.close
except TimeoutException:
    print "Not all elements are present"
finally:
    driver.close()

# if there is no local html file exit with error message
if not os.path.exists(url_local):
	sys.exit("There is no file: " + url_local)

page = urllib.urlopen(url_local).read()
page_element = html.fromstring(page)

table_file_name = directory + year + '_' + table_name + '.csv';
table_file = open(table_file_name, 'wb')
table_writer = csv.writer(table_file, delimiter=",")

tables = page_element.xpath(table_xpath);
# extract the headers
headers_path = './/thead/tr/th/@data-field'

headers = tables[0].xpath(headers_path)
selected_headers =[headers[index] for index in column_indices]
selected_headers[0] = "team_name"
print "The selected headers are: ", selected_headers
table_writer.writerow(selected_headers)

data_row_xpath = './/tbody/tr'
for table in tables:
    rows = table.xpath(data_row_xpath)
    for row in rows:
        columns = row.xpath('.//td')
        selected_columns = [columns[index] for index in column_indices]
        data_row = []
        # TODO: Refactor this for loop.
        for index in range(0, len(selected_columns)):
            if (index == 0):
                # -1 because the team name is after the last element of the a tag,
                # which is a comment element...
                column = selected_columns[index].xpath('./a')[0][-1].tail.strip()
                # convert the team name according to mapping
                column = team_mapping[column]
            elif (index == len(selected_columns) - 1):
                # Convert win/lose streak to integers
                column = selected_columns[index].xpath('./text()')[0]
                chars = column.split(" ")
                column = chars[1] if (chars[0] == "W") else (-1 * int(chars[1]))
            elif (index == 1):
                column = selected_columns[index].xpath('./text()')[0]
            else:
                column = selected_columns[index].xpath('./text()')[0]
                chars = column.split("-")
                column = float(chars[0]) / (float(chars[0]) + float(chars[1]))
            data_row.append(column)
        # print "The team data is: ", data_row
        table_writer.writerow(data_row)
table_file.close
