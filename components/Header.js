export default function Header(){
  return (
    <header className="header">
      <div className="brand">
        <div className="logo" />
        <div>
          <div style={{fontWeight:700}}>SmartNet Command Station</div>
          <div style={{fontSize:12,opacity:.8}}>Naya • Master AI • <span className="badge">SmartBeat Live</span></div>
        </div>
      </div>
      <nav className="nav">
        <a href="/">Dashboard</a>
        <a href="/feeds">SmartFeeds</a>
        <a href="/rooms">SmartRooms</a>
        <a href="/events">SmartEvents</a>
        <a href="/market">Marketplace</a>
        <a href="/wallet">Wallet</a>
        <a href="/admin/agents">Agents</a>
        <a href="/admin/pipeline">Pipeline</a>
        <a href="/admin/observability">Observability</a>
        <a href="/admin/flags">Flags</a>
      </nav>
    </header>
  )
}
