---
title: Vote Card
description: A shiny Vote Card, which updates on every vote
---
# Vote Card
![Highly Customizable Vote Card](https://cdn.discordapp.com/attachments/787637220051779594/920768769771597864/leaderboard.png)

#### View Vote Card:
<command message = "%votelb card" slash = "/vote stats card" description = "Shows the current Vote Leaderboard with the 12 Top Members on a shiny Vote Card" premium="true"/>

#### Change Background of Vote Card:
<command message = "%votecard background <http-link>" slash = "/vote card background [http-link]" description = "Changes the Background of the Vote Card" permissions = "MANAGE_SERVER"/>

#### Change Background Opacity Overlay of Vote Card:
<command message = "%votecard opacity <0.1-1>" slash = "/vote card opacity [0.1-1]" description = "A grey overlay with a specific opacity on the background image in order to see the vote card on 'flashing' backgrounds " permissions = "MANAGE_SERVER"/>

#### Add Channel with Auto Updateable Vote Card:
<command message = "%votecard stats <#channel>" slash = "/vote card stats [channel]" description = "Sends a Message in the mentioned Channel, which contains a Vote Card, which updates on every vote" permissions = "MANAGE_SERVER"/>
