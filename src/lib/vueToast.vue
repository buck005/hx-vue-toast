<template>
    <div class="toast-container">
        <div class="toast" :class="[visible?'fade-in':'fade-out']">
            <i class="iconfont" :class="{'icon-icon_Success success-color':type === 'success','icon-icon_warn_w warning-color':type === 'warning','icon-qingchu':type === 'error','icon-icon_loading loading':type === 'loading'}" v-if="type !== 'show'"></i>
            <span class="text">{{ message }}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            message:"",
            type:"show"
        };
    },
};
</script>
<style lang="scss">
@import url(https://at.alicdn.com/t/font_949133_03aa5jobj1mh.css);
@keyframes fade-in {
    0% {
        opacity: 0;
        transform: scale(0.1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
@keyframes fade-out {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.1);
    }
}
@keyframes loading-spin {
    form {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}
.toast-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    .toast {
        display: flex;
        flex-direction: column;
        min-width: 100px;
        max-width: 60%;
        padding: 20px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.61);
        color: #fff;
        border-radius: 10px;
        .iconfont{
            margin-bottom: 10px;
            font-size: 30px;
        }
        .text{
            word-wrap:break-word;
        }
        .success-color{
            // color: rgb(9, 187, 7);
        }
        .warning-color{
            // color: #efcb1f;
        }
        .loading{
            font-size: 35px;
            transform-origin: center;
            animation: loading-spin 1s linear infinite;
        }
    }
    .fade-in{
        animation-name: fade-in;
        animation-duration: 0.3s;
        animation-delay: 0.3s;
        animation-fill-mode: both;
        //   -webkit-animation: 0.5s linear 0s infinite alternate fade-in;
        //   animation: 0.5 linear 0s infinite alternate fade-in;

    }
    .fade-out{
        animation-name: fade-out;
        animation-duration: 0.3s;
        animation-delay: 0.3s;
        animation-fill-mode: both;
        // -webkit-animation: 0.5s linear 0s infinite alternate fade-out;
        //   animation: 0.5 linear 0s infinite alternate fade-out;

    }
}
</style>
