# numpy libraries
import numpy as np
import csv
import os.path
import subprocess
import datetime
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
    # join the stats tables and schedule table for today
    subprocess.call("RScript mergeTables_JD.R -s 2016-2017")
	# train model and make prediction
	training_data_path = "../data/2014_2015/2014_2015_full_table.csv"
	prediction_data_path = "../data/2016_2017/schedule/" + today + "/" + today + "-full-table.csv"
	schedule_path = "../data/2016_2017/schedule/" + today + "/" + today + ".csv"

	logRegPredictor = logRegression.LogRegressionNaivePredictor()
	logRegPredictor.train_w_file(training_data_path)
	y_pred = logRegPredictor.test_w_file(prediction_data_path)
	print "The prediction for: ", today, " is: ", y_pred
	# write the prediction to the schedule file
	logRegPredictor.writeToFile(schedule_path, y_pred)


if __name__ == "__main__" :
   main()