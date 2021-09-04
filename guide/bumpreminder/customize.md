---
tilte: Customize Message
description: Learn to customize the Bump Remind Message
---

# Customize Remind Messages

## How to set custom messages?

<table>
  <thead>
    <tr>
      <th style="text-align:left">Customizeable Message:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>Change the title of the remind message:</b>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <ul>
          <li><code>%custom title &lt;your title&gt;</code> 
          </li>
          <li>This will change the title of the bump remind message</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p><b>Change the Description:</b>
        </p>
        <ul>
          <li><code>%custom desc &lt;your remind message&gt;</code> 
          </li>
          <li>This will change the remind message/ description.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <p><b>Change the Response after the !d bump:</b>
        </p>
        <ul>
          <li><code>%custom response &lt;your response&gt;</code> 
          </li>
          <li>This will change the response after the <code>!d bump</code>
          </li>
          <li><code>%custom response disable</code>
          </li>
          <li>Will disable the response after the !d bump</li>
        </ul>
        <p>&#x1F4C0;<a href="../premium/"><b>[Premium]</b></a><b>Variables: </b>
        </p>
        <ul>
          <li><code>{{username}}, {{usertag}}, {{userid}}, {{serverbumpcount}}, {{usermention}}</code>
          </li>
          <li><code>Ex: Thx for bumping {{username}}, We have {{serverbumpcount}} bumps!</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Change the Remind message to non-embed:</b>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <ul>
          <li><code>%custom embed no/yes</code> 
          </li>
          <li>This will change if the remind message should be a embed message or not.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Change the Color of the Embed:</b>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <ul>
          <li><code>%custom color &lt;#hex.color&gt;</code> 
          </li>
          <li>This will change the color of the embed remind message. The provided color
            must be hex.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

::: warning
 Please do not exceed the given lengths and try to keep your remind messages small, since every custom remind message costs us traffic and costly database space.
:::



