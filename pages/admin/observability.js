export default function Observability(){
  const rows = [
    ['2025-08-09 10:12:33','INFO','Preview created for SmartEvents'],
    ['2025-08-09 10:12:41','WARN','Retrying stripe webhook verify'],
    ['2025-08-09 10:13:02','INFO','Canary 5% healthy']
  ]
  return (
    <main>
      <div className="grid">
        <div className="card full">
          <b>Observability</b>
          <table className="table" style={{marginTop:10}}>
            <thead><tr><th>Time</th><th>Level</th><th>Message</th></tr></thead>
            <tbody>
              {rows.map((r,i)=>(<tr key={i}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
