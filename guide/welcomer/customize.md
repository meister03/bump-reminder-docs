---
title: Custimze
description: Learn to customize your Welcomer Card and your Welcomer Message
---
# Customize Welcomer
### Variables:
- **You can use the following Variables in your Message:**
```
{{membercount}},{{username}},{{usertag}},{{usermention}},{{userid}}
```
### Customize Welcomer Card

#### Change the Welcomer Card Size to `full/half/disable`:
- Whether you want to have a full Card(`800x4000`), a half Card(`800x200`) or disable the Card
<command message = "%welcomecard full/half/disable" slash = "/welcomer card disable/half/full" description = "Enables/Disables the Welcomer Card, which is sent with the Welcomer Message and changes its size to a compact half card or a comfortable full card." permissions = "MANAGE_SERVER"/>

#### Add a Card Background for the Welcomer Card:
- This changes the Background of the Welcomer Card to the given ImageLink
<command message = "%welcomecard background <imagelink>" slash = "/welcomer card background [imagelink]" description = "Changes the Background of the Welcomer Card to the new Image" permissions = "MANAGE_SERVER"/>

#### Change the Title of the Welcomer Card:
- This is the Text, which is over the Bottom Text
<command message = "%welcomecard title <text>" slash = "/welcomer card title [text]" description = "Adds the given Text as Welcomer Card Title and replaces the default Text." permissions = "MANAGE_SERVER"/>

#### Change the Bottom Text of the Welcomer Card:
<command message = "%welcomecard text <text>" slash = "/welcomer card text [text]" description = "Changes the BottomText of the Welcomer Card and replaces the default Text." permissions = "MANAGE_SERVER"/>

#### Change the Text Color on the Welcomer Card:
<command message = "%welcomecard textcolor <hexcolor>" slash = "/welcomer card textcolor [hexcolor]" description = "Changes the TextColor of the Welcomer Card" permissions = "MANAGE_SERVER"/>

### Customize Welcomer Message

#### Change the Title of the Welcomer Message:
<command message = "%welcomemessage title <message>" slash = "/welcomer message title [message]" description="Changes the Title of the Welcomer Embed, which is sent on the Welcomer Message" permissions="MANAGE_SERVER"/>

#### Change the Description of the Welcomer Message:
<command message = "%welcomemessage desc <message>" slash = "/welcomer message desc [message]" description="Changes the Description of the Welcomer Embed, which is sent on the Welcomer Message" permissions="MANAGE_SERVER"/>

#### Change the Color of the Welcomer Embed Message:
<command message = "%welcomemessage color <hexcolor>" slash = "/welcomer message title [hexcolor]" description="Changes the Color of the Welcomer Embed, which is sent on the Welcomer Message" permissions="MANAGE_SERVER"/>

#### Add a Thumbnail on the Welcomer Embed Message:
- This adds an Thumbnail (right-corner) on the Embed
<command message = "%welcomemessage thumb <imagelink>" slash = "/welcomer message thumbnail [imagelink]" description="Sets the Thumbnail of the Welcomer Embed, which is sent on the Welcomer Message." permissions="MANAGE_SERVER"/>

#### Add a Image on the Welcomer Embed Message:
- Sets the Image of the Welcomer Embed, which is sent on the Welcomer Message
- Note: Cannot be used in Combination with a Welcomer Card.
<command message = "%welcomemessage image <imagelink>" slash = "/welcomer message image [imagelink]" description="Sets the Image of the Welcomer Embed, which is sent on the Welcomer Message. Note: Cannot be used in Combination with a Welcomer Card." permissions="MANAGE_SERVER"/>

#### Add a Footer on the Welcomer Embed Message:
<command message = "%welcomemessage footer <message>" slash = "/welcomer message footer [message]" description="Changes the Footer of the Welcomer Embed, which is sent on the Welcomer Message" permissions="MANAGE_SERVER"/>

#### Set a Plain Message on the Welcomer Message, which can be sent with the combination of an Embed:
- Sets the Plain Message, which is sent on the Welcomer Message. A Plain Message is a Non-Embed Message, which will be sent with the Embed (when one exists)
<command message = "%welcomemessage plain <message>" slash = "/welcomer message plain [message]" description="Sets the Plain Message, which is sent on the Welcomer Message. A Plain Message is a Non-Embed Message, which will be sent with the Embed (when one exists)" permissions="MANAGE_SERVER"/>

#### Remove/Reset Welcomer Embed:
- Removes the Welcomer Embed and just sends the welcomer plain message and welcomer card, when they are enabled.
<command message = "%welcomemessage embed disable" slash = "/welcomer message embed disable" description="Removes the Welcomer Embed and just sends the welcomer plain message and welcomer card, when they are enabled." permissions="MANAGE_SERVER"/>

### Welcomer Test Command:
- Sends a Test Welcomer Message to the Welcomer Channel with your current Setup.
<command message = "%welcometest" slash = "/welcomer test" description = "Sends a Test Welcomer Message to the Welcomer Channel with your current Setup." permissions = "MANAGE_SERVER"/>