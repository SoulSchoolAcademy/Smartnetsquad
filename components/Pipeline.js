export default function Pipeline({steps}){
  return (
    <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
      {steps.map((s,i)=>(
        <div key={i} style={{padding:'8px 12px',border:'1px solid #1f1f23',borderRadius:10,background:'#121218'}}>
          <b>{s.label}</b> — <span style={{opacity:.8}}>{s.status}</span>
        </div>
      ))}
    </div>
  )
}
