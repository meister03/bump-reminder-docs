---
title: Customize Message
description: 'Learn how to create Reminder Message Overwrites, which accounts on Ontime, Interval & Action Reminders'
---
# Customize Reminder Message
Reminder Message overwrites are Overwrites, which will account on Onetime, Interval & Action Reminders and will change there Appereance.

### Variables:
- **You can use the following Variables in your Message:**
```
{{userid}},{{usermention}},{{remindername}},{{remindermessage}}, {{reminderping}}
```
#### Change the Plain Message, which can be sent with the Ping:
- Sets the Plain Message, which is sent on the Reminder Message. A Plain Message is a Non-Embed Message, which will be sent with the Embed (when one exists)
<command message = "%rmessage plain <message>" slash = "/reminder message plain [message]" description="Sets the Plain Message, which is sent on the Reminder" permissions="MANAGE_SERVER"/>

#### Change the Title of the Reminder Message:
<command message = "%rmessage title <message>" slash = "/reminder message title [message]" description="Sets the Title of the Embed, which is sent on the Reminder Message" permissions="MANAGE_SERVER"/>

Example:
```
/reminder message title Reminder name {{remindername}} 
```

#### Change the Description of the Reminder Message:
<command message = "%rmessage desc <message>" slash = "/reminder message desc [message]" description="Sets the Description of the Embed, which is sent on the Reminder Message" permissions="MANAGE_SERVER"/>

Example:
```
/reminder message desc There is a new Reminder, read the following below: {{remindermessage}}
```

#### Change the Color of the Reminder Message Embed:
<command message = "%rmessage color <hexcolor>" slash = "/reminder message color [hexcolor]" description="Sets the Color of the Embed, which is sent on the Reminder Embed Message" permissions="MANAGE_SERVER"/>

#### Change the Reminder Message to a Embed/Non-Embed Message:
- Disables/Enables the Embed, which changes how the content will be sent.
<command message = "%rmessage emebed enable/disable" slash = "/bump message embed [status]" description="Disables or Enables Embed Mode on the Bump Remind Message" permissions="MANAGE_SERVER"/>

#### Change the Footer of the Reminder Message:
<command message = "%rmessage footer <message>" slash = "/reminder message footer [message]" description="Sets the Footer of the Embed, which is sent on the Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

#### Change the Thumbnail of the Reminder Message:
- Adds a Image on the right Corner of the Embed
<command message = "%rmessage thumb <image-link>" slash = "/reminder message thumbnail [image-link]" description="Sets the Thumbnail of the Embed, which is sent on the Reminder Message" permissions="MANAGE_SERVER" premium='true'/>

#### Change the Image of the Reminder Message:
- Adds Image on the bottom of the Embed
<command message = "%rmessage image <image-link>" slash = "/reminder message image [image-link]" description="Sets the Image of the Embed, which is sent on the Reminder Message" permissions="MANAGE_SERVER" premium='true'/>