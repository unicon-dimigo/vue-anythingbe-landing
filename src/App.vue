<script>
import Cover from './components/Cover.vue'
import SectionOne from './components/SectionOne.vue'
import SectionTwo from './components/SectionTwo.vue'
import SectionThree from './components/SectionThree.vue'
import SectionFour from './components/SectionFour.vue'

import Background from './assets/Modal.png'
import FinishImage from './assets/Finish.png'

import Current from './assets/ScrollCurrent.png'
import NotCurrent from './assets/Scroll.png'

import fullpage from 'vue-fullpage.js'

export default {
  name: 'App',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    Background,
    Current,
    NotCurrent,
    Cover
  },
  data () {
    return {
      FinishImage,
      Current,
      NotCurrent,
      form: {
        email: '',
        check: [ false, false ]
      },
      subscribed: false,
      innerHeight: window.innerHeight,
      currentIdx: 0,
      numbers: [1, 2, 3, 4]
    }
  },
  methods: {
    subscribe () {
      // axios request to server
      this.subscribed = true
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })

    setInterval(() => {
      const current = this.$refs.fullpage.api.getActiveSection().index
      this.currentIdx = current
    }, 100);
  },
  methods: {
    onResize () {
      this.innerHeight = window.innerHeight
    }
  }
}
</script>

<template>
<div>
  <modal name="contact">
    <div
      v-if="!subscribed"
      class="modal__container"
    >
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
      <button
        @click="subscribe"
        class="modal__button"
      >
        구독하기
      </button>
    </div>

    <div
      v-else
      class="modal__container"
    >
      <h1 class="modal__title">감사합니다!</h1>
      <h2 class="modal__desc">구독이 완료되셨습니다!</h2>
      <img class="modal__image" :src="FinishImage">
    </div>
  </modal>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <cover class="s" />
    <section-one class="s" />
    <section-two class="s" />
    <section-three class="s" />
    <section-four class="s" />
  </full-page>
  <div
    v-show="currentIdx"
    class="scroll"
  >
    <img
      :key="`b-${i}`"
      v-for="i in numbers[currentIdx - 2]"
      class="scroll__image"
      :src="NotCurrent"
    >
    <img
      v-show="currentIdx"
      class="scroll__image"
      :src="Current"
    >
    <img
      :key="`a-${i}`"
      v-for="i in numbers[3 - currentIdx]"
      class="scroll__image"
      :src="NotCurrent"
    >
  </div>
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

.scroll {
  position: fixed;
  left: 30px;

  &__image {
    width: 2rem;
    height: 2rem;
  }
}

.s {
  padding-left: 50px;
}

.scroll {
  display: fixed;
  bottom: 0;
  margin-bottom: 20px;
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
      line-height: 2.3;
      font-size: 0.8rem;
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
  &__image {
    height: 5rem;
    width: auto;
  }
}
</style>
