export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'POST only'})
  const { spec } = req.body||{}
  if(!spec) return res.status(400).json({error:'Missing spec'})
  // Fake-plan for now
  const plan = {
    steps: ['Understand','Plan','Scaffold','Test','Preview','Ship'],
    result: 'Plan created. Ready to scaffold in sandbox.'
  }
  res.status(200).json({ ok:true, plan })
}
