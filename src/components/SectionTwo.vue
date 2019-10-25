<script>
import Image from '../assets/IllustFirst.png'
import Current from '../assets/ScrollCurrent.png'
import NoCurrent from '../assets/Scroll.png'

export default {
  name: 'SectionTwo',
  data () {
    return { Image, Current, NoCurrent }
  }
}
</script>

<template>
<div class="section">
  <span class="section__title">
    우리가 도와줄게요.
  </span>
  <span class="section__subtitle">
    4단계 크리에이터 성장형 매니지먼트 시스템!<br><br>
    소규모 크리에이터의 수익 창출<br><br>
    파트너쉽을 통한 폭 넓은 지원
  </span>
  <img :src="Image" class="section__image" />
  <div class="section__scroll">
    <img class="section__scroll__icon" :src="NoCurrent">
    <img class="section__scroll__icon" :src="Current">
    <img class="section__scroll__icon" :src="NoCurrent">
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
    margin-right: -150px;
    right: 0;
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
