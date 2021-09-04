---
tilte: Commands
description: Learn more about Bump Reminder related Commands
---
# Bump Remind Commands

### Bump Reminder Setup Command
#### Add a Bump Channel:
<command message = "%setup add #channel" slash = "/bump setup channel [channel]" description="Add a Bump Channel, where the Bump Remind Message will be sent." permissions="MANAGE_SERVER"/>

#### Create a Bump Channel:
<command message = "%setup create" slash = "Non Exist" description="Creates a Bump Channel, where the Bump Remind Message will be sent." permissions="MANAGE_SERVER"/>

#### Add a Bump Remind Ping:
<command message = "%setup ping @role" slash = "/bump setup ping [role]" description="Add a Bump Remind Ping, which will pinged on the Bump Remind Message." permissions="MANAGE_SERVER"/>

#### Create a Bump Remind Ping:
<command message = "%setup ping create" slash = "Non Exist" description="Creates a Bump Remind Ping, which will pinged on the Bump Remind Message." permissions="MANAGE_SERVER"/>

### Customize Remind Message Command

#### Change the Response, which is sent on Bump:
<command message = "%custom response <message>" slash = "/bump message response [message]" description="Sets the Message,which is sent on Bump" permissions="MANAGE_SERVER"/>

#### Change the Title of the Bump Reminder Message:
<command message = "%custom title <message>" slash = "/bump message title [message]" description="Sets the Title of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER"/>

#### Change the Description of the Bump Reminder Message:
<command message = "%custom desc <message>" slash = "/bump message desc [message]" description="Sets the Description of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER"/>

#### Change the Color of the Bump Reminder Message Embed:
<command message = "%custom color <hexcolor>" slash = "/bump message color [hexcolor]" description="Sets the Color of the Embed, which is sent on the Bump Reminder Embed Message" permissions="MANAGE_SERVER"/>

#### Change the Bump Reminder Message to a Embed/Non-Embed Message:
<command message = "%custom embed yes/no" slash = "/bump message embed [status]" description="Disables or Enables Embed Mode on the Bump Remind Message" permissions="MANAGE_SERVER"/>

#### Change the Footer of the Bump Reminder Message:
<command message = "%custom footer <message>" slash = "/bump message footer [message]" description="Sets the Footer of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

#### Change the Thumbnail of the Bump Reminder Message:
<command message = "%custom thumb <image-link>" slash = "/bump message thumbnail [image-link]" description="Sets the Thumbnail of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

#### Change the Image of the Bump Reminder Message:
<command message = "%custom image <image-link>" slash = "/bump message image [image-link]" description="Sets the Image of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

### Bump Reminder Test Command
<command message = "%test" slash = "/bump test" description="Simulate a Bump Reminder Message to check your current Setup" cooldown="10" permissions="MANAGE_SERVER"/>

### Bump Channelstatus & Channellockdown Command

#### Add a Channelstatus Channel:
<command message = "%channelstatus channel #channel" slash = "/bump channelstatus channel [channel]" description="Adds a Channel, where the Bump Status will be shown" permissions="MANAGE_SERVER"/>

#### Change the ChannelName, when server is not bumpable:
<command message = "%channelstatus notbumpable <channelname>" slash = "/bump channelstatus notbumpable [channelname]" description="Sets the ChannelName, when the Server is not bumpable" permissions="MANAGE_SERVER"/>

#### Change the ChannelName, when server is bumpable:
<command message = "%channelstatus bumpable <channelname>" slash = "/bump channelstatus bumpable [channelname]" description="Sets the ChannelName, when the Server is bumpable" permissions="MANAGE_SERVER"/>

#### Change the ChannelName, when server is bumpable in short:
<command message = "%channelstatus bumpableinshort <channelname>" slash = "/bump channelstatus bumpableinshort [channelname]" description="Sets the ChannelName, when the Server is bumpableinshort" permissions="MANAGE_SERVER"/>

#### Lockdown the Channel, when Server is not bumpable:
<command message = "%channelstatus lock enable/disable" slash = "/bump channelstatus lockdown [status]" description="Enables/Disables Channel Lockdown, when server is not Bumpable" permissions="MANAGE_SERVER"/>


