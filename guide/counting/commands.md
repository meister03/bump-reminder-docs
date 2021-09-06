---
tilte: Commands
description: Learn more about Counting related Commands
---
# Counting Commands

### Counting Setup Command

#### Enable/Disable Counting:
<command message = "%countsetup enable/disable" slash = "/count setup enable/disable" description="Enables/Disables the Counting Feature" permissions="MANAGE_SERVER"/>

#### Add a Counting Channel:
<command message = "%countsetup channel <#channel>" slash = "/count setup channel [channel]" description="Sets the Counting Channel, where you will count together." permissions="MANAGE_SERVER"/>

#### Enable/Disable Reaction, when right/wrong counted:
<command message = "%countsetup yesreact" slash = "/count setup yesreact" description="Enables Reactions in the Counting Channel, when counted right or wrong." permissions="MANAGE_SERVER"/>

<command message = "%countsetup noreact" slash = "/count setup noreact" description="Disables Reactions in the Counting Channel, when counted right or wrong." permissions="MANAGE_SERVER"/>

#### Enable/Disable Counting Reset, when wrong counted: (Resets the Number to 0)
<command message = "%countsetup yesreset" slash = "/count setup yesreset" description="Enables Counting reset, when a wrong Number has been sent." permissions="MANAGE_SERVER"/>

<command message = "%countsetup noreset" slash = "/count setup noreset" description="Disables Counting reset, when a wrong Number has been sent." permissions="MANAGE_SERVER"/>

#### Give a timed role, when counted wrong:
<command message = "%countsetup role <@role> <removeafter>" slash = "/count setup role [role] [removeafter]" description="Gives a timed role, when someone counted wrong and which will be removed after the provied time" permissions="MANAGE_SERVER"/>

### Set the current Counting to a specific Number:
<command message = "%setcount <number>" slash = "/count setcount <number>" description="Sets the current Counting to a specific Number from whereon the Counting will be continued" permission="MANAGE_SERVER"/>

### See the current Counting Stats:
<command message = "%count" slash = "/count stats" description="Gives you the current Counting Stats with the last counter, the current number, the highes count and more..."/>