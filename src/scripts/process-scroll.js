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
    steps.forEach((step, index) => step.classList.toggle('is-current', index === stage));
    tiles.forEach((tile, index) => {
      const t = Math.min(1, Math.max(0, (assembly - index * 0.035) / 0.82));
      const eased = 1 - Math.pow(1 - t, 3);
      tile.style.setProperty('--scatter', (1 - eased).toFixed(4));
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
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  media.addEventListener('change', toggle);
  toggle();
  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
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
