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
@import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css');

@font-face {
  font-family: 'BMDOHYEON';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
