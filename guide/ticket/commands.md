---
tilte: Commands
description: Learn more about Ticket related Commands
---
# Ticket Commands

### Ticket Setup Command

#### Enable/Disable Ticket:
<command message = "%tsetup enable/disable" slash = "/ticket setup enable/disable" description = "Enables/Disables the Ticket System, which ables you to create Ticket Panels" permissions = "ADMINISTRATOR"/>

#### Add a Ticket Log, where Ticket Events will be sent:
<command message = "%tsetup log <#channel>" slash = "/ticket setup log [channel]" description = "Adds the mentioned Channel as Ticket Log, where the upcoming Ticket Events will be sent." permissions = "ADMINISTRATOR"/>


#### Add a Archive Category, where archived tickets will be shifted:
<command message = "%tsetup archivecategory <#category>" slash = "/ticket setup archivecategory [category]" description = "Adds the mentioned Category as Archive Category, where the archived Channels will be moved" permissions = "ADMINISTRATOR"/>

#### Set the maximal amount of tickets per user:
<command message = "%tsetup maxtickets <number>" slash = "/ticket setup maxtickets [number]" description = "Sets the maximal amount of Tickets, which can be created by the User" permissions = "ADMINISTRATOR"/>

### Manage Ticket Panel Command

#### Create a Ticket Panel:
<command message = "%panel create <panelname>" slash="/ticket panel create [panelname]" description="Creates a Ticket Panel with the provided Name and guides you through a Setup for the Customization" permissions ="ADMINISTRATOR"/>

#### Edit a Ticket Panel:
<command message = "%panel edit <panelname>" slash="/ticket panel edit [panelname]" description="Edits a Ticket Panel with the provided Name and guides you through a Setup for the Customization" permissions ="ADMINISTRATOR"/>

#### Delete a Ticket panel:
<command message = "%panel delete <panelname>" slash="/ticket panel delete [panelname] " description="Deletes the Ticket Panel with the given Name. Get a List of Panels with /panel all" permissions ="ADMINISTRATOR"/>

#### Check all Panels:
<command message = "%panel all" slash="/ticket panel all" description="Gives you a list of all Ticket Panels" permissions ="ADMINISTRATOR"/>

### Close/Archive a Ticket:
<command message = "%close" slash="/ticket close" description="Gives you the Manage Ticket Message for transcripting, archiving & delete the Channel" permissions ="TICKET_ROLE_ACCESS"/>
