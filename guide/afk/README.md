---
title: AFK System
description: The highly customizable Afk-System, inform your users, when you set your
  status as afk. There is even an option to auto un-afk you.
---

# AFK System

**The Command `%afk or /afk`, will give you a good overview.**

### Set your Status as Afk:
- **This will set your status to AFK with a specific Message, which will be showed to the users, who mentions you.**
<command message = "%afk y <reason>" slash = "/afk status [status] [reason]" description="Changes your Status to AFK. Whenever someone pings you, they will pre notified with the provided Reason."/>

![Set your status as Afk](https://gblobscdn.gitbook.com/assets%2F-MTADavPwEwJQE_bHADA%2F-MbqipY-MqukBEWkLvLO%2F-MbqkCvwTEXpg1Vcwy75%2Fimage.png?alt=media&token=5b7f6e0c-2f29-49bc-996a-792ef576faaa)

![Info Message for Users, when you get mentioned.](https://gblobscdn.gitbook.com/assets%2F-MTADavPwEwJQE_bHADA%2F-MbqipY-MqukBEWkLvLO%2F-Mbql-CLidKIs0dV6SXV%2Fimage.png?alt=media&token=858731aa-b05d-4988-85bb-79c93dd06a1c)

### Un-AFK yourself:
- **This will Un-AFK your status and users wont receive any info message, when they mention you.**
<command message = "%afk n" slash = "/afk status [status]" description="Changes your Status to Not-AFK."/>

![Easy unafk](https://gblobscdn.gitbook.com/assets%2F-MTADavPwEwJQE_bHADA%2F-MbqipY-MqukBEWkLvLO%2F-MbqlwGYwVMIiiuSH9V3%2Fimage.png?alt=media&token=ec64b2b2-3c47-4292-ab64-bb0eb106773f)

### Enable/Disable Auto Un-Afk:

* **When enabling Auto Un-Afk, your Afk status will  be automatically removed when you send messages. You can ignore certain channels, which prevent Auto Un-Afk on the channels**

<command message = "%afk auto enable/disable" slash = "/afk auto [status]" description="When being online again, it would be annoying to remove your afk status. Just enable the auto-mode and then your afk status will be removed, when sending a message. The Bot will react with the online emoji, when it removes your afk status."/>

![The Bot will react, with the Online Emoji, when you get Un-Afk](https://gblobscdn.gitbook.com/assets%2F-MTADavPwEwJQE_bHADA%2F-MbqipY-MqukBEWkLvLO%2F-MbqmqIMLbJvOILlzuzx%2Fimage.png?alt=media&token=c20dc5f9-2ad0-4818-9198-9c8ed3a95329)

### Ignore Certain Channels from getting Un-Afk

- **You do not have to ignore certain channels, when you have Auto Un-Afk Mode disabled**

#### Ignore Channels from getting automatically unafk:
<command message = "%afk addignore <#channel>" slash = "/afk addignore [channel]" description="Adds the Channel as ignored Channel, where you wont be unafk, when sending messages on auto un-afk mode"/>

- **You can mention many channels in a row, just insert a space between them**
- **This will add the Channels as Ignored Channel**

#### Remove Ignored Channels from getting automatically unafk:

<command message = "%afk removeignore <#channel>" slash = "/afk removeignore [channel]" description="Removes the Channel as ignored Channel, where you wont be unafk, when sending messages on auto un-afk mode"/>

- **You can mention many channels in a row, just insert a space between them**
- **This will remove the Channels as Ignored Channel**

![Ignoring Certain Channels prevents auto un afk.](https://gblobscdn.gitbook.com/assets%2F-MTADavPwEwJQE_bHADA%2F-MbqipY-MqukBEWkLvLO%2F-MbqoFd34YksrlorAbAk%2Fimage.png?alt=media&token=d012caeb-b685-43b9-96e6-0655dba17875)

### Get Pings during AFK:
<command message = "%afk messagelist" slash = "/afk message" description="Will give you a list of message, in which you got pinged."/>

- This gives you a list of messages in which you have been pinged.
![](https://gblobscdn.gitbook.com/assets%2F-MTADavPwEwJQE_bHADA%2F-MhcKDi0acD22W-d3AEi%2F-MhcMBRTEn0ll82-bU7J%2Fimage.png?alt=media&token=e9e64918-a7c7-448c-987b-6b72669e49b7)

