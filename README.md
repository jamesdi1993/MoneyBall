# MoneyBall

## Synopsis
This is a repository for predicting the game results during NBA regular seasons. The code section contains 
python and R code that automates the prediction, and the data section contains regular season data for all
teams from 2014-2015 to 2016-2017. Note that all the data are scraped from basketball-reference.com. 

## Code Example
If you are a basketball fan or someone who is interested in data science (or both), you can contribute by 
writing new predictors with the interface we provided, and start predicting the games with your predictor. 
You should put your predictor file under bin/predicotr and here is a code snippet for implementing our predictor
interface:
```
from predictorInterface import Predictor

class YourPredictor(Predictor):
	def __init__(self):
		raise NotImplementedError("Should have implemented this")

	def train(self, train_X, train_y):
		raise NotImplementedError("Should have implemented this")

	def test(self, test_X):
		raise NotImplementedError("Should have implemented this")

	def fit_and_predict(self, train_X, train_y, test_X):
		raise NotImplementedError("Should have implemented this")
```

After you implement your predictor, you can use it to predict the games by replacing the predictor
in MoneyBallMain.py with your predictor:

```
from predictor import YourPredictorFile

# jump to line 27
predictor = YourPredictorFile.YourPredictor

# jump to line 32
y_pred = predictor.fit_and_predict(train_X, train_y, test_X)
```

## Installation(For Linux/Mac)
### Prerequisite
You should have python and RScript installed on your machine and the folders their executables are in
should exist in your PATH. The current python version we are using is 2.7, and the RScript version we
are using is 3.3.1.

### Libraries to install
#### Python
* numpy
* matplotlib
* sklearn
* selenium
* lxml
* argparse

#### R
* dplyr
* optparse

### Set up daily prediction job
Go to the bin folder, and run:
```sh setup.sh```



