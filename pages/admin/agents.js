import AgentList from '../../components/AgentList'

export async function getServerSideProps(){
  // Static demo payload for now
  const agents = [
    {id:'architect', name:'Architect Naya', role:'System architecture & spec', status:'idle'},
    {id:'scaffolder', name:'Scaffolder Naya', role:'Templates & codegen', status:'idle'},
    {id:'coder', name:'Coder Naya', role:'Feature implementation', status:'idle'},
    {id:'qa', name:'QA Naya', role:'Tests & quality gates', status:'idle'},
    {id:'sre', name:'SRE Naya', role:'Observability & reliability', status:'idle'},
    {id:'deployer', name:'Deployer Naya', role:'Preview & ship', status:'idle'}
  ]
  return { props:{ agents } }
}

export default function Agents({agents}){
  return (
    <main>
      <div className="grid">
        <div className="card full">
          <b>Naya Squad</b>
          <div style={{marginTop:8}}>
            <AgentList agents={agents} />
          </div>
        </div>
      </div>
    </main>
  )
}
