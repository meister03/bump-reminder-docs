---
tilte: Commands
description: Learn more about Vote Tracker Commands
---
# Vote Tracker Commands

### Vote Setup Related Commands

#### Setup Vote Tracker for your Server:
<command message = "%votesetup server" slash = "/vote setup server [channel]" description = "Setup's the Top.gg Vote Tracker in the mentioned Channel, where the new Votes will be logged out." permissions = "MANAGE_SERVER"/>

#### Enable/Disable Monthly Vote reset:
<command message = "%votesetup monthlyreset enable/disable" slash = "/vote setup monthlyreset enable/disable" description = "Enables/Disables Monthly Vote Reset, which also resets the Vote Counts of each Member." permissions = "MANAGE_SERVER"/>

#### Sent Vote Reminders in a specific Channel:
<command message = "%votesetup remindchannel <#channel>" slash = "/vote setup remindchannel [channel]" description = "Sends the Vote Remind Messages in a specific Channel instead on DM's" permissions = "MANAGE_SERVER"/>

### Vote Rewards Related Commands

#### Add VoteRewards on a specific Vote Count:
<command message = "%votereward set <voteamount>" slash = "/vote rewards set [voteamount]" description = "Adds a VoteReward(Role) on the given voteamount, which is given when user reached the voteamount." permissions = "MANAGE_SERVER"/>

#### Remove VoteRewards on a specific Vote Count:
<command message = "%votereward remove voteamount" slash = "/vote rewards remove [voteamunt]" description = "Removes the VoteReward from the Vote Amount" permissions = "MANAGE_SERVER"/>

#### Enable/Disable Stack Rewards:
- When Stack Rewards are enabled. Previous Role Rewards will be removed, when new one has been given.
<command message = "%votereward stack enable/disable" slash = "/vote rewards stack [status]" description = "Enables/Disables Stack Rewards. When Stack Rewards are enabled. Previous Role Rewards will be removed, when new one has been given." permissions = "MANAGE_SERVER"/>

### Check the current Vote Leaderboard and your current vote count:
<command message = "%votelb" slash = "/vote stats lb" description = "Shows the current Vote Leaderboard with your current Vote Count"/>

### Subscribe/Unsubscribe to Vote Reminders:
<command message = "%voteremind" slash = "/vote remind" description = "Subscribes/Unsubscribe for receiving Vote Reminders, when voting on Top.gg"/>

### Vote Card
#### View Vote Card:
<command message = "%votelb card" slash = "/vote stats card" description = "Shows the current Vote Leaderboard with the 12 Top Members on a shiny Vote Card" premium="true"/>

#### Change Background of Vote Card:
<command message = "%votecard background <http-link>" slash = "/vote card background [http-link]" description = "Changes the Background of the Vote Card" permissions = "MANAGE_SERVER"/>

#### Change Background Opacity Overlay of Vote Card:
<command message = "%votecard opacity <0.1-1>" slash = "/vote card opacity [0.1-1]" description = "A grey overlay with a specific opacity on the background image in order to see the vote card on 'flashing' backgrounds " permissions = "MANAGE_SERVER"/>

#### Add Channel with Auto Updateable Vote Card:
<command message = "%votecard stats <#channel>" slash = "/vote card stats [channel]" description = "Sends a Message in the mentioned Channel, which contains a Vote Card, which updates on every vote" permissions = "MANAGE_SERVER"/>
