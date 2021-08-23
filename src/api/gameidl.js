export default ({ IDL }) => {
    const Time = IDL.Int;
    const SiteType = IDL.Variant({
      'low' : IDL.Null,
      'mid' : IDL.Null,
      'high' : IDL.Null,
    });
    const CardsType = IDL.Variant({
      'flush' : IDL.Null,
      'fullhouse' : IDL.Null,
      'straight' : IDL.Null,
      'pair' : IDL.Null,
      'trip' : IDL.Null,
      'strightflush' : IDL.Null,
      'highcard' : IDL.Null,
      'twopair' : IDL.Null,
      'quards' : IDL.Null,
    });
    const Address = IDL.Text;
    const RewardDetail = IDL.Record({
      'reward' : IDL.Nat,
      'boardCards' : IDL.Vec(IDL.Text),
      'cardsType' : CardsType,
      'holeCards' : IDL.Vec(IDL.Text),
      'cards' : IDL.Vec(IDL.Text),
      'fold' : IDL.Bool,
      'actions' : IDL.Vec(IDL.Vec(IDL.Text)),
      'score' : IDL.Nat,
      'account' : Address,
    });
    const TexasGameEndEventRecord = IDL.Record({
      'table' : IDL.Nat,
      'site' : SiteType,
      'timestamp' : Time,
      'rewards' : IDL.Vec(RewardDetail),
      'index' : IDL.Nat,
    });
    const TexasGameEndEventRecordResp = TexasGameEndEventRecord;
    return IDL.Service({
      'acceptCycles' : IDL.Func([], [IDL.Nat], []),
      'createTime' : IDL.Func([], [Time], ['query']),
      'gameAmount' : IDL.Func([], [IDL.Nat], ['query']),
      'getAllTGameDetails' : IDL.Func(
          [],
          [IDL.Vec(TexasGameEndEventRecordResp)],
          ['query'],
        ),
      'getCycles' : IDL.Func([], [IDL.Nat], ['query']),
      'getGameDetailByTx' : IDL.Func(
          [IDL.Nat],
          [IDL.Opt(TexasGameEndEventRecordResp)],
          ['query'],
        ),
      'getGameDetailsOf' : IDL.Func(
          [Address],
          [IDL.Vec(TexasGameEndEventRecordResp)],
          ['query'],
        ),
      'handleGameEndEvent' : IDL.Func(
          [SiteType, IDL.Nat, IDL.Vec(RewardDetail), Time],
          [IDL.Bool],
          [],
        ),
      'owner' : IDL.Func([], [IDL.Principal], ['query']),
      'setOwner' : IDL.Func([IDL.Text], [IDL.Bool], []),
    });
  };
  export const init = ({ IDL }) => { return []; };