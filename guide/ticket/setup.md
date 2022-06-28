---
title: Setup
description: Learn how to setup Ticket System
---

# Setup Ticket-System

#### `/ticket setup` or `%ticketsetup` will give you a overview of the command


#### Enable/Disable Ticket:
- This enables/disabes the Ticket System, so you can use it.
<command message = "%tsetup enable/disable" slash = "/ticket setup enable/disable" description = "Enables/Disables the Ticket System, which ables you to create Ticket Panels" permissions = "ADMINISTRATOR"/>

#### Add a Ticket Log, where Ticket Events will be sent:
- When Tickets are Closed, Transcripted, Archived and Created a Message will be sent in the Log Channel
<command message = "%tsetup log <#channel>" slash = "/ticket setup log [channel]" description = "Adds the mentioned Channel as Ticket Log, where the upcoming Ticket Events will be sent." permissions = "ADMINISTRATOR"/>


#### Add a Archive Category, where archived tickets will be shifted:
- Tickets, which are archived with the Archive Button will be moved in this Category
<command message = "%tsetup archivecategory <#category>" slash = "/ticket setup archivecategory [category]" description = "Adds the mentioned Category as Archive Category, where the archived Channels will be moved" permissions = "ADMINISTRATOR"/>

#### Set the maximal amount of tickets per user:
- This limits the creation of Tickets per User per Ticket Panel
- When you set the maximal amount to `2`, than the Users can create maximal 3 Tickets.
<command message = "%tsetup maxtickets <number>" slash = "/ticket setup maxtickets [number]" description = "Sets the maximal amount of Tickets, which can be created by the User" permissions = "ADMINISTRATOR"/>