<template>
  <div class="l-popup-items-wrapper">
    <div class="item-wrapper"
      v-for="(item, index) in items"
      :key="index"
      @click="toPath(item.componentName)">
      <div class="item-inner">
        <l-icon :icon="item.icon"></l-icon>
      </div>
      <p class="label">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LPopupItems',
  componentName: 'LPopupItems',
  props: {
    items: Array
  },
  methods: {
    toPath (name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style lang="scss">
@import '../../common/style/var.scss';
.l-popup-items-wrapper {
  height: 60vh;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  overflow: hidden;
  padding-top: 40px;
  .item-wrapper {
    text-align: center;
    width: 50%;
    height: 88px;
    &:nth-child(1) {
      .item-inner {
        background-color: #DA605B;
      }
    }
    &:nth-child(2) {
      .item-inner {
        background-color: #9CB360;
      }
    }
    &:nth-child(3) {
      .item-inner {
        background-color: #72C2BD;
      }
    }
    &:nth-child(4) {
      .item-inner {
        background-color: #75B17C;
      }
    }
    .item-inner {
      width: 88px;
      height: 100%;
      margin: 5px auto;
      display: flex;
      border-radius: 8px;
    }
    .icon {
      color: white;
      flex: 1;
      font-size: 34px;
    }
    .label {

    }
  }
}
</style>
