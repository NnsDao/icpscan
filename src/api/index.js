import request from '../utils/http'


// 不想使用缓存，在参数里传 _noCache: true 即可
export function fetchList(query) {
  return request({
    url: '/api/block/newList',
    method: 'get',
    params: query,
  })
}
// 排行榜
export function fetchRank(query) {
  return request({
    url: '/api/block/show',
    method: 'get',
    params: query,
  })
}
// 详情
export function fetchDetail(query) {
  return request({
    url: '/api/block/detail',
    method: 'get',
    params: query,
  })
}
// 区块高度
export function fetchSearch(query) {
  return request({
    url: '/api/block/search',
    method: 'get',
    params: query,
  })
}

// 获取地图数据
export function fetchLocations(query) {
  return request({
    url: '/api/block/newList',
    method: 'get',
    params: query,
  })
}

// 获取用户名
export function fetchLoginInfo(principal_id) {
  return request({
    url: '/api/user/login',
    method: 'get',
    params: {
      principal_id,
    },
  })
}
