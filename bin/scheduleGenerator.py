# scheduleGenerator.py
# --------------------------------------------------
# This script is used to read from the schedule of the
# next season, and generate files each containing the
# schedule of game day. This is for making updating
# results and prediction easier, as well as preventing
# from data corruption. 

import csv
import argparse
import os

parser = argparse.ArgumentParser(description='Provide the season to generate schedules for.')
parser.add_argument('-s', metavar = "<year1>-<year2>", help = "The season to generate schedule for")
args = parser.parse_args()
month_mapping = {
	'Jan': '01',
	'Feb': '02',
	'Mar': '03',
	'Apr': '04',
	'May': '05',
	'Jun': '06',
	'Jul': '07',
	'Aug': '08',
	'Sep': '09',
	'Oct': '10',
	'Nov': '11',
	'Dec': '12'
}

year = args.s.replace('-', '_')
prefix = '../data/' + year + '/'
file_name = prefix + year +  '_schedule_prediction.csv'
header = ['Visitor', 'Home', 'Prediction', 'Result', 'Prediction_Outcome']

season_schedule_file= open(file_name, 'rU')
filereader = csv.reader(season_schedule_file)
first_line = True
for game_schedule in filereader:
	if not first_line:
		month_year_day = game_schedule[0].split(' ')[1:]
		day = month_year_day[1]
		# Keep the day two digits, i.e the date format should be 'yyyy-mm-dd'
		if len(day) == 1:
			day = '0' + day
		day_schedule_filename = prefix + 'schedule/' + str(month_year_day[2]) + '-' + month_mapping[month_year_day[0]] + '-' + day + '.csv'
		day_schedule_file = None
		day_schedule_file_writer = None
		if os.path.isfile(day_schedule_filename):

			day_schedule_file = open(day_schedule_filename, 'a')
			day_schedule_file_writer = csv.writer(day_schedule_file)	
		else:
			day_schedule_file = open(day_schedule_filename, 'w')
			day_schedule_file_writer = csv.writer(day_schedule_file)
			day_schedule_file_writer.writerow(header)
		day_schedule_file_writer.writerow(game_schedule[1:])
		day_schedule_file.close()
	else:
		first_line = False
