---
title: Features
description: There are some cool Features for the Boost Tracker, which can be enabled
---
# Additional Features

#### **You can get a overview of the Features on the Showcase Section.**

### Enable/Disable Custom Role Creation Feature:

**When this Feature is activated, Server Boosters will be able to create roles through the Command `%boostrole` or `/boost role`, which can be customized on the Color and the Name.**

#### Enable/Disable Feature: 
<command message = "%bsetup createrole enable/disable" slash = "/boost setup createrole [status] [position]" description="Enables/Disables the Boost Create Role Feature, where Server Boosters can create their own custom Role. When a position is given, the role will be created on the position" permissions="MANAGE_SERVER"/>

#### Change the Position of the Custom Role: 
<command message = "%bsetup createrole position <position>" slash = "/boost setup createrole [status] [position]" description="Enables/Disables the Boost Create Role Feature, where Server Boosters can create their own custom Role. When a position is given, the role will be created on the position" permissions="MANAGE_SERVER"/>

**Your Members can create their own Role with `%boostrole` or `/boost role`**

- **When the Member unboosted the Server, the Role will be automatically deleted.**

### Send Boost Leaderboard on Boost/Unboost

**When this Feature is activated a Message will be sent in the added Channel whether a Member Unboosted/Boosted + the new Leaderboard and some Booststats**

<command message = "%bsetup log <#channel>/disable" slash = "/boost setup log [channel/disable]" description="Enables/Disables the Boost message log, where the latest BoostLB will be sent on Boost/Unboost." permissions="MANAGE_SERVER"/>

**See the current Leaderboard with `%boostleaderboard` or `/boost leaderboard`**

