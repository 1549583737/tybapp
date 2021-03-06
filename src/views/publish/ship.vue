<template>
  <l-main-layout class="publish-ship-container"
    :handleBack="cancel">
    <div slot="header-right" @click="save">保存</div>
    <l-button-tab v-model="selected">
      <l-button-tab-item>基本信息</l-button-tab-item>
      <l-button-tab-item>渔船参数</l-button-tab-item>
    </l-button-tab>
    <div class="content" v-if="selected === 0" ref="content">
      <section class="section"
               v-for="(item, index) in formDatas.step1"
               :key="index">
        <publish-form :formDatas="item"></publish-form>
      </section>
      <div class="button" @click="nextStep()">
        下一步
      </div>
    </div>
    <div class="content" v-else-if="selected === 1" ref="content">
      <section class="section"
               v-for="(item, index) in formDatas.step2"
               :key="index">
        <publish-form :formDatas="item"></publish-form>
      </section>
      <div class="button" @click="preStep()">
        上一步
      </div>
      <l-button-commit class="button"
        type="ship"
        :method="method"
        @success="commitSuccess">发布</l-button-commit>
    </div>
  </l-main-layout>
</template>

<script>
import LMainLayout from 'components/layout/main-layout'
import { LButtonTab, LButtonTabItem } from 'components/button-tab'
import PublishForm from 'components/publish/form'
import { addShip } from 'api'
import LButtonCommit from 'components/unit/button-commit'
import { createMap } from '@/utils/common'
import PublishMixin from '@/mixins/publish'
export default {
  name: 'MineMyFav',
  components: {
    LMainLayout,
    LButtonTab,
    LButtonTabItem,
    PublishForm,
    LButtonCommit
  },
  mixins: [PublishMixin],
  data () {
    return {
      selected: 0,
      formData: {
        title: ''
      },
      formDatas: {
        step1: [
          createMap({
            'title': {
              label: '标题',
              type: 'input',
              required: true
            },
            'name': {
              label: '渔船编码',
              type: 'input',
              required: true
            },
            'shipname': {
              label: '船名号',
              type: 'input',
              required: true
            },
            'buytype': {
              label: '类型',
              type: 'switch',
              required: true,
              default: 1
            }
          }),
          createMap({
            'catid': {
              label: '作业类型',
              type: 'select',
              required: true,
              selectType: 'SHIP_CATEGORY'
            },
            'address': {
              label: '地区船籍港',
              required: true,
              type: 'select-city'
            },
            'nationality': {
              label: '船舶国籍证',
              required: true,
              type: 'picture'
            },
            'ownership': {
              label: '所有权登记证',
              type: 'picture'
            },
            'license': {
              label: '渔业捕捞许可证',
              type: 'picture'
            },
            'certificate': {
              label: '船舶检验证',
              type: 'picture'
            },
            'material': {
              label: '渔船材质',
              type: 'select',
              required: true,
              selectType: 'SHIP_MATERIAL'
            },
            'price': {
              label: '价格',
              type: 'input-number',
              required: true
            },
            'expirydate': {
              label: '有效期',
              type: 'datetime',
              required: true
            },
            'picture': {
              label: '渔船图片',
              type: 'pictures'
            }
          }),
          createMap({
            'linkman': {
              label: '联系人',
              type: 'input',
              required: true
            },
            'tel': {
              label: '联系电话',
              type: 'input-number',
              required: true
            },
            'content': {
              label: '详细内容',
              type: 'textarea'
            }
          })
        ],
        step2: [
          createMap({
            'buildtime': {
              label: '完工时间',
              type: 'datetime',
              required: true
            },
            'shipord': {
              label: '船龄',
              type: 'input-number',
              required: true
            },
            'power': {
              label: '功率(KW)',
              type: 'input-number',
              required: true
            },
            'doublepower': {
              label: '双控功率(KW)',
              type: 'input-number',
              required: true
            }
          }),
          createMap({
            'width': {
              label: '型宽(米)',
              type: 'input-number',
              required: true,
              size: 'small'
            },
            'long': {
              label: '船长(米)',
              type: 'input-number',
              required: true,
              size: 'small'
            },
            'alllong': {
              label: '总长(米)',
              type: 'input-number',
              required: true,
              size: 'small'
            },
            'deep': {
              label: '型深(米)',
              type: 'input-number',
              required: true,
              size: 'small'
            },
            'gtonnage': {
              label: '总吨位(T)',
              type: 'input-number',
              required: true,
              size: 'small'
            },
            'nettonnage': {
              label: '净吨位(T)',
              type: 'input-number',
              required: true,
              size: 'small'
            }
          }),
          createMap({
            'shipyard': {
              label: '船厂',
              type: 'input',
              required: true
            },
            'model': {
              label: '主机型号',
              type: 'input',
              required: true
            }
          })
        ]
      },
      commitBtnDisable: false,
      method: addShip
    }
  },
  mounted () {
    this.publishType = 'SHIP'
  },
  methods: {
    nextStep () {
      this.$refs['content'].offsetParent.scrollTop = 0
      ++this.selected
      console.log(this.$refs)
    },
    preStep () {
      --this.selected
      this.$refs['content'].offsetParent.scrollTop = 0
    },
    commitSuccess () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
@import '../../common/style/var.scss';

.publish-ship-container {
  .content {
    position: relative;
    // overflow: scroll;
    // -webkit-overflow-scrolling: touch;
    .section {
      padding: 10px 10px 0 10px;
      background: #fff;
      margin-bottom: 10px;
    }
    .button {
      margin: 10px;
      background-color: $default-color;
      color: white;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
    }
  }
}
</style>
