import request from '../utils/http'


// 不想使用缓存，在参数里传 _noCache: true 即可
export function fetchList(query) {
  return request({
    url: '/block/newList',
    method: 'get',
    params: query,
  })
}
// 排行榜
export function fetchRank(query) {
  return request({
    url: '/block/show',
    method: 'get',
    params: query,
  })
}
// 详情
export function fetchDetail(query) {
  return request({
    url: '/block/detail',
    method: 'get',
    params: query,
  })
}
// 区块高度
export function fetchSearch(query) {
  return request({
    url: '/block/search',
    method: 'get',
    params: query,
  })
}
