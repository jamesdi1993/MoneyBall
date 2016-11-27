# write out the current cron job
crontab -l > moneyBallCron
# replace the path to script with your own path
echo "00 09 * * * cd /Users/apple/Desktop/cs/fun\ project/MoneyBall/MoneyBall/bin/ && python MoneyBallMain.py >/tmp/stdout.log 2>/tmp/stderr.log" >> moneyBallCron
# set up the second job in case the first one failed
echo "00 17 * * * cd /Users/apple/Desktop/cs/fun\ project/MoneyBall/MoneyBall/bin/ && python MoneyBallMain.py >/tmp/stdout.log 2>/tmp/stderr.log" >> moneyBallCron
# Set up the cron job
crontab moneyBallCron
# Clean up the file
rm moneyBallCron
