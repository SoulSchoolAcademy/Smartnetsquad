import yaml from 'js-yaml';

export function parseSmartSpec(text){
  try{
    const data = yaml.load(text);
    return { ok:true, data };
  }catch(e){
    return { ok:false, error: String(e) };
  }
}

export function planFromSpec(spec){
  const pages = (spec.pages||[]).map(p => ({ path: p.split(':')[0], kind:'page' }));
  const stack = spec.stack||'next14+node18';
  return { app: spec.app||'Unnamed', pages, stack };
}
