<template lang="pug">
  .app(tabindex="1", ref="app", @keyup.right.space="impressNextStep", @keyup.left="impressPrevStep")
    impress-viewport(ref="impress", :steps="steps", :config="config")
</template>

<script>
import Vue from 'vue'
import VueImpress from 'vue-impress'
import 'vue-impress/dist/vue-impress.css'
import imageList from '../images.json'

Vue.use(VueImpress)

const ImageComponent = {
  props: ['src'],
  template: '<img :src="src" />',
}

const steps = []
const radius = 500

/* 每行数量 */
const size = 11
const degreeStep = 360 / size

const rotateOrder = ['y', 'x', 'z']
let line = 0

for (let verticalDegree = 60; verticalDegree >= -60; verticalDegree -= 30) {
  const y = Math.sin((verticalDegree * Math.PI) / 180) * radius
  const xRadius60 = Math.cos((verticalDegree * Math.PI) / 180) * radius
  for (let i = 0; i < size; i += 1) {
    const degree = (degreeStep * i * Math.PI) / 180
    const src = `app/images/${imageList[i + (line * size)]}`
    steps.push({
      x: Math.cos(degree) * xRadius60,
      y,
      z: Math.sin(degree) * xRadius60,
      rotateY: 90 - (degreeStep * i),
      rotateX: -verticalDegree,
      rotateOrder,
      component: ImageComponent,
      props: { src },
    })
  }
  line += 1
}

/* bottom and top */
steps.push({
  x: 0,
  y: -radius,
  z: 0,
  rotateX: 90,
  component: ImageComponent,
  props: { src: `app/images/${imageList[imageList.length - 1]}` },
})
steps.push({
  x: 0,
  y: radius,
  z: 0,
  rotateX: -90,
  component: ImageComponent,
  props: { src: `app/images/${imageList[imageList.length - 2]}` },
})

/* overview */
steps.unshift({
  x: 0,
  z: 500,
  content: '',
  scale: 3,
  rotateX: 30,
})

export default {

  methods: {
    impressPrevStep() {
      this.$refs.impress.prevStep()
    },
    impressNextStep() {
      this.$refs.impress.nextStep()
    },
  },

  mounted() {
    this.$refs.app.focus()
  },

  data() {
    return {
      config: {
        width: 800,
        height: 800,
      },
      steps,
    }
  },
}
</script>

<style>
  html, body {
    overflow: hidden;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .impress-step {
    text-align: center;
    cursor: pointer;
  }
  .impress-step img {
    width: 100px;
    height: 100px;
  }
  .impress-step.active {
    cursor: auto;
  }
</style>
