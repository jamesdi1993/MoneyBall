# numpy libraries
import numpy as np
import csv
import os.path

from sklearn.linear_model import LogisticRegression
from sklearn import metrics
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import f1_score
from predictorInterface import Predictor

class LogRegressionNaivePredictor(Predictor):
	def __init__(self):
		self.clf = LogisticRegression(fit_intercept=True, C=10, penalty='l2', solver='lbfgs')

	def train(self, train_X, train_y):
		self.clf.fit(train_X, train_y)
		# print "The coeffients are: ", self.clf.coef_

	def test(self, test_X):
		y_pred = self.clf.predict(test_X)
		return y_pred.astype(int)

	def fit_and_predict(self, train_X, train_y, test_X):
		self.train(train_X, train_y)
		return self.test(test_X)

	def computeError(self, y_pred, y_result):
		err = metrics.zero_one_loss(y_result, y_pred, normalize=True)
		print 'Logistic regression accuracy: ', 1 - err
		return err