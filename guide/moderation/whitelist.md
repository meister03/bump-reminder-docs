---
title: Add/Remove Whitelist
description: 'Here you will learn, how to add whitelisted Members or Roles'
---
# Add or Remove Whitelist

::: tip Info
- **Added Moderators are already whitelisted!**

- **You can provide mentions or role/user ids & you can add many with mentioning the roles/users in a row.**
-  **Check with current List of mods with `%modsetup` or `/mod setup help`** 
:::
::: warning
- **Whitelisted Members or Roles are immun against Mod Actions!**
:::

### Add Whitelist:
#### Add Whitelisted Members:
- Adds a member as a whitelisted Member, which makes them immun against Mod Actions.
<command message = "%wlist adduser <@user>" slash = "/mod whitelist addusers [user]" description="Adds a member as a whitelisted Member, which makes them immun against Mod Actions."  permissions = "ADMINISTRATOR"/>

#### Add Whitelisted Roles:
- Adds a Role as a whitelisted Role, which makes them Members with the Role immun against Mod Actions.
<command message = "%wlist addrole <@role>" slash = "/mod whitelist addroles [role]" description="Adds a Role as a whitelisted Role, which makes them Members with the Role immun against Mod Actions."  permissions = "ADMINISTRATOR"/>

### Remove Modertors:
#### Remove Whitelisted Members:
- Removes a member as a whitelisted Member, which removes there immunity against Mod Actions.
<command message = "%wlist removeuser <@user>" slash = "/mod whitelist removeusers [user]" description="Removes a member as a whitelisted Member, which removes there immunity against Mod Actions."  permissions = "ADMINISTRATOR"/>

#### Remove Whitelisted Roles:
- Removes a Role as as a whitelisted Role, which removes there immunity against Mod Actions.
<command message = "%wlist removerole <@role>" slash = "/mod whitelist removeroles [role]" description="Removes a Role as as a whitelisted Role, which removes there immunity against Mod Actions."  permissions = "ADMINISTRATOR"/>