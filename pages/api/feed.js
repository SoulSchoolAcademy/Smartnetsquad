export default function handler(req,res){
  res.status(200).json({
    items: [
      { id:1, type:'deploy', text:'Command Station v1.1 scaffold created' },
      { id:2, type:'event', text:'Planner ready to parse SmartSpec' },
      { id:3, type:'wallet', text:'Stripe/Clerk stubs prepared' }
    ]
  })
}
