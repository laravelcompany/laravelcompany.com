import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function initHeroScene(container) {
  const width = container.clientWidth;
  const height = container.clientHeight;
  if (width === 0 || height === 0) return;

  const scene = new THREE.Scene();

  const aspect = width / height;

  const camera = new THREE.PerspectiveCamera(30, aspect, 0.1, 500);
  camera.position.set(80, 55, 140);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.left = '0';

  // Lights
  const ambient = new THREE.AmbientLight(0x404060, 0.6);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
  keyLight.position.set(60, 100, 40);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x6c3fff, 0.4);
  fillLight.position.set(-60, 30, -50);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.25);
  rimLight.position.set(0, -20, -100);
  scene.add(rimLight);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.target.set(0, 2, 0);
  controls.minDistance = 60;
  controls.maxDistance = 350;
  controls.maxPolarAngle = Math.PI / 2.1;
  controls.update();

  // ---- Main group ----
  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  // ============================================================
  // 1. GROUND GRID
  // ============================================================
  const groundY = -28;
  const gridGroup = new THREE.Group();
  gridGroup.position.y = groundY;
  worldGroup.add(gridGroup);

  const gridMat = new THREE.LineBasicMaterial({ color: 0x6c3fff, transparent: true, opacity: 0.12 });

  const gridLines = [
    { x: [-90, 90], z: [-70, -70] },
    { x: [-90, 90], z: [-50, -50] },
    { x: [-90, 90], z: [-30, -30] },
    { x: [-90, 90], z: [-10, -10] },
    { x: [-90, 90], z: [10, 10] },
    { x: [-90, 90], z: [30, 30] },
    { x: [-90, 90], z: [50, 50] },
    { x: [-90, 90], z: [70, 70] },
    { z: [-70, 70], x: [-80, -80] },
    { z: [-70, 70], x: [-60, -60] },
    { z: [-70, 70], x: [-40, -40] },
    { z: [-70, 70], x: [-20, -20] },
    { z: [-70, 70], x: [0, 0] },
    { z: [-70, 70], x: [20, 20] },
    { z: [-70, 70], x: [40, 40] },
    { z: [-70, 70], x: [60, 60] },
    { z: [-70, 70], x: [80, 80] },
  ];

  gridLines.forEach(({ x, z }) => {
    const pts = [
      new THREE.Vector3(x[0], 0, z[0]),
      new THREE.Vector3(x[1], 0, z[1])
    ];
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    gridGroup.add(new THREE.Line(geo, gridMat));
  });

  // Diagonal grid lines
  const diagMat = new THREE.LineBasicMaterial({ color: 0x6c3fff, transparent: true, opacity: 0.06 });
  for (let i = 0; i < 6; i++) {
    const x1 = -70 + i * 28;
    const z1 = -60;
    const x2 = -30 + i * 28;
    const z2 = 60;
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x1, 0, z1),
      new THREE.Vector3(x2, 0, z2)
    ]);
    gridGroup.add(new THREE.Line(geo, diagMat));
  }

  // ============================================================
  // 2. ORBITAL RINGS
  // ============================================================
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x6c3fff,
    transparent: true,
    opacity: 0.2,
    side: THREE.DoubleSide,
    depthWrite: false,
  });

  const ring1 = new THREE.Mesh(new THREE.RingGeometry(75, 77, 96), ringMat);
  ring1.rotation.x = Math.PI * 0.38;
  ring1.position.y = 2;
  worldGroup.add(ring1);

  const ring2Mat = ringMat.clone();
  ring2Mat.color.setHex(0x38bdf8);
  ring2Mat.opacity = 0.12;
  const ring2 = new THREE.Mesh(new THREE.RingGeometry(52, 53, 80), ring2Mat);
  ring2.rotation.x = Math.PI * 0.38;
  ring2.position.y = 2;
  worldGroup.add(ring2);

  // ============================================================
  // 3. HEXAGONAL PRISM (orange, center)
  // ============================================================
  const hexRadius = 28;
  const hexHeight = 55;
  const hexGroup = new THREE.Group();
  hexGroup.position.set(0, groundY, 0);
  worldGroup.add(hexGroup);

  const hexGeo = new THREE.CylinderGeometry(hexRadius, hexRadius, hexHeight, 6);
  const hexMat = new THREE.MeshPhongMaterial({
    color: 0xf97316,
    emissive: 0xf97316,
    emissiveIntensity: 0.08,
    flatShading: true,
  });
  const hexBody = new THREE.Mesh(hexGeo, hexMat);
  hexBody.position.y = hexHeight / 2;
  hexBody.castShadow = true;
  hexGroup.add(hexBody);

  const topMat = new THREE.MeshPhongMaterial({
    color: 0xfb923c,
    flatShading: true,
  });
  const topCap = new THREE.Mesh(new THREE.CircleGeometry(hexRadius, 6), topMat);
  topCap.position.y = hexHeight;
  topCap.rotation.x = -Math.PI / 2;
  hexGroup.add(topCap);

  const innerMat = new THREE.MeshPhongMaterial({
    color: 0x1a0a00,
    transparent: true,
    opacity: 0.25,
    flatShading: true,
  });
  const innerHex = new THREE.Mesh(
    new THREE.CylinderGeometry(hexRadius * 0.65, hexRadius * 0.65, hexHeight + 0.5, 6),
    innerMat
  );
  innerHex.position.y = hexHeight / 2;
  hexGroup.add(innerHex);

  const perimPts = [];
  for (let i = 0; i <= 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 6;
    perimPts.push(new THREE.Vector3(
      hexRadius * Math.cos(angle),
      hexHeight,
      hexRadius * Math.sin(angle)
    ));
  }
  const perimLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(perimPts),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25 })
  );
  hexGroup.add(perimLine);

  const midLineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.08 });
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 6;
    const cx = hexRadius * Math.cos(angle);
    const cz = hexRadius * Math.sin(angle);
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(cx, 0, cz),
        new THREE.Vector3(cx, hexHeight, cz)
      ]),
      midLineMat
    );
    hexGroup.add(line);
  }

  // Side face highlights
  const faceMat = new THREE.MeshPhongMaterial({
    color: 0xea580c,
    flatShading: true,
    transparent: true,
    opacity: 0.6,
  });
  for (let side = 0; side < 3; side++) {
    const angle1 = (side / 6) * Math.PI * 2 - Math.PI / 6;
    const angle2 = ((side + 1) / 6) * Math.PI * 2 - Math.PI / 6;
    const shape = new THREE.Shape();
    const r = hexRadius;
    shape.moveTo(r * Math.cos(angle1), 0);
    shape.lineTo(r * Math.cos(angle2), 0);
    shape.lineTo(r * Math.cos(angle2), hexHeight);
    shape.lineTo(r * Math.cos(angle1), hexHeight);
    shape.closePath();

    const sideGeo = new THREE.ShapeGeometry(shape);
    const sideMesh = new THREE.Mesh(sideGeo, faceMat.clone());
    // Align to face (rotate to face outward)
    const midAngle = (angle1 + angle2) / 2;
    sideMesh.rotation.y = -midAngle + Math.PI;
    sideMesh.position.x = 0;
    sideMesh.position.z = 0;
    // Hmm this is getting complicated. Let me use a simpler approach for side highlights.
  }

  // Simpler approach: just use colored side quads
  // Actually, CylinderGeometry already handles sides. Let me just use different materials
  // for different faces via groups. But that's complex. Let me keep the simple approach.

  // ============================================================
  // 4. PURPLE UI CARD (left)
  // ============================================================
  const cardGroup = new THREE.Group();
  cardGroup.position.set(-62, groundY + 1, 12);
  worldGroup.add(cardGroup);

  // Card body
  const cardMat = new THREE.MeshPhongMaterial({
    color: 0x4c1d95,
    flatShading: true,
    emissive: 0x4c1d95,
    emissiveIntensity: 0.05,
  });
  const cardBody = new THREE.Mesh(new THREE.BoxGeometry(38, 52, 0.8), cardMat);
  cardBody.position.z = 0;
  cardGroup.add(cardBody);

  // Card border
  const borderMat = new THREE.MeshBasicMaterial({
    color: 0xa78bfa,
    transparent: true,
    opacity: 0.3,
    wireframe: false,
  });
  const border = new THREE.Mesh(new THREE.BoxGeometry(38.8, 52.8, 0.2), borderMat);
  border.position.z = 0;
  cardGroup.add(border);

  // UI texture
  const uiCanvas = document.createElement('canvas');
  uiCanvas.width = 200;
  uiCanvas.height = 280;
  const ctx = uiCanvas.getContext('2d');

  ctx.fillStyle = '#7c3aed';
  ctx.beginPath();
  ctx.roundRect(0, 0, 200, 25, 8);
  ctx.fill();

  ctx.fillStyle = '#f97316';
  ctx.beginPath();
  ctx.arc(16, 12.5, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.beginPath();
  ctx.roundRect(32, 9, 50, 7, 3);
  ctx.fill();

  const bars = [
    { y: 42, w: 140, opacity: 0.2 },
    { y: 58, w: 100, opacity: 0.12 },
    { y: 74, w: 120, opacity: 0.16 },
    { y: 90, w: 80, opacity: 0.1 },
  ];
  bars.forEach(bar => {
    ctx.fillStyle = `rgba(255,255,255,${bar.opacity})`;
    ctx.beginPath();
    ctx.roundRect(16, bar.y, bar.w, 5, 2);
    ctx.fill();
  });

  ctx.strokeStyle = '#a78bfa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(16, 190);
  ctx.lineTo(40, 170);
  ctx.lineTo(64, 178);
  ctx.lineTo(90, 155);
  ctx.lineTo(114, 142);
  ctx.lineTo(144, 146);
  ctx.stroke();

  const dotColor = '#c4b5fd';
  [[40, 170], [90, 155], [144, 146]].forEach(([x, y]) => {
    ctx.fillStyle = dotColor;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  const uiTexture = new THREE.CanvasTexture(uiCanvas);
  uiTexture.colorSpace = THREE.SRGBColorSpace;
  const uiMat = new THREE.MeshBasicMaterial({ map: uiTexture, transparent: true, depthWrite: false });
  const uiPlane = new THREE.Mesh(new THREE.PlaneGeometry(36, 50), uiMat);
  uiPlane.position.z = 0.5;
  cardGroup.add(uiPlane);

  // ============================================================
  // 5. BLUE CODE TERMINAL (right)
  // ============================================================
  const codeGroup = new THREE.Group();
  codeGroup.position.set(62, groundY + 1, -12);
  worldGroup.add(codeGroup);

  // Main body
  const codeBodyMat = new THREE.MeshPhongMaterial({
    color: 0x1d4ed8,
    flatShading: true,
    emissive: 0x1d4ed8,
    emissiveIntensity: 0.05,
  });
  const codeBody = new THREE.Mesh(new THREE.BoxGeometry(35, 48, 0.8), codeBodyMat);
  codeBody.position.z = 0;
  codeGroup.add(codeBody);

  // Angled top (triangular wedge on top)
  const wedgeShape = new THREE.Shape();
  wedgeShape.moveTo(-17.5, 0);
  wedgeShape.lineTo(17.5, 0);
  wedgeShape.lineTo(17.5, 12);
  wedgeShape.lineTo(-17.5, 0);
  wedgeShape.closePath();

  const wedgeGeo = new THREE.ShapeGeometry(wedgeShape);
  const wedgeMat = new THREE.MeshPhongMaterial({
    color: 0x2563eb,
    flatShading: true,
    side: THREE.DoubleSide,
  });
  const wedge = new THREE.Mesh(wedgeGeo, wedgeMat);
  wedge.position.set(0, 24, -0.4);
  wedge.rotation.x = 0;
  codeGroup.add(wedge);

  // Darker inset
  const insetMatCode = new THREE.MeshPhongMaterial({ color: 0x1e3a8a, flatShading: true });
  const insetCode = new THREE.Mesh(new THREE.BoxGeometry(29, 40, 0.3), insetMatCode);
  insetCode.position.z = 0.2;
  codeGroup.add(insetCode);

  // </> text
  const codeCanvas = document.createElement('canvas');
  codeCanvas.width = 200;
  codeCanvas.height = 200;
  const cctx = codeCanvas.getContext('2d');

  cctx.fillStyle = 'rgba(255,255,255,0.9)';
  cctx.font = 'bold 64px "Courier New", monospace';
  cctx.textAlign = 'center';
  cctx.textBaseline = 'middle';
  cctx.fillText('</>', 100, 100);

  const codeTexture = new THREE.CanvasTexture(codeCanvas);
  codeTexture.colorSpace = THREE.SRGBColorSpace;
  const codeTextMat = new THREE.MeshBasicMaterial({ map: codeTexture, transparent: true, depthWrite: false });
  const codeTextPlane = new THREE.Mesh(new THREE.PlaneGeometry(26, 26), codeTextMat);
  codeTextPlane.position.z = 0.5;
  codeGroup.add(codeTextPlane);

  // Top edge highlight
  const edgePts = [
    new THREE.Vector3(-17.5, 24, 0),
    new THREE.Vector3(17.5, 24, 0),
    new THREE.Vector3(17.5, 36, 0),
  ];
  const edgeLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(edgePts),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25 })
  );
  edgeLine.position.z = 0.5;
  codeGroup.add(edgeLine);

  // ============================================================
  // 6. DECORATIVE DOTS
  // ============================================================
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
  const dotPositions = [
    [-80, 10, -50], [50, 12, -75], [-20, 8, 65],
    [85, 6, 60], [-55, 25, -25], [95, 18, -35],
    [-95, 5, 20], [10, 30, -30],
  ];
  dotPositions.forEach(([x, y, z]) => {
    const size = 1 + Math.random() * 1.5;
    const dot = new THREE.Mesh(new THREE.SphereGeometry(size, 8, 8), dotMat.clone());
    dot.position.set(x, y + groundY, z);
    worldGroup.add(dot);
  });

  // Crosshair decorations
  const crossMat = new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.3 });
  const crossPositions = [
    { x: -75, z: 20 },
    { x: 75, z: -15 },
  ];
  crossPositions.forEach(({ x, z }) => {
    const hPts = [new THREE.Vector3(x - 4, 0 + groundY + 5, z), new THREE.Vector3(x + 4, 0 + groundY + 5, z)];
    const vPts = [new THREE.Vector3(x, 0 + groundY + 1, z), new THREE.Vector3(x, 0 + groundY + 9, z)];
    worldGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(hPts), crossMat));
    worldGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(vPts), crossMat));
  });

  // ============================================================
  // ANIMATION
  // ============================================================
  let time = 0;
  let animationId;

  function animate() {
    animationId = requestAnimationFrame(animate);
    time += 0.008;

    controls.update();

    const hexFloat = Math.sin(time * 0.8) * 3;
    hexGroup.position.y = groundY + hexFloat;

    const cardFloat = Math.sin(time * 0.8 + 1.5) * 2.5;
    cardGroup.position.y = groundY + 1 + cardFloat;

    const codeFloat = Math.sin(time * 0.8 + 3.0) * 2.5;
    codeGroup.position.y = groundY + 1 + codeFloat;

    ring1.material.opacity = 0.2 + Math.sin(time * 0.5) * 0.08;
    ring2.material.opacity = 0.12 + Math.sin(time * 0.5 + 1) * 0.05;

    renderer.render(scene, camera);
  }

  animate();

  // ============================================================
  // RESIZE
  // ============================================================
  const resizeObserver = new ResizeObserver(() => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w === 0 || h === 0) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  resizeObserver.observe(container);

  // ============================================================
  // CLEANUP
  // ============================================================
  return () => {
    controls.dispose();
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
