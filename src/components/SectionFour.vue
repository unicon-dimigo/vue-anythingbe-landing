<script>
import Image from '../assets/IllustFourth.png'
import Current from '../assets/ScrollCurrent.png'
import NoCurrent from '../assets/Scroll.png'

export default {
  name: 'SectionFour',
  data () {
    return { Image, Current, NoCurrent }
  },
  methods: {
    show () {
      this.$modal.show('contact')
    },
    hide () {
      this.$modal.hide('contact')
    }
  }
}
</script>

<template>
<div class="section">
  <span class="section__title">
    함께 해주실 거죠?
  </span>
  <span class="section__subtitle">
    더 큰 세상(MCN)으로 나아가기 위해!
  </span>
  <button class="section__button" @click="show">소식 받아 보기</button>
  <img :src="Image" class="section__image" />
  <div class="section__scroll">
    <img class="section__scroll__icon" :src="NoCurrent">
    <img class="section__scroll__icon" :src="NoCurrent">
    <img class="section__scroll__icon" :src="NoCurrent">
    <img class="section__scroll__icon" :src="Current">
  </div>

  <div class="section__contact">
    <span class="section__block">Anythingbe</span>
    <span class="section__block">경기도 안산시 단원구 사세충열로 94</span>
    <span class="section__block">대표 메일 contact@anythingbe.kr</span>
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
    margin-right: -100px;
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
  &__contact {
    position: absolute;
    bottom: 200px;
    font-family: 'NanumSquare';
    font-size: 1.1rem;
  }

  &__block {
    display: block;
    margin-top: 10px;
  }

  &__button {
    background-color: rgb(44, 83, 90);
    color: white;
    padding: 1rem 1.5rem;
    font-family: 'BMDOHYEON';
    border: none;
    border-radius: 50px;
    width: 120px;
    outline: none;
    cursor: pointer;
  }
}
</style>
