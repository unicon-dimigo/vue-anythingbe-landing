<script>
import Image from '../assets/movie3.mp4'

export default {
  name: 'SectionTwo',
  data () {
    return { Image }
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
    height: 35rem;
    position: absolute;
    bottom: 100px;
    right: 20px;
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
