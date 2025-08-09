import Flags from '../../components/Flags'

export default function FlagsPage(){
  const items = [
    {key:'canary_deploys', on:true},
    {key:'smartfeeds_v2', on:false},
    {key:'wallet_beta', on:false},
    {key:'realtime_rooms', on:false}
  ]
  return (
    <main>
      <div className="grid">
        <div className="card full">
          <b>Feature Flags</b>
          <div style={{marginTop:10}}>
            <Flags items={items} />
          </div>
        </div>
      </div>
    </main>
  )
}
