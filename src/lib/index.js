import ToastComponent from "./vueToast.vue";

let Toast = {};
Toast.install = function (Vue, options) {
    let timer = null;
    let defaultOptions = {
        type: "show",
        duration: 3000,
    };
    let opt = Object.assign({}, defaultOptions);

    if (options) {
        // for (let key in options) {
        //     opt[key] = options[key];
        // }
        opt = Object.assign({}, options);
    }

    Vue.prototype.$toast = function (message, option) {
        if (option && typeof option === "object") {
            opt = Object.assign({}, opt, option);
        } else {
            opt = Object.assign({}, defaultOptions, option);
        }

        // console.log("option=>", option, opt);

        // 创建 Toast 构造函数
        const ToastConstructor = Vue.extend(ToastComponent);
        let instance = new ToastConstructor().$mount(document.createElement("div"));

        instance.message = message;
        instance.visible = true;
        instance.type = opt.type;

        let elements = document.getElementsByClassName("toast-container");
        // console.log("instance=>", instance, instance.$el, elements);
        if (instance.type === "hide") {
            clearTimeout(timer);
            instance.visible = false;

            [...elements].forEach((element) => {
                document.body.removeChild(element);
            });
            if (opt.onClose && typeof opt.onClose === "function") opt.onClose();
            return;
        } else {
            document.body.appendChild(instance.$el);
        }

        timer = setTimeout(() => {
            clearTimeout(timer);
            if (opt.duration != 0) {
                instance.visible = false;
                document.body.removeChild(instance.$el);
            }
            if (opt.onClose && typeof opt.onClose === "function") opt.onClose();
        }, opt.duration);
    };

    Vue.prototype.$toast["show"] = function (message, option) {
        Vue.prototype.$toast(message, option);
    };
    Vue.prototype.$toast["hide"] = function (message, option) {
        Vue.prototype.$toast(message, option);
    };
    Vue.prototype.$toast["success"] = function (message, option) {
        Vue.prototype.$toast(message, option);
    };
    Vue.prototype.$toast["error"] = function (message, option) {
        Vue.prototype.$toast(message, option);
    };
    Vue.prototype.$toast["warning"] = function (message, option) {
        Vue.prototype.$toast(message, option);
    };
    Vue.prototype.$toast["loading"] = function (message, option) {
        Vue.prototype.$toast(message, option);
    };
};
if (window.Vue) {
    Vue.use(Toast);
}
export default Toast;
