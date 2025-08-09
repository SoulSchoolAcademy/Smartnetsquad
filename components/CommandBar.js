import { useState } from 'react'

export default function CommandBar(){
  const [open,setOpen] = useState(false)
  const [cmd,setCmd] = useState('Generate SmartEvents with tickets + Stripe + SMS reminders')

  function run(){
    alert('Planner would interpret:\n' + cmd + '\n→ draft SmartSpec → plan → sandbox build')
  }

  return (
    <>
      <button className="primary" onClick={()=>setOpen(true)}>Open Command Palette</button>
      {open && (
        <div className="overlay" onClick={()=>setOpen(false)}>
          <div className="sheet" onClick={e=>e.stopPropagation()}>
            <div className="row" style={{justifyContent:'space-between'}}>
              <b>Command Palette</b>
              <button onClick={()=>setOpen(false)}>✕</button>
            </div>
            <div className="row" style={{marginTop:12}}>
              <input style={{flex:1,background:'#0b0b10',color:'#fff',border:'1px solid #1f1f23',borderRadius:10,padding:'10px'}}
                     value={cmd} onChange={e=>setCmd(e.target.value)} />
              <button className="primary" onClick={run}>Plan</button>
            </div>
            <div style={{opacity:.8,fontSize:12,marginTop:8}}>Tip: Try “Create SmartRooms with chat, presence, file‑share.”</div>
          </div>
        </div>
      )}
    </>
  )
}
