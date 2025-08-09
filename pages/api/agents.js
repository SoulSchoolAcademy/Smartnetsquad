export default function handler(req,res){
  res.status(200).json([
    {id:'architect', name:'Architect Naya', role:'System architecture & spec', status:'idle'},
    {id:'scaffolder', name:'Scaffolder Naya', role:'Templates & codegen', status:'idle'},
    {id:'coder', name:'Coder Naya', role:'Feature implementation', status:'idle'},
    {id:'qa', name:'QA Naya', role:'Tests & quality gates', status:'idle'},
    {id:'sre', name:'SRE Naya', role:'Observability & reliability', status:'idle'},
    {id:'deployer', name:'Deployer Naya', role:'Preview & ship', status:'idle'}
  ])
}
