export default ({ IDL }) => {
    const PairInfoExt = IDL.Record({
      'id' : IDL.Text,
      'creator' : IDL.Principal,
      'reserve0' : IDL.Nat,
      'reserve1' : IDL.Nat,
      'lptoken' : IDL.Text,
      'totalSupply' : IDL.Nat,
      'token0' : IDL.Principal,
      'token1' : IDL.Principal,
      'kLast' : IDL.Nat,
    });
    const TokenInfoExt = IDL.Record({
      'id' : IDL.Text,
      'decimals' : IDL.Nat,
      'owner' : IDL.Principal,
      'name' : IDL.Text,
      'totalSupply' : IDL.Nat,
      'symbol' : IDL.Text,
    });
    const DSwapInfo = IDL.Record({
      'storageCanisterId' : IDL.Principal,
      'owner' : IDL.Principal,
      'cycles' : IDL.Nat,
      'tokens' : IDL.Vec(TokenInfoExt),
      'pairs' : IDL.Vec(PairInfoExt),
    });
    const UserInfo = IDL.Record({
      'lpBalances' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat)),
      'balances' : IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat)),
    });
    return IDL.Service({
      'addLiquidity' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Nat, IDL.Nat, IDL.Nat, IDL.Nat],
          [IDL.Bool],
          [],
        ),
      'allowance' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Principal],
          [IDL.Nat],
          ['query'],
        ),
      'approve' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Nat],
          [IDL.Bool],
          [],
        ),
      'balanceOf' : IDL.Func(
          [IDL.Principal, IDL.Principal],
          [IDL.Nat],
          ['query'],
        ),
      'createDtoken' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'createPair' : IDL.Func([IDL.Principal, IDL.Principal], [IDL.Bool], []),
      'decimals' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
      'deposit' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
      'depositTo' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Nat],
          [IDL.Bool],
          [],
        ),
      'getAllPairs' : IDL.Func([], [IDL.Vec(PairInfoExt)], ['query']),
      'getDSwapInfo' : IDL.Func([], [DSwapInfo], ['query']),
      'getNumPairs' : IDL.Func([], [IDL.Nat], ['query']),
      'getPair' : IDL.Func(
          [IDL.Principal, IDL.Principal],
          [IDL.Opt(PairInfoExt)],
          ['query'],
        ),
      'getSupportedTokenList' : IDL.Func([], [IDL.Vec(TokenInfoExt)], ['query']),
      'getTokenId' : IDL.Func(
          [IDL.Principal, IDL.Principal],
          [IDL.Text],
          ['query'],
        ),
      'getUserBalances' : IDL.Func(
          [IDL.Principal],
          [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat))],
          ['query'],
        ),
      'getUserInfo' : IDL.Func([IDL.Principal], [UserInfo], ['query']),
      'getUserLPBalances' : IDL.Func(
          [IDL.Principal],
          [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
          ['query'],
        ),
      'lpAllowance' : IDL.Func(
          [IDL.Text, IDL.Principal, IDL.Principal],
          [IDL.Nat],
          ['query'],
        ),
      'lpApprove' : IDL.Func([IDL.Text, IDL.Principal, IDL.Nat], [IDL.Bool], []),
      'lpBalanceOf' : IDL.Func([IDL.Text, IDL.Principal], [IDL.Nat], ['query']),
      'lpDecimals' : IDL.Func([IDL.Text], [IDL.Nat], ['query']),
      'lpName' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
      'lpSymbol' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
      'lpTotalSupply' : IDL.Func([IDL.Text], [IDL.Nat], ['query']),
      'lpTransfer' : IDL.Func([IDL.Text, IDL.Principal, IDL.Nat], [IDL.Bool], []),
      'lpTransferFrom' : IDL.Func(
          [IDL.Text, IDL.Principal, IDL.Principal, IDL.Nat],
          [IDL.Bool],
          [],
        ),
      'name' : IDL.Func([IDL.Principal], [IDL.Text], ['query']),
      'removeLiquidity' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Nat],
          [IDL.Bool],
          [],
        ),
      'setEveryoneCanAdd' : IDL.Func([IDL.Bool], [IDL.Bool], []),
      'setFeeOn' : IDL.Func([IDL.Bool], [IDL.Bool], []),
      'setFeeTo' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'setMaxTokens' : IDL.Func([IDL.Nat], [IDL.Bool], []),
      'setStorageCanisterId' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'swap' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Nat, IDL.Nat],
          [IDL.Bool],
          [],
        ),
      'swapExactTokensForTokens' : IDL.Func(
          [IDL.Nat, IDL.Nat, IDL.Vec(IDL.Principal)],
          [IDL.Bool],
          [],
        ),
      'swapTokensForExactTokens' : IDL.Func(
          [IDL.Nat, IDL.Nat, IDL.Vec(IDL.Principal)],
          [IDL.Bool],
          [],
        ),
      'symbol' : IDL.Func([IDL.Principal], [IDL.Text], ['query']),
      'totalSupply' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
      'transfer' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Nat],
          [IDL.Bool],
          [],
        ),
      'transferFrom' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Principal, IDL.Nat],
          [IDL.Bool],
          [],
        ),
      'withdraw' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
      'withdrawTo' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Nat],
          [IDL.Bool],
          [],
        ),
    });
  };
  export const init = ({ IDL }) => { return []; };