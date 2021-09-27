<template>
  <component :is="type" :href="href" class="button">
    <slot/>
  </component>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        default: null
      },
      to: {
        type: String,
        default: null
      }
    },
    computed: {
      type() {
        if (this.href) {
          return 'a'
        } else {
          return 'button'
        }
      }
    }
  }
</script>

<style scoped>
  .button {
    display: inline-block;
    margin: 0.25em 0.25em;
    padding: 0.7em 1.4em;
    background: #3aa672;
    border: 2px solid #3aa672;
    border-radius: 7px;
    color: white;
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .button:hover {
    background: transparent;
    color: #3aa672;
  }
</style>