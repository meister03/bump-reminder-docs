---
tilte: Commands
description: Learn more about AFK related Commands
---
# AFK Commands

#### Change your status to AFK:
<command message = "%afk y <reason>" slash = "/afk status [status] [reason]" description="Changes your Status to AFK. Whenever someone pings you, they will pre notified with the provided Reason."/>

#### Change your status to Non-AFK:
<command message = "%afk n" slash = "/afk status [status]" description="Changes your Status to Not-AFK."/>

#### Enable/Disable Auto UnAfk, when sending message:
<command message = "%afk auto enable/disable" slash = "/afk auto [status]" description="When being online again, it would be annoying to remove your afk status. Just enable the auto-mode and then your afk status will be removed, when sending a message. The Bot will react with the online emoji, when it removes your afk status."/>

#### Ignore Channels from getting automatically unafk:
<command message = "%afk addignore <channel>" slash = "/afk addignore [channel]" description="Adds the Channel as ignored Channel, where you wont be unafk, when sending messages on auto un-afk mode"/>

<command message = "%afk removeignore <channel>" slash = "/afk removeignore [channel]" description="Removes the Channel as ignored Channel, where you wont be unafk, when sending messages on auto un-afk mode"/>

#### Get a List of Pings during AFK:
<command message = "%afk messagelist" slash = "/afk message" description="Will give you a list of message, in which you got pinged."/>