---
tilte: Commands
description: Learn more about, how to create/edit/delete General Reminders
---
# Reminder Commands

### Interval Command

#### Create a Interval Reminder:
<command message = "%interval create" slash="/interval create [intervalname] [interval] [ping] [channel] [remindmessage] [starttime]" description="Creates a Interval Reminder with the given Data" permissions ="MANAGE_SERVER"/>

#### Delete a Interval Reminder:
<command message = "%interval delete <intervalname>" slash="/interval delete [intervalname] " description="Deletes the Interval with the given Name. Get a List of Intervals with /interval all" permissions ="MANAGE_SERVER"/>

#### Check all Interval Reminders:
<command message = "%interval all" slash="/interval all" description="Gives you a list of all Interval Reminders" permissions ="MANAGE_SERVER"/>

### Remindme & Remind Command

#### Create a Reminder:
<command message = "%remind <timecontent>" slash="/remind create [remindername] [ping] [channel] [remindmessage] [usetimezone]" description="Creates a Normal Reminder with the given Data and guides you through a Setup" permissions ="MANAGE_SERVER"/>

#### Delete a Reminder:
<command message = "%remind delete <remindername>" slash="/remind delete [remindername] " description="Deletes the Reminder with the given Name. Get a List of Reminders with /remind all" permissions ="MANAGE_SERVER"/>

#### Check all Reminders:
<command message = "%remind all" slash="/remind all" description="Gives you a list of all Reminders" permissions ="MANAGE_SERVER"/>
 
### Action Reminder Command

#### Create a Action Reminder:
<command message = "%action <remindername> <reminderafter> <ping>" slash="NOT AVAILABLE" description="Creates a Action Reminder with the given Data and guides you through the Setup" permissions ="MANAGE_SERVER"/>

#### Delete a Action Reminder:
<command message = "%action delete <remindername>" slash="NOT AVAILABLE" description="Deletes the Reminder with the given Name. Get a List of Action Reminders with %action all" permissions ="MANAGE_SERVER"/>

#### Check all Action Reminders:
<command message = "%action all" slash="NOT AVAILABLE" description="Gives you a list of all Action Reminders" permissions ="MANAGE_SERVER"/>

### Active Reminder Command:
<command message = "%activerme" slash="NOT AVAILABLE" description="Gives you a list of all Active Reminders" permissions ="MANAGE_SERVER"/>

### Setup/Manage Reminder Category

#### Append Maximal Remind Count:
<command message = "%rsetup appendremind max" slash="NOT AVAILABLE" description="Appends your Remind Count, so you can create more Reminders" permissions ="MANAGE_SERVER"/>

#### Blacklist Users from creating a Reminder:
<command message = "%rset add @user" slash="NOT AVAILABLE" description="Blacklists a user and prevents them from creating Reminders" permissions ="MANAGE_SERVER"/>

<command message = "%rset remove @user" slash="NOT AVAILABLE" description="Unblacklists a user and prevents them from creating Reminders" permissions ="MANAGE_SERVER"/>

### Change your Timezone:
<command message = "%timezone" slash="NOT AVAILABLE" description="Change your timezone for choosing a custom offset and using the custom start time" permissions ="MANAGE_SERVER"/>