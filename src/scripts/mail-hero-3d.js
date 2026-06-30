import * as THREE from 'three';

export function initMailScene(container) {
  const width = container.clientWidth;
  const height = container.clientHeight;
  if (width === 0 || height === 0) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 200);
  camera.position.set(0, 4, 18);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.left = '0';

  const ambient = new THREE.AmbientLight(0x404060, 0.5);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2);
  keyLight.position.set(5, 10, 7);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xa855f7, 0.8);
  fillLight.position.set(-5, 3, -5);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.4);
  rimLight.position.set(0, -5, -10);
  scene.add(rimLight);

  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  const mailMat = new THREE.MeshPhysicalMaterial({
    color: 0x7c3aed,
    metalness: 0.1,
    roughness: 0.3,
    emissive: 0x7c3aed,
    emissiveIntensity: 0.05,
    clearcoat: 0.3,
  });

  const bodyGeo = new THREE.BoxGeometry(3.2, 2.4, 0.15);
  const body = new THREE.Mesh(bodyGeo, mailMat);
  mainGroup.add(body);

  const flapMat = new THREE.MeshPhysicalMaterial({
    color: 0x6d28d9,
    metalness: 0.05,
    roughness: 0.4,
    side: THREE.DoubleSide,
  });
  const flapShape = new THREE.Shape();
  flapShape.moveTo(-1.6, 0);
  flapShape.lineTo(1.6, 0);
  flapShape.lineTo(0, 1.4);
  flapShape.closePath();
  const flapGeo = new THREE.ShapeGeometry(flapShape);
  const flap = new THREE.Mesh(flapGeo, flapMat);
  flap.position.z = 0.1;
  flap.position.y = 1.2;
  mainGroup.add(flap);

  const glowRing = new THREE.Mesh(
    new THREE.RingGeometry(2.2, 2.6, 48),
    new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false })
  );
  glowRing.rotation.x = -Math.PI / 3;
  glowRing.position.y = -0.2;
  mainGroup.add(glowRing);

  const glowRing2 = new THREE.Mesh(
    new THREE.RingGeometry(3, 3.4, 48),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false })
  );
  glowRing2.rotation.x = -Math.PI / 3;
  glowRing2.position.y = -0.2;
  mainGroup.add(glowRing2);

  const particleCount = 600;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const r = 5 + Math.random() * 12;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI - Math.PI / 2;
    positions[i * 3] = r * Math.cos(theta) * Math.cos(phi);
    positions[i * 3 + 1] = r * Math.sin(phi) * 2;
    positions[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi);
    const c = new THREE.Color().setHSL(0.75 + Math.random() * 0.15, 0.8, 0.5 + Math.random() * 0.3);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const particleMat = new THREE.PointsMaterial({
    size: 0.12,
    transparent: true,
    opacity: 0.7,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  const floatingGeo = [
    new THREE.TorusGeometry(0.3, 0.08, 8, 12),
    new THREE.OctahedronGeometry(0.25),
    new THREE.IcosahedronGeometry(0.2),
  ];
  const floatingMat = new THREE.MeshPhysicalMaterial({
    color: 0xa855f7,
    transparent: true,
    opacity: 0.3,
    metalness: 0.2,
    roughness: 0.4,
  });
  const floaters = [];
  for (let i = 0; i < 12; i++) {
    const geo = floatingGeo[i % floatingGeo.length];
    const mat = floatingMat.clone();
    mat.color.setHSL(0.73 + Math.random() * 0.15, 0.8, 0.5);
    const mesh = new THREE.Mesh(geo, mat);
    const r = 2.5 + Math.random() * 4;
    const angle = Math.random() * Math.PI * 2;
    mesh.position.set(r * Math.cos(angle), (Math.random() - 0.5) * 3, r * Math.sin(angle));
    mesh.userData = {
      speed: 0.2 + Math.random() * 0.4,
      floatOffset: Math.random() * Math.PI * 2,
      rotSpeed: { x: (Math.random() - 0.5) * 0.02, y: (Math.random() - 0.5) * 0.02 },
      radius: r,
      angle: angle,
    };
    scene.add(mesh);
    floaters.push(mesh);
  }

  let time = 0;
  let animationId;

  function animate() {
    animationId = requestAnimationFrame(animate);
    time += 0.008;

    mainGroup.rotation.y = time * 0.15;
    mainGroup.position.y = Math.sin(time * 0.5) * 0.3;

    flap.rotation.z = Math.sin(time * 0.8) * 0.15;

    glowRing.material.opacity = 0.2 + Math.sin(time * 0.6) * 0.1;
    glowRing2.material.opacity = 0.1 + Math.sin(time * 0.6 + 1) * 0.06;

    particles.rotation.y = time * 0.02;
    particles.rotation.x = Math.sin(time * 0.01) * 0.05;

    floaters.forEach(f => {
      const d = f.userData;
      d.angle += d.speed * 0.005;
      f.position.x = d.radius * Math.cos(d.angle + time * 0.1);
      f.position.z = d.radius * Math.sin(d.angle + time * 0.1);
      f.position.y += Math.sin(time * d.speed + d.floatOffset) * 0.003;
      f.rotation.x += d.rotSpeed.x;
      f.rotation.y += d.rotSpeed.y;
    });

    renderer.render(scene, camera);
  }

  animate();

  const resizeObserver = new ResizeObserver(() => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w === 0 || h === 0) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  resizeObserver.observe(container);

  return () => {
    resizeObserver.disconnect();
    cancelAnimationFrame(animationId);
    renderer.dispose();
    scene.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (obj.material.map) obj.material.map.dispose();
        obj.material.dispose();
      }
    });
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
}
