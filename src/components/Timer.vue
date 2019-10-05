<template>
  <div>
    <span class="timer">00:{{time < 10 ? `0` : ``}}{{time}}</span>
  </div>
</template>

<script>

export default {
  props: {
    time: Number
  },
  data () {
    return {
    }
  },
  methods: {
    decreaseTimer() {
      if (this.time) {
        return setTimeout(() => {
          this.$emit('timeChanged', this.time - 1);
        }, 1000);
      }
      this.$emit('changePath');
    }
  },
  mounted() {
    this.decreaseTimer();
  },
  watch: {
    time(value) {
      this.time = value;
      this.decreaseTimer();
    }
  }
}
</script>

<style lang="scss">
  .timer {
    display: block;
    box-sizing: border-box;
    font-size: 40px;
    text-align: center;
  }
</style>
