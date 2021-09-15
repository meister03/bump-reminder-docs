"use strict";(self.webpackChunkbrdocs=self.webpackChunkbrdocs||[]).push([[3864],{6931:(e,a,r)=>{r.r(a),r.d(a,{data:()=>t});const t={key:"v-759630e2",path:"/votetracker/rewards.html",title:"Manage Rewards",lang:"en-US",frontmatter:{title:"Manage Rewards",description:"Give you active Voters some cool roles!"},excerpt:"",headers:[{level:3,title:"Manage Rewards:",slug:"manage-rewards",children:[]},{level:3,title:"Edit Rewards:",slug:"edit-rewards",children:[]}],filePathRelative:"votetracker/rewards.md",git:{updatedTime:1631022248e3}}},6376:(e,a,r)=>{r.r(a),r.d(a,{default:()=>i});var t=r(6252);const o=(0,t.uE)('<h1 id="setup-vote-rewards" tabindex="-1"><a class="header-anchor" href="#setup-vote-rewards" aria-hidden="true">#</a> Setup Vote Rewards</h1><h4 id="the-command-vote-rewards-or-vreward-will-give-a-overview-of-all-rewards-and-commands" tabindex="-1"><a class="header-anchor" href="#the-command-vote-rewards-or-vreward-will-give-a-overview-of-all-rewards-and-commands" aria-hidden="true">#</a> The command <code>/vote rewards</code> or <code>%vreward</code> will give a overview of all rewards and commands!</h4><h3 id="manage-rewards" tabindex="-1"><a class="header-anchor" href="#manage-rewards" aria-hidden="true">#</a> Manage Rewards:</h3>',3),s=(0,t.uE)('<ul><li><strong>Ex: Run <code>/vote reward set 10</code> -&gt; This will give a reward role on 10 votes</strong></li><li><strong>A Message will appear, where it askes you after the reward type, we currently just support roles. Send <code>role</code></strong></li><li><strong>After you choosed the option, it will ask after the role to give, send the role mention in the channel!</strong></li></ul><p><img src="/assets/image (30).png" alt=""></p><p><img src="/assets/image (25).png" alt=""></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>Assume that the Bot has a higher Role than the reward Role</strong></p></div><h3 id="edit-rewards" tabindex="-1"><a class="header-anchor" href="#edit-rewards" aria-hidden="true">#</a> Edit Rewards:</h3><ul><li><strong>Do the same progress like adding vote rewards, just use the same amount</strong></li><li>This will overwrite the Role Reward</li></ul><h4 id="remove-voterewards-on-a-specific-vote-count" tabindex="-1"><a class="header-anchor" href="#remove-voterewards-on-a-specific-vote-count" aria-hidden="true">#</a> Remove VoteRewards on a specific Vote Count:</h4><ul><li>This will remove the Reward, which is given on the mentioned amount</li></ul>',8),d=(0,t.uE)('<h4 id="enable-disable-stack-rewards" tabindex="-1"><a class="header-anchor" href="#enable-disable-stack-rewards" aria-hidden="true">#</a> Enable/Disable Stack Rewards:</h4><ul><li>When Stack Rewards are enabled. Previous Role Rewards will be removed, when new one has been given.</li><li>Example: <ul><li>You added 2 Role Rewards on the vote amount 11 (Role A) and on the amount 15 (Role B)</li><li>When the User reached the Vote Amount <code>11</code> they will get the Role: <code>Role A</code></li><li>When the User reached the Vote Amount <code>15</code> they will get the Role: <code>Role B</code></li><li>When Stack Rewards is enabled, the <code>Role A</code> will be removed, since the User got a new Role Reward (<code>Role B</code>)</li></ul></li></ul>',2),i={render:function(e,a){const r=(0,t.up)("command");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t.Wm)(r,{message:"%votereward set <voteamount>",slash:"/vote rewards set [voteamount]",description:"Adds a VoteReward(Role) on the given voteamount, which is given when user reached the voteamount.",permissions:"MANAGE_SERVER"}),s,(0,t.Wm)(r,{message:"%votereward remove voteamount",slash:"/vote rewards remove [voteamunt]",description:"Removes the VoteReward from the Vote Amount",permissions:"MANAGE_SERVER"}),d,(0,t.Wm)(r,{message:"%votereward stack enable/disable",slash:"/vote rewards stack [status]",description:"Enables/Disables Stack Rewards. When Stack Rewards are enabled. Previous Role Rewards will be removed, when new one has been given.",permissions:"MANAGE_SERVER"})],64)}}}}]);