---
title: Interval Reminders
description: 'Learn how to created/edit/delete Interval Reminders'
---
### Interval Command
Interval Reminders are Reminders, which recurr on a chosen Interval. You can choose a Start Time, a Remind Message, a Remind Channel and even a Remind Ping.

::: warning
**Reminders with the same name will be overwritten.**
:::

#### Create a Interval Reminder:
- This will guide you through a Setup, where you can customize the Interval Reminder on certain aspects
<command message = "%interval create" slash="/interval create [intervalname] [interval] [ping] [channel] [remindmessage] [starttime]" description="Creates a Interval Reminder with the given Data" permissions ="MANAGE_SERVER"/>

#### Delete a Interval Reminder:
- This will delete the Reminder with the ReminderName
- Get a list of Interval Reminders with `%interval all` for finding out the names.
<command message = "%interval delete <intervalname>" slash="/interval delete [intervalname] " description="Deletes the Interval with the given Name. Get a List of Intervals with /interval all" permissions ="MANAGE_SERVER"/>

#### Check all Interval Reminders:
- Will give you a Select Menu with which you can manage the Active Reminders and even delete them
<command message = "%interval all" slash="/interval all" description="Gives you a list of all Interval Reminders" permissions ="MANAGE_SERVER"/>