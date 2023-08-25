# 网络

## http请求
### 1.为什么post请求会出现两次请求
  第一次为option请求（预请求），
  什么情况下会出现预请求？
  触发了CORS + 非简单请求
  *哪些是简单请求，满足以下所有条件*
  1. get post head 请求
  2. 请求头中只包含常见标头（Accept, content-type, ...）【若出现x-token 等自定义标头，则不满足简单请求条件】
  3. 请求中没有使用ReadableStream
  4. 请求中XMLHttpRequestUpload 没有注册任何监听事件

  *预请求的作用以及机制*
  1. 预请求的响应头会提供几个关键标头
   acess-control-allow-method 指定
   acess-control-allow-headers
   acess-control-allow-Orign
   acess-control-max-age 指定本次预请求的过期时间，单位为秒，在此期间不会发起另外一条预请求

  *为什么要做预请求*

### 状态码
 2xx
 3xx
 4xx
 5xx