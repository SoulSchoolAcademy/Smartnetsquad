export default function Tile({title, children, actions, span='6'}){
  const cls = 'card' + (span==='12' ? ' full' : '');
  return (
    <div className={cls}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <b>{title}</b>
        <div>{actions}</div>
      </div>
      <div>{children}</div>
    </div>
  )
}
