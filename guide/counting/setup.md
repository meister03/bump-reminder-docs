---
title: Setup
description: Learn how to setup the counting system
---

# Setup Counting

### Enable/Disable the Counting System:
<command message = "%countsetup enable/disable" slash = "/count setup enable/disable" description="Enables/Disables the Counting Feature" permissions="MANAGE_SERVER"/>

### Add a Counting Channel:
- **This will add the mentioned channel as counting channel**
<command message = "%countsetup channel <#channel>" slash = "/count setup channel [channel]" description="Sets the Counting Channel, where you will count together." permissions="MANAGE_SERVER"/>

## Options for Customizing:

### Enable/Disable Reactions when counted right/wrong:

#### The Bot should add Reactions, when the Number is wrong or right:
<command message = "%countsetup yesreact" slash = "/count setup yesreact" description="Enables Reactions in the Counting Channel, when counted right or wrong." permissions="MANAGE_SERVER"/>

#### The Bot will not add Reactions, when the Number is wrong or right:
<command message = "%countsetup noreact" slash = "/count setup noreact" description="Disables Reactions in the Counting Channel, when counted right or wrong." permissions="MANAGE_SERVER"/>

### Enable/Disable Count Reset, when counted wrong
- When this Feature is enabled, the current Count will be resetted to `0`
#### The Bot will reset the Counting, when the Number is wrong and the counting will begin again with 0:
<command message = "%countsetup yesreset" slash = "/count setup yesreset" description="Enables Counting reset, when a wrong Number has been sent." permissions="MANAGE_SERVER"/>

#### The Bot should not reset the Counting, when the Number is wrong and the counting will continue with the next Number:**
<command message = "%countsetup noreset" slash = "/count setup noreset" description="Disables Counting reset, when a wrong Number has been sent." permissions="MANAGE_SERVER"/>

### 📀Add Role when wrong counted:
<command message = "%countsetup role <@role> <removeafter>" slash = "/count setup role [role] [removeafter]" description="Gives a timed role, when someone counted wrong and which will be removed after the provied time" permissions="MANAGE_SERVER"/>

- This adds a role, when a user counted wrong and removes it after a specific time, when a time was provided
- **Ex: `/count setup role @Math-Noob 2m` -&gt; When User X counted wrong, he will get the @Math-Noob role for 2 minutes**