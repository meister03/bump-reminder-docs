---
title: Customize Message
description: See the commands for customizing the Boost Message after your need.
---
# Customize Boost Message

## How to customize the Boost Message?

#### Variables:
- This variables can be used in the Message, which will be replaced with the appropriated values.
- `{{boostcount}}, {{boosttier}}, {{username}}, {{usertag}}, {{userid}}, {usermention}}`
- `Ex: {{usertag}}  boosted! Server has {{boostcount}} with {{boosttier}} tier`

::: tip
**Use the Parameter `disable`, when you want to disable certain customization such as Embed Image/ Embed Thumbnail...**
:::

#### Change the Plain Message:
- When using an embed, it would be nice, when you can send a normal non-embed message, which can also ping the member, when you use the variable {{usermention}}. This functionality fulfills the Plain message.

<command message = "%bmessage plain <message>" slash = "/boost message plain [message]" description="Sets the Plain Message, which is sent on Boost. A Plain Message is a Non-Embed Message, which will be sent with the Embed" permissions="MANAGE_SERVER"/>

#### Change the Title of the Boost Message:
<command message = "%bmessage title <message>" slash = "/boost message title [message]" description="Sets the Title of the Embed, which is sent on Boost" permissions="MANAGE_SERVER"/>

#### Change the Description of the Boost Message:
- This will change the Description of the boost message
<command message = "%bmessage desc <message>" slash = "/boost message desc [message]" description="Sets the Description of the Embed, which is sent on the Boost" permissions="MANAGE_SERVER"/>

#### Change the Color of the Boost Message Embed:
- This will change the color of the Embed Message. The provided color must be hex color.
<command message = "%bmessage color <hexcolor>" slash = "/boost message color [hexcolor]" description="Sets the Color of the Embed, which is sent on the Boost Embed Message" permissions="MANAGE_SERVER"/>

#### Change the Boost Message to a Embed/Non-Embed Message:
- This will change whether to send the Boost Message as Embed or Non Embed
<command message = "%bmessage embed enable/disable" slash = "/boost message embed [status]" description="Disables or Enables Embed Mode on the Boost Message" permissions="MANAGE_SERVER"/>

#### Change the Thumbnail of the Boost Message:
- This will add an Thumbnail on the Boost Message Embed
<command message = "%bmessage thumb <image-link>" slash = "/boost message thumbnail [image-link]" description="Sets the Thumbnail of the Embed, which is sent on the Boost" permissions="MANAGE_SERVER"/>

#### Change the Image of the Boost Message:
- This will add an Image on the Boost Message Embed
<command message = "%bmessage image <image-link>" slash = "/boost message image [image-link]" description="Sets the Image of the Embed, which is sent on the Boost" permissions="MANAGE_SERVER"/> 

## Test your Customization:
- This will sent your customized Boost Message in the Channel you runned the Command
<command message = "%bmessage test" slash = "/boost message test" description="Sends the Boost Message to check your current Customization" cooldown="10" permissions="MANAGE_SERVER"/>


