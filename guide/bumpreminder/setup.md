---
tilte: Setup
description: Here you will learn, how to setup the Bump Reminder Feature
---

# Setup Bump Remind

### How do I setup Bump reminder?

**It's very easy to setup. First you have to know that there are different kinds of remind options.**  
[**For those, who are to lazy to read, click on the link for a video!**](https://www.youtube.com/watch?v=LuthgfnZ3rg)

#### **Possible remind options:**

{% tabs %}
{% tab title="Role Remind" %}
* **This will ping the set up ping role on bump remind**
* `%setup ping @role ->` **`will add the role`**
* `%setup ping create ->` **`will create the role, when you do not have a bump remind role`**
* `%setup add <#channel>  ->` **`will add a bump channel`**
{% endtab %}

{% tab title="@here/@everyone ping" %}
* **Just online person or everyone  will be pinged. Thats way, it is recommended to create a locked channel!**

**You have already a locked Channel:**

<command message = "%setup ping everyone/here" slash = "/bump setup ping [role:pingrole]"/>

* `%setup add <#channel> ->` **`will add an existing Bump channel`**

**You do not have a locked Channel:**

* `%setup ping everyone/here`
* `%setup create ->`**`will create a locked Bump channel`**
{% endtab %}

{% tab title="@last user ping" %}
* **This remind option is default, although you can add here a bump channel too.**
* `%setup add <#channel> ->` **`will add your bump channel`**

**`How do I revert to last user ping?`**

* %delete setup -&gt; **will reset the setup to default**
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
 When you have chosen the first or the second option. Assume that you added a bump channel or it won't work :\(
{% endhint %}


**Once you have set up the remind option. It should send a bump response after the !d bump.** 

[**Interesting in customizing the messages?**](customize-remind-messages.md)  
Go on the next Page!

