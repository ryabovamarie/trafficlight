<template>
  <div id="app">
    <Timer
      :time="currentTime"
      @timeChanged="timeChanged"
      @changePath="changePath"
    ></Timer>
    <router-view
      :time="currentTime"
      :color="color"
    ></router-view>
  </div>
</template>

<script>
import Timer from './components/Timer';

export default {
  name: 'app',
  data () {
    return {
      color: this.$route.params.color,
      timeLimits: {
        red: 10,
        yellow: 3,
        green: 15
      },
      currentTime: 10,
      order: [`red`, `yellow`, `green`, `yellow`],
      index: 0
    }
  },
  components: {
    Timer
  },
  beforeMount() {
    this.currentTime = this.timeLimits[this.color];
    this.index = this.order.indexOf(this.color);
  },
  methods: {
    timeChanged(time) {
      this.currentTime = time;
    },
    changePath() {
      this.index = (this.index + 1) % 4;
      this.color = this.order[this.index];
      this.currentTime = this.timeLimits[this.color];
      this.$router.push(this.color);
    }
  }
}
</script>

<style lang="scss">
</style>
