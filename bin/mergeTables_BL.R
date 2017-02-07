require(dplyr)

# 2014_2015
# set working directory
setwd("C:/Users/bl022_000/Desktop/moneyball/MoneyBall/data/2014_2015")

#-----------------------------------------------------------------------
# join all statistics
#-----------------------------------------------------------------------
# read all tables
df1 = read.csv("2014_2015_miscellaneous_stats.csv", header = TRUE, encoding="ascii")
df2 = read.csv("2014_2015_opponent_shooting.csv", header = TRUE)
df3 = read.csv("2014_2015_opponent_stats.csv", header = TRUE)
df4 = read.csv("2014_2015_schedule.csv", header = TRUE)
df5 = read.csv("2014_2015_team_shooting.csv", header = TRUE)
df6 = read.csv("2014_2015_team_stats.csv", header = TRUE)

# join tables
df = full_join(df1, df2, by="team_name")
df = full_join(df,df3,by="team_name")
df = full_join(df,df5,by="team_name")
df = full_join(df,df6,by="team_name")

# write statistics to csv
write.csv(df, file = "2014_2015_stats.csv", row.names=FALSE)

#-----------------------------------------------------------------------
# join statistics with game results
#-----------------------------------------------------------------------
df_schedule = read.csv("2014_2015_schedule.csv", header = TRUE)

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

write.csv(df, file = "2014_2015_full_table.csv", row.names=FALSE)

#------------------------------------------------------------------------------------------------------
# 2015_2016

setwd("C:/Users/bl022_000/Desktop/moneyball/MoneyBall/data/2015_2016")
#-----------------------------------------------------------------------
# join all statistics
#-----------------------------------------------------------------------
# read all tables
df1 = read.csv("2015_2016_miscellaneous_stats.csv", header = TRUE, encoding="ascii")
df2 = read.csv("2015_2016_opponent_shooting.csv", header = TRUE)
df3 = read.csv("2015_2016_opponent_stats.csv", header = TRUE)
df4 = read.csv("2015_2016_schedule.csv", header = TRUE)
df5 = read.csv("2015_2016_team_shooting.csv", header = TRUE)
df6 = read.csv("2015_2016_team_stats.csv", header = TRUE)

# join 
df = full_join(df1, df2, by="team_name")
df = full_join(df,df3,by="team_name")
df = full_join(df,df5,by="team_name")
df = full_join(df,df6,by="team_name")

write.csv(df, file = "2015_2016_stats.csv", row.names=FALSE)

#-----------------------------------------------------------------------
# join statistics with game results
#-----------------------------------------------------------------------

df_schedule = read.csv("2015_2016_schedule.csv", header = TRUE)

# make a copy for home stats and visitor stats
df_copy = df 

# change column names
colnames(df)[colnames(df)!="team_name"] <- paste("visitor", colnames(df)[colnames(df)!="team_name"], sep = "_")
colnames(df)[colnames(df)=="team_name"] <- "Visitor"

colnames(df_copy)[colnames(df_copy)!="team_name"] <- paste("home", colnames(df_copy)[colnames(df_copy)!="team_name"], sep = "_")
colnames(df_copy)[colnames(df_copy)=="team_name"] <- "Home"


df = full_join(df_schedule, df, by = "Visitor")
df = full_join(df, df_copy, by = "Home")

write.csv(df, file = "2015_2016_full_table.csv", row.names=FALSE)

