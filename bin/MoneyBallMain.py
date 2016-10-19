# numpy libraries
import numpy as np
import csv
import os.path

from sklearn.linear_model import LogisticRegression
from sklearn import metrics
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import f1_score

######################################################################
# main
######################################################################

def main() :
	col = 233
	delete__col_indices = range(7)
	delete_row_index = 0

	training_data_path = "../data/2014_2015/2014_2015_full_table.csv"
	prediction_data_path = "../data/2015_2016/2015_2016_full_table.csv"

	train_X = np.genfromtxt (training_data_path, delimiter=",")
	train_y = train_X[:,6]
	train_X = np.delete(train_X , delete__col_indices, 1)
	train_X  = np.delete(train_X , delete_row_index, 0)
	train_y = np.delete(train_y, delete_row_index, 0)

	test_X = np.genfromtxt (prediction_data_path, delimiter=",")
	test_y = test_X[:,6]
	test_X = np.delete(test_X, delete__col_indices, 1)
	test_X = np.delete(test_X, delete_row_index, 0)
	test_y = np.delete(test_y, delete_row_index, 0)

	print "training data shape is ", train_X.shape
	print "training y shape is ", train_y.shape
	print "testing data shape is ", test_X.shape
	print "testing y shape is ", test_y.shape

	# Logitstic regression with default parameter
	clf = LogisticRegression(fit_intercept=True, C=10, penalty='l2', solver='lbfgs')
	clf.fit(train_X, train_y)
	y_pred = clf.predict(test_X)
	err = metrics.zero_one_loss(test_y, y_pred, normalize=True)
	print 'Logistic regression accuracy: ', 1 - err

if __name__ == "__main__" :
   main()