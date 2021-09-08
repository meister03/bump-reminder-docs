---
title: Onetime Reminders
description: 'Learn how to created/edit/delete Onetime Reminders'
---
### Remindme & Remind Command

Onetime Reminders are normal Reminders, which reminds you onetime after a certain period of time, which will be choosen by you.

::: tip
When you want to create a personal Reminder use the comamnd `%remindme`
:::

::: warning
**Reminders with the same name will be overwritten.**
:::


#### Create a Reminder:
- This creates a Reminder on the given Time and guides you through a setup, where you can customize the Reminder on certain aspects
<command message = "%remind <timecontent>" slash="/remind create [remindername] [ping] [channel] [remindmessage] [usetimezone]" description="Creates a Normal Reminder with the given Data and guides you through a Setup" permissions ="MANAGE_SERVER"/>
- Example: `%remindme in 10 minute for drinking water`

#### Delete a Reminder:
- This will delete the Reminder with the ReminderName
- Get a list of Interval Reminders with `%interval all` for finding out the names.
<command message = "%remind delete <remindername>" slash="/remind delete [remindername] " description="Deletes the Reminder with the given Name. Get a List of Reminders with /remind all" permissions ="MANAGE_SERVER"/>

#### Check all Reminders:
- Will give you a Select Menu with which you can manage the Reminders and even delete them
<command message = "%remind all" slash="/remind all" description="Gives you a list of all Reminders" permissions ="MANAGE_SERVER"/>