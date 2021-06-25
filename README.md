# Icpscan is a Block Explorer and Analytics Platform for Dfinity


Project includes:

- [Transactions](https://icpscan.co/) (Search)
- [Project](https://icpscan.co/project) (Project)
- [Rank](https://icpscan.co/rank) (ICP Holder Address Rank)
- [About](https://icpscan.co/about) (About NnsDao)

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

### Completed

+ Multi-language , [Vue3 i18n](https://github.com/intlify/vue-i18n-next)
+ ICP Holder Address Rank
+ Some ICP projects
+ NNS Calculator
+ Internetcomputer API

### TODO

+ Node Map
+ Mobile version adaptation
+ Internetcomputer Status
+ Fee Rank
+ NNS rule
+ Principals  service provider
+ About Canisters 

### api

+ https://ic-api.internetcomputer.org/api/metrics/block 当前的出块数  1
+ https://ic-api.internetcomputer.org/api/metrics/message-execution-rate 当前的消息速度 1
+ https://ic-api.internetcomputer.org/api/metrics/registered-canisters 当前的合约罐 1
+ https://ic-api.internetcomputer.org/api/metrics/ic-nodes-count  当前的节点数量  1
+ https://ic-api.internetcomputer.org/api/metrics/block-rate  当前出块速度  1
+ https://ic-api.internetcomputer.org/api/metrics/messages-count  当前消息数量 1
+ https://ic-api.internetcomputer.org/api/metrics/ic-cpu-cores cpu数量 ic_cpu_cores 
+ https://ic-api.internetcomputer.org/api/metrics/ic-memory-total 总内存  ic_memory_total
+ https://ic-api.internetcomputer.org/api/metrics/ic-subnet-total 子网数量
+ https://ic-api.internetcomputer.org/api/metrics/boundary-nodes-count  边界节点
+ https://ic-api.internetcomputer.org/api/node-providers/count 节点供应商 
+ https://ic-api.internetcomputer.org/api/nns/total-supply-icp icp总供应量  1
+ https://ic-api.internetcomputer.org/api/nns/proposals-count 提案数量
+ https://ic-api.internetcomputer.org/api/boundary-node-locations map
+ https://ic-api.internetcomputer.org/api/locations map 
+ https://ic.rocks/api/markets price 和基础信息