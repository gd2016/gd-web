/* stylelint-disable order/properties-order */
<template>
  <div class="add-node-btn-box">
    <div class="add-node-btn">
      <el-popover placement="right-start" v-model="visible" width="auto">
        <div class="add-node-popover-body">
          <a class="add-node-popover-item approver" @click="addType(1)">
            <div class="item-wrapper">
              <span class="iconfont"></span>
            </div>
            <p>审批人</p>
          </a>
          <a class="add-node-popover-item notifier" @click="addType(2)">
            <div class="item-wrapper">
              <span class="iconfont"></span>
            </div>
            <p>抄送人</p>
          </a>
          <a class="add-node-popover-item condition" @click="addType(4)">
            <div class="item-wrapper">
              <span class="iconfont"></span>
            </div>
            <p>条件分支</p>
          </a>
        </div>
        <template #reference>
          <button class="btn" type="button">
            <span class="iconfont"></span>
          </button>
        </template>
      </el-popover>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
let props = defineProps({
  childNodeP: {
    type: Object,
    default: () => ({})
  }
})
let emits = defineEmits(['update:childNodeP'])
let visible = ref(false)
const addType = (type) => {
  visible.value = false
  if (type != 4) {
    var data
    if (type == 1) {
      data = {
        nodeName: '审核人',
        error: true,
        type: 1,
        settype: 1,
        selectMode: 0,
        selectRange: 0,
        directorLevel: 1,
        examineMode: 1,
        noHanderAction: 1,
        examineEndDirectorLevel: 0,
        childNode: props.childNodeP,
        nodeUserList: []
      }
    } else if (type == 2) {
      data = {
        nodeName: '抄送人',
        type: 2,
        ccSelfSelectFlag: 1,
        childNode: props.childNodeP,
        nodeUserList: []
      }
    }
    emits('update:childNodeP', data)
  } else {
    emits('update:childNodeP', {
      nodeName: '路由',
      type: 4,
      childNode: null,
      conditionNodes: [
        {
          nodeName: '条件1',
          error: true,
          type: 3,
          priorityLevel: 1,
          conditionList: [],
          nodeUserList: [],
          childNode: props.childNodeP
        },
        {
          nodeName: '条件2',
          type: 3,
          priorityLevel: 2,
          conditionList: [],
          nodeUserList: [],
          childNode: null
        }
      ]
    })
  }
}
</script>
<style scoped lang="scss">
.add-node-btn-box {
  position: relative;
  display: inline-flex;
  width: 240px;
  -webkit-box-flex: 1;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -ms-flex-positive: 1;

  &::before {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 2px;
    height: 100%;
    margin: auto;
    background-color: #cacaca;
    content: '';
  }

  .add-node-btn {
    display: flex;
    width: 240px;
    padding: 20px 0 32px;
    -webkit-box-flex: 1;
    -webkit-box-pack: center;
    user-select: none;
    justify-content: center;
    flex-shrink: 0;
    flex-grow: 1;

    .btn {
      position: relative;
      width: 30px;
      height: 30px;
      line-height: 30px;
      background: #3296fa;
      border: none;
      border-radius: 50%;
      outline: none;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

      .iconfont {
        font-size: 16px;
        color: #fff;
      }

      &:hover {
        transform: scale(1.3);
        box-shadow: 0 13px 27px 0 rgb(0 0 0 / 10%);
      }

      &:active {
        background: #1e83e9;
        transform: none;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
      }
    }
  }
}

.add-node-popover-body {
  display: flex;

  .add-node-popover-item {
    margin-right: 10px;
    color: #191f25 !important;
    text-align: center;
    cursor: pointer;
    flex: 1;

    .item-wrapper {
      display: inline-block;
      width: 80px;
      height: 80px;
      margin-bottom: 5px;
      background: #fff;
      border: 1px solid #e2e2e2;
      border-radius: 50%;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;

      .iconfont {
        font-size: 35px;
        line-height: 80px;
      }
    }

    &.approver {
      .item-wrapper {
        color: #ff943e;
      }
    }

    &.notifier {
      .item-wrapper {
        color: #3296fa;
      }
    }

    &.condition {
      .item-wrapper {
        color: #15bc83;
      }
    }

    &:hover {
      .item-wrapper {
        background: #3296fa;
        box-shadow: 0 10px 20px 0 rgb(50 150 250 / 40%);
      }

      .iconfont {
        color: #fff;
      }
    }

    &:active {
      .item-wrapper {
        background: #eaeaea;
        box-shadow: none;
      }

      .iconfont {
        color: inherit;
      }
    }
  }
}
</style>
