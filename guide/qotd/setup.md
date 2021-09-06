---
title: Setup
description: Learn to setup the QOTD system
---
# Setup QOTD

#### The Command `%qsetup` or `/qotd setup` gives you a good overview.

### Add a QOTD Channel:
= **Adds a channel, where daily questions will be sent.**
<command message = "%qsetup channel <#channel>" slash="/qotd setup channel [channel]" description="Adds the mentioned Channels as QOTD Channel, where daily QOTD's will be sent." permissions ="MANAGE_SERVER"/>

### [Premium](../premium) Add a QOTD Ping:
- Adds the mentioned Roles as QOTD Ping, which will be pinged on the daily QOTD's
<command message = "%qsetup ping <@role>" slash="/qotd setup ping [role]" description="Adds the mentioned Roles as QOTD Ping, which will be pinged on the daily QOTD's" permissions ="MANAGE_SERVER" premium="true"/>

### Schedule QOTD on a specific Time:
<command message = "%qsetup scheduleat <date>" slash="/qotd setup scheduleat [date]" description="Schedules the QOTD to a given Date and Time from where on the 1 Day QOTD Interval will be continued." permissions ="MANAGE_SERVER"/>

- Ex: `/qotd setup scheduleat 20:15 10/09/2021` -> This will schedule the Question at `20:15` on the Date: `10/09/2021`

### Test your QOTD Setup:
- This sends a test QOTD in the QOTD Channel
<command message = "%questiontest" slash="/qotd test" description="Sends a Test Question in the QOTD Channel to check the current Setup" permissions ="MANAGE_SERVER"/>



