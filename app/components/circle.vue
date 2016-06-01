<template>
  <circle cx='40', cy='40', r='{{circle.r}}', fill='{{fill}}'></circle>
</template>
<script>
  export default {
    data() {
      return {
        circle: {
          r: 10,
        },
        fill: 'red'
      }
    }
  }
</script>
