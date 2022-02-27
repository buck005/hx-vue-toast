## vue 的一款 toast 组件

### 使用

-   step1: npm install hx-vue-toast
-   step2: main.js

```
 import Vue from 'vue'
  import Toast from 'hx-vue-toast'

  Vue.use(Toast)
```

-   step3:

```
this.$toast.show("hello toast!",{
    type:"success",
    duration: 3000,
    onClose:() => {
        console.log('onClose');
    }
})
```
#### 参数说明

参数 | 说明
---|---
msg | 传入的文本说明
type | success、warning、error、loading、hide
duration | 时间
onClose | 关闭 toast 回调