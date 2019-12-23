<script>
import Image from '../assets/movie2.mp4'

export default {
  name: 'SectionOne',
  data () {
    return { Image }
  }
}
</script>

<template>
<div class="section">
  <h1 class="section__title">
    당신의<br>가능성을<br>믿습니다.
  </h1>
  <span class="section__subtitle">
    Anythingbe를 통해 크리에이터/BJ가 되고 싶다면!
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
    display: block;
    font-size: 2.8rem;
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
}
</style>
