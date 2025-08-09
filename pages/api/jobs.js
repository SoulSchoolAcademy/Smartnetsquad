export default function handler(req,res){
  res.status(200).json({
    queue: [
      {id:'job_123', task:'Scaffold SmartEvents', status:'queued'},
      {id:'job_124', task:'Run E2E tests', status:'queued'}
    ]
  })
}
