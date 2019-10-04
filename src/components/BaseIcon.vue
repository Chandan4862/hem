<template>
  <span>
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{ 'xlink:href': '/feather-sprite.svg#' + name }" />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 20
    },
    height: {
      type: [Number, String],
      default: 20
    }
  }
}
</script>

<style></style>
