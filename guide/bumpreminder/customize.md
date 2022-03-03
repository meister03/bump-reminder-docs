---
tilte: Customize Message
description: Learn to customize the Bump Remind Message
---

# Customize Remind Messages

### How to customize the Remind Message?

#### Change the Response, which is sent on Bump:
- This changes the Bump Response, which is sent on Bump.
- You can disable it with the `disable` parameter.

**[Premium](../premium) Variables:**
```
{{username}} , {{usertag}}, {{userid}}, {{serverbumpcount}}, {{usermention}}
Ex: Thx for bumping {{username}}, We have {{serverbumpcount}} bumps!
```

<command message = "%custom response <message/disable>" slash = "/bremind message response [message]" description="Sets the Message,which is sent on Bump" permissions="MANAGE_SERVER"/>

#### Change the Title of the Bump Reminder Message:
<command message = "%custom title <message>" slash = "/bremind message title [message]" description="Sets the Title of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER"/>

#### Change the Description of the Bump Reminder Message:
<command message = "%custom desc <message>" slash = "/bremind message desc [message]" description="Sets the Description of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER"/>

#### Change the Color of the Bump Reminder Message Embed:
<command message = "%custom color <hexcolor>" slash = "/bremind message color [hexcolor]" description="Sets the Color of the Embed, which is sent on the Bump Reminder Embed Message" permissions="MANAGE_SERVER"/>

#### Change the Bump Reminder Message to a Embed/Non-Embed Message:
<command message = "%custom embed yes/no" slash = "/bremind message embed [status]" description="Disables or Enables Embed Mode on the Bump Remind Message" permissions="MANAGE_SERVER"/>

#### [Premium](../premium) Change the Footer of the Bump Reminder Message:
- You can disable it with the `disable` parameter.
<command message = "%custom footer <message>" slash = "/bremind message footer [message]" description="Sets the Footer of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

#### [Premium](../premium) Change the Thumbnail of the Bump Reminder Message:
- You can disable it with the `disable` parameter.
<command message = "%custom thumb <image-link>" slash = "/bremind message thumbnail [image-link]" description="Sets the Thumbnail of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

#### [Premium](../premium) Change the Image of the Bump Reminder Message:
- You can disable it with the `disable` parameter.
<command message = "%custom image <image-link>" slash = "/bremind message image [image-link]" description="Sets the Image of the Embed, which is sent on the Bump Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

::: warning
 Please do not exceed the given lengths and try to keep your remind messages small, since every custom remind message costs us traffic and costly database space.
:::

### How to test your customization?
- Easily run the command below in a channel to check your current setup.
- This will simulate a Bump.
<command message = "%test" slash = "/bremind test" description="Simulate a Bump Reminder Message to check your current Setup" cooldown="10" permissions="MANAGE_SERVER"/>

