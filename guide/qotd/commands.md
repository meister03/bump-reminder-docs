---
tilte: Commands
description: Learn more about Question of the Day Commands
---
# QOTD Commands

## Setup QOTD Commands:
### Add QOTD Channel:
<command message = "%qsetup channel <#channel>" slash="/qotd setup channel [channel]" description="Adds the mentioned Channels as QOTD Channel, where daily QOTD's will be sent." permission="MANAGE_SERVER">

### Add QOTD Ping:
<command message = "%qsetup ping <@role>" slash="/qotd setup ping [role]" description="Adds the mentioned Roles as QOTD Ping, which will be pinged on the daily QOTD's" permission="MANAGE_SERVER" premium="true">

### Schedule QOTD on a specific Time:
<command message = "%qsetup scheduleat <date>" slash="/qotd setup scheduleat [date]" description="Schedules the QOTD to a given Date and Time from where on the 1 Day QOTD Interval will be continued." permission="MANAGE_SERVER">

## Manage QOTD Custom Questions:

### Add QOTD Custom Question:
<command message = "%customquestion add <question>" slash="/qotd question add [question]" description="Adds the given Question as custom Question, which will be sent on QOTD" permission="MANAGE_SERVER">

### Remove QOTD Custom Question:
<command message = "%customquestion remove <questionnumber>" slash="/qotd question remove [questionnumber]" description="Removes the given Question from the custom Questions. For checking the Question Number, check the question list command." permission="MANAGE_SERVER">

### Clear QOTD Custom Question List:
<command message = "%customquestion list" slash="/qotd question list" description="Shows the List of all custom Questions with their appropriated Question Number." permission="MANAGE_SERVER">

### Get current QOTD Custom Question List:
<command message = "%customquestion clear" slash="/qotd question clear" description="Clears the current custom Question List and removes all Questions." permission="MANAGE_SERVER">

## Get QOTD Stats:
<command message = "%questionstats" slash="/qotd stats" description="Shows the current QOTD STATS with following Information: Next QOTD Question, Current Question Number, Total Questions, which has been sent and more..." permission="MANAGE_SERVER">

## Send a Test QOTD in your QOTD Channel:
<command message = "%questiontest" slash="/qotd test" description="Sends a Test Question in the QOTD Channel to check the current Setup" permission="MANAGE_SERVER">
