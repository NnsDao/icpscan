export default ({ IDL }) => {
    const Operation = IDL.Variant({
      'burn' : IDL.Null,
      'init' : IDL.Null,
      'mint' : IDL.Null,
      'approve' : IDL.Null,
      'transfer' : IDL.Null,
    });
    const Time = IDL.Int;
    const OpRecord = IDL.Record({
      'op' : Operation,
      'to' : IDL.Opt(IDL.Principal),
      'fee' : IDL.Nat,
      'from' : IDL.Opt(IDL.Principal),
      'timestamp' : Time,
      'caller' : IDL.Principal,
      'index' : IDL.Nat,
      'amount' : IDL.Nat,
    });
    const Metadata = IDL.Record({
      'fee' : IDL.Nat,
      'holderNumber' : IDL.Nat,
      'burnable' : IDL.Bool,
      'decimals' : IDL.Nat,
      'deployTime' : Time,
      'owner' : IDL.Principal,
      'logo' : IDL.Text,
      'name' : IDL.Text,
      'historySize' : IDL.Nat,
      'totalSupply' : IDL.Nat,
      'mintable' : IDL.Bool,
      'cycles' : IDL.Nat,
      'symbol' : IDL.Text,
      'feeTo' : IDL.Principal,
    });
    return IDL.Service({
      'allHistory' : IDL.Func([], [IDL.Vec(OpRecord)], ['query']),
      'allowance' : IDL.Func(
          [IDL.Principal, IDL.Principal],
          [IDL.Nat],
          ['query'],
        ),
      'approve' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
      'balanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
      'burn' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
      'decimals' : IDL.Func([], [IDL.Nat], ['query']),
      'getAllAccounts' : IDL.Func(
          [],
          [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat))],
          ['query'],
        ),
      'getAllAllowed' : IDL.Func(
          [],
          [
            IDL.Vec(
              IDL.Tuple(IDL.Principal, IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat)))
            ),
          ],
          ['query'],
        ),
      'getAllAllowedNumber' : IDL.Func([], [IDL.Nat], ['query']),
      'getCycles' : IDL.Func([], [IDL.Nat], ['query']),
      'getFee' : IDL.Func([], [IDL.Nat], ['query']),
      'getFeeTo' : IDL.Func([], [IDL.Principal], ['query']),
      'getHistory' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Vec(OpRecord)], ['query']),
      'getHistoryByAccount' : IDL.Func(
          [IDL.Principal],
          [IDL.Vec(OpRecord)],
          ['query'],
        ),
      'getHistoryByIndex' : IDL.Func([IDL.Nat], [OpRecord], ['query']),
      'getHolderNumber' : IDL.Func([], [IDL.Nat], ['query']),
      'getMetadata' : IDL.Func([], [Metadata], ['query']),
      'getSomeAllowed' : IDL.Func(
          [IDL.Principal],
          [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat))],
          ['query'],
        ),
      'getSomeAllowedNumber' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
      'getUserHistory' : IDL.Func(
          [IDL.Principal, IDL.Nat, IDL.Nat],
          [IDL.Vec(OpRecord)],
          ['query'],
        ),
      'getUserOpAmount' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
      'logo' : IDL.Func([], [IDL.Text], ['query']),
      'mint' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
      'name' : IDL.Func([], [IDL.Text], ['query']),
      'owner' : IDL.Func([], [IDL.Principal], ['query']),
      'setBurnable' : IDL.Func([IDL.Bool], [IDL.Bool], []),
      'setFee' : IDL.Func([IDL.Nat], [IDL.Bool], []),
      'setFeeTo' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'setLogo' : IDL.Func([IDL.Text], [IDL.Bool], []),
      'setMintable' : IDL.Func([IDL.Bool], [IDL.Bool], []),
      'symbol' : IDL.Func([], [IDL.Text], ['query']),
      'totalSupply' : IDL.Func([], [IDL.Nat], ['query']),
      'transfer' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
      'transferFrom' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Nat],
          [IDL.Bool],
          [],
        ),
    });
  };
  export const init = ({ IDL }) => { return []; };