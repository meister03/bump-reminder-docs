---
title: Bot Commands
description: A list of Bot Commands
---
# Bot Commands:

### Create a Bot Suggestion:
<command message = "%botsuggest <suggestion>" slash = "/bot suggest [suggestion]" description="Creates a BotSuggestion and sends it to the Support Server"/>

### Custom Bot Command
#### Start your CustomBot:
<command message = "%custombot start <token>" slash = "/custombot start [token]" description="Creates a CustomBot with the given Token" permissions="ADMINISTRATOR"/>

#### Custimze CustomBot Status:
<command message = "%custombot status <text>" slash = "/custombot status [text]" description="Will change the Bot Status to the given Text and will guide you through a setup" permissions="ADMINISTRATOR"/>

#### Delete your CustomBot:
<command message = "%custombot delete" slash = "/custombot delete" description="This deletes your existing CustomBot" permissions="ADMINISTRATOR"/>


### Disable/Enable Category/Feature Command:
#### Disable Command Category:
- **Categories, which can be disabled: `Economy, Fun, Image, Info, Misc, Mobile, Remind`**
<command message = "%disable category <category>" slash = "/bot disable category [category]" description="Disables the mentioned Command Category" permissions="ADMINISTRATOR"/>

#### Enable Command Category:
<command message = "%enable category <category>" slash = "/bot enable category [category]" description="Enables the mentioned Command Category" permissions="ADMINISTRATOR"/>

#### Disable Feature/Plugins:
- This will create a select menu, where you can select the Features, you would like to disable.
<command message = "%disable feature" slash = "/bot disable feature" description="Disables the mentioned Feature" permissions="ADMINISTRATOR"/>

### Reset Command
::: danger
**Deleted Data can never be restored!**
:::
#### Reset Specific Features:
- This will create a select menu, where you can select the Features, you would like to reset.
<command message = "%reset feature" slash = "/bot reset feature" description="Resets the mentioned Feature" permissions="ADMINISTRATOR"/>

#### Delete My User Data:
<command message = "%reset me" slash = "/bot reset me" description="Deletes all your user Data such as Vote Count, Timezone, AFK Status and more..." permissions="ADMINISTRATOR"/>

#### Delete Server Data
<command message = "%reset server" slash = "/bot reset sever" description="Deletes all your Server Data such as Feature Settings, Customization." permissions="ADMINISTRATOR"/>

### Help Command
#### Help Page:
<command message = "%help" slash = "/help page" description="Gives you good overview of all Command Categories and all Commands"/>

#### Get more Info about a Command:
<command message = "%help command <commandname>" slash = "/help command [commandname]" description="Gives you more info about, how to use the Commands."/>

#### Search after a Command:
<command message = "%help search <commandname>" slash = "/help search [commandname]" description="Searches after a given Command in the Command List"/>

### Invite Command
<command message = "%invite" slash = "/bot invite" description="Gives you the Bot's Invite, Vote & Support Server Link"/>

### Policy Command
<command message = "%policy" slash = "/bot policy" description="Gives you Link to the Bot's Privacy Policy"/>

### Prefix Command
<command message = "%prefix <newprefix>" slash = "/bot prefix [newprefix]" description="Changes the default Bot prefix to the new given one."/>

### Premium Command

#### View Premium Perks:
<command message = "%premium" slash = "/premium perks" description="Shows you all Premium Perks and how to get them"/>

#### Check the current Premium Stats:
<command message = "%premium stats" slash = "/premium stats" description="Shows the Premium Stats of your Server"/>

#### Buy Premium in your Server:
<command message = "%premium buy <tier> <months>" slash = "/premium buy [tier] [months]" description="Whether you want to buy Tier 1 or Tier 2 and for how long." permissions="ADMINISTRATOR"/>

### Vote Command
<command message = "%vote" slash = "/bot vote" description="Gives you the Top.gg Vote Link and your current Vote Count"/>
