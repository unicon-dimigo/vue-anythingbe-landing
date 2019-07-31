<script>
export default {
  name: 'SectionFour'
}
</script>

<script>
export default {
  name: 'SectionThree'
}
</script>

<template>
<div class="section">
  <h1 class="section__title">
    함께 해주실 거죠?
  </h1>
  <span class="section__subtitle">
    더 큰 세상(MCN)으로 나아가기 위해!
  </span>

  <div class="section__contact">
    <span class="section__block">Anythingbe</span>
    <span class="section__block">경기도 안산시 단원구 사세충열로 94</span>
    <span class="section__block">한국디지털미디어고등학교</span>
    <span class="section__block">대표 전화 010-3017-3106 (오영준)</span>
    <span class="section__block">대표 메일 universeisscarletred@gmail.com</span>
  </div>
</div>
</template>

<style lang="scss" scoped>
.section {
  &__title {
    font-family: 'BMDOHYEON';
    color: #1D545B;
    word-break: break-all;
  }

  &__subtitle {
    font-family: 'NanumSquare';
  }

  &__contact {
    font-family: 'NanumSquare';
  }

  &__block {
    display: block;
  }
}
</style>
