# numpy libraries
import numpy as np
import csv
import os.path

from sklearn.linear_model import LogisticRegression
from sklearn import metrics
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import f1_score

class LogRegressionNaivePredictor:
	def __init__(self):
		self.col = 233
		self.delete_col_train_indices = range(6)
		self.delete_col_test_indices = range(2)
		self.delete_row_index = 0
		self.clf = LogisticRegression(fit_intercept=True, C=10, penalty='l2', solver='lbfgs')

	def train_w_file(self, train_data_path):
		train_X = np.genfromtxt (train_data_path, delimiter=",")
		train_y = train_X[:,5]
		train_X = np.delete(train_X , self.delete_col_train_indices, 1)
		train_X  = np.delete(train_X , self.delete_row_index, 0)
		train_y = np.delete(train_y, self.delete_row_index, 0)
		self.train(train_X, train_y)

	def train(self, train_X, train_y):
		self.clf.fit(train_X, train_y)

	def test_w_file(self, test_data_path):
		test_X = np.genfromtxt(test_data_path, delimiter=",")
		# test_y = test_X[:,5]
		test_X = np.delete(test_X, self.delete_col_test_indices, 1)
		test_X = np.delete(test_X, self.delete_row_index, 0)
		# test_y = np.delete(test_y, self.delete_row_index, 0)
		y_pred = self.test(test_X)
		return y_pred
		# print "y_pred is: ", y_pred
		# print "test_y is: ", test_y
		# self.computeError(y_pred, test_y)

	def test(self, test_X):
		y_pred = self.clf.predict(test_X)
		return y_pred

	def computeError(self, y_pred, y_result):
		err = metrics.zero_one_loss(y_result, y_pred, normalize=True)
		print 'Logistic regression accuracy: ', 1 - err
		return err

	def writeToFile(self, file_name, y_pred):
		# read file first and get all the entries
		game_file_reader= open(file_name, 'rU')
		game_csv_reader = csv.reader(game_file_reader)
		game_list = []
		game_list.extend(game_csv_reader)
		game_file_reader.close()

		game_file_writer = open(file_name, 'w')
		game_csv_writer = csv.writer(game_file_writer)

		for index in range(len(game_list)):
			if index == 0:
				game_csv_writer.writerow(game_list[0])
			else:
				row = game_list[index]
				# update the prediction, which is the 3rd column
				row[2] = y_pred[index - 1]
				game_csv_writer.writerow(row)				
		game_file_writer.close()