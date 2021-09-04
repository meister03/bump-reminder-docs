---
tilte: Commands
description: Learn more about EventLogging related Commands
---
# EventLogging Commands

### Event Logging Setup Commands:

#### Events, which can be currently logged:
|ID:| EventName:                     |
|---|--------------------------------|
| 0 | MessageDelete                  |
| 1 | MessageEdit                    |
| 2 | MemberUpdate(Role, Nickname)   |
| 3 | MemberJoin                     |
| 5 |  ChannelCreate/Delete          |
| 7 | RoleCreate/Delete`             |

#### Add Events, which will be logged out in the Mod-Log:

<command message = "%eventlist add <event(ID)>" slash = "" description="Add the Event, which should be logged in the Mod-Log" permissions="MANAGE_SERVER"/>

#### Remove Events, which should not be logged out in the Mod-Log:

<command message = "%eventlist remove <event(ID)>" slash = "" description="Remove the Event, which shouldn't be logged in the Mod-Log" permissions="MANAGE_SERVER"/>

#### Add Channels, where the Message should be tracked [MessageEdit, MessageDelete Event]:
<command message = "%eventlist addchannel <#channel>" slash = "" description="Add the Channel, where the messages will be tracked for the MessageDelete, MessageEdit event" permissions="MANAGE_SERVER"/>

#### Remove Channels, where the Message should not be tracked [MessageEdit, MessageDelete Event]:
<command message = "%eventlist removechannel <#channel>" slash = "" description="Removes the Channel, where the messages will not be tracked anymore for the MessageDelete, MessageEdit event" permissions="MANAGE_SERVER"/>