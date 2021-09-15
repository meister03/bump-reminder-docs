"use strict";(self.webpackChunkbrdocs=self.webpackChunkbrdocs||[]).push([[3082],{1794:(e,s,t)=>{t.r(s),t.d(s,{data:()=>a});const a={key:"v-339daaf7",path:"/boosttracker/customize.html",title:"Customize Message",lang:"en-US",frontmatter:{title:"Customize Message",description:"See the commands for customizing the Boost Message after your need."},excerpt:"",headers:[{level:2,title:"How to customize the Boost Message?",slug:"how-to-customize-the-boost-message",children:[]},{level:2,title:"Test your Customization:",slug:"test-your-customization",children:[]}],filePathRelative:"boosttracker/customize.md",git:{updatedTime:1630933812e3}}},9127:(e,s,t)=>{t.r(s),t.d(s,{default:()=>z});var a=t(6252),o=t(3577);const i=(0,a.uE)('<h1 id="customize-boost-message" tabindex="-1"><a class="header-anchor" href="#customize-boost-message" aria-hidden="true">#</a> Customize Boost Message</h1><h2 id="how-to-customize-the-boost-message" tabindex="-1"><a class="header-anchor" href="#how-to-customize-the-boost-message" aria-hidden="true">#</a> How to customize the Boost Message?</h2><h4 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables:</h4>',3),h=(0,a._)("li",null,"This variables can be used in the Message, which will be replaced with the appropriated values.",-1),n=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,[(0,a._)("strong",null,[(0,a.Uk)("Use the Parameter "),(0,a._)("code",null,"disable"),(0,a.Uk)(", when you want to disable certain customization such as Embed Image/ Embed Thumbnail...")])])],-1),l=(0,a._)("h4",{id:"change-the-plain-message",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#change-the-plain-message","aria-hidden":"true"},"#"),(0,a.Uk)(" Change the Plain Message:")],-1),m=(0,a._)("h4",{id:"change-the-title-of-the-boost-message",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#change-the-title-of-the-boost-message","aria-hidden":"true"},"#"),(0,a.Uk)(" Change the Title of the Boost Message:")],-1),r=(0,a._)("h4",{id:"change-the-description-of-the-boost-message",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#change-the-description-of-the-boost-message","aria-hidden":"true"},"#"),(0,a.Uk)(" Change the Description of the Boost Message:")],-1),d=(0,a._)("ul",null,[(0,a._)("li",null,"This will change the Description of the boost message")],-1),c=(0,a._)("h4",{id:"change-the-color-of-the-boost-message-embed",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#change-the-color-of-the-boost-message-embed","aria-hidden":"true"},"#"),(0,a.Uk)(" Change the Color of the Boost Message Embed:")],-1),g=(0,a._)("ul",null,[(0,a._)("li",null,"This will change the color of the Embed Message. The provided color must be hex color.")],-1),u=(0,a._)("h4",{id:"change-the-boost-message-to-a-embed-non-embed-message",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#change-the-boost-message-to-a-embed-non-embed-message","aria-hidden":"true"},"#"),(0,a.Uk)(" Change the Boost Message to a Embed/Non-Embed Message:")],-1),b=(0,a._)("ul",null,[(0,a._)("li",null,"This will change whether to send the Boost Message as Embed or Non Embed")],-1),_=(0,a._)("h4",{id:"change-the-thumbnail-of-the-boost-message",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#change-the-thumbnail-of-the-boost-message","aria-hidden":"true"},"#"),(0,a.Uk)(" Change the Thumbnail of the Boost Message:")],-1),E=(0,a._)("ul",null,[(0,a._)("li",null,"This will add an Thumbnail on the Boost Message Embed")],-1),f=(0,a._)("h4",{id:"change-the-image-of-the-boost-message",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#change-the-image-of-the-boost-message","aria-hidden":"true"},"#"),(0,a.Uk)(" Change the Image of the Boost Message:")],-1),w=(0,a._)("ul",null,[(0,a._)("li",null,"This will add an Image on the Boost Message Embed")],-1),p=(0,a._)("h2",{id:"test-your-customization",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#test-your-customization","aria-hidden":"true"},"#"),(0,a.Uk)(" Test your Customization:")],-1),M=(0,a._)("ul",null,[(0,a._)("li",null,"This will sent your customized Boost Message in the Channel you runned the Command")],-1),z={render:function(e,s){const t=(0,a.up)("command");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("ul",null,[h,(0,a._)("li",null,[(0,a._)("code",null,(0,o.zw)(e.boostcount)+", "+(0,o.zw)(e.boosttier)+", "+(0,o.zw)(e.username)+", "+(0,o.zw)(e.usertag)+", "+(0,o.zw)(e.userid)+", {usermention}}",1)]),(0,a._)("li",null,[(0,a._)("code",null,"Ex: "+(0,o.zw)(e.usertag)+" boosted! Server has "+(0,o.zw)(e.boostcount)+" with "+(0,o.zw)(e.boosttier)+" tier",1)])]),n,l,(0,a._)("ul",null,[(0,a._)("li",null,"When using an embed, it would be nice, when you can send a normal non-embed message, which can also ping the member, when you use the variable "+(0,o.zw)(e.usermention)+". This functionality fulfills the Plain message.",1)]),(0,a.Wm)(t,{message:"%bmessage plain <message>",slash:"/boost message plain [message]",description:"Sets the Plain Message, which is sent on Boost. A Plain Message is a Non-Embed Message, which will be sent with the Embed",permissions:"MANAGE_SERVER"}),m,(0,a.Wm)(t,{message:"%bmessage title <message>",slash:"/boost message title [message]",description:"Sets the Title of the Embed, which is sent on Boost",permissions:"MANAGE_SERVER"}),r,d,(0,a.Wm)(t,{message:"%bmessage desc <message>",slash:"/boost message desc [message]",description:"Sets the Description of the Embed, which is sent on the Boost",permissions:"MANAGE_SERVER"}),c,g,(0,a.Wm)(t,{message:"%bmessage color <hexcolor>",slash:"/boost message color [hexcolor]",description:"Sets the Color of the Embed, which is sent on the Boost Embed Message",permissions:"MANAGE_SERVER"}),u,b,(0,a.Wm)(t,{message:"%bmessage embed enable/disable",slash:"/boost message embed [status]",description:"Disables or Enables Embed Mode on the Boost Message",permissions:"MANAGE_SERVER"}),_,E,(0,a.Wm)(t,{message:"%bmessage thumb <image-link>",slash:"/boost message thumbnail [image-link]",description:"Sets the Thumbnail of the Embed, which is sent on the Boost",permissions:"MANAGE_SERVER"}),f,w,(0,a.Wm)(t,{message:"%bmessage image <image-link>",slash:"/boost message image [image-link]",description:"Sets the Image of the Embed, which is sent on the Boost",permissions:"MANAGE_SERVER"}),p,M,(0,a.Wm)(t,{message:"%bmessage test",slash:"/boost message test",description:"Sends the Boost Message to check your current Customization",cooldown:"10",permissions:"MANAGE_SERVER"})],64)}}}}]);