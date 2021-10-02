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
+ Node Map
+ Subnet 

### TODO


+ Mobile version adaptation
+ Internetcomputer Status
+ Fee Rank
+ NNS rule
+ Principals  service provider
+ About Canisters 

### api

+ https://ic-api.internetcomputer.org/api/subnet-list


```
ICP Register account:https://ic-api.internetcomputer.org/api/metrics/internet-identity-total
Price & K line:https://api.nomics.com/v1/currencies/ticker?key=38f4023ce681a328edc018f7a8a28e06&ids=ICP&interval=1d
Daily Voting Rewards、Total Voting Power、NNS:https://ic-api.internetcomputer.org/api/nns/metrics

Data Center address:https://www.dfinityexplorer.org/#/datacenters
Data Center locations:https://ic-api.internetcomputer.org/api/locations

```

### IC Account Migration

+ Keep the migrated SDK version the same,`sudo dfx upgrade `
+ Import the developer identity file xxx.pem on the other computer,`sudo dfx identity import icpscan identity.pem`
+ Switching the imported developer identity,`sudo dfx identity use icpscan`
+ Check whether the principals of the two computers are the same,`sudo dfx identity get-principal `
+ Execute on the computer before backup `dfx identity --network ic get-wallet ` 
+ Then set the wallet canister obtained in the previous step  ` sudo dfx identity --network ic set-wallet --force smk67-5iaaa-aaaah-qabzq-cai`
+ Run the command to get the controllers：`sudo dfx wallet --network ic controllers` 
+ Adding a local controller to the migrated canister via NNS authorizes multiple controllers to operate the current, canister_id`sznps-4aaaa-aaaah-qab2a-cai `
+ Test if the deployed canister ids are consistent, `sudo dfx deploy --no-wallet --network ic