# result_updator.py
# --------------------------------------------------
# 
from lxml import html
from lxml import etree
import csv
import requests
import datetime
import os
import sys
import argparse

parser = argparse.ArgumentParser(description='Provide the season to updates result for.')
parser.add_argument('-s', metavar = "<year1>-<year2>", help = "The season to updates result for")
parser.add_argument('-d', metavar = "<yyyy>-<mm>-<dd>", help = "The specific day to generate schedule for")
args = parser.parse_args()

default_year = "2016_2017"
previous_day = datetime.date.today()-datetime.timedelta(1)
default_day = previous_day.strftime('%Y-%m-%d')

year = args.s
day = args.d
if year == None:
	year = default_year
else:
	year = year.replace('-', '_')

if day == None:
	day = default_day

prefix = "../data/" + year + "schedule/"
file_name = prefix + day + ".csv"

url = "http://www.basketball-reference.com/boxscores/index.cgi?month=" + str(previous_day.month) + "&day=" + str(previous_day.day) + "&year=" + str(previous_day.year)
# TODO: put this file into a new json file
team_mapping = {
	"Phoenix": "Phoenix Suns",
	"Brooklyn": "Brooklyn Nets",
	"Washington": "Washington Wizards",
	"Cleveland": "Cleveland Cavaliers",
	"Orlando": "Orlando Magic",
	"Minnesota": "Minnesota Timberwolves",
	"Memphis": "Memphis Grizzlies",
	"New Orleans": "New Orleans Pelicans",
	"LA Lakers": "Los Angeles Lakers",
	"Philadelphia": "Philadelphia 76ers",
	"Dallas": "Dallas Mavericks",
	"Portland": "Portland Trail Blazers",
	"Toronto": "Toronto Raptors",
	"Atlanta": "Atlanta Hawks",
	"Denver": "Denver Nuggets",
	"Chicago": "Chicago Bulls",
	"Golden State": "Golden State Warriors",
	"Charlotte": "Charlotte Hornets",
	"Detroit": "Detroit Pistons",
	"Houston": "Houston Rockets",
	"Indiana": "Indiana Pacers",
	"LA Clippers": "Los Angeles Clippers",
	"New York": "New York Knicks",
	"Milwaukee": "Milwaukee Bucks",
	"San Antonio": "San Antonio Spurs",
	"Oklahoma City": "Oklahoma City Thunder",
	"Miami": "Miami Heat",
	"Boston": "Boston Celtics",
	"Sacramento": "Sacramento Kings",
	"Utah": "Utah Jazz"
}

# Get the page for the game scores
page = requests.get(url)
page_tree = html.fromstring(page.content)
games_path = "//div[@id='content']//div[contains(@class, 'game_summary')]"
games = page_tree.xpath(games_path)

if not os.path.isfile(file_name):
	sys.exit("There is no file: " + file_name)

game_file_reader= open(file_name, 'rU')
game_csv_reader = csv.reader(game_file_reader)
game_list = []
game_list.extend(game_csv_reader)
game_file_reader.close()

game_file_writer = open(file_name, 'w')
game_csv_writer = csv.writer(game_file_writer)
first_line = True

# for each game in the previoud day game schedule, look for the game result from the
# scoreboard of the previous day games
for row in game_list:
	if not first_line:
		visitor = row[0]
		home = row[1]
		for game in games:
			winner = game.xpath("table/tbody/tr[contains(@class, 'winner')]/td")[0].xpath("a/text()")[0]
			loser = game.xpath("table/tbody/tr[contains(@class, 'loser')]/td")[0].xpath("a/text()")[0]
			winner = team_mapping[winner]
			loser = team_mapping[loser]
			# assumption: a team cannot be in two games on the same day!
			if (visitor == winner or home == winner):
				# if home team wins, result is 1. Otherwise 0
				row[3] = str(int(home == winner))
				row[4] = str(int(row[2] == row[3]))
				print "The game is: ", row
				game_csv_writer.writerow(row)
				break
	else:
		# Write the header first
		game_csv_writer.writerow(game_list[0])
		first_line = False
game_file_writer.close()
