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

### Deploy to IC

0.install dfx canister sdk: `sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"`

1.create dfx.json

2.update dfx.json , assets path 、entrypoint、source  and dfx  sdk version 

3.Get the current subject ID : `dfx identity get-principal`

4.Get the address of the current ICP account and transfer to it: `dfx ledger account-id`

5.Create the canister of the cycle wallet : `dfx ledger --network ic create-canister <principal-identifier> --amount <icp-tokens>`

Example(Deposit an ICP and convert to cycles) :`dfx ledger --network ic create-canister tsqwz-udeik-5migd-ehrev-pvoqv-szx2g-akh5s-fkyqc-zy6q7-snav6-uqe --amount 1`

6.Deploy the cycle wallet program to the newly created canister:`dfx identity --network ic deploy-wallet  <canister-identifer> `

Example: `dfx identity --network ic deploy-wallet sznps-4aaaa-aaaah-qab2a-cai`

7.Compile the project

8.Deploy canister:  `dfx deploy --network ic`

**Notice:Deploy to the main network IC, you must use the parameter --network ic, the default is the local development environment.**

### Completed

+ Multi-language , [Vue3 i18n](https://github.com/intlify/vue-i18n-next)
+ ICP Holder Address Rank
+ Some ICP projects
+ NNS Calculator
+ Internetcomputer API
+ Deploy to IC

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

```
ICP Register account:https://ic-api.internetcomputer.org/api/metrics/internet-identity-total
Price & K line:https://api.nomics.com/v1/currencies/ticker?key=38f4023ce681a328edc018f7a8a28e06&ids=ICP&interval=1d
Daily Voting Rewards、Total Voting Power、NNS:https://ic-api.internetcomputer.org/api/nns/metrics

Data Center address:https://www.dfinityexplorer.org/#/datacenters
Data Center locations:https://ic-api.internetcomputer.org/api/locations

```