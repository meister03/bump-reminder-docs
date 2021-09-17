---
tilte: Commands
description: Learn more about Boost Tracker related Commands
---
# Boost Tracker Commands

### Boost Tracker Setup Command

#### Enable/Disable Boost Tracker:
<command message = "%bsetup enable/disable" slash = "/boost setup enable/disable" description="Enables/Disables the Boost Tracker, which tracks the boosts, save stats and more..." permissions="MANAGE_SERVER"/>

#### Add a Boost Messsage Channel:
<command message = "%bsetup channel <#channel>" slash = "/boost setup channel [channel]" description="Sets the Boost Message Channel, where the customizable Boost Message will be sent." permissions="MANAGE_SERVER"/>

#### Enable/Disable Boost Log Message on Unboost/Boost/Booster left:
<command message = "%bsetup log <#channel>/disable" slash = "/boost setup log [channel/disable]" description="Enables/Disables the Boost message log, where the latest BoostLB will be sent on Boost/Unboost." permissions="MANAGE_SERVER"/>

#### Enable/Disable: Ability to create Custom Boost Role:
<command message = "%bsetup createrole enable/disable <position>" slash = "/boost setup createrole [status] [position]" description="Enables/Disables the Boost Create Role Feature, where Server Boosters can create their own custom Role. When a position is given, the role will be created on the position" permissions="MANAGE_SERVER"/>

### Customize the Boost Message:
#### Variables:
```
{{boostcount}}, {{boosttier}}, {{username}}, {{usertag}}, {{usermention}}, {{userid}}
```

#### Change the Plain Message:
<command message = "%bmessage plain <message>" slash = "/boost message plain [message]" description="Sets the Plain Message, which is sent on Boost. A Plain Message is a Non-Embed Message, which will be sent with the Embed" permissions="MANAGE_SERVER"/>

#### Change the Title of the Boost Message:
<command message = "%bmessage title <message>" slash = "/boost message title [message]" description="Sets the Title of the Embed, which is sent on Boost" permissions="MANAGE_SERVER"/>

#### Change the Description of the Boost Message:
<command message = "%bmessage desc <message>" slash = "/boost message desc [message]" description="Sets the Description of the Embed, which is sent on the Boost" permissions="MANAGE_SERVER"/>

#### Change the Color of the Boost Message Embed:
<command message = "%bmessage color <hexcolor>" slash = "/boost message color [hexcolor]" description="Sets the Color of the Embed, which is sent on the Boost Embed Message" permissions="MANAGE_SERVER"/>

#### Change the Boost Message to a Embed/Non-Embed Message:
<command message = "%bmessage embed enable/disable" slash = "/boost message embed [status]" description="Disables or Enables Embed Mode on the Boost Message" permissions="MANAGE_SERVER"/>

#### Change the Thumbnail of the Boost Message:
<command message = "%bmessage thumb <image-link>" slash = "/boost message thumbnail [image-link]" description="Sets the Thumbnail of the Embed, which is sent on the Boost" permissions="MANAGE_SERVER"/>

#### Change the Image of the Boost Message:
<command message = "%bmessage image <image-link>" slash = "/boost message image [image-link]" description="Sets the Image of the Embed, which is sent on the Boost" permissions="MANAGE_SERVER"/>

### Boost Message Test Command
<command message = "%bmessage test" slash = "/boost message test" description="Sends the Boost Message to check your current Customization" cooldown="10" permissions="MANAGE_SERVER"/>


### Create/Customize your Boost Role:

#### Create your own Custom Boost Role:
<command message = "%boostrole name <name>" slash = "/boost role name [name]" description="Creates your custom Boost Role with the provided Name."/>

#### Change the Color/Name of the Custom Boost Role:
<command message = "%boostrole color <hexcolor>" slash = "/boost role color [hexcolor]" description="Changes the Color of your custom Boost Role to the provided Color."/>


### Check the current Boost Leaderboard:
<command message = "%boostlb" slash = "/boost leaderboard" description="Sends the current Leaderboard with all current Boosters and some Stats"/>