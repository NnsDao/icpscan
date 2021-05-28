import axios from 'axios'
import {CacheList, CacheItem} from './requestCache'


// 缓存的请求列表
/**
 * @param {number} cacheApiLength - 当前缓存数量，默认10个请求
 * {
 *  url: '',
 *  params: {},
 *  expireDate: 0, - 过期时间
 *  response: {}, 响应结果
 *  weights: 0, 权重
 *  cancel: ()=> {} // 取消方法
 * }
 */
let reqList = new CacheList() // 创建缓存列表实例

// 缓存时长
const timeInterval = 5 * 1000

/**
 * 查看请求缓存
 * @param {array} reqList - 请求缓存列表
 * @param {string} config - 当前请求参数实例
 */
const getRequestCache = function (reqList, config) {
  const ci = reqList.getCache(config) // 获取缓存实例
  if (ci) { // 有缓存数据
    const cur = new Date().getTime();
    if (cur < ci.expireDate) { // 判断缓存是否过期:没有过期
      ci.startLoading()
      ci.setWeights() // 怎加权重
      CacheItem.endLoading(reqList, config) // 结束loading
      return Promise.resolve(ci.response)
    } else {
      if(ci.expireDate === 0) { // 上次请求未响应
        CacheItem.endLoading(reqList, config) // 结束loading
        ci.c('取消上次请求，重新请求！') //如果在请求中 取消上一次请求
      } 
      // 删除数组中的缓存
      reqList.delItem(config)
    }
  }
  reqList.push(new CacheItem(config))
}

/**
 * 设置缓存数据
 * @param {array} reqList 全部请求列表
 * @param {string} response 相应实例
 */
const setRequestData = function (reqList, response) {
  const ci = reqList.getCache(response.config) // 获取缓存实例
  ci.setExpireDate(timeInterval) // 设置过期时间
  ci.setResponse(response.data)// 设置缓存数据
}

// 设置取消函数
const setCancel = (reqList, config, c) => {
  const ci = reqList.getCache(config) // 获取缓存实例
  ci.setCancel(c)
}
// 修改为自己的本地服务
let baseURL = "http://192.168.0.72:2222/api/";

// 服务端地址
const request = axios.create({
  baseURL, // url = base url + request url
  withCredentials: true, // 跨域时是否带上cookie
  timeout: 10000, // 请求超时时间配置(ms)
  headers: {
    'Content-Type': 'application/json;charset=UTF-8', // json数据格式传输
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // do something before request is sent

    /**
     * 为每一次请求生成一个cancleToken
     */
    const source = axios.CancelToken.source();
    config.cancelToken = source.token;
    // 设置请求的取消方法
    setCancel(reqList, config, source.cancel)

    return config
  },
  error => Promise.reject(error)
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    CacheItem.endLoading(reqList, response.config) // 结束loading
    // 服务端响应成功时，搞些事情
    if (res.code !== 200) { // 请求报错
      const msg = res.msg || '系统错误'
      throw res
    } else { // 请求成功
      setRequestData(reqList, response)
      return res
    }
  },
  error => {
    error.config && CacheItem.endLoading(reqList, error.config) // 结束loading
    console.log(error,8888)
    Promise.reject(error)
    
  }
)

// 缓存请求方法
const cacheRequest = (config) => {
  const params = CacheItem.getParams(config)
  config._loadingCallback = params._loadingCallback
  config._cache = params._cache || false
  config._clearCache = params._clearCache
  delete params._loadingCallback
  delete params._cache
  delete params._clearCache
  const response = getRequestCache(reqList, config)
  if (config._cache) {
    if (response) return response // 有缓存返回缓存
  }
  return request(config)
}

export default cacheRequest