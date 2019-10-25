<script>
import Image from '../assets/IllustThird.png'
import Current from '../assets/ScrollCurrent.png'
import NoCurrent from '../assets/Scroll.png'

export default {
  name: 'SectionThree',
  data () {
    return { Image, Current, NoCurrent }
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
  <img :src="Image" class="section__image" />
  <div class="section__scroll">
    <img class="section__scroll__icon" :src="NoCurrent">
    <img class="section__scroll__icon" :src="NoCurrent">
    <img class="section__scroll__icon" :src="Current">
    <img class="section__scroll__icon" :src="NoCurrent">
  </div>
</div>
</template>

<style lang="scss" scoped>
.section {
  position: relative;
  &__title {
    font-family: 'BMDOHYEON';
    color: #1D545B;
    word-break: break-all;
    font-size: 4rem;
    display: block;
    margin-top: 50px;
    margin-bottom: 40px;
  }

  &__subtitle {
    font-size: x-large;
    font-family: 'NanumSquare';
  }

  &__image {
    height: 40rem;
    float: right;
    position: absolute;
    bottom: 100px;
    right: 0;
    margin-right: -150px;
  }
  &__scroll {
    position: absolute;
    bottom: 100px;
    left: 50px;

    &__icon {
      width: 2rem;
      height: auto;
    }
  }
}
</style>
