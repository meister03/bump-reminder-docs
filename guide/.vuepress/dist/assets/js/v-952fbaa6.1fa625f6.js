"use strict";(self.webpackChunkbrdocs=self.webpackChunkbrdocs||[]).push([[6027],{1063:(e,a,r)=>{r.r(a),r.d(a,{data:()=>i});const i={key:"v-952fbaa6",path:"/reminder/commands.html",title:"Reminder Commands",lang:"en-US",frontmatter:{tilte:"Commands",description:"Learn more about, how to create/edit/delete General Reminders"},excerpt:"",headers:[{level:3,title:"Interval Command",slug:"interval-command",children:[]},{level:3,title:"Remindme & Remind Command",slug:"remindme-remind-command",children:[]},{level:3,title:"Action Reminder Command",slug:"action-reminder-command",children:[]},{level:3,title:"Active Reminder Command:",slug:"active-reminder-command",children:[]},{level:3,title:"Setup/Manage Reminder Category",slug:"setup-manage-reminder-category",children:[]},{level:3,title:"Change your Timezone:",slug:"change-your-timezone",children:[]}],filePathRelative:"reminder/commands.md",git:{updatedTime:1631107214e3}}},2541:(e,a,r)=>{r.r(a),r.d(a,{default:()=>_});var i=r(6252);const n=(0,i.uE)('<h1 id="reminder-commands" tabindex="-1"><a class="header-anchor" href="#reminder-commands" aria-hidden="true">#</a> Reminder Commands</h1><h3 id="interval-command" tabindex="-1"><a class="header-anchor" href="#interval-command" aria-hidden="true">#</a> Interval Command</h3><h4 id="create-a-interval-reminder" tabindex="-1"><a class="header-anchor" href="#create-a-interval-reminder" aria-hidden="true">#</a> Create a Interval Reminder:</h4>',3),d=(0,i._)("h4",{id:"delete-a-interval-reminder",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#delete-a-interval-reminder","aria-hidden":"true"},"#"),(0,i.Uk)(" Delete a Interval Reminder:")],-1),t=(0,i._)("h4",{id:"check-all-interval-reminders",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#check-all-interval-reminders","aria-hidden":"true"},"#"),(0,i.Uk)(" Check all Interval Reminders:")],-1),s=(0,i._)("h3",{id:"remindme-remind-command",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#remindme-remind-command","aria-hidden":"true"},"#"),(0,i.Uk)(" Remindme & Remind Command")],-1),m=(0,i._)("h4",{id:"create-a-reminder",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#create-a-reminder","aria-hidden":"true"},"#"),(0,i.Uk)(" Create a Reminder:")],-1),l=(0,i._)("h4",{id:"delete-a-reminder",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#delete-a-reminder","aria-hidden":"true"},"#"),(0,i.Uk)(" Delete a Reminder:")],-1),h=(0,i._)("h4",{id:"check-all-reminders",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#check-all-reminders","aria-hidden":"true"},"#"),(0,i.Uk)(" Check all Reminders:")],-1),c=(0,i._)("h3",{id:"action-reminder-command",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#action-reminder-command","aria-hidden":"true"},"#"),(0,i.Uk)(" Action Reminder Command")],-1),o=(0,i._)("h4",{id:"create-a-action-reminder",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#create-a-action-reminder","aria-hidden":"true"},"#"),(0,i.Uk)(" Create a Action Reminder:")],-1),u=(0,i._)("h4",{id:"delete-a-action-reminder",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#delete-a-action-reminder","aria-hidden":"true"},"#"),(0,i.Uk)(" Delete a Action Reminder:")],-1),R=(0,i._)("h4",{id:"check-all-action-reminders",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#check-all-action-reminders","aria-hidden":"true"},"#"),(0,i.Uk)(" Check all Action Reminders:")],-1),A=(0,i._)("h3",{id:"active-reminder-command",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#active-reminder-command","aria-hidden":"true"},"#"),(0,i.Uk)(" Active Reminder Command:")],-1),g=(0,i._)("h3",{id:"setup-manage-reminder-category",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#setup-manage-reminder-category","aria-hidden":"true"},"#"),(0,i.Uk)(" Setup/Manage Reminder Category")],-1),p=(0,i._)("h4",{id:"append-maximal-remind-count",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#append-maximal-remind-count","aria-hidden":"true"},"#"),(0,i.Uk)(" Append Maximal Remind Count:")],-1),v=(0,i._)("h4",{id:"blacklist-users-from-creating-a-reminder",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#blacklist-users-from-creating-a-reminder","aria-hidden":"true"},"#"),(0,i.Uk)(" Blacklist Users from creating a Reminder:")],-1),E=(0,i._)("h3",{id:"change-your-timezone",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#change-your-timezone","aria-hidden":"true"},"#"),(0,i.Uk)(" Change your Timezone:")],-1),_={render:function(e,a){const r=(0,i.up)("command");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i.Wm)(r,{message:"%interval create",slash:"/interval create [intervalname] [interval] [ping] [channel] [remindmessage] [starttime]",description:"Creates a Interval Reminder with the given Data",permissions:"MANAGE_SERVER"}),d,(0,i.Wm)(r,{message:"%interval delete <intervalname>",slash:"/interval delete [intervalname] ",description:"Deletes the Interval with the given Name. Get a List of Intervals with /interval all",permissions:"MANAGE_SERVER"}),t,(0,i.Wm)(r,{message:"%interval all",slash:"/interval all",description:"Gives you a list of all Interval Reminders",permissions:"MANAGE_SERVER"}),s,m,(0,i.Wm)(r,{message:"%remind <timecontent>",slash:"/remind create [remindername] [ping] [channel] [remindmessage] [usetimezone]",description:"Creates a Normal Reminder with the given Data and guides you through a Setup",permissions:"MANAGE_SERVER"}),l,(0,i.Wm)(r,{message:"%remind delete <remindername>",slash:"/remind delete [remindername] ",description:"Deletes the Reminder with the given Name. Get a List of Reminders with /remind all",permissions:"MANAGE_SERVER"}),h,(0,i.Wm)(r,{message:"%remind all",slash:"/remind all",description:"Gives you a list of all Reminders",permissions:"MANAGE_SERVER"}),c,o,(0,i.Wm)(r,{message:"%action <remindername> <reminderafter> <ping>",slash:"NOT AVAILABLE",description:"Creates a Action Reminder with the given Data and guides you through the Setup",permissions:"MANAGE_SERVER"}),u,(0,i.Wm)(r,{message:"%action delete <remindername>",slash:"NOT AVAILABLE",description:"Deletes the Reminder with the given Name. Get a List of Action Reminders with %action all",permissions:"MANAGE_SERVER"}),R,(0,i.Wm)(r,{message:"%action all",slash:"NOT AVAILABLE",description:"Gives you a list of all Action Reminders",permissions:"MANAGE_SERVER"}),A,(0,i.Wm)(r,{message:"%activerme",slash:"NOT AVAILABLE",description:"Gives you a list of all Active Reminders",permissions:"MANAGE_SERVER"}),g,p,(0,i.Wm)(r,{message:"%rsetup appendremind max",slash:"NOT AVAILABLE",description:"Appends your Remind Count, so you can create more Reminders",permissions:"MANAGE_SERVER"}),v,(0,i.Wm)(r,{message:"%rset add @user",slash:"NOT AVAILABLE",description:"Blacklists a user and prevents them from creating Reminders",permissions:"MANAGE_SERVER"}),(0,i.Wm)(r,{message:"%rset remove @user",slash:"NOT AVAILABLE",description:"Unblacklists a user and prevents them from creating Reminders",permissions:"MANAGE_SERVER"}),E,(0,i.Wm)(r,{message:"%timezone",slash:"NOT AVAILABLE",description:"Change your timezone for choosing a custom offset and using the custom start time",permissions:"MANAGE_SERVER"})],64)}}}}]);