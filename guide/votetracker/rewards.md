---
title: Manage Rewards
description: Give you active Voters some cool roles!
---
# Setup Vote Rewards

#### The command `/vote rewards` or `%vreward` will give a overview of all rewards and commands!

### Manage Rewards:
<command message = "%votereward set <voteamount>" slash = "/vote rewards set [voteamount]" description = "Adds a VoteReward(Role) on the given voteamount, which is given when user reached the voteamount." permissions = "MANAGE_SERVER"/>

- **Ex: Run `/vote reward set 10` -> This will give a reward role on 10 votes**
- **A Message will appear, where it askes you after the reward type, we currently just support roles. Send `role`**
- **After you choosed the option, it will ask after the role to give, send the role mention in the channel!**

![](/assets/image%20%2830%29.png)

![](/assets/image%20%2825%29.png)

::: warning
**Assume that the Bot has a higher Role than the reward Role**
:::

### Edit Rewards:
- **Do the same progress like adding vote rewards, just use the same amount**
- This will overwrite the Role Reward

#### Remove VoteRewards on a specific Vote Count:
- This will remove the Reward, which is given on the mentioned amount
<command message = "%votereward remove voteamount" slash = "/vote rewards remove [voteamunt]" description = "Removes the VoteReward from the Vote Amount" permissions = "MANAGE_SERVER"/>

#### Enable/Disable Stack Rewards:
- When Stack Rewards are enabled. Previous Role Rewards will be removed, when new one has been given.
- Example:
   - You added 2 Role Rewards on the vote amount 11 (Role A) and on the amount 15 (Role B)
   - When the User reached the Vote Amount `11` they will get the Role: `Role A`
   - When the User reached the Vote Amount `15` they will get the Role: `Role B`
   - When Stack Rewards is enabled, the `Role A` will be removed, since the User got a new Role Reward (`Role B`)
<command message = "%votereward stack enable/disable" slash = "/vote rewards stack [status]" description = "Enables/Disables Stack Rewards. When Stack Rewards are enabled. Previous Role Rewards will be removed, when new one has been given." permissions = "MANAGE_SERVER"/>

