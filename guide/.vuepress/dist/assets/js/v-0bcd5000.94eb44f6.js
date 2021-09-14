"use strict";(self.webpackChunkbrdocs=self.webpackChunkbrdocs||[]).push([[1748],{4817:(e,t,d)=>{d.r(t),d.d(t,{data:()=>n});const n={key:"v-0bcd5000",path:"/eventlogging/commands.html",title:"EventLogging Commands",lang:"en-US",frontmatter:{tilte:"Commands",description:"Learn more about EventLogging related Commands"},excerpt:"",headers:[{level:3,title:"Event Logging Setup Commands:",slug:"event-logging-setup-commands",children:[]}],filePathRelative:"eventlogging/commands.md",git:{updatedTime:1630766313e3}}},108:(e,t,d)=>{d.r(t),d.d(t,{default:()=>r});var n=d(6252);const s=(0,n.uE)('<h1 id="eventlogging-commands" tabindex="-1"><a class="header-anchor" href="#eventlogging-commands" aria-hidden="true">#</a> EventLogging Commands</h1><h3 id="event-logging-setup-commands" tabindex="-1"><a class="header-anchor" href="#event-logging-setup-commands" aria-hidden="true">#</a> Event Logging Setup Commands:</h3><h4 id="events-which-can-be-currently-logged" tabindex="-1"><a class="header-anchor" href="#events-which-can-be-currently-logged" aria-hidden="true">#</a> Events, which can be currently logged:</h4><table><thead><tr><th>ID:</th><th>EventName:</th></tr></thead><tbody><tr><td>0</td><td>MessageDelete</td></tr><tr><td>1</td><td>MessageEdit</td></tr><tr><td>2</td><td>MemberUpdate(Role, Nickname)</td></tr><tr><td>3</td><td>MemberJoin</td></tr><tr><td>5</td><td>ChannelCreate/Delete</td></tr><tr><td>7</td><td>RoleCreate/Delete`</td></tr></tbody></table><h4 id="add-events-which-will-be-logged-out-in-the-mod-log" tabindex="-1"><a class="header-anchor" href="#add-events-which-will-be-logged-out-in-the-mod-log" aria-hidden="true">#</a> Add Events, which will be logged out in the Mod-Log:</h4>',5),a=(0,n._)("h4",{id:"remove-events-which-should-not-be-logged-out-in-the-mod-log",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#remove-events-which-should-not-be-logged-out-in-the-mod-log","aria-hidden":"true"},"#"),(0,n.Uk)(" Remove Events, which should not be logged out in the Mod-Log:")],-1),h=(0,n._)("h4",{id:"add-channels-where-the-message-should-be-tracked-messageedit-messagedelete-event",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#add-channels-where-the-message-should-be-tracked-messageedit-messagedelete-event","aria-hidden":"true"},"#"),(0,n.Uk)(" Add Channels, where the Message should be tracked [MessageEdit, MessageDelete Event]:")],-1),o=(0,n._)("h4",{id:"remove-channels-where-the-message-should-not-be-tracked-messageedit-messagedelete-event",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#remove-channels-where-the-message-should-not-be-tracked-messageedit-messagedelete-event","aria-hidden":"true"},"#"),(0,n.Uk)(" Remove Channels, where the Message should not be tracked [MessageEdit, MessageDelete Event]:")],-1),r={render:function(e,t){const d=(0,n.up)("command");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s,(0,n.Wm)(d,{message:"%eventlist add <event(ID)>",slash:"",description:"Add the Event, which should be logged in the Mod-Log",permissions:"MANAGE_SERVER"}),a,(0,n.Wm)(d,{message:"%eventlist remove <event(ID)>",slash:"",description:"Remove the Event, which shouldn't be logged in the Mod-Log",permissions:"MANAGE_SERVER"}),h,(0,n.Wm)(d,{message:"%eventlist addchannel <#channel>",slash:"",description:"Add the Channel, where the messages will be tracked for the MessageDelete, MessageEdit event",permissions:"MANAGE_SERVER"}),o,(0,n.Wm)(d,{message:"%eventlist removechannel <#channel>",slash:"",description:"Removes the Channel, where the messages will not be tracked anymore for the MessageDelete, MessageEdit event",permissions:"MANAGE_SERVER"})],64)}}}}]);