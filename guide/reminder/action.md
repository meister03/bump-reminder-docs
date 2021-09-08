---
title: Action Reminders
description: 'Learn how to created/edit/delete Action Reminders'
---
# Action Reminders
Action Reminders are Reminder, which reminds you after a certain time, when you triggered the Bot with you choose Trigger.
As an example: `You created a Action Reminder with a 'RemindAfter' Time of 1d and your Trigger is 'pls daily'`
`When someone now runs pls daily, the Bot will remind this person in 1d with your choosen Reminder Message`

::: warning
**Reminders with the same name will be overwritten.**
:::


### Create a Action Reminder:
* Creates a Action Reminder with the given Name and Data
* This will Guide you through a Setup, where you can add a Remind Message, the Trigger and more
* Choose the right Action Reminder mode based on your usecase, which is shown below
<command message = "%action <remindername> <reminderafter> <ping>" slash="NOT AVAILABLE" description="Creates a Action Reminder with the given Data and guides you through the Setup" permissions ="MANAGE_SERVER"/>

* **Ex: `%action Daily-Coins 1d` ->  This will create a action reminder, which will trigger on the trigger and remind you after 1day.**

**Action Reminders Mode:**
<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Action Reminder Option:</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        <p><b>0 - When you multiply trigger the reminder, it will multiply remind you</b>
        </p>
        <p><b>1 - When you multiply trigger the reminder, the last reminder will be overwritten with the newest one</b>
        </p>
        <p><b>2 - Multiply triggering will be ignored, when existing action reminders are running</b>
        </p>
      </td>
    </tr>
  </tbody>
</table>




### Delete a Action Reminder:
- This will delete the Reminder with the ReminderName
- Get a list of Action Reminders with `%action all` for finding out the names.
<command message = "%action delete <remindername>" slash="NOT AVAILABLE" description="Deletes the Reminder with the given Name. Get a List of Action Reminders with %action all" permissions ="MANAGE_SERVER"/>

### Check all Action Reminders:
- Will give you a Select Menu with which you can manage the Active Reminders and even delete them
<command message = "%action all" slash="NOT AVAILABLE" description="Gives you a list of all Action Reminders" permissions ="MANAGE_SERVER"/>