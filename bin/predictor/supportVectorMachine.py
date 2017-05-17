from predictorInterface import Predictor
from sklearn import metrics
from sklearn import svm
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import f1_score

class SVMPredictor(Predictor):
    def __init__(self):
        self.clf = svm.SVC()

    def train(self, train_X, train_y):
        self.clf.fit(train_X, train_y)

    def test(self, test_X):
        y_pred = self.clf.predict(test_X)
        return y_pred.astype(int)

    def fit_and_predict(self, train_X, train_y, test_X):
        self.train(train_X, train_y)
        return self.test(test_X)
