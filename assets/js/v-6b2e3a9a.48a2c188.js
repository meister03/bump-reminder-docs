"use strict";(self.webpackChunkbrdocs=self.webpackChunkbrdocs||[]).push([[4085],{6641:(e,s,a)=>{a.r(s),a.d(s,{data:()=>i});const i={key:"v-6b2e3a9a",path:"/reminder/customize.html",title:"Customize Message",lang:"en-US",frontmatter:{title:"Customize Message",description:"Learn how to create Reminder Message Overwrites, which accounts on Ontime, Interval & Action Reminders"},excerpt:"",headers:[{level:3,title:"Variables:",slug:"variables",children:[]}],filePathRelative:"reminder/customize.md",git:{updatedTime:1632754713e3}}},4213:(e,s,a)=>{a.r(s),a.d(s,{default:()=>p});var i=a(6252);const n=(0,i.uE)('<h1 id="customize-reminder-message" tabindex="-1"><a class="header-anchor" href="#customize-reminder-message" aria-hidden="true">#</a> Customize Reminder Message</h1><p>Reminder Message overwrites are Overwrites, which will account on Onetime, Interval &amp; Action Reminders and will change there Appereance.</p><h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables:</h3><ul><li><strong>You can use the following Variables in your Message:</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{{userid}},{{usermention}},{{remindername}},{{remindermessage}}, {{reminderping}}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="change-the-plain-message-which-can-be-sent-with-the-ping" tabindex="-1"><a class="header-anchor" href="#change-the-plain-message-which-can-be-sent-with-the-ping" aria-hidden="true">#</a> Change the Plain Message, which can be sent with the Ping:</h4><ul><li>Sets the Plain Message, which is sent on the Reminder Message. A Plain Message is a Non-Embed Message, which will be sent with the Embed (when one exists)</li></ul>',7),r=(0,i._)("h4",{id:"change-the-title-of-the-reminder-message",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#change-the-title-of-the-reminder-message","aria-hidden":"true"},"#"),(0,i.Uk)(" Change the Title of the Reminder Message:")],-1),t=(0,i.uE)('<p>Example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/reminder message title Reminder name {{remindername}} \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="change-the-description-of-the-reminder-message" tabindex="-1"><a class="header-anchor" href="#change-the-description-of-the-reminder-message" aria-hidden="true">#</a> Change the Description of the Reminder Message:</h4>',3),h=(0,i.uE)('<p>Example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/reminder message desc There is a new Reminder, read the following below: {{remindermessage}}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="change-the-color-of-the-reminder-message-embed" tabindex="-1"><a class="header-anchor" href="#change-the-color-of-the-reminder-message-embed" aria-hidden="true">#</a> Change the Color of the Reminder Message Embed:</h4>',3),m=(0,i._)("h4",{id:"change-the-reminder-message-to-a-embed-non-embed-message",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#change-the-reminder-message-to-a-embed-non-embed-message","aria-hidden":"true"},"#"),(0,i.Uk)(" Change the Reminder Message to a Embed/Non-Embed Message:")],-1),d=(0,i._)("ul",null,[(0,i._)("li",null,"Disables/Enables the Embed, which changes how the content will be sent.")],-1),o=(0,i._)("h4",{id:"change-the-footer-of-the-reminder-message",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#change-the-footer-of-the-reminder-message","aria-hidden":"true"},"#"),(0,i.Uk)(" Change the Footer of the Reminder Message:")],-1),l=(0,i._)("h4",{id:"change-the-thumbnail-of-the-reminder-message",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#change-the-thumbnail-of-the-reminder-message","aria-hidden":"true"},"#"),(0,i.Uk)(" Change the Thumbnail of the Reminder Message:")],-1),g=(0,i._)("ul",null,[(0,i._)("li",null,"Adds a Image on the right Corner of the Embed")],-1),c=(0,i._)("h4",{id:"change-the-image-of-the-reminder-message",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#change-the-image-of-the-reminder-message","aria-hidden":"true"},"#"),(0,i.Uk)(" Change the Image of the Reminder Message:")],-1),u=(0,i._)("ul",null,[(0,i._)("li",null,"Adds Image on the bottom of the Embed")],-1),b={},p=(0,a(3744).Z)(b,[["render",function(e,s){const a=(0,i.up)("command");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i.Wm)(a,{message:"%rmessage plain <message>",slash:"/reminder message plain [message]",description:"Sets the Plain Message, which is sent on the Reminder",permissions:"MANAGE_SERVER"}),r,(0,i.Wm)(a,{message:"%rmessage title <message>",slash:"/reminder message title [message]",description:"Sets the Title of the Embed, which is sent on the Reminder Message",permissions:"MANAGE_SERVER"}),t,(0,i.Wm)(a,{message:"%rmessage desc <message>",slash:"/reminder message desc [message]",description:"Sets the Description of the Embed, which is sent on the Reminder Message",permissions:"MANAGE_SERVER"}),h,(0,i.Wm)(a,{message:"%rmessage color <hexcolor>",slash:"/reminder message color [hexcolor]",description:"Sets the Color of the Embed, which is sent on the Reminder Embed Message",permissions:"MANAGE_SERVER"}),m,d,(0,i.Wm)(a,{message:"%rmessage emebed enable/disable",slash:"/reminder message embed [status]",description:"Disables or Enables Embed Mode on the Remind Message",permissions:"MANAGE_SERVER"}),o,(0,i.Wm)(a,{message:"%rmessage footer <message>",slash:"/reminder message footer [message]",description:"Sets the Footer of the Embed, which is sent on the Reminder Message",permissions:"MANAGE_SERVER",premium:"true"}),l,g,(0,i.Wm)(a,{message:"%rmessage thumb <image-link>",slash:"/reminder message thumbnail [image-link]",description:"Sets the Thumbnail of the Embed, which is sent on the Reminder Message",permissions:"MANAGE_SERVER",premium:"true"}),c,u,(0,i.Wm)(a,{message:"%rmessage image <image-link>",slash:"/reminder message image [image-link]",description:"Sets the Image of the Embed, which is sent on the Reminder Message",permissions:"MANAGE_SERVER",premium:"true"})],64)}]])}}]);