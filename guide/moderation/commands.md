---
tilte: Commands
description: Learn more about Moderation Commands
---
# Moderation Commands
### Setup Moderation Commands

#### Enable/Disable Moderation Feature:
<command message = "%modsetup enable/disable" slash = "/mod setup enable/disable" description="Enables/Disables the Moderation Plugin" permissions="ADMINISTRATOR"/>

#### Add Moderation Log:
<command message = "%modsetup log <#channel>" slash = "/mod setup modlog [channel]" description="Sets the Moderation Log, where all ban, kicks, mutes and mod notes will be sent" permissions="ADMINISTRATOR"/>

#### Set Mute Role:
<command message = "%modsetup mute <@role>" slash = "/mod setup mute [role]" description="Setup a Mute Role, which will be given, when someone gets muted with the mute command."  permission= "ADMINISTRATOR"/>

#### Add Moderator Members or Roles:
<command message = "%modlist adduser <@user>" slash = "/mod moderators addusers [user]" description="Adds a member as Moderator, which ables them to use the Bump Reminder Mod Commands."  permission= "ADMINISTRATOR"/>

<command message = "%modlist addrole <@role>" slash = "/mod moderators addroles [role]" description="Adds a Role as Moderator Role, which ables Members with the Role to use the Bump Reminder Mod Commands."  permission= "ADMINISTRATOR"/>

#### Remove Moderator Members or Roles:
<command message = "%modlist removeuser <@user>" slash = "/mod moderators removeusers [user]" description="Removes a member from the Moderator section, which revokes the access to the Mod Commands."  permission= "ADMINISTRATOR"/>

<command message = "%modlist removerole <@role>" slash = "/mod moderators removeroles [role]" description="Removes a Role from the Moderator Section, which revokes the access to the Mod Commands for the Role."  permission= "ADMINISTRATOR"/>

#### Add Whitelisted Members or Roles:
<command message = "%wlist adduser <@user>" slash = "/mod whitelist addusers [user]" description="Adds a member as a whitelisted Member, which makes them immun against Mod Actions."  permission= "ADMINISTRATOR"/>

<command message = "%wlist addrole <@role>" slash = "/mod whitelist addroles [role]" description="Adds a Role as a whitelisted Role, which makes them Members with the Role immun against Mod Actions."  permission= "ADMINISTRATOR"/>

#### Remove Whitelisted Members or Roles:
<command message = "%wlist removeuser <@user>" slash = "/mod whitelist removeusers [user]" description="Removes a member as a whitelisted Member, which removes them immunity against Mod Actions."  permission= "ADMINISTRATOR"/>

<command message = "%wlist removerole <@role>" slash = "/mod whitelist removeroles [role]" description="Removes a Role as as whitelisted Roles, which removes them immunity against Mod Actions."  permission= "ADMINISTRATOR"/>

### Moderating Commands

#### Create a Modnote on a Member:
<command message = "%modnote <@user> <note>" slash = "/modnote [user] [note]" description="Creates a private Modnote on a User, which is not visible to public and can be shown again with the %case command."  permission= "MODERATOR"/>

#### Check all Member Cases (`modnote`, `warn`, `mute`, `kick`, `ban`):
<command message = "%case <@user>" slash = "/case [user]" description="Shows all cases of a Member with some interesting informations, which can help, which mod action the next punishment should be."  permission= "MODERATOR"/>

#### Purge Messages:
<command message = "%purge <amount>" slash = "NOT AVAILABLE" description="Purges the given amount of Messages in the Channel."  permission= "MANAGE_MESSAGES"/>

<command message = "%purge <word> <amount>" slash = "NOT AVAILABLE" description="Purges the given amount of messages in the Channel, which contains the mentioned word."  permission= "MANAGE_MESSAGES"/>

<command message = "%purge <@user> <amount>" slash = "NOT AVAILABLE" description="Purges the given amount of Messages in the Channel from the mentioned user."  permission= "MANAGE_MESSAGES"/>

<command message = "%purge <@user> <word>" slash = "NOT AVAILABLE" description="Purges all Messages in the Channel, which contains the mentioned word from the mentioned user."  permission= "MANAGE_MESSAGES"/>

<command message = "%purge <#channel> <amount>" slash = "NOT AVAILABLE" description="Purges the given amount of messages in the mentioned channel."  permission= "MANAGE_MESSAGES"/>

<command message = "%purge <#channel> <word>" slash = "NOT AVAILABLE" description="Purges all messages in the mentioned channel, which contains the mentioned word."  permission= "MANAGE_MESSAGES"/>

#### Warn a Member:
- Sends a DM with the Warning
<command message = "%warn <@user> <reason>" slash = "/warn [user] [reason]" description="Creates a Warning on a User, which is sent to the users DM and the modlog."  permission= "MODERATOR"/>

#### Mute/Unmute a Member:
- Sends a DM on Mute with the given reason and a DM, when the mute is revoked.
<command message = "%mute <@user> <reason>" slash = "/mute [user] [reason]" description="Mutes the mentioned user and sends the reason to the users DM and the modlog."  permission= "MODERATOR"/>

<command message = "%unmute <@user> <reason>" slash = "/unmute [user] [reason]" description="Unmutes the mentioned user and sends the reason to the users DM and the modlog."  permission= "MODERATOR"/>

#### Kicks a Member:
- Sends a DM to the Member with the reason, that they got kicked.
<command message = "%kick <@user> <reason>" slash = "/kick [user] [reason]" description="Kicks the mentioned user and sends the reason to the users DM and the modlog."  permission= "MODERATOR"/>

#### Ban/Unban a Member:
- Sends a DM on Ban with the given reason and a DM, when the Ban is revoked.
<command message = "%ban <@user> <removeafter> <reason>" slash = "/ban [user] [removeafter] [reason]" description="Bans the mentioned user and sends the reason to the users DM and the modlog."  permission= "MODERATOR"/>

<command message = "%unban <@user> <reason>" slash = "/unban [user] [reason]" description="Unbans the mentioned user and sends the reason to the users DM and the modlog."  permission= "MODERATOR"/>

#### Add a (temp) Role:
<command message = "%temprole <@user> <@role> <removeafter>" slash = "/addrole [user] [role] [removeafter]" description="Adds a Role to the mentioned User and removes it on the given time, when nor is provided. The Role will be granted forever."  permission= "MANAGE_ROLES"/>

#### Dehoist Members:
- Dehoists Members (Change Nicknames), which have Special Characters like `!, *, .` 
<command message = "%dehoist list" slash = "/dehoist list" description="Gets a list of all dehoistable Members."  permission= "MANAGE_NICKNAMES, ADMINISTRATOR"/>

<command message = "%dehoist user <@user> <new_nickname>" slash = "/dehoist user [user] [new_nickname]" description="Dehoists the mentioned user and gives them the mentioned new nickname, when nor is given, then the special Character will be removed."  permission= "MANAGE_NICKNAMES, ADMINISTRATOR"/>

<command message = "%dehoist all <new_nickname>" slash = "/dehoist all [new_nickname]" description="Dehoists all dehoistable Members and gives them the mentioned new nickname, when nor is given, then the special Character  will be removed."  permission= "MANAGE_NICKNAMES, ADMINISTRATOR"/>
