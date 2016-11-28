class Predictor:
	def __init__(self):
		raise NotImplementedError("Should have implemented this")

	def train(self, train_X, train_y):
		raise NotImplementedError("Should have implemented this")

	def test(self, test_X):
		raise NotImplementedError("Should have implemented this")

	def fit_and_predict(self, train_X, train_y, test_X):
		raise NotImplementedError("Should have implemented this")