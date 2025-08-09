export default function AgentList({agents}){
  return (
    <table className="table">
      <thead><tr><th>Agent</th><th>Purpose</th><th>Status</th></tr></thead>
      <tbody>
        {agents.map(a=>(
          <tr key={a.id}>
            <td>{a.name}</td>
            <td>{a.role}</td>
            <td>{a.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
