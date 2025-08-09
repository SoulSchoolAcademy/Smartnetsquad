export default function handler(req,res){
  res.status(200).json({ ok:true, result:'Canary launched at 5% — monitoring SLOs' })
}
