import { sceneProgress, itemMotion } from './home-scroll-state.js';
let cleanup=()=>{};
function mount(){
  cleanup();
  const roots=[...document.querySelectorAll('[data-scroll-scene]')];
  if(!roots.length)return;
  const media=matchMedia('(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)');
  const visible=new Set();let frame=0;
  const paint=()=>{frame=0;if(!media.matches)return;for(const root of visible){
    const p=sceneProgress(root.getBoundingClientRect().top,root.offsetHeight,innerHeight);
    const items=[...root.querySelectorAll('[data-scene-item]')];
    const apply=(el,m)=>{el.style.setProperty('--scene-x',`${m.x}px`);el.style.setProperty('--scene-y',`${m.y}px`);el.style.setProperty('--scene-angle',`${m.angle}deg`);el.style.setProperty('--scene-scale',m.scale);el.style.setProperty('--scene-opacity',m.opacity)};
    items.forEach((el,i)=>apply(el,itemMotion(root.dataset.scrollScene,p,i,items.length)));
    root.querySelectorAll('[data-scene-chip]').forEach((el,i)=>apply(el,itemMotion('chip',p,i,6)));
  }};
  const schedule=()=>{if(!frame&&media.matches)frame=requestAnimationFrame(paint)};
  const toggle=()=>{roots.forEach(root=>root.classList.toggle('scene-enhanced',media.matches));schedule()};
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>entry.isIntersecting?visible.add(entry.target):visible.delete(entry.target));schedule()},{rootMargin:'150px'});
  roots.forEach(root=>observer.observe(root));
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule,{passive:true});media.addEventListener('change',toggle);toggle();
  cleanup=()=>{cancelAnimationFrame(frame);observer.disconnect();removeEventListener('scroll',schedule);removeEventListener('resize',schedule);media.removeEventListener('change',toggle);roots.forEach(root=>root.classList.remove('scene-enhanced'))};
}
mount();document.addEventListener('astro:page-load',mount);document.addEventListener('astro:before-swap',()=>cleanup());
