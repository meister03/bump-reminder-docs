---
title: Setup
description: 'Here you will learn, how to setup the Moderation system.'
---
# Setup Moderation

**To continue assume, that the Bot has the Permissions for running Mod commands like Kick,Ban, Mute.**

### Enable/Disable Moderation System:
<command message = "%modsetup enable/disable" slash = "/mod setup enable/disable" description="Enables/Disables the Moderation Plugin" permissions="ADMINISTRATOR"/>

### Add Moderation Log:
<command message = "%modsetup log <#channel>" slash = "/mod setup modlog [channel]" description="Sets the Moderation Log, where all ban, kicks, mutes and mod notes will be sent" permissions="ADMINISTRATOR"/>

### Add a Mute-role:
- Assume that you have a existing mute role!
- This Role will be given, when someone will be muted.
<command message = "%modsetup mute <@role>" slash = "/mod setup mute [role]" description="Setup a Mute Role, which will be given, when someone gets muted with the mute command."  permissions = "ADMINISTRATOR"/>

### [Add Moderators to perform Actions.](moderators.md)
### [Add Whitelisted Roles/Members, which are immun against Mod Actions](whitelist.md)

