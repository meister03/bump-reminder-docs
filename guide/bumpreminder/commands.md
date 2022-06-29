---
tilte: Commands
description: Learn more about Bump Reminder related Commands
---
# Bump Remind Commands

### Bump Reminder Setup Command
#### Add a Bump Channel:
<command message = "%setup add <#channel>" slash = "/bremind setup channel [channel]" description="Add a Bump Channel, where the Bump Remind Message will be sent." permissions="MANAGE_SERVER"/>

#### Add a Bump Remind Ping:
<command message = "%setup ping <@role>" slash = "/bremind setup ping [role]" description="Add a Bump Remind Ping, which will pinged on the Bump Remind Message." permissions="MANAGE_SERVER"/>

### Customize Remind Message Command

#### Change the Response, which is sent on Bump:
<command message = "%custom response <message>" slash = "/bremind message response [message]" description="Sets the Message,which is sent on Bump" permissions="MANAGE_SERVER"/>

#### Change the Title of the Bump Reminder Message:
<command message = "%custom title <message>" slash = "/bremind message title [message]" description="Sets the Title of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER"/>

#### Change the Description of the Bump Reminder Message:
<command message = "%custom desc <message>" slash = "/bremind message desc [message]" description="Sets the Description of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER"/>

#### Change the Color of the Bump Reminder Message Embed:
<command message = "%custom color <hexcolor>" slash = "/bremind message color [hexcolor]" description="Sets the Color of the Embed, which is sent on the Bump Reminder Embed Message" permissions="MANAGE_SERVER"/>

#### Change the Bump Reminder Message to a Embed/Non-Embed Message:
<command message = "%custom embed yes/no" slash = "/bremind message embed [status]" description="Disables or Enables Embed Mode on the Bump Remind Message" permissions="MANAGE_SERVER"/>

#### Change the Footer of the Bump Reminder Message:
<command message = "%custom footer <message>" slash = "/bremind message footer [message]" description="Sets the Footer of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

#### Change the Thumbnail of the Bump Reminder Message:
<command message = "%custom thumb <image-link>" slash = "/bremind message thumbnail [image-link]" description="Sets the Thumbnail of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

#### Change the Image of the Bump Reminder Message:
<command message = "%custom image <image-link>" slash = "/bremind message image [image-link]" description="Sets the Image of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

### Bump Reminder Test Command
<command message = "%test" slash = "/bremind test" description="Simulate a Bump Reminder Message to check your current Setup" cooldown="10" permissions="MANAGE_SERVER"/>

### Custom Avatar & Name on Remind Message

#### Change the Avatar on the Remind Message:
<command message = "%custom avatar <imagelink>" slash = "/bremind message avatar [imagelink]" description="Changes the Avatar of the Bot to the new Image on the Remind Message" permissions="MANAGE_SERVER" premium='true'/>

#### Change the Name on the Remind Message:
<command message = "%custom name <name>" slash = "/bremind message name [name]" description="Changes the Name of the Bot to the new name on the Remind Message" permissions="MANAGE_SERVER" premium='true'/>

### Bump Channelstatus & Channellockdown Command

#### Add a Channelstatus Channel:
<command message = "%channelstatus channel <#channel>" slash = "/bremind channelstatus channel [channel]" description="Adds a Channel, where the Bump Status will be shown" permissions="MANAGE_SERVER"/>

#### Change the ChannelName, when server is not bumpable:
<command message = "%channelstatus notbumpable <channelname>" slash = "/bremind channelstatus notbumpable [channelname]" description="Sets the ChannelName, when the Server is not bumpable" permissions="MANAGE_SERVER"/>

#### Change the ChannelName, when server is bumpable:
<command message = "%channelstatus bumpable <channelname>" slash = "/bremind channelstatus bumpable [channelname]" description="Sets the ChannelName, when the Server is bumpable" permissions="MANAGE_SERVER"/>

#### Change the ChannelName, when server is bumpable in short:
<command message = "%channelstatus bumpableinshort <channelname>" slash = "/bremind channelstatus bumpableinshort [channelname]" description="Sets the ChannelName, when the Server is bumpableinshort" permissions="MANAGE_SERVER"/>

#### Lockdown the Channel, when Server is not bumpable:
<command message = "%channelstatus lock enable/disable" slash = "/bremind channelstatus lockdown [status]" description="Enables/Disables Channel Lockdown, when server is not Bumpable" permissions="MANAGE_SERVER"/>


