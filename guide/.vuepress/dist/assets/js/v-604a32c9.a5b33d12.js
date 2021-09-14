"use strict";(self.webpackChunkbrdocs=self.webpackChunkbrdocs||[]).push([[86],{7912:(e,t,s)=>{s.r(t),s.d(t,{data:()=>n});const n={key:"v-604a32c9",path:"/qotd/commands.html",title:"QOTD Commands",lang:"en-US",frontmatter:{tilte:"Commands",description:"Learn more about Question of the Day Commands"},excerpt:"",headers:[{level:2,title:"Setup QOTD Commands:",slug:"setup-qotd-commands",children:[{level:3,title:"Add a QOTD Channel:",slug:"add-a-qotd-channel",children:[]},{level:3,title:"Add a QOTD Ping:",slug:"add-a-qotd-ping",children:[]},{level:3,title:"Schedule QOTD on a specific Time:",slug:"schedule-qotd-on-a-specific-time",children:[]}]},{level:2,title:"Manage QOTD Custom Questions:",slug:"manage-qotd-custom-questions",children:[{level:3,title:"Add QOTD Custom Question:",slug:"add-qotd-custom-question",children:[]},{level:3,title:"Remove QOTD Custom Question:",slug:"remove-qotd-custom-question",children:[]},{level:3,title:"Clear QOTD Custom Question List:",slug:"clear-qotd-custom-question-list",children:[]},{level:3,title:"Get current QOTD Custom Question List:",slug:"get-current-qotd-custom-question-list",children:[]}]},{level:2,title:"Get QOTD Stats:",slug:"get-qotd-stats",children:[]},{level:2,title:"Send a Test QOTD in your QOTD Channel:",slug:"send-a-test-qotd-in-your-qotd-channel",children:[]}],filePathRelative:"qotd/commands.md",git:{updatedTime:1630940536e3}}},7554:(e,t,s)=>{s.r(t),s.d(t,{default:()=>q});var n=s(6252);const i=(0,n.uE)('<h1 id="qotd-commands" tabindex="-1"><a class="header-anchor" href="#qotd-commands" aria-hidden="true">#</a> QOTD Commands</h1><h2 id="setup-qotd-commands" tabindex="-1"><a class="header-anchor" href="#setup-qotd-commands" aria-hidden="true">#</a> Setup QOTD Commands:</h2><h3 id="add-a-qotd-channel" tabindex="-1"><a class="header-anchor" href="#add-a-qotd-channel" aria-hidden="true">#</a> Add a QOTD Channel:</h3>',3),o=(0,n._)("h3",{id:"add-a-qotd-ping",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#add-a-qotd-ping","aria-hidden":"true"},"#"),(0,n.Uk)(" Add a QOTD Ping:")],-1),a=(0,n._)("h3",{id:"schedule-qotd-on-a-specific-time",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#schedule-qotd-on-a-specific-time","aria-hidden":"true"},"#"),(0,n.Uk)(" Schedule QOTD on a specific Time:")],-1),d=(0,n._)("h2",{id:"manage-qotd-custom-questions",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#manage-qotd-custom-questions","aria-hidden":"true"},"#"),(0,n.Uk)(" Manage QOTD Custom Questions:")],-1),u=(0,n._)("h3",{id:"add-qotd-custom-question",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#add-qotd-custom-question","aria-hidden":"true"},"#"),(0,n.Uk)(" Add QOTD Custom Question:")],-1),r=(0,n._)("h3",{id:"remove-qotd-custom-question",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#remove-qotd-custom-question","aria-hidden":"true"},"#"),(0,n.Uk)(" Remove QOTD Custom Question:")],-1),l=(0,n._)("h3",{id:"clear-qotd-custom-question-list",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#clear-qotd-custom-question-list","aria-hidden":"true"},"#"),(0,n.Uk)(" Clear QOTD Custom Question List:")],-1),h=(0,n._)("h3",{id:"get-current-qotd-custom-question-list",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#get-current-qotd-custom-question-list","aria-hidden":"true"},"#"),(0,n.Uk)(" Get current QOTD Custom Question List:")],-1),c=(0,n._)("h2",{id:"get-qotd-stats",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#get-qotd-stats","aria-hidden":"true"},"#"),(0,n.Uk)(" Get QOTD Stats:")],-1),m=(0,n._)("h2",{id:"send-a-test-qotd-in-your-qotd-channel",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#send-a-test-qotd-in-your-qotd-channel","aria-hidden":"true"},"#"),(0,n.Uk)(" Send a Test QOTD in your QOTD Channel:")],-1),q={render:function(e,t){const s=(0,n.up)("command");return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,(0,n.Wm)(s,{message:"%qsetup channel <#channel>",slash:"/qotd setup channel [channel]",description:"Adds the mentioned Channels as QOTD Channel, where daily QOTD's will be sent.",permissions:"MANAGE_SERVER"}),o,(0,n.Wm)(s,{message:"%qsetup ping <@role>",slash:"/qotd setup ping [role]",description:"Adds the mentioned Roles as QOTD Ping, which will be pinged on the daily QOTD's",permissions:"MANAGE_SERVER",premium:"true"}),a,(0,n.Wm)(s,{message:"%qsetup scheduleat <date>",slash:"/qotd setup scheduleat [date]",description:"Schedules the QOTD to a given Date and Time from where on the 1 Day QOTD Interval will be continued.",permissions:"MANAGE_SERVER"}),d,u,(0,n.Wm)(s,{message:"%customquestion add <question>",slash:"/qotd question add [question]",description:"Adds the given Question as custom Question, which will be sent on QOTD",permissions:"MANAGE_SERVER"}),r,(0,n.Wm)(s,{message:"%customquestion remove <questionnumber>",slash:"/qotd question remove [questionnumber]",description:"Removes the given Question from the custom Questions. For checking the Question Number, check the question list command.",permissions:"MANAGE_SERVER"}),l,(0,n.Wm)(s,{message:"%customquestion list",slash:"/qotd question list",description:"Shows the List of all custom Questions with their appropriated Question Number.",permissions:"MANAGE_SERVER"}),h,(0,n.Wm)(s,{message:"%customquestion clear",slash:"/qotd question clear",description:"Clears the current custom Question List and removes all Questions.",permissions:"MANAGE_SERVER"}),c,(0,n.Wm)(s,{message:"%questionstats",slash:"/qotd stats",description:"Shows the current QOTD STATS with following Information: Next QOTD Question, Current Question Number, Total Questions, which has been sent and more...",permissions:"MANAGE_SERVER"}),m,(0,n.Wm)(s,{message:"%questiontest",slash:"/qotd test",description:"Sends a Test Question in the QOTD Channel to check the current Setup",permissions:"MANAGE_SERVER"})],64)}}}}]);