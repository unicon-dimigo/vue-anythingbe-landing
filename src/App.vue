<script>
import SectionOne from './components/SectionOne.vue'
import SectionTwo from './components/SectionTwo.vue'
import SectionThree from './components/SectionThree.vue'
import SectionFour from './components/SectionFour.vue'

import Background from './assets/Modal.png'

export default {
  name: 'App',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    Background
  },
  data () {
    return {
      form: {
        email: '',
        check: [ false, false ]
      }
    }
  }
}
</script>

<template>
<div>
  <modal name="contact">
    <div class="modal__container">
      <h1 class="modal__title">AnythingBe</h1>
      <h2 class="modal__desc">최신 소식을 이메일로 만나 보세요!</h2>
      <div class="modal__input__wrapper">
        <input
          placeholder="소식을 받고자 하는 이메일을 입력해 주세요"
          class="modal__input"
          type="email"
          v-model="form.email"
        >
      </div>
      <button class="modal__button">
        구독하기
      </button>
    </div>
  </modal>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <section-one class="s" />
    <section-two class="s" />
    <section-three class="s" />
    <section-four class="s" />
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

.s {
  padding-left: 50px;
}

.modal {
  &__container {
    background-image: url('./assets/Modal.png');
    background-position: right bottom;
    background-size: contain;
    background-repeat: no-repeat;

    height: 100%;
    width: 100%;

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  &__title, &__desc {
    color: rgb(44, 83, 90);
    font-family: 'BMDOHYEON';
    display: block;
    width: 100%;
    margin: 0;
  }

  &__input {
    border: 2px solid rgb(44, 83, 90);
    border-radius: 50px;
    height: 1.7rem;
    width: 60%;
    padding: 0 1rem;
    font-size: 1.1rem;
    font-family: 'BMDOHYEON';

    &::placeholder {
      font-size: 1.1rem;
      font-family: 'BMDOHYEON';
    }

    &__wrapper {
      width: 100%;
    }
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
