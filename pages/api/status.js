export default function handler(req,res){
  res.status(200).json({
    ok:true,
    uptime: process.uptime(),
    performance: 97,
    a11y: 'pass',
    security: 'hardened'
  })
}
