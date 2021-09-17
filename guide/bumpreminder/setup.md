---
tilte: Setup
description: Here you will learn, how to setup the Bump Reminder Feature
---

# Setup Bump Remind

### How do I setup Bump reminder?

**It's very easy to setup. First you have to know that there are different kinds of remind options.**  
[**For those, who are to lazy to read, click on the link for a video!**](https://www.youtube.com/watch?v=LuthgfnZ3rg)

::: tip Info
 When you want to ping `@everyone/@here`m create a locked Channel and add the ping as `everyone/here`. The `@everyone/@here` Role does not have to pinged for adding them as Bump Reminder Ping.
:::

### I already have a Bump Channel and Role Ping:

#### Add a Bump Channel:
- This adds an existing Channel as Bump Channel, where the Bump Remind Messages will be sent.
<command message = "%setup add <#channel>" slash = "/bump setup channel [channel]" description="Add a Bump Channel, where the Bump Remind Message will be sent." permissions="MANAGE_SERVER"/>

#### Add a Bump Remind Ping:
- This adds an existing Roles as Bump Ping , which will be pinged on Bump Remind
<command message = "%setup ping <@role>" slash = "/bump setup ping [role]" description="Add a Bump Remind Ping, which will pinged on the Bump Remind Message." permissions="MANAGE_SERVER"/>

### I don't have a Bump Channel and a Role Ping:

#### Create a Bump Channel:
- This will create a locked Bump Channel and add it as Bump Channel, where Remind Messages will be sent.
- To make it public edit the Channel Settings
<command message = "%setup create" slash = "Non Exist" description="Creates a Bump Channel, where the Bump Remind Message will be sent." permissions="MANAGE_SERVER"/>

#### Create a Bump Remind Ping:
- This will create a role named `Remind Me` and add it as Bump Ping
- On Bump Remind, the Bot will ping the created Role
<command message = "%setup ping create" slash = "Non Exist" description="Creates a Bump Remind Ping, which will pinged on the Bump Remind Message." permissions="MANAGE_SERVER"/>



**Once you have set up the remind option. It should send a bump response after the !d bump.** 

[**Interesting in customizing the messages?**](/customize.md)  
Go on the next Page!