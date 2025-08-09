export default function Flags({items}){
  return (
    <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
      {items.map(it=>(
        <div key={it.key} className="toggle">
          <input type="checkbox" defaultChecked={it.on} />
          <span>{it.key}</span>
        </div>
      ))}
    </div>
  )
}
