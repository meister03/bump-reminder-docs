---
title: Panel
description: Create/Edit/Delete all Panels
---

#### `/ticket panel` or `%wticketpanel` will give you a overview of the command

**With this Command you can create a customizable Ticket Panel, which will be sent in the Ticket create Channel and with whom Users can create Tickets**

#### Create a Ticket Panel:
- This creates a Ticket Panel with the given Name, which is sent in the Panel Channel
- The Panel can be customized on many aspects, scroll down for looking all Customizations
<command message = "%panel create <panelname>" slash="/ticket panel create [panelname]" description="Creates a Ticket Panel with the provided Name and guides you through a Setup for the Customization" permissions ="ADMINISTRATOR"/>

#### Edit a Ticket Panel:
- This edits a Ticket Panel with the given name, which is sent in the Panel Channel
- The Panel can be customized on many aspects, scroll down for looking all Customizations
<command message = "%panel edit <panelname>" slash="/ticket panel edit [panelname]" description="Edits a Ticket Panel with the provided Name and guides you through a Setup for the Customization" permissions ="ADMINISTRATOR"/>

#### Delete a Ticket panel:
- This deletes an existing Ticket Panel which has the given Name
<command message = "%panel delete <panelname>" slash="/ticket panel delete [panelname] " description="Deletes the Ticket Panel with the given Name. Get a List of Panels with /panel all" permissions ="ADMINISTRATOR"/>

#### Check all Panels:
- View all Ticket Panels in a select to get a good overview of your Ticket Panels.
<command message = "%panel all" slash="/ticket panel all" description="Gives you a list of all Ticket Panels" permissions ="ADMINISTRATOR"/>

### Customization

#### Variables, which can be used:
- TicketChannelName -> `{{usertag}}`, `{{ticketnumber}}`
- `{{usertag}}`, `{{ticketnumber}}`, `{{channelmention}}`, `{{usermention}}`

#### Panel Channel
- The Channel, where the Panel Message will be sent.
- Pls send the Channelmention in the channel.

#### Panel Response Message
- The panel response message is the message, which is sent when the user opens a Ticket
- E.g. "Hello, we opened a Ticket in {{channelmention}}"
- Its the blue interaction message (ephemeral) in the panel channel.
- Pls send the message in the Channel

#### Panel Title Message
- The title of the Message, when Embeds are enabled, than it will be sent in form of a Plain Message

#### Panel Description Message
- The Description of the Message, when Embeds are enabled, than it will be sent in form of a Plain Message

#### Panel Embed Footer
- The Footer, which is on the Embed Message

#### Panel Embed Color
- The Color of the Panel Message

#### Panel Embed Image
- The Image, which is viewed on the Embed Message

#### Panel Embed Thumbnail
- The Thumbnail, which is viewed on the Embed Message

#### Enable/Disable Embed Message on Panel Message
- When this option is disabled, the Embed will transformed in a normal message.

#### Ticket Channelname
- The Channelname, the ticket will be created with.
- E.g "support-\{\{ticketnumber\}\}"

#### Ticket Response Message
- The ticket response message is the message, which is sent when the user sends there first Message
- Example: 
- It would be annoying, when users creates Ticket for fun or never state there Problem
- When you add a response message, then it will be send when the user sent a message, which can also be used for Staff Pings.
- E.g: "Thx for stating your Questions, @here"

#### Ticket Plain Message
- The Non Embed Message, which is sent when the Ticket opens.

#### Ticket Title Message
- The Title of the Embed Message, which is sent when the Ticket opens.

####  Ticket Description Message
- The Description of the Embed Message, which is sent when the Ticket opens.

#### Ticket Embed Footer
- The Footer, which is on the Embed Message

#### Ticket Embed Color
- The Color of the Ticket Embed Message

#### Ticket Embed Image
- The Image, which is viewed on the Embed Message

#### Ticket Embed Thumbnail
- The Thumbnail, which is viewed on the Embed Message