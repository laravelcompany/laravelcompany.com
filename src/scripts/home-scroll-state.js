import { clamp } from './process-progress.js';
export function sceneProgress(top, height, viewport) {
  if (![top,height,viewport].every(Number.isFinite) || height<=0 || viewport<=0) return 1;
  return clamp((viewport * .95 - top) / Math.min(viewport * .8, height + viewport * .25));
}
export function itemMotion(kind, progress, index, count) {
  const p=clamp((progress-index*.055)/.8);
  const rest=Math.pow(1-p,3);
  const direction=index-(count-1)/2;
  return { x:kind==='specialists'?(direction*70*rest || 0):0,
    y:(kind==='cta'?70:110)*rest,
    angle:kind==='specialists'?(direction*7*rest || 0):0,
    scale:1-(kind==='cta'?.09:.035)*rest,
    opacity:1-.18*rest };
}
