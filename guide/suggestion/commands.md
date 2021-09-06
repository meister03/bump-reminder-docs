---
tilte: Commands
description: Learn more about Suggestion Commands
---
# Suggestion Commands

### Add a Suggestion Channel:
<command message = "%suggest channel <#channel>" slash = "/suggest channel [channel]" description = "Adds the mentioned Channel as Suggestion Channel, where the suggestions, which is sent by the command will be sent." permissions = "MANAGE_SERVER"/>

### Send a Suggestion to the Suggestion Channel:
<command message = "%suggest <message>" slash = "/suggest send <message>" description = "Sends the Suggestion with the given Message in the Suggestion Channel"/>

### Reply to a Suggestion:
<command message = "%suggest reply <msgid> <response>" slash = "/suggest reply [msgid] [response]" description = "Adds a Reply to the Suggestion Embed, which can be sent from the Suggestion Creator or a Server Manager." permissions = "SUGGESTION_CREATOR, MANAGE_SERVER"/>

### Deny a Suggestion:
<command message = "%suggest deny <msgid> <reason>" slash = "/suggest deny [msgid] [reason]" description = "Denys a Suggestion with the given Reason." permissions = "MANAGE_SERVER"/>

### Approve a Suggestion:
<command message = "%suggest approve <msgid> <reason>" slash = "/suggest approve [msgid] [reason]" description = "Approves a Suggestion with the given Reason." permissions = "MANAGE_SERVER"/>