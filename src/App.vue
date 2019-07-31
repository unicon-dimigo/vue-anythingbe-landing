<script>
import SectionOne from './components/SectionOne.vue'
import SectionTwo from './components/SectionTwo.vue'
import SectionThree from './components/SectionThree.vue'
import SectionFour from './components/SectionFour.vue'

export default {
  name: 'App',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour
  }
}
</script>

<template>
<div>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <section-one />
    <section-two />
    <section-three />
    <section-four />
  </full-page>
</div>
</template>

<style lang="scss">
</style>
