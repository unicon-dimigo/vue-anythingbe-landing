<script>
import Image from '../assets/movie1.mp4'

import Logo00 from '../assets/logos/Logo00.png'
import Logo01 from '../assets/logos/Logo01.png'
import Logo02 from '../assets/logos/Logo02.png'
import Logo03 from '../assets/logos/Logo03.png'
import Logo04 from '../assets/logos/Logo04.png'
import Logo05 from '../assets/logos/Logo05.png'
import Logo06 from '../assets/logos/Logo06.png'
import Logo07 from '../assets/logos/Logo07.png'
import Logo08 from '../assets/logos/Logo08.png'
import Logo09 from '../assets/logos/Logo09.png'
import Logo10 from '../assets/logos/Logo10.png'
import Logo11 from '../assets/logos/Logo11.png'
import Logo12 from '../assets/logos/Logo12.png'
import Logo13 from '../assets/logos/Logo13.png'
import Logo14 from '../assets/logos/Logo14.png'
import Logo15 from '../assets/logos/Logo15.png'
import Logo16 from '../assets/logos/Logo16.png'
import Logo17 from '../assets/logos/Logo17.png'
import Logo18 from '../assets/logos/Logo18.png'
import Logo19 from '../assets/logos/Logo19.png'
import Logo20 from '../assets/logos/Logo20.png'
import Logo21 from '../assets/logos/Logo21.png'
import Logo22 from '../assets/logos/Logo22.png'
import Logo23 from '../assets/logos/Logo23.png'
import Logo24 from '../assets/logos/Logo24.png'
import Logo25 from '../assets/logos/Logo25.png'
import Logo26 from '../assets/logos/Logo26.png'
import Logo27 from '../assets/logos/Logo27.png'
import Logo28 from '../assets/logos/Logo28.png'
import Logo29 from '../assets/logos/Logo29.png'
import Logo30 from '../assets/logos/Logo30.png'
import Logo31 from '../assets/logos/Logo31.png'
import Logo32 from '../assets/logos/Logo32.png'
import Logo33 from '../assets/logos/Logo33.png'
import Logo34 from '../assets/logos/Logo34.png'
import Logo35 from '../assets/logos/Logo35.png'
import Logo36 from '../assets/logos/Logo36.png'
import Logo37 from '../assets/logos/Logo37.png'
import Logo38 from '../assets/logos/Logo38.png'
import Logo39 from '../assets/logos/Logo39.png'
import Logo40 from '../assets/logos/Logo40.png'
import Logo41 from '../assets/logos/Logo41.png'
import Logo42 from '../assets/logos/Logo42.png'
import Logo43 from '../assets/logos/Logo43.png'
import Logo44 from '../assets/logos/Logo44.png'
import Logo45 from '../assets/logos/Logo45.png'
import Logo46 from '../assets/logos/Logo46.png'
import Logo47 from '../assets/logos/Logo47.png'
import Logo48 from '../assets/logos/Logo48.png'
import Logo49 from '../assets/logos/Logo49.png'
import Logo50 from '../assets/logos/Logo50.png'
import Logo51 from '../assets/logos/Logo51.png'
import Logo52 from '../assets/logos/Logo52.png'
import Logo53 from '../assets/logos/Logo53.png'
import Logo54 from '../assets/logos/Logo54.png'
import Logo55 from '../assets/logos/Logo55.png'
import Logo56 from '../assets/logos/Logo56.png'
import Logo57 from '../assets/logos/Logo57.png'
import Logo58 from '../assets/logos/Logo58.png'
import Logo59 from '../assets/logos/Logo59.png'
import Logo60 from '../assets/logos/Logo60.png'

export default {
  name: 'Cover',
  data () {
    return {
      Image,
      logos: [
        Logo00, Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08, Logo09, Logo10, Logo11, Logo12, Logo13, Logo14, Logo15, Logo16, Logo17, Logo18, Logo19, Logo20, Logo21, Logo22, Logo23, Logo24, Logo25, Logo26, Logo27, Logo28, Logo29, Logo30, Logo31, Logo32, Logo33, Logo34, Logo35, Logo36, Logo37, Logo38, Logo39, Logo40, Logo41, Logo42, Logo43, Logo44, Logo45, Logo46, Logo47, Logo48, Logo49, Logo50, Logo51, Logo52, Logo53, Logo54, Logo55, Logo56, Logo57, Logo58, Logo59, Logo60
      ],
      current: 0
    }
  },
  created () {
    setInterval(() => {
      this.current++
      if (this.current > 60) this.current = 0
    }, 25)
  }
}
</script>

<template>
<div class="section">
  <div class="section__image-wrap">
    <img class="section__image" :src="logos[current]">
  </div>
</div>
</template>

<style lang="scss" scoped>
.section {
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  &__image {
    height: 10rem;
    /* display: block; */

    &-wrap {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
