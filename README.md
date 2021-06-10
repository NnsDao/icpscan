# Icpscan is a Block Explorer and Analytics Platform for Dfinity


项目包括:

- [Transactions](https://icpscan.cn/) (区块链查询)
- [Project](https://icpscan.cn/project) (项目列表)
- [Rank](https://icpscan.cn/rank) (ICP持有地址排行榜)


### Getting Started 🚀

```sh
git clone https://github.com/NnsDao/icpscan
cd icpscan
```

npm:
```sh
npm i
npm run dev
npm run build
npm run serve
```

yarn:
```sh
yarn
yarn dev
yarn build
yarn serve
```

### TODO

+ 多语言
  + [Vue3 i18n](https://github.com/intlify/vue-i18n-next)
+ Api 接入
+ 数据整理


### 一些api

+ https://ic-api.internetcomputer.org/api/metrics/block 当前的出块数
+ https://ic-api.internetcomputer.org/api/metrics/message-execution-rate 当前的消息速度
+ https://ic-api.internetcomputer.org/api/metrics/registered-canisters 当前的合约罐
+ https://ic-api.internetcomputer.org/api/metrics/ic-nodes-count  当前的节点数量
+ https://ic-api.internetcomputer.org/api/metrics/block-rate  当前出块速度
+ https://ic-api.internetcomputer.org/api/metrics/messages-count  当前消息数量