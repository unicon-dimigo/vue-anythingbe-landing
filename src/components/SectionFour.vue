<script>
import Image from '../assets/movie1.mp4'

export default {
  name: 'SectionFour',
  data () {
    return { Image }
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
  <video class="section__image" autoplay loop muted>
    <source :src="Image" type="video/mp4">
  </video>

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
    margin-right: -100px;
  }

  &__contact {
    position: absolute;
    bottom: 100px;
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
