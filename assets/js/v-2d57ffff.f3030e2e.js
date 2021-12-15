"use strict";(self.webpackChunkbrdocs=self.webpackChunkbrdocs||[]).push([[5258],{4195:(e,n,t)=>{t.r(n),t.d(n,{data:()=>i});const i={key:"v-2d57ffff",path:"/counting/setup.html",title:"Setup",lang:"en-US",frontmatter:{title:"Setup",description:"Learn how to setup the counting system"},excerpt:"",headers:[{level:3,title:"Enable/Disable the Counting System:",slug:"enable-disable-the-counting-system",children:[]},{level:3,title:"Add a Counting Channel:",slug:"add-a-counting-channel",children:[]},{level:2,title:"Options for Customizing:",slug:"options-for-customizing",children:[{level:3,title:"Enable/Disable Reactions when counted right/wrong:",slug:"enable-disable-reactions-when-counted-right-wrong",children:[]},{level:3,title:"Enable/Disable Count Reset, when counted wrong",slug:"enable-disable-count-reset-when-counted-wrong",children:[]},{level:3,title:"📀Add Role when wrong counted:",slug:"📀add-role-when-wrong-counted",children:[]}]}],filePathRelative:"counting/setup.md",git:{updatedTime:1630935084e3}}},1712:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});var i=t(6252);const o=(0,i._)("h1",{id:"setup-counting",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#setup-counting","aria-hidden":"true"},"#"),(0,i.Uk)(" Setup Counting")],-1),s=(0,i._)("h3",{id:"enable-disable-the-counting-system",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#enable-disable-the-counting-system","aria-hidden":"true"},"#"),(0,i.Uk)(" Enable/Disable the Counting System:")],-1),a=(0,i._)("h3",{id:"add-a-counting-channel",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#add-a-counting-channel","aria-hidden":"true"},"#"),(0,i.Uk)(" Add a Counting Channel:")],-1),r=(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("strong",null,"This will add the mentioned channel as counting channel")])],-1),h=(0,i.uE)('<h2 id="options-for-customizing" tabindex="-1"><a class="header-anchor" href="#options-for-customizing" aria-hidden="true">#</a> Options for Customizing:</h2><h3 id="enable-disable-reactions-when-counted-right-wrong" tabindex="-1"><a class="header-anchor" href="#enable-disable-reactions-when-counted-right-wrong" aria-hidden="true">#</a> Enable/Disable Reactions when counted right/wrong:</h3><h4 id="the-bot-should-add-reactions-when-the-number-is-wrong-or-right" tabindex="-1"><a class="header-anchor" href="#the-bot-should-add-reactions-when-the-number-is-wrong-or-right" aria-hidden="true">#</a> The Bot should add Reactions, when the Number is wrong or right:</h4>',3),l=(0,i._)("h4",{id:"the-bot-will-not-add-reactions-when-the-number-is-wrong-or-right",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#the-bot-will-not-add-reactions-when-the-number-is-wrong-or-right","aria-hidden":"true"},"#"),(0,i.Uk)(" The Bot will not add Reactions, when the Number is wrong or right:")],-1),u=(0,i._)("h3",{id:"enable-disable-count-reset-when-counted-wrong",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#enable-disable-count-reset-when-counted-wrong","aria-hidden":"true"},"#"),(0,i.Uk)(" Enable/Disable Count Reset, when counted wrong")],-1),d=(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Uk)("When this Feature is enabled, the current Count will be resetted to "),(0,i._)("code",null,"0")])],-1),c=(0,i._)("h4",{id:"the-bot-will-reset-the-counting-when-the-number-is-wrong-and-the-counting-will-begin-again-with-0",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#the-bot-will-reset-the-counting-when-the-number-is-wrong-and-the-counting-will-begin-again-with-0","aria-hidden":"true"},"#"),(0,i.Uk)(" The Bot will reset the Counting, when the Number is wrong and the counting will begin again with 0:")],-1),g=(0,i._)("h4",{id:"the-bot-should-not-reset-the-counting-when-the-number-is-wrong-and-the-counting-will-continue-with-the-next-number",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#the-bot-should-not-reset-the-counting-when-the-number-is-wrong-and-the-counting-will-continue-with-the-next-number","aria-hidden":"true"},"#"),(0,i.Uk)(" The Bot should not reset the Counting, when the Number is wrong and the counting will continue with the next Number:**")],-1),w=(0,i._)("h3",{id:"📀add-role-when-wrong-counted",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#📀add-role-when-wrong-counted","aria-hidden":"true"},"#"),(0,i.Uk)(" 📀Add Role when wrong counted:")],-1),b=(0,i._)("ul",null,[(0,i._)("li",null,"This adds a role, when a user counted wrong and removes it after a specific time, when a time was provided"),(0,i._)("li",null,[(0,i._)("strong",null,[(0,i.Uk)("Ex: "),(0,i._)("code",null,"/count setup role @Math-Noob 2m"),(0,i.Uk)(" -> When User X counted wrong, he will get the @Math-Noob role for 2 minutes")])])],-1),m={},p=(0,t(3744).Z)(m,[["render",function(e,n){const t=(0,i.up)("command");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,s,(0,i.Wm)(t,{message:"%countsetup enable/disable",slash:"/count setup enable/disable",description:"Enables/Disables the Counting Feature",permissions:"MANAGE_SERVER"}),a,r,(0,i.Wm)(t,{message:"%countsetup channel <#channel>",slash:"/count setup channel [channel]",description:"Sets the Counting Channel, where you will count together.",permissions:"MANAGE_SERVER"}),h,(0,i.Wm)(t,{message:"%countsetup yesreact",slash:"/count setup yesreact",description:"Enables Reactions in the Counting Channel, when counted right or wrong.",permissions:"MANAGE_SERVER"}),l,(0,i.Wm)(t,{message:"%countsetup noreact",slash:"/count setup noreact",description:"Disables Reactions in the Counting Channel, when counted right or wrong.",permissions:"MANAGE_SERVER"}),u,d,c,(0,i.Wm)(t,{message:"%countsetup yesreset",slash:"/count setup yesreset",description:"Enables Counting reset, when a wrong Number has been sent.",permissions:"MANAGE_SERVER"}),g,(0,i.Wm)(t,{message:"%countsetup noreset",slash:"/count setup noreset",description:"Disables Counting reset, when a wrong Number has been sent.",permissions:"MANAGE_SERVER"}),w,(0,i.Wm)(t,{message:"%countsetup role <@role> <removeafter>",slash:"/count setup role [role] [removeafter]",description:"Gives a timed role, when someone counted wrong and which will be removed after the provied time",permissions:"MANAGE_SERVER"}),b],64)}]])}}]);