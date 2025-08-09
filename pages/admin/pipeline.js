import Pipeline from '../../components/Pipeline'

export default function PipelinePage(){
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
          <b>Build Pipeline</b>
          <div style={{marginTop:10}}><Pipeline steps={steps} /></div>
        </div>
      </div>
    </main>
  )
}
