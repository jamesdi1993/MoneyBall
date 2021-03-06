# numpy libraries
import numpy as np
import csv
import os.path
import subprocess
import datetime
import util
from predictor import logRegression

######################################################################
# main
######################################################################

def main() :
	today = datetime.date.today().strftime('%Y-%m-%d')
	# update the previous day result
	subprocess.call("python resultUpdator.py -s 2016-2017", shell = True)
	# pull new stats from basketball-reference.com
	subprocess.call("python statsScraper.py -s 2016-2017", shell = True)
	# pull team standing stats from nba.com
	subprocess.call("python teamStandingScraper.py -s 2016-2017", shell = True)
    # join the stats tables and schedule table for today
	subprocess.call("RScript mergeTables_JD.R -s 2016-2017", shell = True)
	# train model and make prediction
	training_data_path = "../data/2015_2016/2015_2016_full_table.csv"
	prediction_data_path = "../data/2016_2017/schedule/" + today + "/" + today + "_full_table.csv"
	schedule_path = "../data/2016_2017/schedule/" + today + "/" + today + ".csv"

	logRegPredictor = logRegression.LogRegressionNaivePredictor()

	# logRegPredictor.train_w_file(training_data_path)
	# y_pred = logRegPredictor.test_w_file(prediction_data_path)
	train_X, train_y, test_X = util.read_data(training_data_path, prediction_data_path)
	y_pred = logRegPredictor.fit_and_predict(train_X, train_y, test_X)
	print "The prediction for: ", today, " is: ", y_pred
	# write the prediction to the schedule file
	util.writeToFile(schedule_path, y_pred)

if __name__ == "__main__" :
   main()