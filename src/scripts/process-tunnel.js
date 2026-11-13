let cleanup=()=>{};
async function mount(){
  cleanup();
  const root=document.querySelector('[data-process]');
  if(!root)return;
  const canvas=root.querySelector('[data-process-tunnel]');
  const media=matchMedia('(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)');
  let disposed=false,renderer,scene,camera,group,observer,frame=0,visible=false,progress=0;
  const resources=[];
  const render=()=>{frame=0;if(renderer&&visible&&media.matches)renderer.render(scene,camera)};
  const schedule=()=>{if(!frame&&visible&&media.matches)frame=requestAnimationFrame(render)};
  const update=event=>{
    progress=event.detail;
    if(group){group.rotation.x=-.2+progress*.65;group.rotation.z=-.18+progress*.34;group.rotation.y=progress*.35;group.position.y=.3-progress*.25;schedule()}
  };
  const resize=()=>{if(!renderer)return;const box=canvas.getBoundingClientRect();if(!box.width||!box.height)return;renderer.setSize(box.width,box.height,false);camera.aspect=box.width/box.height;camera.updateProjectionMatrix();schedule()};
  async function enable(){
    if(!media.matches){canvas.classList.remove('is-ready');root.classList.remove('tunnel-ready');return}
    if(renderer){canvas.classList.add('is-ready');root.classList.add('tunnel-ready');resize();root.dispatchEvent(new Event('process:tunnel-ready'));return}
    try{
      const THREE=await import('three');if(disposed||!media.matches)return;
      renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
      scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.set(0,4.4,7.4);camera.lookAt(0,-.25,0);
      group=new THREE.Group();scene.add(group);
      // Original radial surface: concentric rings narrow into a deep throat.
      const surface=(t,a)=>{const r=.23+2.6*Math.pow(t,1.9);return new THREE.Vector3(r*Math.cos(a),-2.8*(1-t),r*Math.sin(a))};
      const pink=new THREE.LineBasicMaterial({color:0xc58aff,transparent:true,opacity:.5});const purple=new THREE.LineBasicMaterial({color:0x9863ed,transparent:true,opacity:.35});resources.push(pink,purple);
      for(let j=0;j<30;j++){const t=j/29;const points=[];for(let k=0;k<=120;k++)points.push(surface(t,k/120*Math.PI*2));const g=new THREE.BufferGeometry().setFromPoints(points);resources.push(g);group.add(new THREE.Line(g,j%4===0?pink:purple))}
      for(let k=0;k<48;k++){const a=k/48*Math.PI*2;const points=[];for(let j=0;j<=60;j++)points.push(surface(j/60,a));const g=new THREE.BufferGeometry().setFromPoints(points);resources.push(g);group.add(new THREE.Line(g,k%6===0?pink:purple))}
      canvas.classList.add('is-ready');root.classList.add('tunnel-ready');resize();root.dispatchEvent(new Event('process:tunnel-ready'));update({detail:progress});
    }catch{canvas.classList.remove('is-ready');root.classList.remove('tunnel-ready');root.style.setProperty('--app-opacity','1')}
  }
  observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){enable();schedule()}},{rootMargin:'150px'});observer.observe(root);
  root.addEventListener('process:progress',update);addEventListener('resize',resize,{passive:true});media.addEventListener('change',enable);
  cleanup=()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();root.removeEventListener('process:progress',update);removeEventListener('resize',resize);media.removeEventListener('change',enable);resources.forEach(r=>r.dispose());renderer?.dispose();canvas.classList.remove('is-ready');root.classList.remove('tunnel-ready')};
}
mount();document.addEventListener('astro:page-load',mount);document.addEventListener('astro:before-swap',()=>cleanup());
