---
title: Remind Util
description: 'Learn how to blacklist users, append your remind count and change your timezone'
---
# Remind Util
### Add /Remove blacklisted Users:
::: warning Info
Blacklisted users can no more create any type of Reminders
:::
* **This will blacklist or unblacklist mentioned Users.**

#### Add Blacklisted Users:
* `%rset add @user1 @user2`
* **You can provide mentions or user ids & you can add many with mentioning the users in a row.**
* **This will add blacklisted Users!**

#### Remove Blacklisted Users:
* `%rset remove @user1 @user2`
* **You can provide mentions or user ids & you can remove many with mentioning the users in a row.**
* **This will remove blacklisted Users!**

### Append Maximal Remind Count:
- The increases the Reminder Cap, which ables you to create more Reminders
<command message = "%rsetup appendremind max" slash="NOT AVAILABLE" description="Appends your Remind Count, so you can create more Reminders" permissions ="MANAGE_SERVER"/>

### Change your Timezone
- When using a custom Timezone it is important to use a Timezone for getting the right Start Time
<command message = "%timezone" slash="NOT AVAILABLE" description="Change your timezone for choosing a custom offset and using the custom start time" permissions ="MANAGE_SERVER"/>



