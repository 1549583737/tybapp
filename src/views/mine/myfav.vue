<template>
  <l-main-layout :handleBack="back"
                 class="mine-fav-container">
    <l-tab v-model="selected" class="tab">
      <l-tab-item v-for="(item, index) in tabItems"
                  :key="index">
        {{item.title}}
      </l-tab-item>
    </l-tab>
    <router-view class="main-view"></router-view>
  </l-main-layout>
</template>

<script>
import LMainLayout from 'components/layout/main-layout'
import { LTab, LTabItem } from 'components/tab'
export default {
  name: 'MineMyFav',
  components: {
    LMainLayout,
    LTab,
    LTabItem
  },
  data () {
    return {
      selected: -1,
      tabItems: [
        { title: '产品', componentName: 'MineFavProduct' },
        { title: '商铺', componentName: 'MineFavShop' },
        { title: '渔船', componentName: 'MineFavShip' },
        { title: '渔获', componentName: 'MineFavFish' },
        { title: '职位', componentName: 'MineFavJob' },
        { title: '简历', componentName: 'MineFavResume' }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
