<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div v-for="(item, index) in slideCount" class="indi-item"
             :class="{ active: index === currentIndex - 1 }" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 元素个数
      slideCount: 0,
      // swiper 的宽度
      totalWidth: 0,
      // swiper 样式
      swiperStyle: { },
      // 当前的 index
      currentIndex: 1,
      // 是否正在滚动
      scrolling: false
    }
  },
  mouhted() {
    // 1.操作 dom ,在前后添加 Slide
    setTimeout(() => {
      this.handleDom()

      this.startTimer()
    }, 100)
  },
  methods: {
    // 开启定时器
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval)
    },
    stopTimer() {
      window.clearInterval(this.playTimer)
    },
    scrollContent() {
      // 1.设置正在滚动
      this.scrolling = true

      // 开启滚动动画
      this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms'
      this.setTransform(currentPosition)

      // 判断滚动到的位置
      this.checkPosition()

      // 滚动完成
      this.scrolling = false
    },
    checkPosition() {
      window.setTimeout(() => {
        // 校验正确的位置
        this.swiperStyle.transition = '0ms'
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalWidth)
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount
          this.setTransform(-this.currentIndex * this.totalWidth)
        }

        // 2.结束移动后的回调
        this.$emit('transitionEnd', this.currentIndex - 1)
      }, this.animDuration)
    },
    setTransform(position) {
        this.swiperStyle.transform = 'translate3d(${position}px, 0, 0)'
        this.swiperStyle['-webkit-transform'] = 'translate3d(${position}px, 0, 0)'
        this.swiperStyle['-ms-transform'] = 'translate3d(${position}px, 0, 0)'
    },
    /**
     * 操作 DOM ,在 DOM 前后添加 Slide
     */
    handleDom() {
      // 1.获取要操作的元素
      let swiperEl = document.querySelector('.swiper')
      let slidesEls = document.getElementsByClassName('slide')

      // 2.保存个数
      this.slideCount = slidesEls.length

      // 3.如果大于 1 个,那么在前后分别添加一个 slide
      if (this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true)
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)

        swiperEl.insertBefore(cloneLast, slidesEls[0])
        swiperEl.appendChild(cloneFirst)

        this.totalWidth = swiperEl.offsetWidth
        this.swiperStyle = swiperEl.style
      }

      // 4.让 swiper 元素,显示第一个(目前是显示前面添加的最后一个元素)
      this.setTransform(-this.totalWidth)
    },
    touchStart(e) {
      // 1.如果正在滚动,不可以拖动
      if (this.scrolling) reutrn

      // 2.停止计时器
      this.stopTimer()

      // 3.保存开始滚动的位置
      this.startX = e.touchs[0].pageX
    },
    touchMove(e) {
      // 1.计算用户拖动的距离
      this.currentX = e.touchs[0].pageX
      this.distance = this.currentX - this.startX
      let currentPosition = -this.currentIndex * this.totalWidth
      let moveDistance = this.distance + currentPosition

      // 2.设置当前的位置
      this.setTransform(moveDistance)
    },
    touchEnd(e) {
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance)

      // 2.判断最终的距离
      if (this.distance === 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex--
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex++
      }

      // 3.移动到正确的位置
      this.startTimer()
    },
    previous() {
      this.changeItem(-1)
    },
    next() {
      this.changeItem(1)
    },
    changeItem(num) {
      // 1.移出定时器
      this.stopTimer()

      // 2.修改 index 和 位置
      this.currentIndex += num
      this.scrollContent(-this.currentIndex * this.totalWidth)

      // 3. 启动定时器
      this.startTimer()
    }
  }
}
</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }
</style>
