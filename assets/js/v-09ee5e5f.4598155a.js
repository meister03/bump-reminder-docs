"use strict";(self.webpackChunkbrdocs=self.webpackChunkbrdocs||[]).push([[1670],{3380:(e,a,i)=>{i.r(a),i.d(a,{data:()=>n});const n={key:"v-09ee5e5f",path:"/ticket/panel.html",title:"Panel",lang:"en-US",frontmatter:{title:"Panel",description:"Create/Edit/Delete all Panels"},excerpt:"",headers:[{level:3,title:"Customization",slug:"customization",children:[]},{level:3,title:"Send a Master Panel:",slug:"send-a-master-panel",children:[]}],filePathRelative:"ticket/panel.md",git:{updatedTime:1635684217e3}}},2114:(e,a,i)=>{i.r(a),i.d(a,{default:()=>g});var n=i(6252),t=i(3577);const l=(0,n.uE)('<h4 id="ticket-panel-or-wticketpanel-will-give-you-a-overview-of-the-command" tabindex="-1"><a class="header-anchor" href="#ticket-panel-or-wticketpanel-will-give-you-a-overview-of-the-command" aria-hidden="true">#</a> <code>/ticket panel</code> or <code>%wticketpanel</code> will give you a overview of the command</h4><p><strong>With this Command you can create a customizable Ticket Panel, which will be sent in the Ticket create Channel and with whom Users can create Tickets</strong></p><h4 id="create-a-ticket-panel" tabindex="-1"><a class="header-anchor" href="#create-a-ticket-panel" aria-hidden="true">#</a> Create a Ticket Panel:</h4><ul><li>This creates a Ticket Panel with the given Name, which is sent in the Panel Channel</li><li>The Panel can be customized on many aspects, scroll down for looking all Customizations</li></ul>',4),s=(0,n._)("h4",{id:"edit-a-ticket-panel",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#edit-a-ticket-panel","aria-hidden":"true"},"#"),(0,n.Uk)(" Edit a Ticket Panel:")],-1),h=(0,n._)("ul",null,[(0,n._)("li",null,"This edits a Ticket Panel with the given name, which is sent in the Panel Channel"),(0,n._)("li",null,"The Panel can be customized on many aspects, scroll down for looking all Customizations")],-1),r=(0,n._)("h4",{id:"delete-a-ticket-panel",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#delete-a-ticket-panel","aria-hidden":"true"},"#"),(0,n.Uk)(" Delete a Ticket panel:")],-1),d=(0,n._)("ul",null,[(0,n._)("li",null,"This deletes an existing Ticket Panel which has the given Name")],-1),c=(0,n._)("h4",{id:"check-all-panels",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#check-all-panels","aria-hidden":"true"},"#"),(0,n.Uk)(" Check all Panels:")],-1),o=(0,n._)("ul",null,[(0,n._)("li",null,"View all Ticket Panels in a select to get a good overview of your Ticket Panels.")],-1),m=(0,n.uE)('<h3 id="customization" tabindex="-1"><a class="header-anchor" href="#customization" aria-hidden="true">#</a> Customization</h3><h4 id="variables-which-can-be-used" tabindex="-1"><a class="header-anchor" href="#variables-which-can-be-used" aria-hidden="true">#</a> Variables, which can be used:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>TicketChannelName: {{usertag}}, {{ticketnumber}}\n{{usertag}}`, {{ticketnumber}}, {{channelmention}}, {{usermention}}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="panel-channel" tabindex="-1"><a class="header-anchor" href="#panel-channel" aria-hidden="true">#</a> Panel Channel</h4><ul><li>The Channel, where the Panel Message will be sent.</li><li>Pls send the Channelmention in the channel.</li></ul><h4 id="panel-response-message" tabindex="-1"><a class="header-anchor" href="#panel-response-message" aria-hidden="true">#</a> Panel Response Message</h4><ul><li>The panel response message is the message, which is sent when the user opens a Ticket</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>E.g. &quot;Hello, we opened a Ticket in {{channelmention}}&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Its the blue interaction message (ephemeral) in the panel channel.</li><li>Pls send the message in the Channel</li></ul><h4 id="panel-title-message" tabindex="-1"><a class="header-anchor" href="#panel-title-message" aria-hidden="true">#</a> Panel Title Message</h4><ul><li>The title of the Message, when Embeds are enabled, than it will be sent in form of a Plain Message</li></ul><h4 id="panel-description-message" tabindex="-1"><a class="header-anchor" href="#panel-description-message" aria-hidden="true">#</a> Panel Description Message</h4><ul><li>The Description of the Message, when Embeds are enabled, than it will be sent in form of a Plain Message</li></ul><h4 id="panel-embed-footer" tabindex="-1"><a class="header-anchor" href="#panel-embed-footer" aria-hidden="true">#</a> Panel Embed Footer</h4><ul><li>The Footer, which is on the Embed Message</li></ul><h4 id="panel-embed-color" tabindex="-1"><a class="header-anchor" href="#panel-embed-color" aria-hidden="true">#</a> Panel Embed Color</h4><ul><li>The Color of the Panel Message</li></ul><h4 id="panel-embed-image" tabindex="-1"><a class="header-anchor" href="#panel-embed-image" aria-hidden="true">#</a> Panel Embed Image</h4><ul><li>The Image, which is viewed on the Embed Message</li></ul><h4 id="panel-embed-thumbnail" tabindex="-1"><a class="header-anchor" href="#panel-embed-thumbnail" aria-hidden="true">#</a> Panel Embed Thumbnail</h4><ul><li>The Thumbnail, which is viewed on the Embed Message</li></ul><h4 id="enable-disable-embed-message-on-panel-message" tabindex="-1"><a class="header-anchor" href="#enable-disable-embed-message-on-panel-message" aria-hidden="true">#</a> Enable/Disable Embed Message on Panel Message</h4><ul><li>When this option is disabled, the Embed will transformed in a normal message.</li></ul><h4 id="ticket-channelname" tabindex="-1"><a class="header-anchor" href="#ticket-channelname" aria-hidden="true">#</a> Ticket Channelname</h4>',24),u=(0,n._)("li",null,"The Channelname, the ticket will be created with.",-1),p=(0,n.uE)('<h4 id="ticket-response-message" tabindex="-1"><a class="header-anchor" href="#ticket-response-message" aria-hidden="true">#</a> Ticket Response Message</h4><ul><li>The ticket response message is the message, which is sent when the user sends there first Message</li><li>Example:</li><li>It would be annoying, when users creates Ticket for fun or never state there Problem</li><li>When you add a response message, then it will be send when the user sent a message, which can also be used for Staff Pings.</li><li>E.g: &quot;Thx for stating your Questions, @here&quot;</li></ul><h4 id="ticket-plain-message" tabindex="-1"><a class="header-anchor" href="#ticket-plain-message" aria-hidden="true">#</a> Ticket Plain Message</h4><ul><li>The Non Embed Message, which is sent when the Ticket opens.</li></ul><h4 id="ticket-title-message" tabindex="-1"><a class="header-anchor" href="#ticket-title-message" aria-hidden="true">#</a> Ticket Title Message</h4><ul><li>The Title of the Embed Message, which is sent when the Ticket opens.</li></ul><h4 id="ticket-description-message" tabindex="-1"><a class="header-anchor" href="#ticket-description-message" aria-hidden="true">#</a> Ticket Description Message</h4><ul><li>The Description of the Embed Message, which is sent when the Ticket opens.</li></ul><h4 id="ticket-embed-footer" tabindex="-1"><a class="header-anchor" href="#ticket-embed-footer" aria-hidden="true">#</a> Ticket Embed Footer</h4><ul><li>The Footer, which is on the Embed Message</li></ul><h4 id="ticket-embed-color" tabindex="-1"><a class="header-anchor" href="#ticket-embed-color" aria-hidden="true">#</a> Ticket Embed Color</h4><ul><li>The Color of the Ticket Embed Message</li></ul><h4 id="ticket-embed-image" tabindex="-1"><a class="header-anchor" href="#ticket-embed-image" aria-hidden="true">#</a> Ticket Embed Image</h4><ul><li>The Image, which is viewed on the Embed Message</li></ul><h4 id="ticket-embed-thumbnail" tabindex="-1"><a class="header-anchor" href="#ticket-embed-thumbnail" aria-hidden="true">#</a> Ticket Embed Thumbnail</h4><ul><li>The Thumbnail, which is viewed on the Embed Message</li></ul><h3 id="send-a-master-panel" tabindex="-1"><a class="header-anchor" href="#send-a-master-panel" aria-hidden="true">#</a> Send a Master Panel:</h3><p>A Master Panel is a Ticket Panel, where all Ticket Panels are merged to one and can be opened by selecting the correct ticket option based on your issue. In a Master Panel the Ticket Settings of each Panel are respected, which allows different customization.</p>',18),b={},g=(0,i(3744).Z)(b,[["render",function(e,a){const i=(0,n.up)("command");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,(0,n.Wm)(i,{message:"%panel create <panelname>",slash:"/ticket panel create [panelname]",description:"Creates a Ticket Panel with the provided Name and guides you through a Setup for the Customization",permissions:"ADMINISTRATOR"}),s,h,(0,n.Wm)(i,{message:"%panel edit <panelname>",slash:"/ticket panel edit [panelname]",description:"Edits a Ticket Panel with the provided Name and guides you through a Setup for the Customization",permissions:"ADMINISTRATOR"}),r,d,(0,n.Wm)(i,{message:"%panel delete <panelname>",slash:"/ticket panel delete [panelname] ",description:"Deletes the Ticket Panel with the given Name. Get a List of Panels with /panel all",permissions:"ADMINISTRATOR"}),c,o,(0,n.Wm)(i,{message:"%panel all",slash:"/ticket panel all",description:"Gives you a list of all Ticket Panels",permissions:"ADMINISTRATOR"}),m,(0,n._)("ul",null,[u,(0,n._)("li",null,'E.g "support-'+(0,t.zw)(e.ticketnumber)+'"',1)]),p,(0,n.Wm)(i,{message:"%panel master <#channel>",slash:"/ticket panel master [channel]",description:"Creates a Master Panel, which contains all existing Ticket Panels.",permissions:"ADMINISTRATOR"})],64)}]])}}]);