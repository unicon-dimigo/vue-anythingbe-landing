<script>
import Image from '../assets/movie4.mp4'

export default {
  name: 'SectionThree',
  data () {
    return { Image }
  }
}
</script>

<template>
<div class="section">
  <span class="section__title">
    무엇이든지, 누구든지.
  </span>
  <span class="section__subtitle">
    크리에이터 맞춤 매니지먼트 제공!<br><br>
    여러 크리에이터들과의 협업<br><br>
    현역 크리에이터 강사진
  </span>
  <video class="section__image" autoplay loop muted>
    <source :src="Image" type="video/mp4">
  </video>
</div>
</template>

<style lang="scss" scoped>
.section {
  position: relative;
  padding-top: 50px;

  &__title {
    font-family: 'BMDOHYEON';
    color: #1D545B;
    word-break: break-all;
    font-size: 2.8rem;
    display: block;
    margin-top: 50px;
    margin-bottom: 40px;
  }

  &__subtitle {
    font-size: x-large;
    font-family: 'NanumSquare';
  }

  &__image {
    height: 38rem;
    float: right;
    position: absolute;
    bottom: 100px;
    right: 0;
  }
}
</style>
