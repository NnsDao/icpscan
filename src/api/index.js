import request from '../utils/http'


// 不想使用缓存，在参数里传 _noCache: true 即可
export function fetchList(query) {
  return request({
    url: '/home/episodes',
    method: 'get',
    params: query,
  })
}

export function fetchAdd(data) {
  return request({
    url: '/home/episodes',
    method: 'post',
    data,
  })
}
