<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <div class="commandpallete">
    <button
      @click="onViewInfo()"
      title="Get more Information"
      id="getmoreinfo"
      class="commandoptions blue"
      type="button"
    >
      <i class="fa fa-info"></i>
    </button>
    <button
      @click="
        currentCommand.type === 'MESSAGE'
          ? (currentCommand.type = 'SLASH')
          : (currentCommand.type = 'MESSAGE')
      "
      title="See Slash/Message Command Usage"
      id="changecommandtype"
      class="commandoptions orange"
      type="button"
    >
      <i class="fa fa-comments"></i>
    </button>
    <h1 class="commandname">{{ onChangeCommandType() }}</h1>
    <div
      class="commandname info"
      v-if="currentCommand.viewall"
      v-html="createCommandInfo()"
    ></div>
  </div>
</template>


<script>
export default {
  name: "viewcommand",
  props: {
    slash: String,
    message: String,
    description: String,
    cooldown: String,
    permissions: Array,
    currentCommandType: { Type: String, default: "SLASH" },
    currentCommandUsage: String,
  },
  methods: {},
  data() {
    return {
      currentCommand: {
        type: this.currentCommandType,
        usage: this.currentCommandUsage,
        viewall: false,
      },
    };
  },
  methods: {
    onChangeCommandType(event) {
      if (this.currentCommand.type === "MESSAGE") {
        return this.message;
      } else {
        this.currentCommand.type = "SLASH";
        return this.slash;
      }
    },
    onViewInfo() {
      if (this.currentCommand.viewall) {
        this.currentCommand.viewall = false;
        return false;
      } else {
        this.currentCommand.viewall = true;
        return true;
      }
    },
    createCommandInfo() {
      const info = [];

      if (this.description)
        info.push(
          `<b>Description:</b> ${this.description || "No Description Exists!"}`
        );
      info.push(
        `<b>Permissions:</b> ${
          this.permissions?.split(", ") || "No Permissions required."
        }`
      );
      if (this.cooldown)
        info.push(`<b>Cooldown:</b> ${this.cooldown || "3 Seconds"}`);

      return "<p class=commandinfo>" + info.join("<br>") + "</p>";
    },
  },
  computed: {},
};
</script>

<style>
.commandpallete {
  font-family: Tahoma, Verdana, sans-serif;
  margin-right: 4px;
  margin-left: 4px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-style: solid;
  border-width: 4px;
  border-radius: 4px;
  text-align: left;
  font-size: 1em;
  background-color: #36393f;
  border-color: #36393f;
}

.commandname {
  color: #dcddde;
  background-color: #40444b;
  border-color: #40444b;
  border-style: solid;
  border-width: 2px;
  border-radius: 7px 7px 5px 5px ;
  display: flex;
  font-size: 0.9em;
  margin: 0px;
  margin-right: 4.7em;
  padding: 0.25em 0.4em 0.2em;
  padding-bottom: 0.1em;
}

.commandoptions {
  color: white;
  font-size: 0.95em;
  text-align: center;
  float: right;
  border-style: solid;
  border-radius: 7px;
  border-width: 4px;
  border-top-width: 2px;
  border-bottom-width: 0px;
  margin: 0.05em 0.17em 0.05em 0.05em;
  padding: 0.25em 0.4em 0.2em;
}

.commandname.info {
  margin-top: 0.2em;
  border-radius: 0px 0px 7px 7px;
}

.commandoptions.orange {
  background-color: #f1aa3c;
  border-color: #f1aa3c;

  padding-left: 0.1em;
}
.commandoptions.blue {
  background-color: #007bff;
  border-color: #007bff;
 
}
</style>