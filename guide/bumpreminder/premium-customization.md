---
tilte: Premium Customization
description: Do further Customization with using the Premium Features
---
# Premium Customization

## Feature: ChannelStatus
- [**This feature allows you to create a locked voice channel/normal channel, which shows the time left for the next bump.** ](https://media.discordapp.net/attachments/738409360488661142/809322554573586452/unknown.png)

::: tip
**The Bot must have the `Manage_Channel` , `View_Channel`, `Send_Messages` in the Channel, which you added.**
:::

#### Add a Channelstatus Channel:
- Adds a Channel, where the Bump Status will be shown.
<command message = "%channelstatus channel <#channel>" slash = "/bump channelstatus channel [channel]" description="Adds a Channel, where the Bump Status will be shown" permissions="MANAGE_SERVER"/>

#### Change the ChannelName, when server is not bumpable:
- Changes the ChanneName to the name below, when the server is not bumpable.
- You can use time parameter `{time}` for viewing the time left until next bump.
<command message = "%channelstatus notbumpable <channelname>" slash = "/bump channelstatus notbumpable [channelname]" description="Sets the ChannelName, when the Server is not bumpable" permissions="MANAGE_SERVER"/>

#### Change the ChannelName, when server is bumpable:
- Changes the ChanneName to the name below, when the server can be bumped again.
<command message = "%channelstatus bumpable <channelname>" slash = "/bump channelstatus bumpable [channelname]" description="Sets the ChannelName, when the Server is bumpable" permissions="MANAGE_SERVER"/>

#### Change the ChannelName, when server is bumpable in short:
- When the Server is bumpable in less than 10 minutes, it will change the channel name to the name, which you will set below.
<command message = "%channelstatus bumpableinshort <channelname>" slash = "/bump channelstatus bumpableinshort [channelname]" description="Sets the ChannelName, when the Server is bumpableinshort" permissions="MANAGE_SERVER"/>

## Feature: ChannelLockdowm
- This lockdowns the Bump Channel, when the Server is not Bumpable.
- When the Server is bumpable, the channel will be unlocked for the public.

#### Enable/Disable ChannelLockdown:
<command message = "%channelstatus lock enable/disable" slash = "/bump channelstatus lockdown [status]" description="Enables/Disables Channel Lockdown, when server is not Bumpable" permissions="MANAGE_SERVER"/>

## Feature: Custom Avatar & Name on Remind Message
- This creates a Webhook on Bump Channel
- The Bump Remind Message will be sent with Webhook, which can be custimized on the Name & Avatar
#### Change the Avatar on the Remind Message:
<command message = "%custom avatar <imagelink>" slash = "/bump message avatar [imagelink]" description="Changes the Avatar of the Bot to the new Image on the Remind Message" permissions="MANAGE_SERVER" premium='true'/>

#### Change the Name on the Remind Message:
<command message = "%custom name <name>" slash = "/bump message name [name]" description="Changes the Name of the Bot to the new name on the Remind Message" permissions="MANAGE_SERVER" premium='true'/>