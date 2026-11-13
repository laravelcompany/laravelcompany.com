import { processProgress, processState } from './process-progress.js';

export function initProcessScroll() {
  const root = document.querySelector('[data-process]');
  if (!root) return () => {};
  const media = matchMedia('(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)');
  const steps = [...root.querySelectorAll('[data-process-step]')];
  const tiles = [...root.querySelectorAll('[data-process-tile]')];
  let frame = 0;
  let visible = true;
  const update = () => {
    frame = 0;
    if (!media.matches) return;
    const { progress, stage, assembly } = processState(processProgress(root.getBoundingClientRect().top, root.offsetHeight, innerHeight));
    root.style.setProperty('--process-progress', progress.toFixed(4));
    root.style.setProperty('--app-opacity', String(Math.min(1, Math.max(.08, (progress - .42) / .38))));
    root.style.setProperty('--tunnel-opacity', String(1 - Math.min(1, Math.max(0, (progress - .65) / .3))));
    root.dispatchEvent(new CustomEvent('process:progress', { detail: progress }));
    steps.forEach((step, index) => step.classList.toggle('is-current', index === stage));
    tiles.forEach((tile, index) => {
      const t = Math.min(1, Math.max(0, (assembly - index * 0.035) / 0.82));
      const eased = 1 - Math.pow(1 - t, 3);
      tile.style.setProperty('--scatter', (1 - eased).toFixed(4));
      const visual=root.querySelector('.process-visual');
      const q=Math.min(1,Math.max(0,(progress-index*.035)/.72));
      const entry=Math.min(1,q/.56), exit=Math.max(0,(q-.56)/.44);
      const ease=1-Math.pow(1-exit,3);
      const width=visual.clientWidth,height=visual.clientHeight;
      const centerX=width*(index%2===0?.17:-.24);
      const centerY=height*(index<2?.13:-.08);
      const dx=parseFloat(tile.style.getPropertyValue('--dx'));
      const dy=parseFloat(tile.style.getPropertyValue('--dy'));
      const x=q<.56?dx+(centerX-dx)*entry:centerX*(1-ease);
      const y=q<.56?dy+(centerY-dy)*entry:centerY*(1-ease);
      const scale=q<.56?1-entry*.75:.25+ease*.75;
      tile.style.setProperty('--drop-x',`${x.toFixed(2)}px`);
      tile.style.setProperty('--drop-y',`${y.toFixed(2)}px`);
      tile.style.setProperty('--drop-scale',scale.toFixed(4));
      tile.style.setProperty('--drop-opacity',String(.45+scale*.55));
      tile.style.setProperty('--drop-angle',`${(Math.sin(q*Math.PI*2+index)*18*(1-ease)).toFixed(2)}deg`);
    });
    root.querySelector('.caption-index').textContent = `0${stage + 1} / 03`;
    root.querySelector('[data-process-stage]').textContent = ['Discover the right problem.', 'Build it on solid ground.', 'Ready for what comes next.'][stage];
  };
  const schedule = () => { if (!frame && visible && media.matches) frame = requestAnimationFrame(update); };
  const toggle = () => {
    root.classList.toggle('process-enhanced', media.matches);
    if (!media.matches) {
      tiles.forEach(tile => tile.style.removeProperty('--scatter'));
      steps.forEach(step => step.classList.remove('is-current'));
      root.querySelector('[data-process-stage]').textContent = 'Ready for what comes next.';
      root.querySelector('.caption-index').textContent = '03 / 03';
    }
    schedule();
  };
  const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) schedule(); }, { rootMargin: '100px' });
  observer.observe(root);
  root.addEventListener('process:tunnel-ready',schedule);
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  media.addEventListener('change', toggle);
  toggle();
  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    root.removeEventListener('process:tunnel-ready',schedule);
    removeEventListener('scroll', schedule);
    removeEventListener('resize', schedule);
    media.removeEventListener('change', toggle);
    root.classList.remove('process-enhanced');
  };
}
let cleanup = () => {};
const mount = () => { cleanup(); cleanup = initProcessScroll(); };
mount();
document.addEventListener('astro:page-load', mount);
document.addEventListener('astro:before-swap', () => cleanup());
