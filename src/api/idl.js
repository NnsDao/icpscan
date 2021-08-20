export default ({ IDL }) => {
    const Address = IDL.Text;
    const Allowance = IDL.Tuple(Address, IDL.Nat64);
    const UserAllowances = IDL.Tuple(Address, IDL.Vec(Allowance));
    const UserBalance = IDL.Tuple(Address, IDL.Nat64);
    const Time = IDL.Int;
    const TokenMetaData = IDL.Record({
      'features' : IDL.Vec(IDL.Text),
      'name' : IDL.Text,
      'decimal' : IDL.Nat8,
      'symbol' : IDL.Text,
    });
    return IDL.Service({
      'acceptCycles' : IDL.Func([], [IDL.Nat], []),
      'addressCount' : IDL.Func([], [IDL.Nat], ['query']),
      'addressOf' : IDL.Func([IDL.Text], [Address], ['query']),
      'allowance' : IDL.Func([Address, Address], [IDL.Nat64], ['query']),
      'allowanceOf' : IDL.Func([Address, Address], [IDL.Nat64], ['query']),
      'allowances' : IDL.Func([], [IDL.Vec(UserAllowances)], ['query']),
      'allowancesOf' : IDL.Func([Address], [IDL.Vec(Allowance)], ['query']),
      'approve' : IDL.Func([Address, IDL.Nat64], [IDL.Bool], []),
      'balanceOf' : IDL.Func([Address], [IDL.Nat64], ['query']),
      'balances' : IDL.Func([], [IDL.Vec(UserBalance)], ['query']),
      'balancesOf' : IDL.Func(
          [IDL.Vec(Address)],
          [IDL.Vec(IDL.Nat64)],
          ['query'],
        ),
      'burn' : IDL.Func([Address, IDL.Nat64], [IDL.Bool], []),
      'createTime' : IDL.Func([], [Time], ['query']),
      'decimals' : IDL.Func([], [IDL.Nat8], ['query']),
      'endMint' : IDL.Func([], [IDL.Bool], []),
      'getChargeFeeFromWhiteList' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
      'getChargeFeeToWhiteList' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
      'getCycles' : IDL.Func([], [IDL.Nat], ['query']),
      'getFeePercent' : IDL.Func([], [IDL.Float64], ['query']),
      'lastMintTime' : IDL.Func([], [Time], ['query']),
      'lastMintTimeOf' : IDL.Func([Address], [Time], ['query']),
      'meta' : IDL.Func([], [TokenMetaData], ['query']),
      'metadata' : IDL.Func([], [TokenMetaData], ['query']),
      'mint' : IDL.Func([], [IDL.Bool], []),
      'mintCount' : IDL.Func([], [IDL.Nat], ['query']),
      'name' : IDL.Func([], [IDL.Text], ['query']),
      'owner' : IDL.Func([], [IDL.Principal], ['query']),
      'setChargeFeeFromWhiteList' : IDL.Func([IDL.Text], [IDL.Bool], []),
      'setChargeFeeToWhiteList' : IDL.Func([IDL.Text], [IDL.Bool], []),
      'setFeePercent' : IDL.Func([IDL.Float64], [IDL.Bool], []),
      'setOwner' : IDL.Func([IDL.Text], [IDL.Bool], []),
      'subscribeTokenEventHandler' : IDL.Func([IDL.Text], [IDL.Bool], []),
      'symbol' : IDL.Func([], [IDL.Text], ['query']),
      'tokenEventHandlers' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
      'tokenEventLoggerCanisterIDS' : IDL.Func(
          [],
          [IDL.Vec(IDL.Principal)],
          ['query'],
        ),
      'totalMint' : IDL.Func([], [IDL.Nat64], ['query']),
      'totalSupply' : IDL.Func([], [IDL.Nat64], ['query']),
      'totalUsers' : IDL.Func([], [IDL.Nat], ['query']),
      'transfer' : IDL.Func([Address, IDL.Nat64], [IDL.Bool], []),
      'transferFrom' : IDL.Func([Address, Address, IDL.Nat64], [IDL.Bool], []),
      'unsubscribeTokenEventHandler' : IDL.Func([IDL.Text], [IDL.Bool], []),
    });
  };
  export const init = ({ IDL }) => { return []; };