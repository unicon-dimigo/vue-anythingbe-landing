<script>
import Image from '../assets/IllustSecond.png'
import Current from '../assets/ScrollCurrent.png'
import NoCurrent from '../assets/Scroll.png'

export default {
  name: 'SectionOne',
  data () {
    return { Image, Current, NoCurrent }
  }
}
</script>

<template>
<div class="section">
  <span class="section__title">
    당신의<br>가능성을<br>믿습니다.
  </span>
  <span class="section__subtitle">
    Anythingbe를 통해 크리에이터/BJ가 되고 싶다면!
  </span>
  <img :src="Image" class="section__image" />
  <div class="section__scroll">
    <img class="section__scroll__icon" :src="Current">
    <img class="section__scroll__icon" :src="NoCurrent">
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
    margin-right: -50px;
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
