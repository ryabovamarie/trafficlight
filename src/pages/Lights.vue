<template>
  <ul class="trafficlight">
    <li v-for="value in allColors"
        :class="{
          [value]: true,
          active: color === value,
          blink: time <= 3
        }"></li>
  </ul>
</template>

<script>
  export default {
    props: {
      time: Number,
      color: String
    },
    data() {
      return {
        allColors: [`red`, `yellow`, `green`]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .trafficlight{
    display: block;
    list-style: none;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    width: 200px;
    height: 400px;
    background: #222;
    background-image: linear-gradient(#333 0%, #111 40%);
    border-radius: 20px;
    border: solid 8px #444;
  }

  @mixin light($lightColor, $shadowColor) {
    display: block;
    box-sizing: border-box;
    margin: 21px auto;
    width: 100px;
    height: 100px;
    background: $lightColor;
    background-image: radial-gradient($shadowColor, transparent);
    border: solid 2px $lightColor;
    border-radius: 50%;
    box-shadow: 0 0 20px #111 inset, 0 0 10px $lightColor;
    opacity: 0.1;
  }

  .red{
    @include light(red, brown);
  }

  .yellow{
    @include light(yellow, orange);
  }

  .green{
    @include light(green, lime);
  }

  .active {
    opacity: 1;
  }

  .active.blink {
    animation: blink 1.5s linear infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
</style>
