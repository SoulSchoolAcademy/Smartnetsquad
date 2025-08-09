import SmartBeat from '../components/SmartBeat'
import Tile from '../components/Tile'
import CommandBar from '../components/CommandBar'
import Pipeline from '../components/Pipeline'

export default function Home(){
  const steps = [
    {label:'Understand', status:'ready'},
    {label:'Plan', status:'ready'},
    {label:'Scaffold', status:'ready'},
    {label:'Test', status:'ready'},
    {label:'Preview', status:'ready'},
    {label:'Ship', status:'ready'},
  ]
  return (
    <main>
      <div className="grid">
        <div className="card full">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
            <div>
              <div style={{fontWeight:700,fontSize:18}}>Command Station — Naya Squad</div>
              <div style={{opacity:.85,fontSize:12}}>Speak it. See it. Ship it.</div>
            </div>
            <div className="row" style={{display:'flex',gap:8}}>
              <button className="mic">🎙️ Voice</button>
              <CommandBar />
            </div>
          </div>
        </div>

        <Tile title="SmartBeat">
          <SmartBeat />
        </Tile>

        <Tile title="Pipeline">
          <Pipeline steps={steps} />
        </Tile>

        <Tile title="Activity Stream" />
        <Tile title="Deploy Center" />
        <Tile title="Shortcuts" />
      </div>
    </main>
  )
}
