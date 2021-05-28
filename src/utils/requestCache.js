// 缓存实例
export class CacheItem {
    constructor(config) {
        this.url = config.url;
        this.params = CacheItem.getParams(config)
        this.expireDate = 0;
        this.response = {};
        this.weights = 0;
        this.c = () => { };
        this.loading = false // false 结束 true 进行中
        this.loadingCallback = () => { } // loading回调
        this.loadingInit(config)
        this.clearCacheInit(config)
    }
    // loading 初始化
    loadingInit(config) {
        if (config._loadingCallback) {
            this.loadingCallback = config._loadingCallback
            this.startLoading()
        }
    }
    // 清除缓存 初始化
    clearCacheInit(config) {
        if(config._clearCache) {
            config._clearCache(this.clearSelf(this))
        }
    }
    

    clearSelf(that) {
        return () => {
            console.log('clearSelf', that);
            that.expireDate = 0;
        }
    }

    startLoading() {
        this.loading = true
        this.loadingCallback(this.loading)
    }
    static endLoading(reqList, config) {
       setTimeout(() => {
        const ci = reqList.getCache(config)
        const flag = ci.loading
        ci.loading = false
        if (flag && reqList.isLoading()) {
            ci.loadingCallback(ci.loading)
        }
       }, 1);
    }

    // 设置时间
    setExpireDate(time = 10000) {
        const cur = new Date().getTime();
        this.expireDate = cur + time;
    }

    // 设置数据
    setResponse(data = {}) {
        this.response = data;
    }

    // 设置权重
    setWeights(weights) {
        if (weights !== undefined) {
            this.weights = weights;
        } else {
            this.weights += 1;
        }
    }

    // 设置取消函数
    setCancel(cancel = () => {}) {
        this.c = cancel
    }

    //   设置Params
    static getParams(config) {
        let params = null
        if (config.params) {
            params = config.params;
        } else if (config.data) {
            params = config.data;
        }
        return params
    }
}

// 缓存仓库
export class CacheList {
    constructor(cacheApiLength = 10) {
        this.value = []
        this.cacheApiLength = cacheApiLength
    }

    // 返回缓存 undefined为没有缓存 
    getCache(config) {
        const item = this.value.find(ele => {
            let flag = false
            if (ele.url === config.url) {
                const params = CacheItem.getParams(config)
                const cParams = ele.params
                if (CacheList.deepEqual(params, cParams)) {
                    flag = true
                }
            }
            return flag
        })
        return item
    }

    // 返回缓存下标 -1 没找到
    getIndex(config) {
        let index = -1
        const _index = this.value.findIndex(ele => {
            if (ele.url === config.url) {
                const params = CacheItem.getParams(config)
                const cParams = ele.params
                if (CacheList.deepEqual(params, cParams)) {
                    return true
                }
            }
        })
        index = _index
        return index
    }

    // 按照下标删除元素
    delIndex(index) {
        this.value.splice(index, 1)
    }

    // 删除元素
    delItem(config) {
        const index = this.getIndex(config)
        this.delIndex(index)
    }

    // 添加缓存，控制缓存 总数
    push(item) {
        if (this.value.length >= this.cacheApiLength) {
            this.value.sort((a, b) => b.weights - a.weights)
            this.value.pop()
        }
        this.value.push(item)
    }
    // 判断是否还有loading 请求未结束
    isLoading() {
        return this.value.every(v => v.loading === false)
    }

    /*
     * 判断两个对象相等
     * @param x {Object} 对象1
     * @param y {Object} 对象2
     * @return  {Boolean} true 为相等，false 为不等
     */
    static deepEqual(x, y) {
        // 指向同一内存时
        if (x === y) {
            return true;
        } else if (
            typeof x == "object" &&
            x != null &&
            typeof y == "object" &&
            y != null
        ) {
            if (Object.keys(x).length != Object.keys(y).length) return false;

            for (var prop in x) {
                if (y.hasOwnProperty(prop)) {
                    if (!CacheList.deepEqual(x[prop], y[prop])) return false;
                } else return false;
            }

            return true;
        } else return false;
    }
}