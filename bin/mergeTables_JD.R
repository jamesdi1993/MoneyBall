# TODO: Split it into two files: one merging the stats table and the
# other merging a stats table with a schedule table

require(dplyr)
require(optparse)

# Parse out arguments
today = strftime(Sys.Date(), format="%Y-%m-%d")
option_list = list(
  	make_option(c("-s", "--season"), type="character", default="2016-2017", 
              help="the season to join tables for", metavar="character"),
	make_option(c("-d", "--statsday"), type="character", default=today, 
              help="the specific day to join the stats tables for", metavar="character"),
	make_option(c("-g", "--gameday"), type="character", default=today, 
              help="the specific day to join the game schedule for", metavar="character")
); 
 
opt_parser = OptionParser(option_list=option_list);
opt = parse_args(opt_parser);

# year will be in the yyyy-yyyy format, and
# day will be in the yyyy-mm-dd format. 
year = opt$season
year_underscore = gsub("-", "_", year)
stats_day = opt$statsday
schedule_day = opt$gameday

# 2014_2015
# set working directory
wd_stats_table = paste("~/Desktop/cs/fun project/MoneyBall/MoneyBall/data", year_underscore, "stats", stats_day, sep = '/')
wd_stats_table
setwd(wd_stats_table)

#-----------------------------------------------------------------------
# join all statistics
#-----------------------------------------------------------------------
# read all tables
miscellaneous_stats_table = paste(year_underscore, "_misc_stats.csv", sep='')
opponent_shooting_table = paste(year_underscore, "_opponent_shooting.csv", sep = '')
opponent_stats_table = paste(year_underscore, "_opp_stats.csv", sep = '')
team_shooting_table = paste(year_underscore, "_team_shooting.csv", sep = '')
team_stats_table = paste(year_underscore, "_team_stats.csv", sep = '')

df1 = read.csv(miscellaneous_stats_table, header = TRUE, encoding="ascii")
df2 = read.csv(opponent_shooting_table, header = TRUE)
df3 = read.csv(opponent_stats_table, header = TRUE)
df4 = read.csv(team_shooting_table, header = TRUE)
df5 = read.csv(team_stats_table, header = TRUE)


# join tables
df = full_join(df1, df2, by="team_name")
df = full_join(df,df3,by="team_name")
df = full_join(df,df4,by="team_name")
df = full_join(df,df5,by="team_name")

# write statistics to csv
stats_table = paste(year_underscore, "_stats.csv", sep = '');
write.csv(df, file = stats_table, row.names=FALSE)

#-----------------------------------------------------------------------
# join statistics with game results
#-----------------------------------------------------------------------
wd_schedule_table = paste("~/Desktop/cs/fun project/MoneyBall/MoneyBall/data", year_underscore, "schedule", schedule_day, sep = '/')
setwd(wd_schedule_table)
schedule_table = paste(schedule_day, ".csv", sep = '')
df_schedule = read.csv(schedule_table, header = TRUE)
df_schedule = df_schedule[c("Visitor", "Home")]


df_copy = df  # make a copy for home stats and visitor stats

# change column names
# df is visitor
colnames(df)[colnames(df)!="team_name"] <- paste("visitor", colnames(df)[colnames(df)!="team_name"], sep = "_")
colnames(df)[colnames(df)=="team_name"] <- "Visitor"
# df_copy is home team
colnames(df_copy)[colnames(df_copy)!="team_name"] <- paste("home", colnames(df_copy)[colnames(df_copy)!="team_name"], sep = "_")
colnames(df_copy)[colnames(df_copy)=="team_name"] <- "Home"

# add stats of both teams to results
df = left_join(df_schedule, df, by = "Visitor")
df = left_join(df, df_copy, by = "Home")

full_table = paste(schedule_day, "-full-table.csv", sep = '')
write.csv(df, file = full_table, row.names=FALSE)

