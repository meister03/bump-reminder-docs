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
<command message = "%rsetup appendremind max" slash="/reminder setup appendremind [amount]" description="Appends your Remind Count, so you can create more Reminders" permissions ="MANAGE_SERVER"/>

#### Blacklist Users from creating a Reminder:
<command message = "%rset add @user" slash="/reminder setup adduser [user]" description="Blacklists a user and prevents them from creating Reminders" permissions ="MANAGE_SERVER"/>

<command message = "%rset remove @user" slash="/reminder setup removeuser [user]" description="Unblacklists a user and prevents them from creating Reminders" permissions ="MANAGE_SERVER"/>

### Change your Timezone:
<command message = "%timezone" slash="/reminder setup timezone [timezonenumber]" description="Change your timezone for choosing a custom offset and using the custom start time" permissions ="MANAGE_SERVER"/>

### Customize Reminder Message/Create Reminder Message Overwrites:

### Variables:
- **You can use the following Variables in your Message:**
```
{{userid}}, {{usermention}}, {{remindername}}, {{remindermessage}}, {{reminderping}}
```

#### Change the Plain Message, which can be sent with the Ping:
<command message = "%rmessage plain <message>" slash = "/reminder message plain [message]" description="Sets the Plain Message, which is sent on the Reminder" permissions="MANAGE_SERVER"/>

#### Change the Title of the Reminder Message:
<command message = "%rmessage title <message>" slash = "/reminder message title [message]" description="Sets the Title of the Embed, which is sent on the Reminder Message" permissions="MANAGE_SERVER"/>

#### Change the Description of the Reminder Message:
<command message = "%rmessage desc <message>" slash = "/reminder message desc [message]" description="Sets the Description of the Embed, which is sent on the Reminder Message" permissions="MANAGE_SERVER"/>

#### Change the Color of the Reminder Message Embed:
<command message = "%rmessage color <hexcolor>" slash = "/reminder message color [hexcolor]" description="Sets the Color of the Embed, which is sent on the Reminder Embed Message" permissions="MANAGE_SERVER"/>

#### Change the Reminder Message to a Embed/Non-Embed Message:
<command message = "%rmessage embed enable/disable" slash = "/bump message embed [status]" description="Disables or Enables Embed Mode on the Bump Remind Message" permissions="MANAGE_SERVER"/>

#### Change the Footer of the Reminder Message:
<command message = "%rmessage footer <message>" slash = "/reminder message footer [message]" description="Sets the Footer of the Embed, which is sent on the Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

#### Change the Thumbnail of the Reminder Message:
<command message = "%rmessage thumb <image-link>" slash = "/reminder message thumbnail [image-link]" description="Sets the Thumbnail of the Embed, which is sent on the Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

#### Change the Image of the Reminder Message:
<command message = "%rmessage image <image-link>" slash = "/reminder message image [image-link]" description="Sets the Image of the Embed, which is sent on the Reminder Message" permissions="MANAGE_SERVER" premium='true'/>