import axios from 'axios';
import { Loading, Message } from 'element-ui';
// 创建一个名为 pendingMap 的Map
const pendingMap = new Map();

/* 
表示创建一个名为 LoadingInstance 的新对象。
该对象具有两个属性： _target  和  _count 。 
_target  属性存储一个目标元素，
_count  属性存储一个计数器。
*/
// Loading实例
const LoadingInstance = {
    _target: null,
    _count: 0
};

function getTokenAUTH() {
    // const token = 'fbnuirfbui'
    // return token
    return null
}

function Axios(axiosConfig, customOptions, loadingOptions) {
    const service = axios.create({
        // 设置 axios 实例的 baseURL。baseURL 是一个字符串，表示 axios 实例发送请求的基准 URL。
        baseURL: 'http://127.0.0.1:8801/health',
        // 设置 axios 实例的超时时间。超时时间是一个数字，表示 axios 实例发送请求的超时时间，单位是毫秒。
        timeout: 1000 * 60,
        // 设置 axios 实例的响应类型。响应类型是一个字符串，表示 axios 实例接收响应的类型。 
        responseType: 'json'
    });

    // 自定义配置
    let custom_options = Object.assign({
        repeat_request_cancel: true, // 是否开启取消重复请求, 默认为 true
        loading: false, // 是否开启loading层效果, 默认为false
        restore_data_format: true, // 是否开启简洁的数据结构响应, 默认为true
        error_message_show: true, // 是否开启接口错误信息展示,默认为true
        code_message_show: true, // 是否开启code不为0时的信息提示, 默认为false
    }, customOptions);

    // 请求拦截
    service.interceptors.request.use(
        config => {
            // 从 pendingMap 中移除重复的请求。
            removePending(config);
            // 如果启用了重复请求取消功能，则将请求添加到 pendingMap 中。 
            custom_options.repeat_request_cancel && addPending(config);
            // 创建loading实例
            // 如果启用了 loading 功能，则创建 loading 实例。 
            if (custom_options.loading) {
                LoadingInstance._count++;
                if (LoadingInstance._count === 1) {
                    /* 
                    在 Element UI 中，
                    ElLoading.service 用于创建一个全局的加载动画实例，
                    该实例可以在页面中显示一个加载动画，
                    以表示正在进行某个操作或加载数据。
                    loadingOptions  是一个配置对象，用于指定加载动画的样式和配置。
                    可以设置加载动画的文字、背景色、遮罩层等。 
                    const loadingInstance1 = ElLoading.service({ fullscreen: true })
                    */
                    LoadingInstance._target = Loading.service(loadingOptions);
                }
            }
            // 自动携带token
            // 如果存在 token 并且当前环境是浏览器环境，则将 token 添加到请求头中。 
            // 登录之后的所有请求都要将 token 添加到请求头中。
            if (getTokenAUTH() && typeof window !== "undefined") {
                config.headers.Authorization = getTokenAUTH();
            }

            return config;
        },
        // 表示如果请求失败，则返回一个 Promise 对象，并拒绝该 Promise 对象。
        // guess: 如果上面代码写错 
        error => {
            return Promise.reject(error);
        }
    );

    // 响应拦截
    service.interceptors.response.use(
        // 成功的回调方法
        response => {
            // 从 pendingMap 中移除请求。 
            removePending(response.config);
            // 关闭loading
            custom_options.loading && closeLoading(custom_options);
            // 如果启用了 code_message_show 功能，并且响应数据存在且 code 不等于 200，则显示错误消息并拒绝 Promise 对象。 
            // 后端定义
            if (custom_options.code_message_show && response.data && response.data.code !== 'H0000') {
                Message({
                    type: 'error',
                    // 自己看
                    message: response.message
                })
                return Promise.reject(response.data); // code不等于200, 页面具体逻辑就不执行了
            }

            return custom_options.restore_data_format ? response.data : response;
        },
        // 失败的回调方法
        // 可能返回错误的结果
        error => {
            // 从 pendingMap 中移除请求。 
            error.config && removePending(error.config);
            // 关闭loading
            custom_options.loading && closeLoading(custom_options);
            // 如果启用了 error_message_show 功能，则处理错误状态码。 
            custom_options.error_message_show && httpErrorStatusHandle(error);
            // 返回 Promise 对象，并拒绝该 Promise 对象。 
            // 错误继续返回给到具体页面
            return Promise.reject(error);
        }
    );
    // 表示返回 axios 实例发送请求的结果。
    return service(axiosConfig)
}
// export default 在apis下面import任何名字都可以
// export default 每个文件只有一个
// export  {Axios};
export default Axios

/**
 * 处理异常
 * @param {*} error
 */
function httpErrorStatusHandle(error) {
    // 处理被取消的请求
    // 如果请求被取消，则返回并打印错误消息。 guess：userCancel
    if (axios.isCancel(error)) return console.error('请求的重复请求：' + error.message);
    // 创建一个变量 message，用于存储错误消息。
    let message = '';
    // 如果 error 存在并且 error.response 存在，则表示请求失败。 
    if (error && error.response) {
        // 根据 error.response.status 的值，显示不同的错误消息。
        // error.response.status 是固定的 
        switch (error.response.status) {
            case 302:
                message = '接口重定向了！';
                break;
            case 400:
                message = '参数不正确！';
                break;
            case 401:
                message = '您未登录，或者登录已经超时，请先登录！';
                break;
            case 403:
                message = '您没有权限操作！';
                break;
            case 404:
                // 固定的 
                message = `请求地址出错: ${error.response.config.url}`;
                break; // 在正确域名下
            case 408:
                message = '请求超时！';
                break;
            case 409:
                message = '系统已存在相同数据！';
                break;
            case 500:
                message = '服务器内部错误！';
                break;
            case 501:
                message = '服务未实现！';
                break;
            case 502:
                message = '网关错误！';
                break;
            case 503:
                message = '服务不可用！';
                break;
            case 504:
                message = '服务暂时无法访问，请稍后再试！';
                break;
            case 505:
                message = 'HTTP版本不受支持！';
                break;
            default:
                message = '异常问题，请联系管理员！';
                break
        }
    }
    // 如果 error.message 包含字符串 "timeout"，则表示请求超时。
    /* 
        29行
        设置 axios 实例的超时时间。超时时间是一个数字，表示 axios 实例发送请求的超时时间，单位是毫秒。
        timeout: 1000 * 60,
    */
    if (error.message.includes('timeout')) message = '网络请求超时！';
    // 如果 error.message 包含字符串 "Network"，则表示网络连接出现问题。 
    if (error.message.includes('Network')) message = window.navigator.onLine ? '服务端异常！' : '您断网了！';
    // 使用 ElMessage 显示错误消息。
    Message({
        type: 'error',
        message
    })
}

/**
 * 方法的介绍jsdoc
 * 关闭Loading层实例
 * @param {*} _options
 */
function closeLoading(_options) {
    /* 
    如果启用了 loading 功能并且 LoadingInstance._count 大于 0，
    则将 LoadingInstance._count 减 1。 
    */
    if (_options.loading && LoadingInstance._count > 0) LoadingInstance._count--;
    // 如果 LoadingInstance._count 等于 0，则表示没有正在进行的 loading。 
    if (LoadingInstance._count === 0) {
        // 关闭 loading。 
        LoadingInstance._target.close();
        // 将 LoadingInstance._target 设置为 null。
        LoadingInstance._target = null;
    }
}

/**
 * 储存每个请求的唯一cancel回调, 以此为标识
 * @param {*} config
 */
function addPending(config) {
    // 获取请求的唯一标识(判断请求是否重复)
    const pendingKey = getPendingKey(config);
    // 创建一个取消令牌。 
    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
        // 如果 pendingMap 中不存在该请求的唯一标识，则将该请求添加到 pendingMap 中
        if (!pendingMap.has(pendingKey)) {
            pendingMap.set(pendingKey, cancel);
        }
    });
}


/**
 * 删除重复的请求
 * @param {*} config
 */
function removePending(config) {
    // 获取请求的唯一标识。
    const pendingKey = getPendingKey(config);
    // 如果 pendingMap 中存在该请求的唯一标识，则取消该请求。 
    if (pendingMap.has(pendingKey)) {
        // 创建一个取消令牌。
        const cancelToken = pendingMap.get(pendingKey);
        // 取消该请求。 
        cancelToken(pendingKey);
        // 从 pendingMap 中删除该请求。
        pendingMap.delete(pendingKey);
    }
}

/**
 * 生成唯一的每个请求的唯一key
 * @param {*} config
 * @returns
 */
function getPendingKey(config) {
    // 获取请求的 URL、方法、参数和数据。 
    let { url, method, params, data } = config;
    // 如果 data 是一个字符串，则将其解析为 JSON 对象。 
    // response里面返回的config.data是个字符串对象
    if (typeof data === 'string') data = JSON.parse(data);
    // 返回请求的唯一标识。
    return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&');
}