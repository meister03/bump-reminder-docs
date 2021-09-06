---
title: Setup/Manage Suggestion
description: 'Learn how to use the Suggestion System'
---
# Suggestion Commands

### Add a Suggestion Channel:
- Adds the mentioned Channel as Suggestion Channel, where the suggestions, which is sent by the command will be sent.
<command message = "%suggest channel <#channel>" slash = "/suggest channel [channel]" description = "Adds the mentioned Channel as Suggestion Channel, where the suggestions, which is sent by the command will be sent." permissions = "MANAGE_SERVER"/>

### Send a Suggestion to the Suggestion Channel:
- Sends the Suggestion with the given Message in the Suggestion Channel
<command message = "%suggest <message>" slash = "/suggest send <message>" description = "Sends the Suggestion with the given Message in the Suggestion Channel"/>

### Reply to a Suggestion:
- Adds a Reply to the Suggestion Embed, which can be sent from the Suggestion Creator or a Server Manager.
<command message = "%suggest reply <msgid> <response>" slash = "/suggest reply [msgid] [response]" description = "Adds a Reply to the Suggestion Embed, which can be sent from the Suggestion Creator or a Server Manager." permissions = "SUGGESTION_CREATOR, MANAGE_SERVER"/>

### Deny a Suggestion:
- Denys a Suggestion with the given Reason.
<command message = "%suggest deny <msgid> <reason>" slash = "/suggest deny [msgid] [reason]" description = "Denys a Suggestion with the given Reason." permissions = "MANAGE_SERVER"/>

### Approve a Suggestion:
- Approves a Suggestion with the given Reason.
<command message = "%suggest approve <msgid> <reason>" slash = "/suggest approve [msgid] [reason]" description = "Approves a Suggestion with the given Reason." permissions = "MANAGE_SERVER"/>

## Showcase:
![https://gblobscdn.gitbook.com/assets%2F-MTADavPwEwJQE_bHADA%2F-MVFxhmHut21vZWWWMQr%2F-MVFy8FPX9ELCZo8TQ4v%2Fimage.png?alt=media&token=d0ee4fc8-7031-4104-991f-306679f1cb81]()