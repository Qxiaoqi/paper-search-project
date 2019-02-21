<template>
  <transition name="fade">
      <div class="message" :class="type" v-show="show">
        <i v-if="type === 'info'" class="fa fa-info-circle" aria-hidden="true"></i>
        <i v-else-if="type === 'success'" class="fa fa-check-circle" aria-hidden="true"></i>
        <i v-else-if="type === 'error'" class="fa fa-times-circle" aria-hidden="true"></i>        
        <span class="text">{{text}}</span>
      </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'message',
    props: {
      type: {
        type: String,
        default: 'info',
        validator: val => ['info', 'success', 'error'].includes(val)
        //['info', 'success', 'error'] 表示type只接收这四个字符串作为参数传入message组件
      },
      text: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="less">
   // fade动画 <transition name="fade"> </transition>
   // 下面的样式可以自己改
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .message {
    position: fixed;
    top: 40px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    min-width: 150px;
    padding: 10px 20px;
    // color: $strong-text-color;
    background: #ffffff;
    font-size: 14px;
    line-height: 1.4;
    border-radius: 4px;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);

    span {
      padding-left: 5px;
    }
  }

    .info .fa-info-circle {
      color: @header-blue;
    }
    .success .fa-check-circle {
      color: #19be6b;
    }
    .error .fa-times-circle {
      color: #ed4014;
    }
</style>