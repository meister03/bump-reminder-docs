---
title: Add/Remove Moderators
description: 'Here you will learn, how to add moderators to perform actions'
---
# Add or Remove Modertors

::: tip Info
- **You can provide mentions or role/user ids & you can add many with mentioning the roles/users in a row.**
-  **Check with current List of mods with `%modsetup` or `/mod setup help`** 
:::

### Add Moderators:
#### Add Moderator as Members:
- Adds a member as Moderator, which ables them to use the Bump Reminder Mod Commands.
<command message = "%modlist adduser <@user>" slash = "/mod moderators addusers [user]" description="Adds a member as Moderator, which ables them to use the Bump Reminder Mod Commands."  permissions = "ADMINISTRATOR"/>

#### Add Moderators with a Role:
- Adds a Role as Moderator Role, which ables Members with the Role to use the Bump Reminder Mod Commands.
<command message = "%modlist addrole <@role>" slash = "/mod moderators addroles [role]" description="Adds a Role as Moderator Role, which ables Members with the Role to use the Bump Reminder Mod Commands."  permissions = "ADMINISTRATOR"/>

### Remove Modertors:
#### Remove added Members from the Moderator Section:
- Removes a member from the Moderator section, which revokes the access to the Mod Commands.
<command message = "%modlist removeuser <@user>" slash = "/mod moderators removeusers [user]" description="Removes a member from the Moderator section, which revokes the access to the Mod Commands."  permissions = "ADMINISTRATOR"/>

#### Remove added Roles from the Moderator Section:
- Removes a Role from the Moderator Section, which revokes the access to the Mod Commands for the Role.
<command message = "%modlist removerole <@role>" slash = "/mod moderators removeroles [role]" description="Removes a Role from the Moderator Section, which revokes the access to the Mod Commands for the Role."  permissions = "ADMINISTRATOR"/>