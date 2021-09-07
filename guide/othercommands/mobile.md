---
title: Mobile Commands
description: Some Commands, which helps you manage your Server
---
# Mobile Commands

### Role Manage Command

#### Get a List of all Roles:
<command message = "%role list" slash="/mobile role list" description="Shows all Roles in the currect Order" permissions="MANAGE_ROLES"/>

#### Move a Role to a specific Position:
<command message = "%role move <@role> <position>" slash="/mobile role move [role] [position]" description="Moves the mentioned Role on the mentioned Position" permissions="MANAGE_ROLES"/>

### Emoji Manage Command

#### Get a List of all Emojis:
<command message = "%emoji list" slash="/mobile emoji list" description="Shows all Emojis in the Server with their Names" permissions="MANAGE_EMOJIS"/>

#### Get a Info about a Emoji:
<command message = "%emoji info <emoji>" slash="/mobile emoji info [emoji]" description="Gets some Info about the mentioned Emoji" permissions="MANAGE_EMOJIS"/>

#### Upload a Emoji with a specific Name:
<command message = "%emoji upload <name> <imagelink>" slash="/mobile emoji upload [name] [imagelink]" description="Uploads the Emoji with the given Name" permissions="MANAGE_EMOJIS"/>

### View a Message:
<command message = "%viewmessage <msglink>" slash="/mobile viewmsg [msglink]" description="Views a Message and fetches its Content from the given Message Link"/>

### Convert Embed to Plain Message:
<command message = "%tonormalmsg <msglink>" slash="/mobile tonormalmsg [msglink]" description="Converts a Embed Message to a Normal Plain Message and sends it to the Channel"/>