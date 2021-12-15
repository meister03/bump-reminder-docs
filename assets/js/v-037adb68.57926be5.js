"use strict";(self.webpackChunkbrdocs=self.webpackChunkbrdocs||[]).push([[3084],{759:(e,t,d)=>{d.r(t),d.d(t,{data:()=>s});const s={key:"v-037adb68",path:"/eventlogging/addremoveevents.html",title:"Add/Remove Events",lang:"en-US",frontmatter:{title:"Add/Remove Events",description:"Add and remove events for logging"},excerpt:"",headers:[{level:3,title:"Events, which can be currently logged:",slug:"events-which-can-be-currently-logged",children:[]},{level:3,title:"Add Events, which will be logged out in the Mod-Log:",slug:"add-events-which-will-be-logged-out-in-the-mod-log",children:[]},{level:3,title:"Remove Events, which should not be logged out in the Mod-Log:",slug:"remove-events-which-should-not-be-logged-out-in-the-mod-log",children:[]},{level:3,title:"Add/Remove Channels for Message Tracking:",slug:"add-remove-channels-for-message-tracking",children:[]}],filePathRelative:"eventlogging/addremoveevents.md",git:{updatedTime:1630936579e3}}},9816:(e,t,d)=>{d.r(t),d.d(t,{default:()=>v});var s=d(6252);const n=(0,s.uE)('<h1 id="add-remove-events" tabindex="-1"><a class="header-anchor" href="#add-remove-events" aria-hidden="true">#</a> Add/Remove Events</h1><h3 id="events-which-can-be-currently-logged" tabindex="-1"><a class="header-anchor" href="#events-which-can-be-currently-logged" aria-hidden="true">#</a> Events, which can be currently logged:</h3><table><thead><tr><th>ID:</th><th>EventName:</th></tr></thead><tbody><tr><td>0</td><td>MessageDelete</td></tr><tr><td>1</td><td>MessageEdit</td></tr><tr><td>2</td><td>MemberUpdate(Role, Nickname)</td></tr><tr><td>3</td><td>MemberJoin</td></tr><tr><td>5</td><td>ChannelCreate/Delete</td></tr><tr><td>7</td><td>RoleCreate/Delete`</td></tr></tbody></table><h3 id="add-events-which-will-be-logged-out-in-the-mod-log" tabindex="-1"><a class="header-anchor" href="#add-events-which-will-be-logged-out-in-the-mod-log" aria-hidden="true">#</a> Add Events, which will be logged out in the Mod-Log:</h3>',4),a=(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Uk)("Examlple: "),(0,s._)("code",null,"%eventlist add 0 1 7"),(0,s.Uk)(" -> This will add the "),(0,s._)("code",null,"MessageDelete, MessagEdit & RoleCreate/Delete"),(0,s.Uk)(" Event for Event Logging")])],-1),l=(0,s._)("h3",{id:"remove-events-which-should-not-be-logged-out-in-the-mod-log",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#remove-events-which-should-not-be-logged-out-in-the-mod-log","aria-hidden":"true"},"#"),(0,s.Uk)(" Remove Events, which should not be logged out in the Mod-Log:")],-1),h=(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Uk)("Examlple: "),(0,s._)("code",null,"%eventlist remove 0 1 7"),(0,s.Uk)(" -> This will remove the "),(0,s._)("code",null,"MessageDelete, MessagEdit & RoleCreate/Delete"),(0,s.Uk)(" Event for Event Logging")])],-1),o=(0,s._)("h3",{id:"add-remove-channels-for-message-tracking",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#add-remove-channels-for-message-tracking","aria-hidden":"true"},"#"),(0,s.Uk)(" Add/Remove Channels for Message Tracking:")],-1),r=(0,s._)("h4",{id:"add-channels-where-the-message-should-be-tracked-messageedit-messagedelete-event",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#add-channels-where-the-message-should-be-tracked-messageedit-messagedelete-event","aria-hidden":"true"},"#"),(0,s.Uk)(" Add Channels, where the Message should be tracked [MessageEdit, MessageDelete Event]:")],-1),i=(0,s._)("h4",{id:"remove-channels-where-the-message-should-not-be-tracked-messageedit-messagedelete-event",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#remove-channels-where-the-message-should-not-be-tracked-messageedit-messagedelete-event","aria-hidden":"true"},"#"),(0,s.Uk)(" Remove Channels, where the Message should not be tracked [MessageEdit, MessageDelete Event]:")],-1),g=(0,s.Uk)(" **The Tick and Cross will tell you if the Event is activated for logging** "),c={},v=(0,d(3744).Z)(c,[["render",function(e,t){const d=(0,s.up)("command");return(0,s.wg)(),(0,s.iD)(s.HY,null,[n,(0,s.Wm)(d,{message:"%eventlist add <event(ID)>",slash:"",description:"Add the Event, which should be logged in the Mod-Log",permissions:"MANAGE_SERVER"}),a,l,(0,s.Wm)(d,{message:"%eventlist remove <event(ID)>",slash:"",description:"Remove the Event, which shouldn't be logged in the Mod-Log",permissions:"MANAGE_SERVER"}),h,o,r,(0,s.Wm)(d,{message:"%eventlist addchannel <#channel>",slash:"",description:"Add the Channel, where the messages will be tracked for the MessageDelete, MessageEdit event",permissions:"MANAGE_SERVER"}),i,(0,s.Wm)(d,{message:"%eventlist removechannel <#channel>",slash:"",description:"Removes the Channel, where the messages will not be tracked anymore for the MessageDelete, MessageEdit event",permissions:"MANAGE_SERVER"}),g],64)}]])}}]);