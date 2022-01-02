export default ({ IDL }) => {
  const BlockIndex = IDL.Nat64;
  const NDP = IDL.Record({ e8s: IDL.Nat64 });
  const TransferError = IDL.Variant({
    TxTooOld: IDL.Record({ allowed_window_nanos: IDL.Nat64 }),
    BadFee: IDL.Record({ expected_fee: NDP }),
    TxDuplicate: IDL.Record({ duplicate_of: BlockIndex }),
    TxCreatedInFuture: IDL.Null,
    InsufficientFunds: IDL.Record({ balance: NDP })
  });
  const TransferResult = IDL.Variant({
    Ok: BlockIndex,
    Err: TransferError
  });
  const Result_2 = IDL.Variant({ ok: IDL.Bool, err: IDL.Text });
  const Balance = IDL.Nat;
  const NDPInfo = IDL.Record({ addr: IDL.Text });
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    principal: IDL.Principal,
    address: AccountIdentifier
  });
  const BalanceRequest = IDL.Record({
    token: TokenIdentifier,
    user: User
  });
  const CommonError = IDL.Variant({
    InvalidToken: TokenIdentifier,
    Other: IDL.Text
  });
  const BalanceResponse = IDL.Variant({ ok: Balance, err: CommonError });
  const Result_3 = IDL.Variant({ ok: IDL.Nat, err: IDL.Text });
  const Extension = IDL.Text;
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpResponse = IDL.Record({
    body: IDL.Vec(IDL.Nat8),
    headers: IDL.Vec(HeaderField),
    status_code: IDL.Nat16
  });
  const Metadata = IDL.Variant({
    fungible: IDL.Record({
      decimals: IDL.Nat8,
      metadata: IDL.Opt(IDL.Vec(IDL.Nat8)),
      name: IDL.Text,
      symbol: IDL.Text
    }),
    nonfungible: IDL.Record({ metadata: IDL.Opt(IDL.Vec(IDL.Nat8)) })
  });
  const Result_1 = IDL.Variant({ ok: Metadata, err: CommonError });
  const Result = IDL.Variant({ ok: Balance, err: CommonError });
  const Memo__1 = IDL.Nat64;
  const AccountIdentifier__1 = IDL.Text;
  const Operation = IDL.Variant({
    Burn: IDL.Record({
      from: AccountIdentifier__1,
      amount: IDL.Record({ e8s: IDL.Nat })
    }),
    Mint: IDL.Record({
      to: AccountIdentifier__1,
      amount: IDL.Record({ e8s: IDL.Nat })
    }),
    Transfer: IDL.Record({
      to: AccountIdentifier__1,
      fee: IDL.Nat,
      from: AccountIdentifier__1,
      amount: IDL.Record({ e8s: IDL.Nat })
    })
  });
  const BlockHeight = IDL.Nat64;
  const Timestamp = IDL.Record({ timestamp_nanos: IDL.Nat64 });
  const Transaction = IDL.Record({
    memo: Memo__1,
    operation: Operation,
    blockHeight: BlockHeight,
    caller: AccountIdentifier__1,
    created_at_time: Timestamp
  });
  const Memo = IDL.Vec(IDL.Nat8);
  const SubAccount = IDL.Vec(IDL.Nat8);
  const TransferRequest = IDL.Record({
    to: User,
    token: TokenIdentifier,
    notify: IDL.Bool,
    from: User,
    memo: Memo,
    subaccount: IDL.Opt(SubAccount),
    amount: Balance
  });
  const TransferResponse = IDL.Variant({
    ok: Balance,
    err: IDL.Variant({
      CannotNotify: AccountIdentifier,
      InsufficientBalance: IDL.Null,
      InvalidToken: TokenIdentifier,
      Rejected: IDL.Null,
      Unauthorized: AccountIdentifier,
      Other: IDL.Text
    })
  });
  return IDL.Service({
    TT: IDL.Func([IDL.Nat64, IDL.Text], [TransferResult], []),
    addClaim: IDL.Func([IDL.Text, IDL.Nat], [Result_2], []),
    addOwner: IDL.Func([IDL.Principal], [Result_2], []),
    allBalances: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Text, Balance))],
      ['query']
    ),
    approve: IDL.Func([], [NDPInfo], []),
    balance: IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    claim: IDL.Func([], [Result_2], []),
    claimCheck: IDL.Func([IDL.Text], [Result_3], ['query']),
    claimStatus: IDL.Func([], [Result_2], ['query']),
    delOwner: IDL.Func([IDL.Principal], [Result_2], []),
    extensions: IDL.Func([], [IDL.Vec(Extension)], ['query']),
    getAccountId: IDL.Func([], [IDL.Text], ['query']),
    getUserIndex: IDL.Func([IDL.Principal], [IDL.Nat64], ['query']),
    http_request: IDL.Func([], [HttpResponse], ['query']),
    metadata: IDL.Func([TokenIdentifier], [Result_1], ['query']),
    mint: IDL.Func([IDL.Text, Balance], [IDL.Bool], []),
    minted: IDL.Func([], [Balance], ['query']),
    owner: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat64))],
      ['query']
    ),
    supply: IDL.Func([TokenIdentifier], [Result], ['query']),
    transactionRecord: IDL.Func([], [IDL.Vec(Transaction)], ['query']),
    transfer: IDL.Func([TransferRequest], [TransferResponse], []),
    userIndexList: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat64))],
      ['query']
    )
  });
};
export const init = ({ IDL }) => {
  return [];
};
